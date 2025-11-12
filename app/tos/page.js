export const metadata = {
  title: "Terms of Service",
  description:
    "Terms and conditions for using our subscription tracker application.",
};

export default function TermsPage() {
  const APP_NAME = "Logiscout";
  const CONTACT_EMAIL = "kumarpratik553@gmail.com";
  const EFFECTIVE_DATE = "11-11-2025";

  return (
    <main className="mx-auto max-w-3xl px-6 py-12 prose prose-slate">
      <h1>Terms of Service</h1>
      <p>
        <strong>Effective date:</strong> {EFFECTIVE_DATE}
      </p>
      <p>
        These Terms of Service (“Terms”) govern your access to and use of the
        subscription tracking web application (the “Service”) called
        {APP_NAME}. By using the Service, you agree to these Terms.
      </p>

      <h2>1. Use of the Service</h2>
      <ul>
        <li>You must be at least 13 years old.</li>
        <li>
          You are responsible for your account and for maintaining the
          confidentiality of your credentials.
        </li>
        <li>
          You agree not to misuse the Service, including attempting to access
          other users' data or interfering with normal operation.
        </li>
      </ul>

      <h2>2. Accounts & Authentication</h2>
      <p>
        We use Firebase Authentication. You must provide accurate information
        and comply with any third-party auth provider terms.
      </p>

      <h2>3. User Content (Subscriptions Data)</h2>
      <p>
        You retain ownership of the subscription data you input. You grant us a
        limited, non-exclusive license to process and display that data solely
        to provide the Service (e.g., CRUD, summaries like active count, most
        expensive subscription, total cost).
      </p>

      <h2>4. Privacy</h2>
      <p>
        Our <a href="/privacy">Privacy Policy</a> explains how we collect, use,
        and protect your information. By using the Service, you also agree to
        the Privacy Policy.
      </p>

      <h2>5. Acceptable Use</h2>
      <ul>
        <li>No unlawful, infringing, or harmful activity.</li>
        <li>No attempts to bypass security or app limits.</li>
        <li>No uploading malicious code or scraping without permission.</li>
      </ul>

      <h2>6. Availability & Changes</h2>
      <p>
        We aim for high availability but do not guarantee uninterrupted service.
        We may add, change, or remove features at any time. We may suspend or
        terminate accounts that violate these Terms.
      </p>

      <h2>7. Third-Party Services</h2>
      <p>
        The Service relies on third-party providers (e.g., Firebase by Google,
        Netlify). Their terms and privacy policies also apply where relevant.
      </p>

      <h2>8. Intellectual Property</h2>
      <p>
        We (or our licensors) own the Service's software, design, and branding,
        excluding your own content. Do not copy, modify, or distribute any part
        of the Service except as permitted by law or with our written consent.
      </p>

      <h2>9. Disclaimers</h2>
      <p>
        The Service is provided “as is” and “as available.” To the extent
        permitted by law, we disclaim all warranties, including fitness for a
        particular purpose and non-infringement.
      </p>

      <h2>10. Limitation of Liability</h2>
      <p>
        To the maximum extent permitted by law, {APP_NAME} will not be liable
        for indirect, incidental, special, consequential, or punitive damages,
        or any loss of data, revenue, or profits, arising from your use of the
        Service.
      </p>

      <h2>11. Indemnification</h2>
      <p>
        You agree to indemnify and hold {APP_NAME} harmless from claims arising
        out of your misuse of the Service or violation of these Terms.
      </p>

      <h2>12. Termination</h2>
      <p>
        You may stop using the Service at any time. We may suspend or terminate
        access if you violate these Terms or if required by law.
      </p>

      <h2>13. Governing Law</h2>
      <p>
        These Terms shall be governed and interpreted in accordance with the
        laws of India. Any disputes arising out of or relating to the Service
        will be subject to the exclusive jurisdiction of the courts located in
        Mumbai, Maharashtra, India.
      </p>

      <h2>14. Changes to Terms</h2>
      <p>
        We may update these Terms from time to time. If changes are material, we
        will provide notice where reasonable. Continued use signifies acceptance
        of the updated Terms.
      </p>

      <h2>15. Contact</h2>
      <p>
        For questions, contact{" "}
        <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
      </p>
    </main>
  );
}
