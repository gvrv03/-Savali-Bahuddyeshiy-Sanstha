import { NextResponse } from "next/server";
import { Resend } from "resend";
const resend = new Resend("re_GvsnCJ3B_GajgupNFmLFLqnD5SfF6qwsm");

export const POST = async (req) => {
  try {
    const Details = await req.json();
    const { subject, formData } = Details;

    const { data, error } = await resend.emails.send({
      from: "gcoenCSE@gauravnarnaware.com",
      to: "gauravnarnaware3112003@gmail.com",
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
