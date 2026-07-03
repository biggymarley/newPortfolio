import ai from "../assets/projects/ai.webp";
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
export const projects = [
  {
    img: bigflixv2,
    langs: ["Nextjs", "Typescript", "tailwind css", "TMDB API", "Streaming", "vercel"],
    title: "Bigflix V2",
    disc: "Streaming your favorite movie/show",
    link: "https://bigflixv2.vercel.app/",
    featured: true,
  },
  {
    img: tazuri,
    langs: ["Nextjs", "Typescript", "Tailwind css", "vercel"],
    title: "Tazuri",
    disc: "Hostel Landing Page",
    link: "https://tazuri-woad.vercel.app/",
    featured: true,
  },
  {
    img: omart,
    langs: ["Nextjs", "Typescript", "tailwind css", "Shopify", "Storefront Api", "vercel"],
    title: "Omart.",
    disc: "Ecommerce Website Powered by Shopify Storefront API",
    link: "https://omart-strings.vercel.app/",
    featured: true,
  },
  {
    img: chillcloud,
    langs: ["React", "javascript", "tailwind css", "vite", "firebase", "100ms", "vercel"],
    title: "ChillCloud",
    disc: "Discord like app",
    link: "https://cloudchill.vercel.app/",
    featured: true,
  },
  {
    img: bigflix,
    langs: ["React", "Material UI", "javascript", "css", "vite", "vercel"],
    title: "Bigflix",
    disc: "Netflix like app",
    link: "https://bigflix-sooty.vercel.app/discover/movies",
    featured: true,
  },
  {
    img: startincub,
    langs: ["React", "Material UI", "javascript", "css", "create-react-app"],
    title: "Startincub",
    disc: "Startups Incubation Application",
    link: "https://biggymarley.github.io/Project/#/",
  },
  {
    img: matcha,
    langs: ["React", "Material UI", "javascript", "css", "create-react-app"],
    title: "Matcha",
    disc: "Tinder like app",
    link: "https://biggymarley.github.io/TinderClonePreview/",
    featured: true,
  },
  {
    img: bike,
    langs: ["React", "Material UI", "javascript", "css", "vite", "vercel"],
    title: "Bike Rental App",
    disc: "Bike Rental App",
    link: "https://bikerental.vercel.app/",
  },
  {
    img: ai,
    langs: ["React", "TailwinCss", "javascript", "css", "vite", "vercel"],
    title: "Landing page",
    disc: "Landing page for ai project",
    link: "https://obi-landing.vercel.app/",
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
