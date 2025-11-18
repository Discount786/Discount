import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { customerName, hotel, location, email, phoneNumber } = body;

    // Option 1: Send email using Resend (recommended for production)
    // You'll need to install: npm install resend
    // And set RESEND_API_KEY in your environment variables
    
    // Option 2: Send email using Nodemailer
    // Option 3: Store in database and send email notification
    // Option 4: Use a third-party service like Formspree, EmailJS, etc.

    // For now, we'll log it and you can set up email forwarding
    console.log("New Booking Request:", {
      customerName,
      hotel,
      location,
      email,
      phoneNumber,
      timestamp: new Date().toISOString(),
    });

    // TODO: Replace this with actual email sending
    // Example with Resend:
    /*
    const resend = new Resend(process.env.RESEND_API_KEY);
    await resend.emails.send({
      from: 'bookings@yourdomain.com',
      to: 'your-email@example.com',
      subject: `New Booking Request: ${hotel}`,
      html: `
        <h2>New Booking Request</h2>
        <p><strong>Customer Name:</strong> ${customerName}</p>
        <p><strong>Hotel:</strong> ${hotel}</p>
        <p><strong>Location:</strong> ${location}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phoneNumber}</p>
      `,
    });
    */

    return NextResponse.json(
      { success: true, message: "Booking request received" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error processing booking:", error);
    return NextResponse.json(
      { success: false, message: "Error processing booking" },
      { status: 500 }
    );
  }
}

