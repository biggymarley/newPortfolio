import ai from "../assets/projects/ai.webp";
import bunk from "../assets/projects/bunk.webp";
import bigflix from "../assets/projects/bigflix.webp";
import bigflixv2 from "../assets/projects/bigflixv2.webp";
import bike from "../assets/projects/bike.webp";
import chillcloud from "../assets/projects/chillcloud.webp";
import matcha from "../assets/projects/matcha.webp";
import omart from "../assets/projects/omart.webp";
import startincub from "../assets/projects/startincub.webp";
import tazuri from "../assets/projects/tazuri.webp";

// Single source of truth for every project shown on the site.
// `featured: true` marks the ones that appear on the home page.
// `claudeCode: true` marks projects built using Claude Code — cards and the
// detail page show a Claude badge for these.
// `selfDesigned: true` marks projects I designed myself (mostly designing
// directly in code) — the detail page shows a design note + skill for these.
// Projects with a `slug` get a dedicated detail page at /projects/:slug
// (live iframe preview + about + features + skills). Projects without a
// slug (e.g. GitHub-only repos) keep linking straight to `link`.
export const projects = [
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
    langs: ["Nextjs", "Typescript", "Tailwind css", "vercel"],
    title: "Tazuri",
    disc: "Hostel Landing Page",
    link: "https://tazuri-woad.vercel.app/",
    featured: true,
    claudeCode: true,
    about:
      "Tazuri is a high-converting landing page for a hostel brand, built with Next.js and Tailwind. The focus is on visual storytelling — big photography, smooth motion, and a layout that guides visitors from rooms and activities straight to booking.",
    features: [
      "Bold, photography-driven design with smooth scroll animations",
      "Sections for rooms, activities, and booking calls-to-action",
      "SEO-optimized metadata and semantic markup",
      "Optimized images and fast load times out of the box",
      "Fully responsive across all screen sizes",
    ],
    skills: [
      "Landing page design",
      "Conversion-focused UX",
      "Animation & micro-interactions",
      "Image optimization",
      "Technical SEO",
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
