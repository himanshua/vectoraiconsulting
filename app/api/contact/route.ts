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
      from: process.env.FEEDBACK_SMTP_FROM || process.env.FEEDBACK_SMTP_USER,
      to: 'himanshu.inperson@gmail.com',
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

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: 'Email sent successfully' }, { status: 200 });
  } catch (error: any) {
    console.error('Error sending email:', error);
    return NextResponse.json({ error: error.message || 'Failed to send email' }, { status: 500 });
  }
}