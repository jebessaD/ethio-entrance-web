import type { Metadata } from "next";
import { LegalPage, LegalSection } from "@/components/legal-page";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms of Service",
};

export default function TermsPage() {
  return (
    <LegalPage title="Terms of Service" updated="November 2, 2026">
      <p>
        By downloading, accessing, or using {site.name} (the “App”), you agree
        to these Terms of Service.
      </p>

      <LegalSection title="1. The service">
        <p>
          {site.name} provides educational practice content for Ethiopian Grade
          12 entrance exam preparation, including past exams, practice
          questions, notes, and related study tools.
        </p>
      </LegalSection>

      <LegalSection title="2. Accounts">
        <ul className="list-disc space-y-2 pl-5">
          <li>Some features require signing in with Google.</li>
          <li>You are responsible for activity under your account.</li>
          <li>
            You must provide accurate account information and keep access
            secure.
          </li>
        </ul>
      </LegalSection>

      <LegalSection title="3. Licence and access">
        <ul className="list-disc space-y-2 pl-5">
          <li>Free content is available as described in the App.</li>
          <li>
            Paid or entitled content is licensed for personal, non-commercial
            study use only.
          </li>
          <li>Access may be limited to a specific device.</li>
          <li>
            Sharing accounts, reselling access, copying protected content for
            distribution, or bypassing access controls is not allowed.
          </li>
        </ul>
      </LegalSection>

      <LegalSection title="4. Acceptable use">
        <p>You agree not to:</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>
            Reverse engineer, scrape, or extract protected content for
            redistribution
          </li>
          <li>Circumvent licence, device, or security controls</li>
          <li>Use the App for unlawful purposes</li>
          <li>Interfere with the App’s normal operation</li>
        </ul>
      </LegalSection>

      <LegalSection title="5. Intellectual property">
        <p>
          App software, branding, and protected study materials remain owned by{" "}
          {site.name} or its licensors. Your use of the App does not transfer
          ownership of content to you.
        </p>
      </LegalSection>

      <LegalSection title="6. Educational disclaimer">
        <p>
          The App is a study aid. We do not guarantee exam scores, admission
          outcomes, or that content is complete or error-free. Always verify
          important information with official sources.
        </p>
      </LegalSection>

      <LegalSection title="7. Subscriptions, payments, and refunds">
        <p>
          If paid access is offered, pricing and duration will be shown before
          purchase or grant. Refunds, if any, follow the payment provider’s and
          our stated refund rules.
        </p>
      </LegalSection>

      <LegalSection title="8. Termination">
        <p>
          We may suspend or terminate access if you violate these Terms, abuse
          the service, or create security risk. You may stop using the App at
          any time.
        </p>
      </LegalSection>

      <LegalSection title="9. Disclaimer of warranties">
        <p>
          The App is provided “as is” and “as available” without warranties of
          any kind, to the fullest extent permitted by law.
        </p>
      </LegalSection>

      <LegalSection title="10. Limitation of liability">
        <p>
          To the fullest extent permitted by law, {site.name} is not liable for
          indirect, incidental, special, consequential, or exam-result-related
          damages arising from your use of the App.
        </p>
      </LegalSection>

      <LegalSection title="11. Changes">
        <p>
          We may update these Terms. Continued use of the App after changes
          means you accept the updated Terms.
        </p>
      </LegalSection>

      <LegalSection title="12. Contact">
        <p>
          Email:{" "}
          <a
            className="font-medium text-ee-green underline-offset-2 hover:underline"
            href={`mailto:${site.supportEmail}`}
          >
            {site.supportEmail}
          </a>
        </p>
      </LegalSection>
    </LegalPage>
  );
}
