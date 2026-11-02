import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export function LegalPage({
  title,
  updated,
  children,
}: {
  title: string;
  updated: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-full flex-1 flex-col bg-[#f7fbf8]">
      <SiteHeader tone="onLight" />
      <main className="mx-auto w-full max-w-3xl flex-1 px-5 py-12 sm:px-8 sm:py-16">
        <p className="text-sm font-medium text-ee-green">Legal</p>
        <h1 className="mt-2 font-[family-name:var(--font-sora)] text-3xl font-semibold tracking-tight text-ee-ink sm:text-4xl">
          {title}
        </h1>
        <p className="mt-3 text-sm text-ee-muted">Last updated: {updated}</p>
        <div className="prose-ee mt-10 space-y-8 text-[15px] leading-7 text-ee-ink/90">
          {children}
        </div>
      </main>
      <SiteFooter light />
    </div>
  );
}

export function LegalSection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section>
      <h2 className="mb-2 font-[family-name:var(--font-sora)] text-lg font-semibold text-ee-ink">
        {title}
      </h2>
      <div className="space-y-3">{children}</div>
    </section>
  );
}
