/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, contact, timezone, age, timePref } = body;

    if (!name || !contact || !timezone || !age || !timePref) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    // Configure Transporter using SMTP settings
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: parseInt(process.env.EMAIL_PORT || "587"),
      secure: false, // true for 465, false for other ports
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const isEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(contact.trim());

    // 1. Send Email to Academy Owner (nayeem5113a@gmail.com / EMAIL_TO)
    const ownerEmailHtml = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <title>New Student Booking</title>
        <style>
          body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #F7F5ED; margin: 0; padding: 20px; color: #1E2324; }
          .container { max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 16px; border: 1px solid rgba(15, 79, 74, 0.08); overflow: hidden; box-shadow: 0 4px 20px rgba(15, 79, 74, 0.05); }
          .header { bg-color: #0F4F4A; background: #0F4F4A; padding: 30px; text-align: center; color: #F7F5ED; border-bottom: 4px solid #D9A441; }
          .header h1 { margin: 0; font-family: Georgia, serif; font-size: 24px; font-weight: bold; }
          .content { padding: 40px 30px; }
          .intro { font-size: 16px; margin-bottom: 25px; line-height: 1.6; }
          .details-table { width: 100%; border-collapse: collapse; margin-bottom: 25px; }
          .details-table th, .details-table td { padding: 12px 15px; text-align: left; border-bottom: 1px solid rgba(15, 79, 74, 0.08); }
          .details-table th { background-color: #FAF8F2; color: #0F4F4A; font-weight: bold; width: 35%; }
          .details-table td { font-weight: 500; }
          .badge { display: inline-block; padding: 4px 12px; background-color: #D9A441; color: #15191A; border-radius: 9999px; font-size: 12px; font-weight: bold; }
          .footer { background-color: #FAF8F2; padding: 20px; text-align: center; font-size: 12px; color: #5A6E68; border-top: 1px solid rgba(15, 79, 74, 0.08); }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>নতুন শিক্ষার্থী বুকিং অনুরোধ</h1>
          </div>
          <div class="content">
            <p class="intro">আসসালামু আলাইকুম, আপনার ল্যান্ডিং পেজে একটি নতুন ট্রায়াল ক্লাস বুকিংয়ের অনুরোধ জমা পড়েছে। বিস্তারিত বিবরণ নিচে দেওয়া হলো:</p>
            <table class="details-table">
              <tr>
                <th>অভিভাবকের নাম:</th>
                <td>${name}</td>
              </tr>
              <tr>
                <th>যোগাযোগ মাধ্যম:</th>
                <td>${contact}</td>
              </tr>
              <tr>
                <th>দেশ (টাইমজোন):</th>
                <td>${timezone}</td>
              </tr>
              <tr>
                <th>সন্তানের বয়স:</th>
                <td>${age}</td>
              </tr>
              <tr>
                <th>পছন্দের সময়:</th>
                <td><span class="badge">${timePref.toUpperCase()}</span></td>
              </tr>
            </table>
          </div>
          <div class="footer">
            <p>Darul Hamida Quran Academy © 2026</p>
          </div>
        </div>
      </body>
      </html>
    `;

    await transporter.sendMail({
      from: process.env.EMAIL_FROM,
      to: process.env.EMAIL_TO,
      subject: `New Student Booking Request from ${name}`,
      html: ownerEmailHtml,
    });

    // 2. Send Confirmation Email to Parent (if contact is a valid email)
    if (isEmail) {
      const parentEmailHtml = `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <title>Booking Confirmation - Darul Hamida Quran Academy</title>
          <style>
            body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #F7F5ED; margin: 0; padding: 20px; color: #1E2324; }
            .container { max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 16px; border: 1px solid rgba(15, 79, 74, 0.08); overflow: hidden; box-shadow: 0 4px 20px rgba(15, 79, 74, 0.05); }
            .header { bg-color: #0F4F4A; background: #0F4F4A; padding: 30px; text-align: center; color: #F7F5ED; border-bottom: 4px solid #D9A441; }
            .header h1 { margin: 0; font-family: Georgia, serif; font-size: 22px; font-weight: bold; }
            .content { padding: 40px 30px; }
            .salutation { font-size: 18px; font-weight: bold; color: #0F4F4A; margin-bottom: 15px; }
            .message { font-size: 15px; line-height: 1.6; margin-bottom: 25px; }
            .details-box { background-color: #FAF8F2; border: 1px solid rgba(15, 79, 74, 0.08); border-radius: 12px; padding: 20px; margin-bottom: 25px; }
            .details-box h3 { margin-top: 0; color: #0F4F4A; font-family: Georgia, serif; border-bottom: 1px solid rgba(15, 79, 74, 0.08); padding-bottom: 8px; font-size: 16px; }
            .details-list { list-style: none; padding: 0; margin: 0; }
            .details-list li { padding: 6px 0; font-size: 14px; display: flex; justify-content: space-between; border-bottom: 1px dashed rgba(15, 79, 74, 0.05); }
            .details-list li:last-child { border-bottom: none; }
            .details-list strong { color: #0F4F4A; }
            .btn-whatsapp { display: block; text-align: center; background-color: #22C55E; color: #ffffff; text-decoration: none; padding: 12px 24px; border-radius: 9999px; font-weight: bold; margin: 30px 0 15px; font-size: 14px; box-shadow: 0 4px 12px rgba(34, 197, 94, 0.2); }
            .footer { background-color: #FAF8F2; padding: 25px 20px; text-align: center; font-size: 12px; color: #5A6E68; border-top: 1px solid rgba(15, 79, 74, 0.08); }
            .footer a { color: #0F4F4A; text-decoration: underline; font-weight: 600; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>Darul Hamida Quran Academy</h1>
            </div>
            <div class="content">
              <p class="salutation">আসসালামু আলাইকুম ওয়া রাহমাতুল্লাহি ওয়া বারাকাতুহু,</p>
              
              <div class="message">
                <p>আমাদের একাডেমিতে ফ্রি ট্রায়াল ক্লাসের আবেদন করার জন্য আপনাকে ধন্যবাদ। আমরা আপনার দেওয়া বুকিং তথ্য সফলভাবে পেয়েছি।</p>
                <p>শিক্ষক অতি শীঘ্রই আপনার সাথে সরাসরি <strong>ইমেইল</strong> অথবা <strong>হোয়াটসঅ্যাপের</strong> মাধ্যমে যোগাযোগ করে প্রথম ক্লাসের সময়সূচী চূড়ান্ত করবেন ইনশাআল্লাহ।</p>
              </div>

              <div class="details-box">
                <h3>আপনার সাবমিট করা তথ্য:</h3>
                <ul class="details-list">
                  <li><span><strong>নাম:</strong></span> <span>${name}</span></li>
                  <li><span><strong>যোগাযোগ:</strong></span> <span>${contact}</span></li>
                  <li><span><strong>দেশ (টাইমজোন):</strong></span> <span>${timezone}</span></li>
                  <li><span><strong>সন্তানের বয়স:</strong></span> <span>${age}</span></li>
                  <li><span><strong>পছন্দের সময়:</strong></span> <span>${timePref.toUpperCase()}</span></li>
                </ul>
              </div>

              <p class="message" style="margin-bottom: 0;">যেকোনো জরুরি প্রয়োজনে অথবা সরাসরি এখনই কথা বলতে নিচের বাটনে ক্লিক করে আমাদের সাথে হোয়াটসঅ্যাপে যোগাযোগ করতে পারেন:</p>
              <a href="https://wa.me/8801852077834" class="btn-whatsapp">হোয়াটসঅ্যাপে মেসেজ পাঠান</a>
            </div>
            <div class="footer">
              <p>Darul Hamida Quran Academy © 2026</p>
              <p>ওয়েবসাইট: <a href="https://darulhamida-academy.com">darulhamida-academy.com</a></p>
            </div>
          </div>
        </body>
        </html>
      `;

      await transporter.sendMail({
        from: process.env.EMAIL_FROM,
        to: contact.trim(),
        subject: `Booking Confirmed - Darul Hamida Quran Academy`,
        html: parentEmailHtml,
      });
    }

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error: any) {
    console.error("Email API Route Error:", error);
    return NextResponse.json(
      { error: error?.message || "Failed to send email" },
      { status: 500 }
    );
  }
}
