import { NextResponse } from "next/server";
import { Resend } from "resend";
const resend = new Resend("re_TiLVUYG3_C2DMidHnMAVqBoq1fogcNvrX");

export const POST = async (req) => {
  try {
    const Details = await req.json();
    const { subject, formData } = Details;

    const { data, error } = await resend.emails.send({
      from: "savali@savali.org.in",
      to: ["gauravnarnaware3112003@gmail.com","shendes969@gmail.com"],
      subject: subject,
      html: formData,
    });
    if (error) {
      return NextResponse.json({ error });
    }
    return NextResponse.json({ data });
  } catch (error) {
    return NextResponse.json(error);
  }
};
