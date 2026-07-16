import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const runtime = "nodejs";

type ContactPayload = {
  firstName?: string;
  lastName?: string;
  email?: string;
  phone?: string;
  company?: string;
  projectType?: string;
  message?: string;
  // Honeypot — must stay empty for real humans
  hpToken?: string;
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export async function POST(request: Request) {
  let data: ContactPayload;
  try {
    data = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  // Bot caught by honeypot — pretend everything is fine, send nothing.
  if (data.hpToken && data.hpToken.trim() !== "") {
    return NextResponse.json({ ok: true });
  }

  const firstName = (data.firstName ?? "").trim();
  const lastName = (data.lastName ?? "").trim();
  const email = (data.email ?? "").trim();
  const phone = (data.phone ?? "").trim();
  const company = (data.company ?? "").trim();
  const projectType = (data.projectType ?? "").trim();
  const message = (data.message ?? "").trim();

  const errors: string[] = [];
  if (!firstName) errors.push("First name is required.");
  if (!lastName) errors.push("Last name is required.");
  if (!email || !EMAIL_RE.test(email)) errors.push("A valid email is required.");
  if (!projectType) errors.push("Please select a project type.");
  if (!message) errors.push("Please include a short message.");

  if (errors.length > 0) {
    return NextResponse.json({ error: errors.join(" ") }, { status: 400 });
  }

  const gmailUser = process.env.GMAIL_USER;
  // Google shows app passwords with spaces (e.g. "abcd efgh ijkl mnop"); strip them.
  const gmailPass = process.env.GMAIL_APP_PASSWORD?.replace(/\s+/g, "");
  const toEmail = process.env.CONTACT_TO_EMAIL || gmailUser || "sagesaimagency@gmail.com";

  if (!gmailUser || !gmailPass) {
    console.error("GMAIL_USER / GMAIL_APP_PASSWORD are not configured.");
    return NextResponse.json(
      {
        error:
          "The email service isn't configured yet. Please email us directly at sagesaimagency@gmail.com.",
      },
      { status: 503 }
    );
  }

  const fullName = `${firstName} ${lastName}`;

  const html = `
    <div style="font-family:Arial,Helvetica,sans-serif;max-width:600px;margin:0 auto;color:#1a1a18;">
      <h2 style="margin:0 0 16px;">New enquiry from the Sage&amp;Saim website</h2>
      <table style="width:100%;border-collapse:collapse;font-size:14px;">
        <tr><td style="padding:6px 0;font-weight:bold;width:140px;">Name</td><td style="padding:6px 0;">${escapeHtml(fullName)}</td></tr>
        <tr><td style="padding:6px 0;font-weight:bold;">Email</td><td style="padding:6px 0;">${escapeHtml(email)}</td></tr>
        <tr><td style="padding:6px 0;font-weight:bold;">Phone</td><td style="padding:6px 0;">${escapeHtml(phone) || "—"}</td></tr>
        <tr><td style="padding:6px 0;font-weight:bold;">Company</td><td style="padding:6px 0;">${escapeHtml(company) || "—"}</td></tr>
        <tr><td style="padding:6px 0;font-weight:bold;">Project type</td><td style="padding:6px 0;">${escapeHtml(projectType)}</td></tr>
      </table>
      <h3 style="margin:20px 0 8px;">Message</h3>
      <p style="white-space:pre-wrap;font-size:14px;line-height:1.6;">${escapeHtml(message)}</p>
    </div>
  `;

  const text = `New enquiry from the Sage&Saim website

Name: ${fullName}
Email: ${email}
Phone: ${phone || "—"}
Company: ${company || "—"}
Project type: ${projectType}

Message:
${message}`;

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: { user: gmailUser, pass: gmailPass },
    });

    await transporter.sendMail({
      // Gmail requires the authenticated account as the sender.
      from: `"Sage&Saim Website" <${gmailUser}>`,
      to: toEmail,
      replyTo: `"${fullName}" <${email}>`,
      subject: `New enquiry — ${fullName} (${projectType})`,
      html,
      text,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Contact route (nodemailer) error:", err);
    return NextResponse.json(
      { error: "We couldn't send your message right now. Please try again shortly." },
      { status: 502 }
    );
  }
}
