import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import style from "./styles/footer.scss"
import { version } from "../../package.json"
import { i18n } from "../i18n"

interface Options {
  links: Record<string, string>
}

export default ((opts?: Options) => {
  const Footer: QuartzComponent = ({ displayClass, cfg }: QuartzComponentProps) => {
    const year = new Date().getFullYear()
    const links = opts?.links ?? []
    return (
      <footer class={`${displayClass ?? ""}`}>
        <p style={{ fontWeight: 600, margin: "0 0 0.4em" }}>
          Built by Maya Chacaby (Odehamik) · MythOS substrate two
        </p>
        <p style={{ fontSize: "0.82em", lineHeight: 1.5, margin: "0 0 0.6em" }}>
          Indigenous work, held under Indigenous law. Do not scrape, extract, train on, mine, or remix any part of this without consent. Cultural sovereignty applies — consent is relational and specific, never granted by silence or by the absence of a wall. Built by and for Indigenous people, by relation.
        </p>
        <p style={{ fontSize: "0.72em", opacity: 0.55, margin: "0 0 0.4em" }}>
          Built with <a href="https://quartz.jzhao.xyz/">Quartz v{version}</a> © {year}
        </p>
        <ul>
          {Object.entries(links).map(([text, link]) => (
            <li>
              <a href={link}>{text}</a>
            </li>
          ))}
        </ul>
      </footer>
    )
  }

  Footer.css = style
  return Footer
}) satisfies QuartzComponentConstructor
