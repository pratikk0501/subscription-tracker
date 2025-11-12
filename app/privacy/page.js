export const metadata = {
  title: "Privacy Policy",
  description:
    "How we collect, use, and protect your data for our subscription tracker app.",
};

export default function PrivacyPolicyPage() {
  const APP_NAME = "Logiscout";
  const CONTACT_EMAIL = "kumarpratik553@gmail.com";
  const EFFECTIVE_DATE = "11-11-2025";

  return (
    <main className="mx-auto max-w-3xl px-6 py-12 prose prose-slate">
      <h1>Privacy Policy</h1>
      <p>
        <strong>Effective date:</strong> {EFFECTIVE_DATE}
      </p>
      <p>
        This Privacy Policy explains how {APP_NAME} (“we”, “us”, “our”)
        collects, uses, discloses, and protects information when you use this
        subscription tracking web application.
      </p>

      <h2>1. Information We Collect</h2>
      <ul>
        <li>
          <strong>Account & Authentication Data:</strong> Email, UID, and
          related metadata provided via Firebase Authentication (e.g., sign-in
          method, timestamps).
        </li>
        <li>
          <strong>Subscription Data (CRUD):</strong> User-entered subscription
          records (titles, prices, billing cycles, next billing date,
          categories, notes) and derived summaries (e.g., active count, total
          monthly cost, most expensive subscription).
        </li>
        <li>
          <strong>Usage Data:</strong> Basic device/browser info and in-app
          actions (e.g., page views, API interactions) for improving the
          Service. For analytics, see “Cookies & Analytics.”
        </li>
      </ul>

      <h2>2. How We Use Information</h2>
      <ul>
        <li>
          Provide core functionality (auth, CRUD, subscription summaries).
        </li>
        <li>Personalize the experience and remember settings.</li>
        <li>Improve performance, reliability, and security.</li>
        <li>Communicate important updates about the Service.</li>
        <li>Comply with legal obligations and enforce Terms.</li>
      </ul>

      <h2>3. Legal Bases (EEA/UK users)</h2>
      <ul>
        <li>
          <strong>Contract:</strong> To provide the Service you requested.
        </li>
        <li>
          <strong>Legitimate Interests:</strong> Improve, secure, and support
          the Service.
        </li>
        <li>
          <strong>Consent:</strong> Where required (e.g., optional
          analytics/notifications).
        </li>
      </ul>

      <h2>4. Data Sharing & Third Parties</h2>
      <p>We use trusted processors to operate the Service:</p>
      <ul>
        <li>
          <strong>Firebase (Google):</strong> Authentication and database
          (Firestore/Realtime DB/Storage as configured). Data may be processed
          on Google infrastructure in multiple regions. We recommend reviewing
          Google&apos;s Privacy Policy and Firebase Terms.
        </li>
        <li>
          <strong>Hosting/CDN & Build Tools:</strong> Netlify, to deliver the
          app efficiently.
        </li>
      </ul>
      <p>
        We do not sell personal information. We disclose data if required by
        law, to protect rights and safety, or in connection with mergers or
        acquisitions (with notice where feasible).
      </p>

      <h2>5. Cookies & Analytics</h2>
      <p>
        If enabled, we may use cookies/local storage for session management and
        preference caching. Google Analytics help us understand usage. You can
        manage cookies in your browser. Learn about Google's{" "}
        <a href="https://policies.google.com/privacy?hl=en-US">
          Privacy Policy
        </a>
        .
      </p>

      <h2>6. Data Retention</h2>
      <p>
        We retain account and subscription data while your account is active.
        You may delete subscriptions at any time. On account deletion, we delete
        or de-identify associated data within a reasonable period unless longer
        retention is required by law.
      </p>

      <h2>7. Security</h2>
      <p>
        We apply reasonable technical and organizational measures (e.g.,
        Firebase security rules, row-level access by UID, HTTPS). However, no
        method of transmission or storage is 100% secure.
      </p>

      <h2>8. Your Rights</h2>
      <ul>
        <li>Access, correct, update, or delete your data.</li>
        <li>Portability (export your data) where applicable.</li>
        <li>Withdraw consent where processing is based on consent.</li>
        <li>Object to or restrict certain processing (subject to law).</li>
      </ul>
      <p>
        Contact us at <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a> to
        exercise rights. We may ask to verify your identity.
      </p>

      <h2>9. International Transfers</h2>
      <p>
        Your information may be processed in countries with different data
        protection laws. We implement appropriate safeguards as required.
      </p>

      <h2>10. Children&apos;s Privacy</h2>
      <p>
        The Service is not directed to children under 13. We do not knowingly
        collect data from children.
      </p>

      <h2>11. Changes to This Policy</h2>
      <p>
        We may update this Privacy Policy periodically. We will revise the
        “Effective date” and, where appropriate, notify you via the app.
      </p>

      <h2>12. Contact</h2>
      <p>
        Questions? Contact{" "}
        <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
      </p>
    </main>
  );
}
