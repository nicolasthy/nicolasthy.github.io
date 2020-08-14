import Link from "next/link"

import { Dribbble } from "@styled-icons/boxicons-logos/Dribbble"
import { Spotify } from "@styled-icons/boxicons-logos/Spotify"
import { Github } from "@styled-icons/boxicons-logos/Github"

import { Container, FooterText, FooterSocials } from "./styles"

const Footer = () => {
  return (
    <Container>
      <FooterText>Thank you for visiting my website. </FooterText>
      <FooterText>
        You can get in touch with me on Twitter{" "}
        <a href="https://twitter.com/nicolasthy" title="My Twitter Profile">
          @nicolasthy
        </a>
      </FooterText>
      <FooterText>Or discover more on the following platforms:</FooterText>
      <FooterSocials>
        <a href="https://dribbble.com/nicolasthy" title="My Dribbble Page">
          <Dribbble size={24} />
        </a>
        <a href="https://open.spotify.com/user/113055016?si=tmFslt2MQVencaXSzhoMaw" title="My Spotify Playlists">
          <Spotify size={24} />
        </a>
        <a href="https://github.com/nicolasthy" title="My Github Profile">
          <Github size={24} />
        </a>
      </FooterSocials>
    </Container>
  )
}

export { Footer }
