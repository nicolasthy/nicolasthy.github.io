import { AboutPortrait } from "../AboutPortrait/AboutPortrait"

import { Container, Bio } from "./styles"

const AboutBio = () => {
  return (
    <Container>
      <Bio>
        <h2>
          Hey, I’m <strong>Nicolas</strong>
        </h2>
        <p>
          I’m a 29 y/o front-end developer based in Lyon, France. Working on thaughful user interfaces is what drives me
          on a daily basis.
        </p>
        <p>
          Also I’m an enthousiastic music listener and I love to find and share new music on{" "}
          <a
            href="https://open.spotify.com/user/113055016?si=tmFslt2MQVencaXSzhoMaw"
            title="nineteen musique on Spotify"
          >
            Spotify
          </a>{" "}
          and create playlists that I promote on{" "}
          <a href="https://www.instagram.com/nineteenmusique/" title="nineteen musique on Instagram">
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
