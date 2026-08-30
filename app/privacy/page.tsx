import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import { brand } from "@/config/brand";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `How ${brand.name} handles information when you visit our website or contact us.`,
  alternates: { canonical: "/privacy/" },
};

export default function PrivacyPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="privacy-hero">
          <div className="container">
            <p className="section-kicker">Your information, explained clearly</p>
            <h1>Privacy without the complicated language.</h1>
            <p>This policy explains what information {brand.name} receives, why we use it, and the choices you have when you visit our website or contact us.</p>
          </div>
        </section>
        <section className="privacy-content">
          <div className="container privacy-grid">
            <aside className="privacy-meta" aria-label="Privacy policy details">
              <p><strong>Last updated</strong>31 August 2026</p>
            </aside>
            <div className="privacy-body">
              <section><h2>Information we receive</h2><p>This website does not currently use a contact form, user accounts, advertising cookies, or analytics tools. We receive information only when you choose to contact us by email, phone, or WhatsApp. This may include your name, contact details, business information, and anything else you include in your message.</p></section>
              <section><h2>How we use your information</h2><p>We use the information you send us to:</p><ul><li>respond to your enquiry;</li><li>understand your business needs;</li><li>prepare proposals and provide requested services;</li><li>manage our working relationship and business records; and</li><li>meet legal or regulatory obligations where applicable.</li></ul></section>
              <section><h2>WhatsApp, email and phone</h2><p>When you contact us through WhatsApp, your email provider, or your telephone provider, those services process information under their own privacy terms. Please avoid sending passwords, payment-card details, government identification numbers, or other highly sensitive information through these channels.</p></section>
              <section><h2>Sharing and selling</h2><p>We do not sell your personal information. We may share information with service providers only when needed to deliver work you request, operate our business, or comply with the law. We do not share contact details with third parties for their independent marketing.</p></section>
              <section><h2>Retention and security</h2><p>We keep enquiry and client information only for as long as reasonably needed for communication, service delivery, record-keeping, dispute resolution, and legal obligations. We take practical steps to protect the information we hold, but no internet or messaging service can guarantee absolute security.</p></section>
              <section><h2>Your choices</h2><p>You may ask what personal information we hold about you, request a correction, or ask us to delete information that we no longer need to retain. Applicable rights may vary depending on where you live.</p></section>
              <section><h2>Changes to this policy</h2><p>We may update this notice as the website or our services change. The latest version will always appear on this page with its updated date.</p></section>
              <section><h2>Contact us</h2><p>For a privacy question or request, email <a href={`mailto:${brand.email}`}>{brand.email}</a> or call <a href={brand.phoneHref}>{brand.phoneDisplay}</a>.</p></section>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
