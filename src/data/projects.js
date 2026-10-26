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
import underrated212 from "../assets/projects/underrated212.webp";
import yallah from "../assets/projects/yallah.webp";
import tamraghtDays from "../assets/projects/tamraght-days.webp";
import yallahIcon from "../assets/projects/yallah/icon.webp";
import yallahScreen1 from "../assets/projects/yallah/screen-1.webp";
import yallahScreen2 from "../assets/projects/yallah/screen-2.webp";
import yallahScreen3 from "../assets/projects/yallah/screen-3.webp";
import yallahScreen4 from "../assets/projects/yallah/screen-4.webp";
import yallahScreen5 from "../assets/projects/yallah/screen-5.webp";
import yallahScreen6 from "../assets/projects/yallah/screen-6.webp";
import yallahScreen7 from "../assets/projects/yallah/screen-7.webp";
import yallahScreen8 from "../assets/projects/yallah/screen-8.webp";
import underrated212Rack from "../assets/projects/underrated212/rack.webp";
import underrated212ProductView from "../assets/projects/underrated212/product-view.webp";
import underrated212AdminProduct from "../assets/projects/underrated212/admin-product.webp";

// Single source of truth for every project shown on the site.
// `spotlight: true` marks the ones shown as large rows under "Selected work";
// everything else goes in the filterable grid below it.
// `category` drives the filter tabs on the home page (see `categories` below).
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
// Mobile apps set `playStore` (store URL), `icon` and `appScreens` (phone
// screenshots): the detail page shows the screens instead of a live iframe.
// `launch` ({ tags, items }) covers work beyond the code: Merchant Center,
// Google Business Profile, social accounts. Tags show on the home page row.
export const projects = [
  {
    slug: "underrated212-studio",
    img: underrated212,
    langs: [
      "Nextjs",
      "React",
      "Typescript",
      "Supabase",
      "PostgreSQL",
      "Tailwind css",
      "Motion",
      "Zustand",
      "React Hook Form",
      "Zod",
      "vercel",
    ],
    title: "UNDERRATED212 STUDIO",
    spotlight: true,
    category: "commerce",
    disc: "Cash-on-delivery streetwear store for a Tamraght print studio, built as clothes hanging on a rail in an underground station",
    link: "https://underrated-tau.vercel.app/",
    selfDesigned: true,
    claudeCode: true,
    about:
      "UNDERRATED212 STUDIO is the online store for a small streetwear print studio in Tamraght, selling to customers across Morocco with cash on delivery. Instead of a product grid, the garments hang edge-on along a chrome rail under a fluorescent tube; they turn to face you on hover and fly into a full product view. I designed it and built the whole thing solo: the Next.js App Router front end, the Supabase back end (Postgres schema, row-level security, order functions, Storage) and an admin dashboard for products, orders, messages and shipping. It's live and in active development, with a real catalogue and studio photography.",
    context: [
      "The studio sells mostly through Instagram and WhatsApp, to customers who expect to pay on delivery rather than by card. So the store has no payment provider and no customer accounts: you order with a name, a Moroccan mobile number, a city and an address, and the studio calls to confirm. That makes the order path the part that has to be trustworthy: prices, stock and delivery fees can't come from the browser.",
      "The key architecture decision was to put every order write behind Postgres security definer functions with row-level security. Visitors can read the catalogue but can never read or write orders directly; place_order() recomputes prices and shipping, and checks and decrements stock under row locks. The data layer sits behind a Repo interface with two implementations: one on Supabase, and a local JSON \"demo mode\" that follows the same rules, so the whole store runs with no environment variables at all.",
      "The design direction is an underground station or car park at night: a concrete wall, riveted steel plates with a faint sandblasted noise texture, departure-board FAQ rows and line-coloured signs. Palette: near-black #0d0d0e, concrete #2a2a2c, steel #1a1a1c, off-white #ecebe8, muted #8b8a86, warm lamp light #fff6e0 and a single acid accent #e8ff3a. Type is Anton for display, Geist for body and Geist Mono for signage labels. Motion is physical (springs, the rail sliding in, a liquid dye for colour changes), and every animated piece has a reduced-motion fallback.",
    ],
    highlights: [
      {
        title: "Tamper-proof cash-on-delivery orders",
        body: "With no payment provider, the order itself had to be the trust boundary. The checkout validates input with Zod and drops honeypot submissions, then calls a Postgres security definer function, place_order(). It checks the Moroccan phone format, rate-limits to 3 orders per phone per hour, locks each variant FOR UPDATE, decrements stock, and recomputes prices and the city's delivery fee itself; the client only ever sends variant ids and quantities. RLS gives the public no access to orders at all, and an admin-only set_order_status() puts stock back when an order is cancelled or returned, and takes it out again if it's reopened.",
      },
      {
        title: "Liquid dye colour transition",
        body: "Switching colourway paints the new colour up the garment like dye rising through fabric. Adapted from a reference site's technique: one SVG holds both images, the old one under an inverse mask and the new one under a mask, both cut by the same path, rebuilt every animation frame from two sine waves plus seven randomly delayed drip columns. Both images are decoded first with Image.decode() using the exact URL the browser picked from Next's srcset (via getImageProps), so nothing pops in mid-animation, and the overlay is removed two frames after the new colour is committed underneath.",
      },
      {
        title: "Photosensitivity-safe fluorescent intro",
        body: "On the first visit per session, the lamp strikes on like a real fluorescent tube, then the rail slides in and the garments drop onto it. A tiny inline script in <head> adds an intro-pending class before first paint, so the rack never flashes up before the intro hides it; it skips other routes, repeat visits and reduced-motion users. The tube's brightness is a raw, fast-flickering CSS variable, but the wall glow and big logo read a ~110 ms low-passed copy, so large areas breathe instead of strobing. The controller survives React StrictMode's double effects, and any click or key skips the intro.",
      },
      {
        title: "Uploads that hang from one hook",
        body: "Every garment has to hang from the same point on the rail, but uploaded cut-outs come in any size and crop. Before upload, the admin editor finds the image's non-transparent bounds on a canvas and refits the garment onto a 1086×1448 (3:4) frame with the hook pinned 1.5% from the top. The file then goes straight from the browser to Supabase Storage under the admin session and Storage RLS, so large photos never pass through a server action, and the editor warns when a photo has no transparent background.",
      },
      {
        title: "Flat-fee shipping across 173 cities",
        body: "Per-city fees were tedious to manage, so shipping became two decisions: a set of free cities and one fee for everywhere else. An admin-checked set_shipping() function rewrites every city's price in one transaction, so place_order() and every order total keep working unchanged. One list of 173 cities across all 12 regions feeds the migration, the seed SQL and demo mode, and the checkout city search strips accents (Unicode normalisation) so \"fes\" finds \"Fès\".",
      },
      {
        title: "Product view without a page change",
        body: "Opening a garment updates the URL to /product/[slug] with history.pushState and morphs it into the detail view with Motion's shared-layout animation, rather than navigating to a new page. The browser back button closes the view, and arrows and swipes switch pieces with replaceState. A deep link renders the same rack already opened on that piece, so shared links, generateMetadata titles and the sitemap all work. On phones the nav slides away while a product is open, so the garment gets the full screen.",
      },
    ],
    features: [
      "Browse the rack: garments hang edge-on and turn to face you on hover; on mobile it's a swipeable rail where the piece nearest the centre faces forward",
      "Open a piece to flip it front/back, pick a colour from hanging tags (with the dye transition) and choose from the sizes it's actually made in",
      "Bag drawer and cash-on-delivery checkout with a searchable list of 173 Moroccan cities, then an order tracking page",
      "About page with studio photos as platform posters, and a Contact page with a message form, WhatsApp/Instagram/email signs and a FAQ",
      "Admin: create and edit products, upload images (auto-framed to the rail), and drag to reorder the rail",
      "Admin: filter orders, change status (with automatic restocking), add notes and export to CSV",
      "Admin: read and resolve contact messages, and set free cities plus one flat delivery fee",
      "First-visit entrance: the lamp strikes on, the logo shows, then the rail slides in and the clothes drop on",
    ],
    skills: [
      "Supabase (Postgres, Auth, RLS, Storage)",
      "Postgres security-definer functions & transactional inventory",
      "Next.js App Router (server actions, middleware, revalidation)",
      "Creative front-end motion (Motion, SVG masks, canvas)",
      "Accessible animation (reduced motion, photosensitivity-safe flicker)",
      "Custom design systems (CSS tokens, Tailwind v4)",
      "Cash-on-delivery checkout & order operations",
      "Admin dashboards & internal tooling",
      "Technical SEO (metadata, sitemap, robots, OG image)",
    ],
    screenshots: [
      {
        src: underrated212Rack,
        alt: "Garments hanging on a chrome rail under a fluorescent tube against a concrete wall",
        caption: "The rack: the hovered piece turns to face you while the rest hang edge-on.",
      },
      {
        src: underrated212ProductView,
        alt: "Product view of a stone-washed black t-shirt with a colour tag, sizes and buy buttons",
        caption: "The product view opens in place: front/back toggle, colour tag, sold-out sizes struck through, cash on delivery.",
      },
      {
        src: underrated212AdminProduct,
        alt: "Admin product editor with details, a live rack preview and front, back and side images",
        caption: "The admin product editor: colourways with front, back and rack images, all framed to hang from the same hook.",
      },
      {
        src: null, // TODO: desktop product view (Distressed Painted Tank) mid colour change, sand rising over black — highlight 2
        alt: "Black tank top being repainted sand from the hem up with a dripping liquid edge",
        caption: "Switching colourway dyes the new colour up the garment.",
      },
      {
        src: null, // TODO: desktop homepage during the entrance — lamp lit, logo under it, before the rail slides in — highlight 3
        alt: "Fluorescent tube lit over a concrete wall with the Underrated 212 logo beneath it",
        caption: "On the first visit the station lamp strikes on before the rail slides in.",
      },
      {
        src: null, // TODO: desktop Contact page — steel form plate, line-coloured signs, departure-board FAQ — design system
        alt: "Contact page with a riveted steel form panel and station-style contact signs",
        caption: "The underground-station design system: riveted plates, line-coloured signs and a departure-board FAQ.",
      },
      {
        src: null, // TODO: mobile (~390px) product view — nav hidden, floating ✕, sizes, bottom buy bar — highlight 6
        alt: "Phone screen showing a tank top full-screen with sizes and a buy bar",
        caption: "On phones the nav slides away so the product gets the whole screen.",
      },
      {
        src: null, // TODO: admin Settings → Shipping panel — fee box, free-city chips, city list — highlight 5
        alt: "Admin shipping panel with a delivery fee and Tamraght marked free",
        caption: "Shipping is two decisions: which cities are free, and one fee for everywhere else.",
      },
    ],
  },
  {
    slug: "yallah",
    img: yallah,
    icon: yallahIcon,
    langs: [
      "React Native",
      "Expo",
      "Typescript",
      "Expo Router",
      "Supabase",
      "PostgreSQL",
      "Reanimated",
      "RevenueCat",
      "Sentry",
      "EAS",
    ],
    title: "Yallah",
    category: "mobile",
    spotlight: true,
    disc: "Moroccan Darija learning app, published on Google Play, with lessons, community word lists, leagues and a mascot you dress up",
    link: "https://play.google.com/store/apps/details?id=com.yallah.darija",
    playStore: "https://play.google.com/store/apps/details?id=com.yallah.darija",
    claudeCode: true,
    about:
      "Yallah is a mobile app for learning Moroccan Darija, the dialect around 40 million people speak every day and most language apps skip in favour of Modern Standard Arabic. I built it solo in React Native with Expo and a Supabase back end, and published it on Google Play: structured lessons with four exercise types, community word lists with recorded audio, three-round quizzes, weekly leagues, and Atay, a tea-glass mascot you dress up with coins earned from learning.",
    context: [
      "Darija is spoken, not written in any standard way: people text it in Latin letters with numbers (7 for ح, 9 for ق) or in Arabic script. So every word in the app carries both spellings, and a setting switches between Latin, Arabic or both.",
      "Because the course alone can't cover how Darija is really spoken, the community is part of the curriculum: anyone can build a word list, record their own pronunciation for each word and publish it, and every list becomes a playable quiz.",
    ],
    highlights: [
      {
        title: "Shipped to Google Play",
        body: "Built and released with EAS: production builds with auto-incrementing version codes, submitted to the Play Console through a service account. Expo Updates delivers OTA fixes without a store review, and a min_version row in Supabase can block outdated builds with a force-update screen that deep-links to the store.",
      },
      {
        title: "A lesson engine with four exercise types",
        body: "Each lesson runs listen-and-match, build-the-sentence from word tiles, speak-it with voice recording, and pairs matching, with hearts, XP and coin rewards. Units unlock in order on an SVG learning path, and progress is saved so you resume exactly where you left off.",
      },
      {
        title: "Community lists with real voices",
        body: "Learners record pronunciation per word with expo-audio; recordings upload to Supabase Storage and play back on the list and in quizzes. Lists can be filtered by hot, new, played, liked and mine, with optimistic likes.",
      },
      {
        title: "Leagues, coins and a mascot",
        body: "The Tamraght League ranks everyone by quiz score or by words contributed, with a top-three podium. Drahem coins from lessons and quizzes buy 50+ outfits and moods for Atay in the Souk, and Atay appears on leaderboards, lists and quizzes.",
      },
      {
        title: "A guided first run",
        body: "A 10-step onboarding tour measures real element positions on screen and cuts a spotlight around each one, with Atay explaining the step. It can push to other tabs mid-tour and be replayed from Settings.",
      },
    ],
    features: [
      "Full Darija course: units and lessons on a visual learning path, locked until the previous unit is complete",
      "Four lesson exercises: listen & match, build it, speak it, pairs",
      "Three-round quizzes on any word list: flash cards, multiple choice, then spelling with letter tiles",
      "Create and publish word lists with recorded audio for each word; save words to favourites and practise them",
      "Tamraght League leaderboards (scores and contributors) with a podium",
      "Souk shop with 50+ outfits and moods for the Atay mascot, paid with in-app Drahem coins",
      "Sign in with username or email, guest mode, password reset and in-app account deletion",
      "Latin / Arabic / both script setting, OTA updates and a force-update gate",
    ],
    skills: [
      "React Native & Expo (SDK 54, Expo Router)",
      "Publishing to Google Play (EAS Build & Submit)",
      "OTA updates & version gating",
      "Supabase (Postgres, Auth, Storage)",
      "Audio recording & playback",
      "Gamification & retention design",
      "In-app purchases (RevenueCat)",
      "Crash reporting (Sentry)",
    ],
    appScreens: [
      { src: yallahScreen1, alt: "Community word lists with Hot, New, Played, Liked and Mine filters" },
      { src: yallahScreen2, alt: "A word list of professions in Darija with English translations" },
      { src: yallahScreen3, alt: "Creating a new word list and recording audio for each word" },
      { src: yallahScreen4, alt: "Publishing a word list to the community" },
      { src: yallahScreen5, alt: "Tamraght League leaderboard with a top-three podium" },
      { src: yallahScreen6, alt: "Contributors leaderboard ranked by words added" },
      { src: yallahScreen7, alt: "The Souk shop with outfits for the Atay mascot" },
      { src: yallahScreen8, alt: "Profile with lists, words, likes and quiz scores" },
    ],
  },
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
    spotlight: true,
    category: "commerce",
    disc: "Headless Shopify storefront selling clothing from Taghazout's independent skate, surf and street labels worldwide",
    link: "https://www.taghazoutshirt.com",
    repo: "https://github.com/biggymarley/taghazout",
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
    launch: {
      tags: ["Google Shopping", "Google Business Profile", "Instagram"],
      items: [
        "Listed the catalogue on Google Merchant Center, so products show up in Google Shopping and free product listings",
        "Built the Google Business Profile, so the store appears on Google Search and Maps",
        "Set up and grew the Instagram account to bring customers to the store",
      ],
    },
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
      "Google Merchant Center & Business Profile",
      "Instagram setup & growth",
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
    slug: "tamraght-days",
    img: tamraghtDays,
    langs: ["Nextjs", "React", "Tailwind css", "Lenis", "JSON-LD", "vercel"],
    title: "Tamraght Days",
    category: "platform",
    spotlight: true,
    claudeCode: true,
    disc: "Locally owned booking platform that connects visitors with Tamraght's surf coaches, guides, drivers and rentals, booked on WhatsApp",
    link: "https://www.tamraghtdays.com/",
    about:
      "Tamraght Days is a booking platform made by locals from Tamraght, the surf village next to Taghazout, to bring local services closer to the foreigners who visit every week. Visitors browse activities, all-inclusive packs, lessons with named local coaches, airport rides and rentals, then book in a minute and get picked up at their door. Every request lands on WhatsApp, so local businesses get bookings with no app or dashboard to learn, and the money stays with them instead of a platform owned abroad.",
    context: [
      "Many booking sites in the area are run from abroad: they list the neighbours' surf schools, guesthouses and drivers and the profit leaves Morocco. Tamraght Days is the opposite pitch, Moroccan-owned and made by locals, and the site says so plainly, with an interactive \"where does your dirham go?\" comparison.",
      "The audience is travellers on their phones, often already in town. So booking is a short form (day, group size, pick-up spot, level) with a live total, no account and no payment upfront; the request goes to WhatsApp and the crew confirms within minutes.",
    ],
    highlights: [
      {
        title: "Booking without accounts or payments",
        body: "Each activity has a booking panel that prices the trip as you change the day, time, group size and pick-up spot, then sends the request to WhatsApp. Pay on the day, free cancellation up to 24 hours before, and a 20% deposit only for packs.",
      },
      {
        title: "Onboarding local businesses",
        body: "A For local businesses page lets surf schools, drivers, rentals and guesthouses join with two fields that open a prefilled WhatsApp message, plus a checklist of what to send for their business type. The team then writes and designs their listing.",
      },
      {
        title: "Built to be found",
        body: "Statically prerendered Next.js pages on Vercel, an 88-URL sitemap covering every activity and vibe page, and JSON-LD for the business, its location and opening hours, and the FAQ.",
      },
    ],
    features: [
      "Activities catalogue with 39 experiences across 11 vibes: surf, yoga, skate, valleys, quads, camels, dunes, horses, hammam, cooking and local life",
      "Activity pages with an at-a-glance summary, a step-by-step \"your day\", what's included, what to bring and cancellation terms",
      "All-inclusive packs (surf camps, surf & wellness, adventure trips, long stays) with stay, meals, airport pick-up and activities",
      "Services: lessons with named local coaches, airport transfers and a fixed-price rides table, daily surf shuttle and a rental shack delivered to your door",
      "\"Can't decide?\" picker that suggests three activities from two quick questions",
      "Booking form with a live total, sent straight to WhatsApp",
      "For local businesses page with a prefilled WhatsApp onboarding flow",
    ],
    skills: [
      "Next.js App Router & static prerendering",
      "Booking flow UX (WhatsApp-first)",
      "Two-sided marketplace thinking",
      "Technical SEO & structured data",
      "Mobile-first design",
      "Smooth scroll & motion (Lenis)",
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
    category: "commerce",
    disc: "Bold streetwear storefront backed by a custom, expert-level admin dashboard a non-technical owner runs entirely on their own",
    link: "https://www.poponi.shop",
    selfDesigned: true,
    claudeCode: true,
    about:
      "POPONI is a full-stack e-commerce platform for a one-person Moroccan streetwear studio: a loud, animated public storefront backed by a bespoke admin dashboard that lets a non-technical owner run the entire business — catalog, orders, custom requests, site media, and content — with no code and no third-party CMS. The public site reads live from the database and the admin writes to it, so changing a product, price, video, or homepage image is instantly live. It runs a real commerce loop — cart → checkout → server-priced orders → branded transactional email — with cash-on-delivery and prepaid options, and prices are authoritative in the database so the client can never dictate a total.",
    launch: {
      tags: ["Google Shopping", "Google Business Profile", "Instagram"],
      items: [
        "Listed the catalogue on Google Merchant Center, so products show up in Google Shopping and free product listings",
        "Built the Google Business Profile, so the store appears on Google Search and Maps",
        "Set up and grew the Instagram account to bring customers to the store",
      ],
    },
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
      "Google Merchant Center & Business Profile",
      "Instagram setup & growth",
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
    category: "commerce",
    disc: "Outdoor gear ecommerce store with a full admin dashboard",
    link: "https://general-store-peach.vercel.app/",
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
    spotlight: true,
    category: "platform",
    disc: "Work-for-stay platform — hostels post volunteer gigs, travelers trade a few hours for a free bed",
    link: "https://www.bunk.surf/",
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
    category: "platform",
    disc: "Streaming your favorite movie/show",
    link: "https://bigflixv2.vercel.app/",
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
    spotlight: true,
    category: "platform",
    disc: "Bilingual booking site for a Moroccan surf hostel, with a self-service admin dashboard and an AI blog writer",
    link: "https://tazurihouse.com",
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
    category: "commerce",
    disc: "Ecommerce Website Powered by Shopify Storefront API",
    link: "https://omart-strings.vercel.app/",
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
    category: "platform",
    disc: "Discord like app",
    link: "https://cloudchill.vercel.app/",
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
    category: "early",
    disc: "Netflix like app",
    link: "https://bigflix-sooty.vercel.app/discover/movies",
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
    category: "early",
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
    category: "early",
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
    category: "early",
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
    category: "early",
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
    category: "systems",
    disc: "Unix Shell Implementation",
    link: "https://github.com/biggymarley/42SH",
  },
  {
    img: "https://biggymarley.github.io/myPortfolio/static/media/libft.8948aa24978189644e2c.png",
    langs: ["C", "Terminal"],
    title: "C Standard Library",
    category: "systems",
    disc: "C Standard Library",
    link: "https://github.com/biggymarley/libft",
  },
];

export const categories = [
  { id: "all", label: "All" },
  { id: "commerce", label: "E-commerce" },
  { id: "platform", label: "Platforms" },
  { id: "mobile", label: "Mobile apps" },
  { id: "early", label: "Early work" },
  { id: "systems", label: "Systems / C" },
];

export const spotlightProjects = projects.filter((project) => project.spotlight);
export const moreProjects = projects.filter((project) => !project.spotlight);

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
