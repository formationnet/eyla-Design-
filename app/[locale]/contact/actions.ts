"use server";

import { siteUrl } from "@/lib/site-config";
import { profile } from "@/content/profile";
import {
  contactSchema,
  type ContactFieldErrors,
  type ContactFormState,
} from "@/lib/contact-schema";

export async function submitContactForm(
  _prevState: ContactFormState,
  formData: FormData,
): Promise<ContactFormState> {
  const raw = {
    name: formData.get("name"),
    email: formData.get("email"),
    message: formData.get("message"),
    company: formData.get("company"),
  };
  const values = {
    name: String(raw.name ?? ""),
    email: String(raw.email ?? ""),
    message: String(raw.message ?? ""),
  };

  const result = contactSchema.safeParse(raw);

  if (!result.success) {
    const fieldErrors: ContactFieldErrors = {};
    for (const issue of result.error.issues) {
      const field = issue.path[0];
      if (field === "name" || field === "email" || field === "message") {
        fieldErrors[field] = issue.message;
      }
    }
    return { status: "error", fieldErrors, values };
  }

  // Honeypot tripped: silently report success to the bot without sending anything.
  if (result.data.company) {
    return { status: "success", fieldErrors: {} };
  }

  // Delivery via formsubmit.co (server-side, so the recipient stays private).
  // The first submission triggers an activation email to the recipient.
  try {
    const res = await fetch(
   `https://formsubmit.co/ajax/ayachebbah@gmail.com`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          // formsubmit.co rejects requests that lack a browser-style origin.
          Origin: siteUrl,
          Referer: `${siteUrl}/contact`,
        },
        body: JSON.stringify({
          name: result.data.name,
          email: result.data.email,
          message: result.data.message,
          _subject: `Portfolio contact — ${result.data.name}`,
          _replyto: result.data.email,
          _template: "table",
          _captcha: "false",
        }),
      },
    );
    const body = await res.json().catch(() => null);
    if (!res.ok || body?.success === "false" || body?.success === false) {
      throw new Error(`formsubmit rejected: ${body?.message ?? res.status}`);
    }
  } catch (error) {
    console.error("[contact] delivery failed", error);
    return { status: "error", fieldErrors: {}, values };
  }

  return { status: "success", fieldErrors: {} };
}
