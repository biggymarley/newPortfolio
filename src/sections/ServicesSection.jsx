import { Layers, PenTool, Store } from "../components/icons";

const services = [
  {
    icon: Store,
    title: "E-commerce stores",
    body: "Headless Shopify storefronts or fully custom stores on Supabase, with cart, checkout (Stripe or cash on delivery), stock and order emails.",
    points: ["Shopify Storefront API", "Server-side pricing", "Google Merchant & SEO"],
  },
  {
    icon: Layers,
    title: "Platforms & dashboards",
    body: "Booking sites, marketplaces and the admin dashboards owners use every day: roles, realtime chat, content editing and analytics, without needing a developer.",
    points: ["Role-based access", "Realtime & media", "Admin CRUD with live previews"],
  },
  {
    icon: PenTool,
    title: "Design in code",
    body: "I design straight in the browser, so there's no handoff gap. You get a custom design system, motion with reduced-motion fallbacks, and layouts built for phones first.",
    points: ["Custom design systems", "Motion (GSAP, Motion)", "Accessibility"],
  },
];

const steps = [
  { title: "Talk", body: "A quick call or chat to understand the goal, the users and the budget." },
  { title: "Shape", body: "A short written scope and a first clickable direction within days." },
  { title: "Build", body: "Weekly live previews you can open on your phone, not status reports." },
  { title: "Launch", body: "Deploy, SEO, analytics and a handover so you can run it yourself." },
];

const ServicesSection = () => {
  return (
    <section id="services" className="section">
      <div className="max-w-2xl" data-aos="fade-up">
        <p className="eyebrow">Services</p>
        <h2 className="section-title">What I can build for you</h2>
        <p className="section-lead">
          One person from idea to launch: product thinking, design, front end, back end and
          deployment.
        </p>
      </div>

      <div className="mt-12 grid md:grid-cols-3 gap-5">
        {services.map(({ icon: Icon, title, body, points }, i) => (
          <article
            key={title}
            data-aos="fade-up"
            data-aos-delay={i * 80}
            className="flex flex-col rounded-xl border border-line bg-night-raised/50 p-6 md:p-7 transition-colors duration-300 hover:border-accent/50"
          >
            <span className="w-11 h-11 rounded-lg bg-accent-soft text-accent flex items-center justify-center">
              <Icon size={20} />
            </span>
            <h3 className="mt-5 text-xl font-semibold tracking-tight text-white">{title}</h3>
            <p className="mt-3 text-sm text-fog leading-relaxed flex-1">{body}</p>
            <ul className="mt-5 pt-5 border-t border-line space-y-2">
              {points.map((point) => (
                <li key={point} className="flex items-center gap-2 text-sm text-white/90">
                  <span className="w-1 h-1 rounded-full bg-accent"></span>
                  {point}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>

      {/* process */}
      <ol className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-8" data-aos="fade-up">
        {steps.map(({ title, body }, i) => (
          <li key={title} className="relative pt-5 border-t border-line">
            <span className="absolute -top-px left-0 h-px w-10 bg-accent"></span>
            <p className="font-mono text-xs text-accent">0{i + 1}</p>
            <h3 className="mt-2 text-white font-semibold">{title}</h3>
            <p className="mt-1.5 text-sm text-fog leading-relaxed">{body}</p>
          </li>
        ))}
      </ol>
    </section>
  );
};

export default ServicesSection;
