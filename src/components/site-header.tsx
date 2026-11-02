import Image from "next/image";
import Link from "next/link";
import { site } from "@/lib/site";

export function SiteHeader({ tone = "onDark" }: { tone?: "onDark" | "onLight" }) {
  const onDark = tone === "onDark";

  return (
    <header className={onDark ? "absolute inset-x-0 top-0 z-20" : "border-b border-black/5 bg-white/80 backdrop-blur"}>
      <div className="mx-auto flex max-w-5xl items-center justify-between px-5 py-5 sm:px-8">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/icon.png"
            alt={`${site.name} logo`}
            width={40}
            height={40}
            className="h-10 w-10 rounded-[11px] shadow-sm"
            priority
          />
          <span
            className={`font-[family-name:var(--font-sora)] text-[15px] font-semibold tracking-tight sm:text-base ${
              onDark ? "text-white" : "text-ee-ink"
            }`}
          >
            {site.name}
          </span>
        </Link>
        <nav
          className={`flex items-center gap-5 text-sm ${
            onDark ? "text-white/85" : "text-ee-muted"
          }`}
        >
          <Link
            href="/privacy"
            className={`transition ${onDark ? "hover:text-white" : "hover:text-ee-green"}`}
          >
            Privacy
          </Link>
          <Link
            href="/terms"
            className={`transition ${onDark ? "hover:text-white" : "hover:text-ee-green"}`}
          >
            Terms
          </Link>
        </nav>
      </div>
    </header>
  );
}
