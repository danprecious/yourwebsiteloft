import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const {
      name,
      email,
      sourceLang,
      targetLang,
      serviceType,
      deadline,
      message,
    } = await req.json();

    if (
      !name ||
      !email ||
      !sourceLang ||
      !targetLang ||
      !serviceType ||
      !message
    ) {
      return NextResponse.json({ error: "Missing fields" }, { status: 400 });
    }

    const receiverMail = "hclanguage360@hclanguage360.com";

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: "kdpcoder@gmail.com",
        pass: "zymtznvwrlyfvlgu", // move to env in production
      },
    });

    const html = `
      <div>
        <h2>New Quote Request</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Source Language:</strong> ${sourceLang}</p>
        <p><strong>Target Language:</strong> ${targetLang}</p>
        <p><strong>Service Type:</strong> ${serviceType}</p>
        <p><strong>Deadline:</strong> ${deadline || "Not specified"}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      </div>
    `;

    await transporter.sendMail({
      from: email,
      to: receiverMail,
      subject: `New Quote Request from ${name}`,
      html,
    });

    return NextResponse.json(
      { message: "Quote sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending quote:", error);
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 }
    );
  }
}
