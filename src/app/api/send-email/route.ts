import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  try {
    // Parse the request body to get the email from the request
    const { email } = await req.json();  // Use req.json() to parse the incoming JSON body

    // Create the transporter using Gmail service
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      secure: true,
      port: 465,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Email message details
    const mailOptions = {
      from: email,
      to: 'jyotiranjaniosys@gmail.com',
      subject: 'NextJS mail testing!',
      text: 'Hello, this is a test mail.',
    };

    // Send email
    const info = await transporter.sendMail(mailOptions);

    // Respond with success
    return NextResponse.json({
      success: true,
      message: 'Email sent successfully',
      response: info,
    });

  } catch (error) {
    console.error('Error sending email:', error);

    // Respond with failure
    return NextResponse.json(
      { success: false, message: 'Failed to send email' },
      { status: 500 }
    );
  }
}