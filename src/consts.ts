import type { Site, Page, Links, Socials } from "@types"

// Global
export const SITE: Site = {
  TITLE: "Home base for Chris",
  DESCRIPTION: "Welcome to my website, a portfolio and blog for all things related to me and my work.",
  AUTHOR: "Christopher Bryant",
}

// Work Page
export const WORK: Page = {
  TITLE: "Work",
  DESCRIPTION: "Places I have worked.",
}

// Blog Page
export const BLOG: Page = {
  TITLE: "Blog",
  DESCRIPTION: "Writing on topics I am interested in.",
}

// Projects Page 
export const PROJECTS: Page = {
  TITLE: "Projects",
  DESCRIPTION: "Recent projects I have worked on.",
}

// Search Page
export const SEARCH: Page = {
  TITLE: "Search",
  DESCRIPTION: "Search all posts and projects by keyword.",
}

// Links
export const LINKS: Links = [
  { 
    TEXT: "Home", 
    HREF: "/", 
  },
  { 
    TEXT: "Work", 
    HREF: "/work", 
  },
  { 
    TEXT: "Blog", 
    HREF: "/blog", 
  },
  { 
    TEXT: "Projects", 
    HREF: "/projects", 
  },
]

// Socials
export const SOCIALS: Socials = [
  { 
    NAME: "Email",
    ICON: "email", 
    TEXT: "cbpr@christopherbryant.io",
    HREF: "mailto:cbpr@christopherbryant.io",
  },
  { 
    NAME: "Github",
    ICON: "github",
    TEXT: "justRes3t",
    HREF: "https://github.com/justRes3t"
  },
  { 
    NAME: "LinkedIn",
    ICON: "linkedin",
    TEXT: "Christopher Bryant",
    HREF: "https://www.linkedin.com/in/mr-topher/",
  },
  { 
    NAME: "BlueSky",
    ICON: "twitter-x",
    TEXT: "Brx-Crisby",
    HREF: "https://bsky.app/profile/brx-crisby.bsky.social",
  },
]

