import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "APRA AI Trust Navigator",
  description:
    "A practical web app for regulated entities that need to map AI risk, governance, resilience, and security to APRA prudential standards.",
};

const navItems = [
  { href: "/#handbook", label: "Handbook" },
  { href: "/#clauses", label: "Clauses" },
  { href: "/#publications", label: "Publications" },
  { href: "/#plan", label: "Plan" },
  { href: "/#questions", label: "Questions" },
];

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <div className="site-shell">
          <header className="topbar">
            <Link href="/" className="brand" aria-label="APRA AI Trust Navigator">
              <span className="brand-mark">AP</span>
              <span>APRA AI Trust Navigator</span>
            </Link>
            <nav className="nav">
              {navItems.map((item) => (
                <Link href={item.href} key={item.href}>
                  {item.label}
                </Link>
              ))}
            </nav>
          </header>
          {children}
        </div>
      </body>
    </html>
  );
}
