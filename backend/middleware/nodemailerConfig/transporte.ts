import nodemailer from "nodemailer";
export const transporte = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "johnyeryckdev@gmail.com",
    pass: process.env.EMAIL_PASS,
  },
});
