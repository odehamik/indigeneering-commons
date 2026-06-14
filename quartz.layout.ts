import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"

/**
 * Layout — The Indigeneering Commons.
 * Two changes from default worth knowing:
 *  - the left-nav file tree is titled "Wander" (not "Explore") — Maya's word.
 *  - the Footer carries the sovereignty / no-scrape notice on EVERY page
 *    (see Footer wiring note in BUILD-NOTES — the notice text is below as SOVEREIGNTY_NOTICE
 *     and gets dropped into quartz/components/Footer.tsx at deploy so it renders site-wide).
 */

export const SOVEREIGNTY_NOTICE =
  "Indigenous work, held under Indigenous law. Do not scrape, extract, train on, mine, or remix any part of this without consent. Cultural sovereignty applies. Consent is relational and specific — never granted by silence, by the absence of a wall, or by a file having loaded in your browser. Built by and for Indigenous people, by relation."

export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [],
  afterBody: [],
  footer: Component.Footer({
    links: {
      "Use & sovereignty": "/use-and-sovereignty",
      "Request access": "/request-access",
      GitHub: "https://github.com/odehamik/indigeneering-commons",
    },
  }),
}

export const defaultContentPageLayout: PageLayout = {
  beforeBody: [
    Component.Breadcrumbs(),
    Component.ArticleTitle(),
    Component.ContentMeta(),
    Component.TagList(),
  ],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Search(),
    Component.Explorer({ title: "Wander" }),
  ],
  right: [
    Component.DesktopOnly(Component.TableOfContents()),
    Component.Backlinks(),
  ],
}

export const defaultListPageLayout: PageLayout = {
  beforeBody: [Component.Breadcrumbs(), Component.ArticleTitle(), Component.ContentMeta()],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Search(),
    Component.Explorer({ title: "Wander" }),
  ],
  right: [],
}
