import ai from "../assets/projects/ai.webp";
import poponi from "../assets/projects/poponi.webp";
import bunk from "../assets/projects/bunk.webp";
import generalStore from "../assets/projects/general-store.png";
import bigflix from "../assets/projects/bigflix.webp";
import bigflixv2 from "../assets/projects/bigflixv2.webp";
import bike from "../assets/projects/bike.webp";
import chillcloud from "../assets/projects/chillcloud.webp";
import matcha from "../assets/projects/matcha.webp";
import omart from "../assets/projects/omart.webp";
import startincub from "../assets/projects/startincub.webp";
import tazuri from "../assets/projects/tazuri.webp";
import taghazoutShirt from "../assets/projects/taghazout-shirt.webp";

// Single source of truth for every project shown on the site.
// `featured: true` marks the ones that appear on the home page.
// `claudeCode: true` marks projects built using Claude Code — cards and the
// detail page show a Claude badge for these.
// `selfDesigned: true` marks projects I designed myself (mostly designing
// directly in code) — the detail page shows a design note + skill for these.
// Projects with a `slug` get a dedicated detail page at /projects/:slug
// (live iframe preview + about + features + skills). Projects without a
// slug (e.g. GitHub-only repos) keep linking straight to `link`.
// Optional case-study fields (rendered on the detail page only when present):
// `repo` (source link), `context` (the problem, in short paragraphs),
// `highlights` ({ title, body } — problems solved, with the why) and
// `screenshots` ({ src, alt, caption } — entries with `src: null` are
// placeholders, shown only in dev).
export const projects = [
  {
    slug: "taghazout-shirt",
    img: taghazoutShirt,
    langs: [
      "Nextjs",
      "React",
      "Typescript",
      "Tailwind css",
      "Shopify",
      "Storefront Api",
      "GraphQL",
      "Motion",
      "GSAP",
      "Lenis",
      "Radix UI",
      "vercel",
    ],
    title: "TAGHAZOUT SHIRT",
    disc: "Headless Shopify storefront selling clothing from Taghazout's independent skate, surf and street labels worldwide",
    link: "https://www.taghazoutshirt.com",
    repo: "https://github.com/biggymarley/taghazout",
    featured: true,
    selfDesigned: true,
    claudeCode: true,
    about:
      "Taghazout Shirt is a stockist storefront that sells clothing from Taghazout's own skate, surf and street labels worldwide — a custom Next.js front end on top of Shopify, with an editorial, motion-led design and a page structure built to be found by Google and quoted by AI answer engines. I did it solo: design direction, front end, commerce integration, SEO, deployment, and the Shopify store setup itself. It's live and in active development.",
    context: [
      "Taghazout is a Moroccan surf village with a handful of small independent clothing labels — Taghazout Skatepark, Poponi, Underrated Studio. Most of them could only be bought in person, or through one Instagram account. The site collects them in one place and ships worldwide from Agadir.",
      "The key decision was positioning: it's a stockist, not a maker. Every product is credited to the label that made it — on the card, on the product page, and in the structured data — and the site never claims to make the clothes. That one rule shaped the data model, the product page and the SEO.",
      "The design system, \"Anchor Point\", came from researching the real place — blue-and-white houses, cobalt fishing boats, caramel sand, the Anchor Point right-hand wave — and translating it into a dark theme with a single orange accent (#FB5A18). Type is Archivo variable (its width axis pushed to ultra-condensed for display), Geist Sans and Mono, a Sacramento script accent, and Noto Sans Tifinagh for the Amazigh name ⵜⴰⵖⴰⵣⵓⵜ. Nothing in the motion language bounces, and every animation has a prefers-reduced-motion path.",
    ],
    highlights: [
      {
        title: "Static pages, live cart",
        body: "The cart lives in an httpOnly cookie, and reading cookies would normally make every page dynamic. I isolated the cart behind a Suspense boundary, so with Next.js 16 partial prerendering every page ships as a static shell and only the cart streams in.",
      },
      {
        title: "Shopify webhooks, verified properly",
        body: "The HMAC is computed over the raw request body, not re-serialised JSON, which would never match. The comparison is constant-time with a length check first, and unhandled topics get a 200 so Shopify doesn't keep retrying them for two days. Verified events refresh the cached product and collection data.",
      },
      {
        title: "Brand attribution you can trust",
        body: "Each label is a Shopify collection — its image is the logo, and a navigation menu decides which collections count as brands and in what order, so adding a brand needs no code. A careful fallback means a misconfigured store never credits a product to the wrong label, and the site keeps working before the store is set up.",
      },
      {
        title: "A gallery for mixed photo shapes",
        body: "Product shots arrive as anything from tall model photos to wide mockups. The gallery fills a 4:5 frame where the photo fits it and letterboxes the rest, so wide mockups don't lose their sleeves. One DOM serves both the mobile and desktop layouts, so no image downloads twice.",
      },
      {
        title: "Accessibility in the details",
        body: "Focus-trapped dialogs (Radix) for the nav, cart and photo viewer, screen-reader announcements when the cart changes, and marquees that pause on hover and focus and expose each link only once instead of once per repeat.",
      },
      {
        title: "Headless, end to end",
        body: "The Shopify Online Store theme redirects to the Next.js site with a canonical and noindex, checkout runs on its own subdomain (checkout.taghazoutshirt.com), and the checkout is styled to match the site.",
      },
    ],
    features: [
      "Shop grid with URL-based filters, with filtered views kept out of the search index",
      "Product pages with a thumbnail-rail gallery, a full-screen photo viewer (swipe, arrows, keyboard, thumbnails), size picker with sold-out states, and spec tables",
      "Server-side cart via Server Actions, a slide-out cart drawer, and a one-click \"Buy now\" straight to checkout with just that item — without touching the shopper's bag",
      "Sticky buy bar that appears once the main buy buttons scroll away and hides near the footer",
      "\"The maker\" panel on every product page: the label's logo and a link to all its pieces",
      "Editorial homepage: layered hero collage with scroll parallax and annotated product callouts, full-bleed wordmark band, marquees, and a card-deck intro loader",
      "SEO and AI-search (GEO): JSON-LD for Product, Offer, Brand, BreadcrumbList, FAQPage, Organization and WebSite; /llms.txt and /llms-full.txt generated from the live catalogue; Markdown versions of product pages",
      "Google Merchant feed (/feed.xml), a sitemap built from Shopify with real last-modified dates, and dynamic per-product Open Graph images",
      "Shipping and returns pages with 14-day returns aligned with EU distance-selling rules, and honest empty states instead of an invented rate card, address or review",
    ],
    skills: [
      "Headless commerce (Shopify Storefront API)",
      "Next.js 16 Cache Components & partial prerendering",
      "Server Actions, caching & revalidation",
      "Webhook security (HMAC verification)",
      "Technical SEO & structured data",
      "AI-search optimisation (GEO)",
      "Accessibility (WCAG 2.2)",
      "Motion design (GSAP, Motion)",
      "Custom design systems",
      "Shopify store setup, DNS & Vercel deployment",
    ],
    screenshots: [
      {
        src: null, // TODO: homepage hero, desktop — shows the design system and motion-led editorial direction
        alt: "Taghazout Shirt homepage hero on desktop",
        caption: "The homepage hero: layered collage, annotated label callouts, full-bleed wordmark.",
      },
      {
        src: null, // TODO: product page with gallery + sticky buy bar visible — shows highlights 1 and 4 (and "The maker" panel = 3)
        alt: "Product page with gallery and sticky buy bar",
        caption: "Product page: mixed-shape gallery, label credit, sticky buy bar.",
      },
      {
        src: null, // TODO: full-screen photo viewer, ideally a wide mockup letterboxed — shows highlight 4
        alt: "Full-screen photo viewer",
        caption: "The full-screen viewer letterboxes wide mockups instead of cropping them.",
      },
      {
        src: null, // TODO: mobile shop grid — shows labels credited on every card + responsive layout
        alt: "Shop grid on mobile",
        caption: "Shop grid on mobile, every piece credited to its label.",
      },
      {
        src: null, // TODO: Shopify checkout on checkout.taghazoutshirt.com — shows highlight 6
        alt: "Checkout styled to match the site",
        caption: "Shopify checkout on its own subdomain, styled to match.",
      },
    ],
  },
  {
    slug: "poponi",
    img: poponi,
    langs: [
      "Nextjs",
      "Typescript",
      "Supabase",
      "Tailwind css",
      "shadcn/ui",
      "Resend",
      "GSAP",
      "Motion",
      "vercel",
    ],
    title: "POPONI",
    disc: "Bold streetwear storefront backed by a custom, expert-level admin dashboard a non-technical owner runs entirely on their own",
    link: "https://www.poponi.shop",
    featured: true,
    selfDesigned: true,
    claudeCode: true,
    about:
      "POPONI is a full-stack e-commerce platform for a one-person Moroccan streetwear studio: a loud, animated public storefront backed by a bespoke admin dashboard that lets a non-technical owner run the entire business — catalog, orders, custom requests, site media, and content — with no code and no third-party CMS. The public site reads live from the database and the admin writes to it, so changing a product, price, video, or homepage image is instantly live. It runs a real commerce loop — cart → checkout → server-priced orders → branded transactional email — with cash-on-delivery and prepaid options, and prices are authoritative in the database so the client can never dictate a total.",
    features: [
      "Custom storefront + custom admin — no Shopify, no headless CMS; everything is bespoke and owned",
      "Server-first data flow: Server Components read Postgres, every mutation is a Server Action guarded by requireAdmin()",
      "Price authority in the database — a SECURITY DEFINER Postgres function re-reads prices and recomputes subtotal/shipping/total server-side on every order",
      "Admin-only auth with authorization enforced in the database via RLS and an is_admin() helper, not just the UI — no service-role key shipped in the app",
      "Expert-level admin: KPI overview, sortable/selectable data tables, drag-to-reorder lists, and live previews that mirror exactly how content renders on the site",
      "Rich content management for products, orders, custom 'Ask Me' requests, collabs, a graffiti section, and reusable media/avatar/sticker managers",
      "Hand-built responsive transactional email (Resend): order confirmation, new-order alerts, and status updates sent only when the status actually changes",
      "SEO throughout: dynamic sitemap/robots/manifest, Open Graph image generation, and JSON-LD structured data",
    ],
    skills: [
      "Full-stack e-commerce architecture",
      "Supabase (Postgres, Auth, RLS, Storage, RPC)",
      "Database-authoritative pricing (SECURITY DEFINER)",
      "Row-Level Security & auth hardening",
      "Server Components & Server Actions",
      "Admin dashboard & CRUD tooling with live previews",
      "Transactional email (Resend)",
      "Technical SEO & structured data",
      "Custom design systems & motion (GSAP, Motion)",
    ],
  },
  {
    slug: "general-goods",
    img: generalStore,
    langs: [
      "Nextjs",
      "Typescript",
      "Supabase",
      "Tailwind css",
      "Stripe",
      "Zustand",
      "Motion",
      "vercel",
    ],
    title: "General Goods Co.",
    disc: "Outdoor gear ecommerce store with a full admin dashboard",
    link: "https://general-store-peach.vercel.app/",
    featured: true,
    selfDesigned: true,
    claudeCode: true,
    about:
      "General Goods Co. is a full production e-commerce storefront for outdoor gear, paired with a complete admin dashboard for running the store. Built on Next.js and Supabase, it handles the whole retail loop — catalog, cart, Stripe checkout, order fulfillment — while the admin side lets a non-technical owner manage products, orders, content, and discounts without touching code. The build was also engineered to pass Google Merchant Center review, with a live product feed and structured data kept in sync with the database.",
    features: [
      "Full storefront: home, filterable catalog, product pages, cart, and Stripe Checkout",
      "Admin dashboard to manage products, variants, images, orders, discounts, categories, and content",
      "Google Merchant Center-compliant product feed generated live from the database",
      "Product structured data (JSON-LD) kept in sync with pricing, stock, and shipping for search rich results",
      "Order lifecycle handled via Stripe webhooks: order creation, atomic stock decrement, and Resend emails",
      "Row-level security on every table via Supabase, with role-based admin/editor access",
      "Custom design system (Tailwind v4 tokens) with a rugged, print-inspired outdoor retail identity",
    ],
    skills: [
      "Full-stack e-commerce architecture",
      "Supabase (Postgres, Auth, RLS, Storage)",
      "Stripe Checkout & webhooks",
      "Admin dashboard & CRUD tooling",
      "Technical SEO & structured data",
      "Google Merchant Center compliance",
      "Custom design systems",
    ],
  },
  {
    slug: "bunk",
    img: bunk,
    langs: ["Nextjs", "Typescript", "Supabase", "Realtime chat", "vercel"],
    title: "Bunk",
    disc: "Work-for-stay platform — hostels post volunteer gigs, travelers trade a few hours for a free bed",
    link: "https://www.bunk.surf/",
    featured: true,
    selfDesigned: true,
    claudeCode: true,
    about:
      "Bunk is a fully working two-sided marketplace connecting hostels with travelers who want to trade a few hours of work for a free bed. It's a complete production platform with three user roles — volunteer, hostel, and admin — each with its own dedicated dashboard and permissions. Hostels post volunteer opportunities, travelers apply, and accepted matches unlock a realtime chat where both sides coordinate the stay.",
    features: [
      "Three user roles (volunteer, hostel, admin) with role-based access control and a dedicated dashboard for each",
      "Full admin dashboard to manage users, listings, and platform content",
      "Realtime live chat between volunteers and hostels with image, audio, and video sharing",
      "Application flow: hostels post gigs, volunteers apply, matches unlock chat and reviews",
      "Built-in blog that the admin can publish and manage easily",
      "SEO-first build following best practices: metadata, structured data, and server-side rendering",
    ],
    skills: [
      "Full-stack architecture",
      "Role-based access control",
      "Realtime systems",
      "Supabase Auth & RLS",
      "Media upload & storage",
      "Technical SEO",
      "Content management",
      "Dashboard UX",
    ],
  },
  {
    slug: "bigflix-v2",
    img: bigflixv2,
    langs: [
      "Nextjs",
      "Typescript",
      "tailwind css",
      "TMDB API",
      "Nodejs",
      "Express",
      "WebTorrent",
      "ffmpeg",
      "Oracle Cloud",
      "vercel",
    ],
    title: "Bigflix V2",
    disc: "Streaming your favorite movie/show",
    link: "https://bigflixv2.vercel.app/",
    featured: true,
    selfDesigned: true,
    claudeCode: true,
    about:
      "Bigflix V2 is a full-stack streaming platform: a Netflix-style Next.js frontend backed by a custom Node.js torrent-to-HTTP streaming server I built and self-host. The frontend pulls the catalog from the TMDB API for browsing, search, and rich detail pages; when you hit play, the backend resolves the title to a torrent, streams it over WebTorrent, and pipes it through ffmpeg into a playable HTTP video stream — deployed on an Oracle Cloud ARM box behind HTTPS. And when you don't know what to watch, a built-in AI assistant suggests three titles based on your mood and who you're watching with.",
    features: [
      "Browse and discover movies and TV shows powered by the TMDB API",
      "AI assistant that suggests 3 movies/shows based on your mood and who you're watching with — for when you don't know what to watch",
      "Custom torrent player: a Node.js/Express backend turns torrents into playable HTTP video streams in the browser",
      "IMDB-id-to-magnet resolver with mirror fallback and quality selection (720p / 1080p / 2160p)",
      "On-the-fly remux and transcoding with ffmpeg so streams direct-play cheaply",
      "Secured API: token-gated endpoints with CORS allowlist, plus an open health check",
      "Self-hosted on an Oracle Cloud Always Free ARM VM — provisioned with Node, ffmpeg, systemd, and HTTPS",
      "Rich detail pages, fast search, and server-side rendering for SEO-friendly pages",
    ],
    skills: [
      "Full-stack architecture",
      "AI integration (LLM recommendations)",
      "Node.js & Express APIs",
      "Video streaming & transcoding (ffmpeg)",
      "P2P protocols (WebTorrent)",
      "Linux server deployment (systemd, HTTPS)",
      "API security (token auth, CORS)",
      "Server-side rendering",
      "TypeScript at scale",
    ],
  },
  {
    slug: "tazuri",
    img: tazuri,
    langs: [
      "Nextjs",
      "Typescript",
      "Supabase",
      "Tailwind css",
      "next-intl",
      "Resend",
      "Anthropic",
      "Motion",
      "vercel",
    ],
    title: "Tazuri Surf House",
    disc: "Bilingual booking site for a Moroccan surf hostel, with a self-service admin dashboard and an AI blog writer",
    link: "https://tazurihouse.com",
    featured: true,
    selfDesigned: true,
    claudeCode: true,
    about:
      "Tazuri Surf House is a custom, fully bilingual (EN/FR) website and content platform for a surf hostel in Taghazout, Morocco — built so the owner can run almost everything themselves, no code. It pairs a hand-designed public site with a ~12-section admin dashboard, a built-in online booking flow, transactional email, analytics, and an AI system that researches the live web and drafts on-brand blog posts on a weekly schedule. The client fully owns the code, hosting, database, and email accounts — the entire stack runs on free tiers.",
    features: [
      "12 bilingual (EN/FR), motion-animated page types: home, rooms, activities, packs, reviews, blog, booking, contact, and team",
      "Built-in online booking — guests build a basket, pick dates on a custom range calendar, add paid extras, and submit, with no third-party booking tool",
      "Editable 'persona' pack categories (surfer / yogi / backpacker), each a custom illustration with adjustable stat bars that filter the packs shown",
      "~12-section self-service admin dashboard with full CRUD, image uploads, publish toggles, and bilingual fields across every content type",
      "Bookings workflow with one-click deposit-request and confirmation emails, a merged guest directory, and CSV export for marketing",
      "AI blog pipeline that researches the web and drafts on-brand posts on an admin-set cadence (Vercel Cron), switchable between Claude and Gemini — human-in-the-loop, nothing publishes without owner approval",
      "Branded transactional email via Resend, plus a built-in analytics dashboard powered by the GA4 Data API",
      "Technical SEO throughout: JSON-LD structured data, sitemaps, OG/Twitter cards, and hreflang",
    ],
    skills: [
      "Full-stack architecture",
      "Supabase (Postgres, Auth, RLS, Storage)",
      "Internationalization (next-intl, EN/FR)",
      "Booking & payment-workflow UX",
      "Admin dashboard & CRUD tooling",
      "AI automation (web research, scheduled drafting)",
      "Transactional email (Resend)",
      "Analytics integration (GA4 Data API)",
      "Technical SEO & structured data",
      "Custom design systems",
    ],
  },
  {
    slug: "omart",
    img: omart,
    langs: ["Nextjs", "Typescript", "tailwind css", "Shopify", "Storefront Api", "vercel"],
    title: "Omart.",
    disc: "Ecommerce Website Powered by Shopify Storefront API",
    link: "https://omart-strings.vercel.app/",
    featured: true,
    selfDesigned: true,
    about:
      "Omart is a headless ecommerce storefront: the shop is managed in Shopify, but the entire customer-facing experience is a custom Next.js app talking to the Shopify Storefront API. That means full design freedom on the frontend while keeping Shopify's battle-tested product, cart, and checkout infrastructure underneath.",
    features: [
      "Headless architecture — custom frontend on top of Shopify's Storefront API",
      "Product catalog with collections, product detail pages, and variants",
      "Cart management synced with Shopify, handing off to secure Shopify checkout",
      "Server-side rendered product pages for SEO",
      "Custom design system built with Tailwind, free from Shopify theme limits",
    ],
    skills: [
      "Headless commerce",
      "GraphQL APIs",
      "Shopify Storefront API",
      "Cart & checkout flows",
      "E-commerce UX",
      "Server-side rendering",
    ],
  },
  {
    slug: "chillcloud",
    img: chillcloud,
    langs: ["React", "javascript", "tailwind css", "vite", "firebase", "100ms", "vercel"],
    title: "ChillCloud",
    disc: "Discord like app",
    link: "https://cloudchill.vercel.app/",
    featured: true,
    selfDesigned: true,
    about:
      "ChillCloud is a Discord-style community app where people connect, chat, and hang out together. It combines Firebase for auth and realtime messaging with 100ms for live audio/video rooms — a full realtime communication stack running in the browser.",
    features: [
      "Realtime text chat backed by Firebase",
      "Live audio/video rooms powered by the 100ms SDK",
      "User authentication and profiles with Firebase Auth",
      "Community/room structure inspired by Discord servers",
      "Snappy single-page experience built with React and Vite",
    ],
    skills: [
      "Realtime messaging",
      "WebRTC audio/video",
      "Firebase (Auth, Firestore)",
      "Third-party SDK integration",
      "State management",
    ],
  },
  {
    slug: "bigflix",
    img: bigflix,
    langs: ["React", "Material UI", "javascript", "css", "vite", "vercel"],
    title: "Bigflix",
    disc: "Netflix like app",
    link: "https://bigflix-sooty.vercel.app/discover/movies",
    featured: true,
    selfDesigned: true,
    about:
      "Bigflix is the first iteration of my Netflix-style app — a React single-page application for discovering movies and shows, built with Material UI. It laid the groundwork that later became Bigflix V2, and shows the same product evolving across two tech stacks.",
    features: [
      "Discover and browse movies and TV shows",
      "Detail pages with posters, overviews, and ratings",
      "Client-side routing for an app-like browsing experience",
      "Material UI component system with a custom dark theme",
    ],
    skills: [
      "React SPA architecture",
      "REST API consumption",
      "Component libraries (MUI)",
      "Client-side routing",
    ],
  },
  {
    slug: "startincub",
    img: startincub,
    langs: ["React", "Material UI", "javascript", "css", "create-react-app"],
    title: "Startincub",
    disc: "Startups Incubation Application",
    link: "https://biggymarley.github.io/Project/#/",
    selfDesigned: true,
    about:
      "Startincub is a web application for a startup incubation program — presenting the program, its offerings, and letting founders get in touch and apply. Built as a React SPA with Material UI.",
    features: [
      "Multi-page SPA presenting the incubation program",
      "Application and contact flows for founders",
      "Material UI design system with custom styling",
    ],
    skills: ["React SPA architecture", "Component libraries (MUI)", "Form handling"],
  },
  {
    slug: "matcha",
    img: matcha,
    langs: ["React", "Material UI", "javascript", "css", "create-react-app"],
    title: "Matcha",
    disc: "Tinder like app",
    link: "https://biggymarley.github.io/TinderClonePreview/",
    about:
      "Matcha is a Tinder-style dating app interface — swipeable profile cards, matching flows, and a mobile-first layout, built in React with Material UI.",
    features: [
      "Swipeable card interface for browsing profiles",
      "Match and profile screens with a mobile-first layout",
      "Material UI components with custom theming",
    ],
    skills: ["Mobile-first UI", "Gesture-driven interfaces", "React SPA architecture"],
  },
  {
    slug: "bike-rental",
    img: bike,
    langs: ["React", "Material UI", "javascript", "css", "vite", "vercel"],
    title: "Bike Rental App",
    disc: "Bike Rental App",
    link: "https://bikerental.vercel.app/",
    selfDesigned: true,
    about:
      "A bike rental web app where users can browse available bikes and book a rental. Built with React, Vite, and Material UI, focused on a clean and simple booking experience.",
    features: [
      "Browse available bikes with details and pricing",
      "Simple rental/booking flow",
      "Responsive layout built with Material UI",
    ],
    skills: ["Booking flow UX", "React SPA architecture", "Responsive UI design"],
  },
  {
    slug: "ai-landing",
    img: ai,
    langs: ["React", "TailwinCss", "javascript", "css", "vite", "vercel"],
    title: "Landing page",
    disc: "Landing page for ai project",
    link: "https://obi-landing.vercel.app/",
    selfDesigned: true,
    about:
      "A modern landing page for an AI product — clean sections, sharp typography, and a design that communicates the product's value at a glance. Built with React, Vite, and Tailwind.",
    features: [
      "Hero, features, and call-to-action sections",
      "Tailwind-based design with a modern AI-product aesthetic",
      "Lightweight and fast — optimized static build",
    ],
    skills: ["Landing page design", "Tailwind CSS", "Visual hierarchy & typography"],
  },
  {
    img: "https://camo.githubusercontent.com/61ea9e91a74c24d88e2bf28fbf4ea3cee133e9365dcf332e96d40af46cd90734/68747470733a2f2f626173686c6f676f2e636f6d2f696d672f73796d626f6c2f6a70672f66756c6c5f636f6c6f7265645f6c696768742e6a7067",
    langs: ["C", "Unix Shell"],
    title: "Unix Shell Implementation",
    disc: "Unix Shell Implementation",
    link: "https://github.com/biggymarley/42SH",
  },
  {
    img: "https://biggymarley.github.io/myPortfolio/static/media/libft.8948aa24978189644e2c.png",
    langs: ["C", "Terminal"],
    title: "C Standard Library",
    disc: "C Standard Library",
    link: "https://github.com/biggymarley/libft",
  },
];

export const featuredProjects = projects.filter((project) => project.featured);

export const smallProjects = [
  {
    languages: ["React", "CSS", "Material UI"],
    title: "Contact-Us Form",
    body: "Contact-Us Form using Material UI",
    link: "https://github.com/biggymarley/ContactUs",
  },
  {
    languages: ["Nodejs", "Expressjs", "Render"],
    title: "Stripe Payment Server",
    body: "Stripe Payment Server",
    link: "https://github.com/biggymarley/pymentserver",
  },
  {
    languages: ["React", "CSS", "Material UI"],
    title: "Login Form",
    body: "Login Form using Material UI",
    link: "https://github.com/biggymarley/LoginFrom",
  },
  {
    languages: ["React", "Material UI"],
    title: "Pong",
    body: "Pong game design",
    link: "https://biggymarley.github.io/Pong/",
  },
  {
    languages: ["C"],
    title: "ft_ls",
    body: "Ls Command Implementation",
    link: "https://github.com/biggymarley/ls_1337",
  },
  {
    languages: ["PHP", "CSS", "HTML", "javascript", "Sql"],
    title: "Instagram Like App",
    body: "Instagram Like App",
    link: "https://github.com/biggymarley/Camagru",
  },
];
