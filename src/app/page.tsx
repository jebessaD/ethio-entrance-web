import Image from "next/image";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { site } from "@/lib/site";

export default function Home() {
  return (
    <div className="flex min-h-full flex-1 flex-col">
      <section className="relative flex min-h-[100svh] flex-1 flex-col overflow-hidden bg-ee-green text-white">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-40"
          style={{
            background:
              "radial-gradient(ellipse 80% 60% at 15% 20%, rgba(188,228,209,0.35), transparent 55%), radial-gradient(ellipse 70% 50% at 90% 80%, rgba(20,101,54,0.55), transparent 50%), linear-gradient(160deg, #1b7a43 0%, #16703c 45%, #114f2d 100%)",
          }}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
          }}
        />

        <SiteHeader />

        <main className="relative z-10 mx-auto flex w-full max-w-5xl flex-1 flex-col justify-center px-5 pb-16 pt-28 sm:px-8 sm:pb-20 sm:pt-32">
          <div className="max-w-2xl">
            <Image
              src="/icon.png"
              alt={`${site.name} logo`}
              width={88}
              height={88}
              className="mb-8 h-[72px] w-[72px] rounded-[20px] shadow-[0_18px_40px_rgba(0,0,0,0.22)] sm:h-[88px] sm:w-[88px] sm:rounded-[24px]"
              priority
            />

            <p className="mb-3 font-[family-name:var(--font-sora)] text-4xl font-semibold tracking-tight sm:text-6xl">
              {site.name}
            </p>

            <h1 className="font-[family-name:var(--font-sora)] text-3xl font-semibold leading-[1.1] tracking-tight text-white sm:text-5xl">
              {site.tagline}
            </h1>

            <p className="mt-5 max-w-xl text-base leading-relaxed text-white/85 sm:text-lg">
              {site.description}
            </p>

            <div className="mt-8 flex flex-wrap gap-2">
              {site.subjects.map((subject) => (
                <span
                  key={subject}
                  className="rounded-full border border-white/20 bg-white/10 px-3.5 py-1.5 text-sm text-white/90 backdrop-blur-sm"
                >
                  {subject}
                </span>
              ))}
            </div>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href={site.playStoreUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-2xl bg-white px-6 text-[15px] font-semibold text-ee-green shadow-[0_12px_30px_rgba(0,0,0,0.18)] transition hover:-translate-y-0.5 hover:bg-ee-mint"
              >
                <PlayStoreIcon />
                Get it on Google Play
              </a>
              <a
                href={`mailto:${site.supportEmail}`}
                className="inline-flex h-12 items-center justify-center rounded-2xl border border-white/25 px-6 text-[15px] font-medium text-white/90 transition hover:border-white/50 hover:bg-white/10"
              >
                Contact support
              </a>
            </div>
          </div>
        </main>

        <div className="relative z-10">
          <SiteFooter />
        </div>
      </section>
    </div>
  );
}

function PlayStoreIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="currentColor"
        d="M3.6 2.3c-.4.2-.6.6-.6 1.1v17.2c0 .5.2.9.6 1.1l10.1-9.7L3.6 2.3zm12.2 7.1L6.6 3.5l9.2 5.3zm.7 1.2-2.2 1.3 2.2 1.3 3.4-2-3.4-.6zm-1 4.1L6.6 20.5l9.2-5.3-1.3-1.5zM4.9 20.9l8.3-8.1L4.9 4.7v16.2z"
      />
    </svg>
  );
}
