import { AboutPortrait } from "../AboutPortrait/AboutPortrait"

import { EXTERNAL_URI } from "../../../config/siteConfig"

import { Container, Bio } from "./styles"

const AboutBio = () => {
  return (
    <Container>
      <Bio>
        <h2>
          Hey, I’m <strong>Nicolas</strong>
        </h2>
        <p>
          I’m a 28 y/o front-end developer based in Lyon, France. Working on thaughful user interfaces is what drives me
          on a daily basis.
        </p>
        <p>
          Also I’m an enthousiastic music listener and I love to find and share new music on{" "}
          <a href={EXTERNAL_URI.spotify} title="nineteen musique on Spotify">
            Spotify
          </a>{" "}
          and create playlists that I promote on{" "}
          <a href={EXTERNAL_URI.instagram} title="nineteen musique on Instagram">
            Instagram
          </a>
          .
        </p>
      </Bio>
      <AboutPortrait />
    </Container>
  )
}

export { AboutBio }
