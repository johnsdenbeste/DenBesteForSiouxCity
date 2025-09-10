import { useState } from "react";
import { ArrowRight, CheckCircle2, Mail, MapPin, Shield, DollarSign, Megaphone, Menu, X } from "lucide-react";

export default function App() {
  const [open, setOpen] = useState(false);

  // TODO: replace with your live donation URL
  const DONATE_URL = "https://givebutter.com/your-campaign";
  const CONTACT_EMAIL = "contact@DenBesteForSiouxCity.com";

  const navItems = [
    { label: "Priorities", href: "#priorities" },
    { label: "Meet John", href: "#meet-john" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <div className="min-h-screen bg-campaignIvory text-neutral-900">
      {/* NAVBAR */}
      <header style={{ backgroundColor: '#162d53', color: '#fffbfd' }} className="sticky top-0 z-40 border-b border-[#162d53] backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:py-4">
          <a href="#home" className="flex items-center gap-3 font-semibold tracking-tight">
            <img src="/logo.png" alt="Den Beste for Sioux City" className="h-9 w-auto rounded-md" />
            <span className="sr-only">Den Beste for Sioux City</span>
          </a>
          <nav className="hidden items-center gap-6 md:flex" style={{color:'#fffbfd'}}>
            {navItems.map((n) => (
              <a key={n.href} href={n.href} className="text-sm font-medium text-[#fffbfd] hover:opacity-90">
                {n.label}
              </a>
            ))}
            <a
              href={DONATE_URL}
              className="rounded-2xl border border-[#dbe11f] bg-[#dbe11f] px-4 py-2 text-sm font-semibold text-[#162d53] shadow-sm transition hover:translate-y-[-1px] hover:opacity-90 hover:shadow-md"
            >
              Donate
            </a>
          </nav>
          <button aria-label="Open menu" onClick={() => setOpen(true)} className="md:hidden">
            <Menu color="#fffbfd" />
          </button>
        </div>
        {/* Mobile sheet */}
        {open && (
          <div className="fixed inset-0 z-50 bg-black/40 md:hidden" onClick={() => setOpen(false)}>
            <div
              className="absolute right-0 top-0 h-full w-80 bg-white shadow-xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between border-b px-4 py-3">
                <span className="font-semibold">Menu</span>
                <button aria-label="Close menu" onClick={() => setOpen(false)}>
                  <X />
                </button>
              </div>
              <div className="flex flex-col px-4 py-3">
                {navItems.map((n) => (
                  <a
                    key={n.href}
                    href={n.href}
                    onClick={() => setOpen(false)}
                    className="rounded-xl px-3 py-2 text-sm font-medium text-neutral-700 hover:bg-neutral-100"
                  >
                    {n.label}
                  </a>
                ))}
                <a
                  href={DONATE_URL}
                  onClick={() => setOpen(false)}
                  className="mt-2 rounded-xl border border-[#dbe11f] bg-[#dbe11f] px-3 py-2 text-center text-sm font-semibold text-[#162d53]"
                >
                  Donate
                </a>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* HERO */}
      <section id="home" className="relative overflow-hidden" style={{ backgroundColor: '#162d53', color: '#fffbfd' }}>
        <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 px-4 py-16 md:grid-cols-2 md:gap-8 md:py-20">
          <div>
            <h1 className="text-3xl font-extrabold tracking-tight md:text-5xl">
              Building a Bright Future for <span style={{ color: '#dbe11f' }}>Sioux City</span>
            </h1>
            <p className="mt-4 max-w-prose text-base md:text-lg" style={{color:'#fffbfd'}}>
              Focused on growth, opportunity, and our future — with fiscal responsibility, safe neighborhoods, and smart development.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a
                href={DONATE_URL}
                className="group inline-flex items-center gap-2 rounded-2xl border border-[#dbe11f] bg-[#dbe11f] px-5 py-3 text-sm font-semibold text-[#162d53] shadow-sm transition hover:translate-y-[-1px] hover:opacity-90 hover:shadow-md"
              >
                <DollarSign className="h-4 w-4" /> Donate
              </a>
              <a
                href="#priorities"
                className="inline-flex items-center gap-2 rounded-2xl border border-[#fffbfd] bg-transparent px-5 py-3 text-sm font-semibold text-[#fffbfd] shadow-sm transition hover:translate-y-[-1px] hover:shadow-md"
              >
                Explore Priorities <ArrowRight className="h-4 w-4" />
              </a>
            </div>
            <div className="mt-6 flex items-center gap-3 text-xs" style={{color:'#fffbfd'}}>
              <CheckCircle2 className="h-4 w-4" style={{color:'#dbe11f'}} />
              <span>Paid for by Den Beste for Sioux City</span>
            </div>
          </div>
          <div className="relative">
            <div className="mx-auto aspect-[4/3] w-full max-w-lg rounded-3xl bg-white p-2 shadow-lg">
              <div className="flex h-full items-center justify-center rounded-2xl bg-neutral-100 text-neutral-500">
                Campaign Logo / Photo
              </div>
            </div>
            <div className="pointer-events-none absolute -right-6 -top-6 h-28 w-28 rounded-full bg-campaignLime/30 blur-xl" />
            <div className="pointer-events-none absolute -bottom-8 -left-8 h-28 w-28 rounded-full bg-campaignLime/20 blur-xl" />
          </div>
        </div>
      </section>

      {/* PRIORITIES */}
      <section id="priorities" className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="text-2xl font-extrabold tracking-tight md:text-3xl">Priorities</h2>
        <p className="mt-2 max-w-prose text-neutral-700">
          Practical, accountable leadership focused on results.
        </p>
        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
            <div className="flex items-center gap-2 font-semibold"><Shield className="h-5 w-5" /> Fiscal Responsibility</div>
            <p className="mt-2 text-sm text-neutral-700">
              Protect taxpayers and insist on transparency in budgeting and major projects.
            </p>
          </div>
          <div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
            <div className="flex items-center gap-2 font-semibold"><MapPin className="h-5 w-5" /> Safe, Strong Neighborhoods</div>
            <p className="mt-2 text-sm text-neutral-700">
              Support first responders and revitalize neighborhoods with common‑sense policies.
            </p>
          </div>
          <div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
            <div className="flex items-center gap-2 font-semibold"><Megaphone className="h-5 w-5" /> Smart Growth & Jobs</div>
            <p className="mt-2 text-sm text-neutral-700">
              Cut red tape, streamline permitting, and partner with local businesses to create jobs.
            </p>
          </div>
        </div>
      </section>

      {/* MEET JOHN */}
      <section id="meet-john" className="bg-white">
        <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 px-4 py-16 md:grid-cols-2">
          <div className="order-2 md:order-1">
            <h2 className="text-2xl font-extrabold tracking-tight md:text-3xl">Meet John</h2>
            <p className="mt-3 text-neutral-700">
              John S. Den Beste is a financial professional, reserve deputy, and community leader who has served Sioux City through the Chamber of Commerce Government Relations Committee.
            </p>
            <ul className="mt-4 space-y-2 text-sm text-neutral-700">
              <li>• Chair, Siouxland Chamber Government Relations Committee</li>
              <li>• Background in finance & public safety</li>
              <li>• Dedicated husband and father of two young boys</li>
            </ul>
          </div>
          <div className="order-1 md:order-2">
            <div className="mx-auto aspect-[4/3] w-full max-w-lg rounded-3xl bg-white p-2 shadow-lg">
              <div className="flex h-full items-center justify-center rounded-2xl bg-neutral-100 text-neutral-500">
                Family Photo (placeholder)
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DONATE / CTA */}
      <section className="mx-auto max-w-6xl px-4 py-16" id="donate">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <div className="rounded-3xl border border-campaignLime/30 bg-campaignLime/10 p-8 md:col-span-2">
            <h3 className="text-xl font-bold tracking-tight md:text-2xl">Join the Team</h3>
            <p className="mt-2 text-neutral-700">
              Your support helps us reach voters, share our message, and build a stronger Sioux City.
            </p>
            <div className="mt-5 flex flex-wrap items-center gap-3">
              <a
                href={DONATE_URL}
                className="inline-flex items-center gap-2 rounded-2xl border border-[#dbe11f] bg-[#dbe11f] px-5 py-3 text-sm font-semibold text-[#162d53] shadow-sm transition hover:translate-y-[-1px] hover:opacity-90 hover:shadow-md"
              >
                <DollarSign className="h-4 w-4" /> Donate Now
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-2xl border border-neutral-300 bg-white px-5 py-3 text-sm font-semibold text-neutral-800 shadow-sm transition hover:translate-y-[-1px] hover:shadow-md"
              >
                Volunteer
              </a>
            </div>
          </div>
          <div className="rounded-3xl border border-neutral-200 bg-white p-8">
            <h4 className="text-lg font-semibold">Election Info</h4>
            <ul className="mt-3 space-y-2 text-sm text-neutral-700">
              <li>• Register to vote</li>
              <li>• Early voting dates</li>
              <li>• Polling locations</li>
            </ul>
            <p className="mt-3 text-xs text-neutral-500">(Add local links here.)</p>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="bg-white">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <div className="rounded-3xl border border-neutral-200 bg-white p-8 shadow-sm">
            <h3 className="text-xl font-bold tracking-tight md:text-2xl">Contact</h3>
            <p className="mt-2 text-neutral-700">
              Have a question, want a yard sign, or ready to volunteer? We’d love to hear from you.
            </p>
            <div className="mt-5 grid grid-cols-1 gap-4 md:grid-cols-3">
              <a href={`mailto:${CONTACT_EMAIL}`} className="flex items-center gap-3 rounded-2xl border border-neutral-200 bg-neutral-50 p-4 text-sm font-medium text-neutral-800 hover:bg-neutral-100">
                <Mail className="h-4 w-4" /> {CONTACT_EMAIL}
              </a>
              <a href={DONATE_URL} className="flex items-center gap-3 rounded-2xl border border-neutral-200 bg-neutral-50 p-4 text-sm font-medium text-neutral-800 hover:bg-neutral-100">
                <DollarSign className="h-4 w-4" /> Donate Link
              </a>
              <div className="flex items-center gap-3 rounded-2xl border border-neutral-200 bg-neutral-50 p-4 text-sm font-medium text-neutral-600">
                <Shield className="h-4 w-4" />
                Authorized by the candidate committee.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-neutral-200 bg-campaignIvory">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-4 px-4 py-8 md:flex-row md:items-center">
          <div className="text-sm text-neutral-600">
            © {new Date().getFullYear()} Den Beste for Sioux City
          </div>
          <div className="text-xs text-neutral-600">
            Paid for by Den Beste for Sioux City
          </div>
        </div>
      </footer>
    </div>
  );
}
