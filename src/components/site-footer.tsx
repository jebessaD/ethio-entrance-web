import Link from "next/link";
import { site } from "@/lib/site";

export function SiteFooter({ light = false }: { light?: boolean }) {
  const tone = light
    ? "border-black/5 text-ee-muted"
    : "border-white/15 text-white/70";
  const link = light
    ? "hover:text-ee-green"
    : "hover:text-white";

  return (
    <footer className={`border-t ${tone}`}>
      <div className="mx-auto flex max-w-5xl flex-col gap-4 px-5 py-8 text-sm sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <p>© 2026 {site.name}</p>
        <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
          <Link href="/privacy" className={`transition ${link}`}>
            Privacy Policy
          </Link>
          <Link href="/terms" className={`transition ${link}`}>
            Terms of Service
          </Link>
          <a href={`mailto:${site.supportEmail}`} className={`transition ${link}`}>
            {site.supportEmail}
          </a>
        </div>
      </div>
    </footer>
  );
}
