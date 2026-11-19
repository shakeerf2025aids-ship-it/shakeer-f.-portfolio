import { defineConfig } from "@lovable.dev/vite-tanstack-config";

const isGitHubPages = process.env.GITHUB_PAGES === "true";
const pagesBasePath = "/shakeer-f.-portfolio";

export default defineConfig({
  vite: {
    // GitHub Pages hosts this repository under /<repository-name>/.
    base: isGitHubPages ? `${pagesBasePath}/` : "/",
  },
  tanstackStart: {
    // Keep Lovable's existing server entry and its SSR error wrapper.
    server: { entry: "server" },
    // TanStack Start needs the base path at build time for client hydration.
    router: {
      basepath: isGitHubPages ? pagesBasePath : "/",
    },
    ...(isGitHubPages
      ? {
          prerender: {
            enabled: true,
            // Every page is listed below; disable crawling so PDFs and images are not treated as HTML routes.
            crawlLinks: false,
            autoSubfolderIndex: true,
            failOnError: true,
            concurrency: 4,
          },
          // Dynamic routes are not auto-discovered, so list the known project slugs.
          pages: [
            { path: "/", prerender: { enabled: true } },
            { path: "/about", prerender: { enabled: true } },
            { path: "/skills", prerender: { enabled: true } },
            { path: "/projects", prerender: { enabled: true } },
            { path: "/projects/iris", prerender: { enabled: true } },
            { path: "/projects/realify-ai", prerender: { enabled: true } },
            { path: "/projects/raksha-ai", prerender: { enabled: true } },
            { path: "/education", prerender: { enabled: true } },
            { path: "/achievements", prerender: { enabled: true } },
            { path: "/contact", prerender: { enabled: true } },
            { path: "/resume", prerender: { enabled: true } },
          ],
        }
      : {}),
  },
});
