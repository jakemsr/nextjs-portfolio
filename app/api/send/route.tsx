import { NextResponse } from 'next/server';
import { Resend } from 'resend';


export async function POST(request: Request) {

  const resend = new Resend(process.env.RESEND_API_KEY);

  try {
    const body = await request.json();
    const { message } = body;

    const emailOptions: Parameters<typeof resend.emails.send>[0] = {
      from: 'Profile <profile@notifications.jakemsr.dev>',
      to: 'jakemsr@yahoo.com',
      subject: 'New email from profile',
      html: '', // Will be overwritten below
    };

    if (message) {
      emailOptions.html = `${message}`;
    } else {
      return NextResponse.json(
        { error: 'Missing message content' },
        { status: 400 },
      );
    }

    const { data, error } = await resend.emails.send(emailOptions);

    if (error) {
      console.error('Resend error:', error);
      return NextResponse.json({ error: error.message }, { status: 400 });
    }

    return NextResponse.json({
      success: true,
      id: data?.id,
      message: 'Email sent successfully. Thank you!',
    });
  } catch (err) {
    console.error('Unexpected error:', err);
    return NextResponse.json(
      { error: 'Failed to send email.' },
      { status: 500 },
    );
  }
}
