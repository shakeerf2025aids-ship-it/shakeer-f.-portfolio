import { defineConfig } from "@lovable.dev/vite-tanstack-config";

const isGitHubPages = process.env.GITHUB_PAGES === "true";

export default defineConfig({
  // GitHub Pages serves this repository below /<repository-name>/.
  vite: {
    base: isGitHubPages ? "/shakeer-f.-portfolio/" : "/",
  },
  tanstackStart: {
    server: { entry: "server" },
    ...(isGitHubPages
      ? {
          prerender: {
            enabled: true,
            crawlLinks: true,
            failOnError: true,
            concurrency: 4,
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
          },
        }
      : {}),
  },
});
