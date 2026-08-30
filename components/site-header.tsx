/* eslint-disable @next/next/no-html-link-for-pages -- Static-export anchors avoid vinext Link hydration errors. */
import { brand } from "@/config/brand";
import { navItems } from "@/data/home";

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <a className="wordmark" href="/" aria-label={`${brand.name}, home`}>
          <span className="wordmark-mark">{brand.shortName}</span>
          <span>{brand.name.replace(`${brand.shortName} `, "")}</span>
        </a>
        <nav className="desktop-nav" aria-label="Primary navigation">
          {navItems.map((item) => <a href={item.href} key={item.href}>{item.label}</a>)}
        </nav>
        <a className="button button--dark header-cta" href="/#contact">Let&apos;s talk <span aria-hidden="true">↗</span></a>
        <details className="mobile-nav">
          <summary aria-label="Open navigation"><span /><span /></summary>
          <nav aria-label="Mobile navigation">
            {navItems.map((item) => <a href={item.href} key={item.href}>{item.label}</a>)}
            <a className="button button--coral" href="/#contact">Tell us what you need</a>
          </nav>
        </details>
      </div>
    </header>
  );
}
