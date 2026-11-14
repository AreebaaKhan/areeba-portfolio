import { projects } from "@/data/projects";

const base = "https://areeba-khan.vercel.app";

const pages = [
  "",
  "/about",
  "/projects",
  "/experience",
  "/global-classroom",
  "/achievements",
  "/certifications",
];

export default function sitemap() {
  return [
    ...pages.map((p) => ({ url: `${base}${p}` })),
    ...projects.map((p) => ({ url: `${base}/projects/${p.slug}` })),
  ];
}
