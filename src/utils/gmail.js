// src/utils/gmail.js — builds a properly encoded Gmail compose URL.

import { PROFILE } from "../data/content.js";

export function buildGmailUrl({ name, email, message }) {
  const subject = `Portfolio enquiry from ${name}`;
  const body = `Hi Caleb,\n\n${message}\n\n—\nName: ${name}\nEmail: ${email}`;
  const params = new URLSearchParams({
    view: "cm",
    fs: "1",
    to: PROFILE.email,
    su: subject,
    body,
  });
  // URLSearchParams encodes spaces as "+"; Gmail expects %20.
  return `https://mail.google.com/mail/?${params.toString().replace(/\+/g, "%20")}`;
}
