import type { Metadata } from "next";
import { LegalPage, LegalSection } from "@/components/legal-page";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
};

export default function PrivacyPage() {
  return (
    <LegalPage title="Privacy Policy" updated="November 2, 2026">
      <p>
        {site.name} (“we”, “our”, or “the App”) helps Grade 12 students practice
        Ethiopian entrance exams. This policy explains what information we
        collect and how we use it.
      </p>

      <LegalSection title="1. Information we collect">
        <ul className="list-disc space-y-2 pl-5">
          <li>
            Account information: when you sign in with Google, we receive your
            name, email address, and Google account ID through our
            authentication provider (Supabase).
          </li>
          <li>
            Device information: a device identifier used to bind your course
            access/licence to your device and help prevent abuse.
          </li>
          <li>
            App usage data stored on your device: study preferences, theme
            settings, and practice progress.
          </li>
          <li>
            Licence/entitlement status: whether your account has access to paid
            or free course content.
          </li>
        </ul>
      </LegalSection>

      <LegalSection title="2. How we use information">
        <ul className="list-disc space-y-2 pl-5">
          <li>To create and manage your account</li>
          <li>To unlock and verify course access on your device</li>
          <li>To save your study preferences and practice progress</li>
          <li>To provide customer support</li>
          <li>
            To protect the App against fraud, sharing abuse, and security risks
          </li>
        </ul>
      </LegalSection>

      <LegalSection title="3. How we share information">
        <p>
          We do not sell your personal information. We may share limited data
          with service providers that help us run the App, including Google
          (sign-in) and Supabase (authentication and account/backend services).
          These providers process data only as needed to provide their services.
        </p>
      </LegalSection>

      <LegalSection title="4. Data storage">
        <ul className="list-disc space-y-2 pl-5">
          <li>
            Account and entitlement data may be stored on our backend services.
          </li>
          <li>
            Some preferences and progress are stored locally on your device.
          </li>
          <li>
            We use secure storage where appropriate for sensitive local keys.
          </li>
        </ul>
      </LegalSection>

      <LegalSection title="5. Data retention">
        <p>
          We keep account and entitlement data while your account is active. You
          may request deletion of your account data by contacting us. Local app
          data can also be cleared by uninstalling the App.
        </p>
      </LegalSection>

      <LegalSection title="6. Children’s privacy">
        <p>
          The App is intended for secondary-school students preparing for
          entrance exams. If you are under the age where you can consent to
          account creation in your country, please use the App only with a
          parent or guardian’s permission.
        </p>
      </LegalSection>

      <LegalSection title="7. Your choices">
        <ul className="list-disc space-y-2 pl-5">
          <li>You can sign out at any time.</li>
          <li>
            You can request access, correction, or deletion of your account
            information by emailing us.
          </li>
          <li>
            You can revoke Google sign-in access from your Google Account
            settings.
          </li>
        </ul>
      </LegalSection>

      <LegalSection title="8. Security">
        <p>
          We take reasonable technical and organizational measures to protect
          your information. No method of transmission or storage is 100% secure.
        </p>
      </LegalSection>

      <LegalSection title="9. Changes">
        <p>
          We may update this Privacy Policy from time to time. The “Last
          updated” date will change when we do.
        </p>
      </LegalSection>

      <LegalSection title="10. Contact">
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
