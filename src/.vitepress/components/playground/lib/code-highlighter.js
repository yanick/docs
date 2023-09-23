import { getHighlighter } from "shiki";

let highlighter;

async function loadHighlighter() {
  if (highlighter) return highlighter;

  highlighter = await getHighlighter({
    langs: ["json", "javascript", "handlebars", "html"],
    themes: ["github-dark", "github-light"],
  });

  return highlighter;
}

export { loadHighlighter };
