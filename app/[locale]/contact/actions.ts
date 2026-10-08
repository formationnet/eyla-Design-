"use server";

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

  const result = contactSchema.safeParse(raw);

  if (!result.success) {
    const fieldErrors: ContactFieldErrors = {};
    for (const issue of result.error.issues) {
      const field = issue.path[0];
      if (field === "name" || field === "email" || field === "message") {
        fieldErrors[field] = issue.message;
      }
    }
    return { status: "error", fieldErrors };
  }

  // Honeypot tripped: silently report success to the bot without sending anything.
  if (result.data.company) {
    return { status: "success", fieldErrors: {} };
  }

  // TODO: no email delivery provider is configured yet. Wire up a real
  // transport (e.g. Resend, Postmark, SMTP) here. For now the submission
  // is only logged server-side so the form can be exercised end-to-end.
  console.info("[contact] message received", {
    name: result.data.name,
    email: result.data.email,
  });

  return { status: "success", fieldErrors: {} };
}
