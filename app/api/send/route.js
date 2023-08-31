import { EmailTemplate } from "@/app/[lang]/components/email-template";
import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  // console.log("To jest response" + response);
  try {
    const body = await request.json();
    console.log("To jest body" + body);
    const { firstName, lastName, email, phone, message } = body;
    const data = await resend.emails.send({
      from: "Dariusz <dariusz@stronyjaksiepatrzy.pl>",
      to: ["dariusz.stawik@gmail.com"],
      subject: "Wiadomość z formularza",
      react: EmailTemplate({
        firstName,
        lastName,
        email,
        phone,
        message,
      }),
    });

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}
