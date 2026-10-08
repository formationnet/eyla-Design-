import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().trim().min(1, "nameRequired"),
  email: z.email("emailInvalid"),
  message: z.string().trim().min(10, "messageTooShort"),
  // Honeypot: must stay empty. Real users never see or fill this field.
  company: z.string().max(0).optional().or(z.literal("")),
});

export type ContactFormValues = z.infer<typeof contactSchema>;
export type ContactFieldErrors = Partial<
  Record<keyof Omit<ContactFormValues, "company">, string>
>;

export interface ContactFormState {
  status: "idle" | "success" | "error";
  fieldErrors: ContactFieldErrors;
}

export const initialContactFormState: ContactFormState = {
  status: "idle",
  fieldErrors: {},
};
