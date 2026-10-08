// React 19 warns in dev when rendering produces <script> tags. This
// server/client type-swap (text/javascript on the server, text/plain on
// the client) plus suppressHydrationWarning silences that warning while
// keeping the script's synchronous, before-paint execution on hard loads.
// See: https://nextjs.org/docs/app/guides/preventing-flash-before-hydration
export function InlineScript({ html }: { html: string }) {
  return (
    <script
      type={typeof window === "undefined" ? "text/javascript" : "text/plain"}
      suppressHydrationWarning
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
