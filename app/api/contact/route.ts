import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json();

    if (!process.env.FEEDBACK_SMTP_HOST || !process.env.FEEDBACK_SMTP_USER || !process.env.FEEDBACK_SMTP_PASS) {
      return NextResponse.json({ error: 'SMTP configuration missing on server' }, { status: 500 });
    }

    const port = Number(process.env.FEEDBACK_SMTP_PORT || 465);

    const transporter = nodemailer.createTransport({
      host: process.env.FEEDBACK_SMTP_HOST,
      port: port,
      secure: process.env.FEEDBACK_SMTP_SECURE === 'true' || port === 465,
      auth: {
        user: process.env.FEEDBACK_SMTP_USER,
        pass: process.env.FEEDBACK_SMTP_PASS,
      },
    });

    // Verify connection configuration
    try {
      await transporter.verify();
    } catch (error) {
      console.error('SMTP Connection Error:', error);
      throw new Error('Could not connect to email server. Check SMTP settings.');
    }

    const mailOptions = {
      from: `"${name}" <${process.env.FEEDBACK_SMTP_USER}>`,
      to: 'himanshu@aheadterra.com',
      replyTo: email,
      subject: `New Contact Form Submission from ${name}`,
      text: `
        Name: ${name}
        Email: ${email}
        Message: ${message}
      `,
      html: `
        <h3>New Contact Form Submission</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    };

    const confirmationMailOptions = {
      from: process.env.FEEDBACK_SMTP_FROM || `"Vector AI Consulting" <${process.env.FEEDBACK_SMTP_USER}>`,
      to: email,
      subject: 'Thank you for contacting Vector AI Consulting',
      text: `Hi ${name},\n\nThank you for reaching out. We have received your message and will get back to you shortly.\n\nBest regards,\nVector AI Consulting Team`,
      html: `
        <h3>Thank you for contacting us!</h3>
        <p>Hi ${name},</p>
        <p>We have received your message and will get back to you shortly.</p>
        <br>
        <p>Best regards,</p>
        <p><strong>Vector AI Consulting Team</strong></p>
      `,
    };

    await Promise.all([transporter.sendMail(mailOptions), transporter.sendMail(confirmationMailOptions)]);

    return NextResponse.json({ message: 'Email sent successfully' }, { status: 200 });
  } catch (error) {
    console.error('Error sending email:', error);
    const errorMessage = error instanceof Error ? error.message : 'Failed to send email';
    return NextResponse.json({ error: errorMessage }, { status: 500 });
  }
}