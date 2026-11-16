"use client";

import { useActionState } from "react";
import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { submitContactForm } from "@/app/[locale]/contact/actions";
import {
  initialContactFormState,
  type ContactFieldErrors,
} from "@/lib/contact-schema";

export function ContactForm() {
  const t = useTranslations("contact");
  const [state, formAction, isPending] = useActionState(
    submitContactForm,
    initialContactFormState,
  );

  const fieldError = (field: keyof ContactFieldErrors) => {
    const key = state.fieldErrors[field];
    if (!key) return undefined;
    return t(`validation.${key}` as "validation.nameRequired");
  };

  return (
    <form action={formAction} noValidate className="space-y-6">
      {/* Honeypot — hidden from sighted and keyboard users, real users never fill it */}
      <div className="sr-only" aria-hidden="true">
        <Label htmlFor="company">Company</Label>
        <Input
          id="company"
          name="company"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <div>
        <Label htmlFor="name">{t("nameLabel")}</Label>
        <Input
          id="name"
          name="name"
          autoComplete="name"
          defaultValue={state.values?.name}
          required
          aria-invalid={Boolean(state.fieldErrors.name)}
          aria-describedby={state.fieldErrors.name ? "name-error" : undefined}
          className="mt-2"
        />
        {fieldError("name") && (
          <p id="name-error" role="alert" className="mt-1.5 text-sm text-destructive">
            {fieldError("name")}
          </p>
        )}
      </div>

      <div>
        <Label htmlFor="email">{t("emailLabel")}</Label>
        <Input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          defaultValue={state.values?.email}
          required
          aria-invalid={Boolean(state.fieldErrors.email)}
          aria-describedby={state.fieldErrors.email ? "email-error" : undefined}
          className="mt-2"
        />
        {fieldError("email") && (
          <p id="email-error" role="alert" className="mt-1.5 text-sm text-destructive">
            {fieldError("email")}
          </p>
        )}
      </div>

      <div>
        <Label htmlFor="message">{t("messageLabel")}</Label>
        <Textarea
          id="message"
          name="message"
          rows={6}
          defaultValue={state.values?.message}
          required
          aria-invalid={Boolean(state.fieldErrors.message)}
          aria-describedby={
            state.fieldErrors.message ? "message-error" : undefined
          }
          className="mt-2"
        />
        {fieldError("message") && (
          <p
            id="message-error"
            role="alert"
            className="mt-1.5 text-sm text-destructive"
          >
            {fieldError("message")}
          </p>
        )}
      </div>

      <Button type="submit" disabled={isPending}>
        {isPending ? t("submitting") : t("submit")}
      </Button>

      <div aria-live="polite">
        {state.status === "success" && (
          <p className="text-sm text-accent">{t("successBody")}</p>
        )}
        {state.status === "error" &&
          Object.keys(state.fieldErrors).length === 0 && (
            <p className="text-sm text-destructive">{t("errorBody")}</p>
          )}
      </div>
    </form>
  );
}
