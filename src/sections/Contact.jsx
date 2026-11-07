// src/sections/Contact.jsx

import { useId, useState } from "react";
import { PROFILE, SOCIALS } from "../data/content.js";
import BrandIcon from "../components/BrandIcon.jsx";
import useReveal from "../hooks/useReveal.js";
import { buildGmailUrl } from "../utils/gmail.js";
import "../styles/contact.css";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

function validate({ name, email, message }) {
  const errors = {};
  if (!name.trim()) errors.name = "Please enter your name.";
  if (!email.trim()) errors.email = "Please enter your email address.";
  else if (!EMAIL_RE.test(email.trim())) errors.email = "That email address doesn’t look right.";
  if (!message.trim()) errors.message = "Please write a message.";
  return errors;
}

export default function Contact() {
  const uid = useId();
  const [values, setValues] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState(null); // null | { type: "opened" | "blocked", url }

  const headerRef = useReveal();
  const formRef = useReveal();

  const onChange = (e) => {
    const { name, value } = e.target;
    setValues((v) => ({ ...v, [name]: value }));
    if (errors[name]) setErrors((er) => ({ ...er, [name]: undefined }));
    if (status) setStatus(null);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const found = validate(values);
    setErrors(found);
    const first = Object.keys(found)[0];
    if (first) {
      document.getElementById(`${uid}-${first}`)?.focus();
      setStatus(null);
      return;
    }
    const clean = {
      name: values.name.trim(),
      email: values.email.trim(),
      message: values.message.trim(),
    };
    const url = buildGmailUrl(clean);
    // A "noopener" feature would make window.open return null, so sever the opener manually.
    const win = window.open(url, "_blank");
    if (win) win.opener = null;
    setStatus({ type: win ? "opened" : "blocked", url });
  };

  const field = (key) => ({
    id: `${uid}-${key}`,
    name: key,
    value: values[key],
    onChange,
    "aria-invalid": errors[key] ? "true" : undefined,
    "aria-describedby": errors[key] ? `${uid}-${key}-err` : undefined,
  });

  return (
    <section id="contact" className="section contact" aria-labelledby="contact-title">
      <div className="container contact-grid">
        <div className="contact-intro reveal" ref={headerRef}>
          <span className="eyebrow contact-eyebrow">05 &mdash; Contact</span>
          <h2 id="contact-title" className="contact-title">
            Have a project in mind? Let&rsquo;s talk.
          </h2>
          <p className="contact-lead">
            I&rsquo;m available for new opportunities. Send a message and it will open as a draft in Gmail, ready for you to review and send.
          </p>

          <ul className="contact-socials">
            {SOCIALS.map(({ id, label, handle, href }) => (
              <li key={id}>
                <a
                  className={`contact-social${id === "behance" ? " contact-social--primary" : ""}`}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="contact-social-icon"><BrandIcon name={id} size={22} /></span>
                  <span className="contact-social-text">
                    <span className="contact-social-label">{label}</span>
                    <span className="contact-social-handle">{handle}</span>
                  </span>
                  <span className="contact-social-arrow" aria-hidden="true">{"\u2197"}</span>
                  <span className="visually-hidden">(opens in a new tab)</span>
                </a>
              </li>
            ))}
          </ul>

          <p className="contact-direct">
            Prefer email? <a href={`mailto:${PROFILE.email}`}>{PROFILE.email}</a>
            <span aria-hidden="true"> · </span>
            <a href="tel:+2349160852818">+234 916 085 2818</a>
            <span aria-hidden="true"> · </span>
            {PROFILE.location}
          </p>
        </div>

        <div className="contact-card reveal" ref={formRef} style={{ transitionDelay: "100ms" }}>
          <form onSubmit={onSubmit} noValidate aria-label="Contact form">
            <div className="field">
              <label htmlFor={`${uid}-name`}>Name</label>
              <input type="text" autoComplete="name" placeholder="Your name" required {...field("name")} />
              {errors.name && <p className="field-error" id={`${uid}-name-err`}>{errors.name}</p>}
            </div>

            <div className="field">
              <label htmlFor={`${uid}-email`}>Email address</label>
              <input type="email" autoComplete="email" placeholder="you@example.com" required {...field("email")} />
              {errors.email && <p className="field-error" id={`${uid}-email-err`}>{errors.email}</p>}
            </div>

            <div className="field">
              <label htmlFor={`${uid}-message`}>Message</label>
              <textarea rows={6} placeholder="Tell me about your project or opportunity…" required {...field("message")} />
              {errors.message && <p className="field-error" id={`${uid}-message-err`}>{errors.message}</p>}
            </div>

            <button type="submit" className="btn btn--primary contact-submit">
              Open in Gmail
              <svg className="btn-arrow" width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M4 12L12 4M5 4h7v7" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>

            <div className="form-status" role="status" aria-live="polite">
              {status?.type === "opened" && (
                <p>
                  Gmail has opened in a new tab with your message. Review it and press Send there.{" "}
                  <a href={status.url} target="_blank" rel="noopener noreferrer">Reopen Gmail</a>
                </p>
              )}
              {status?.type === "blocked" && (
                <p>
                  Your browser blocked the new tab.{" "}
                  <a href={status.url} target="_blank" rel="noopener noreferrer">Open Gmail compose</a>
                </p>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
