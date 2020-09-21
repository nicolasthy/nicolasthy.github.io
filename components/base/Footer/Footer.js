import { Dribbble } from "@styled-icons/boxicons-logos/Dribbble"
import { Spotify } from "@styled-icons/boxicons-logos/Spotify"
import { Github } from "@styled-icons/boxicons-logos/Github"

import { EXTERNAL_URI } from "../../../config/siteConfig"

import { Container, FooterText, FooterSocials } from "./styles"

const Footer = () => {
  return (
    <Container>
      <FooterText>Thank you for visiting my website. </FooterText>
      <FooterText>
        You can get in touch with me on Twitter{" "}
        <a href={EXTERNAL_URI.twitter} title="My Twitter Profile">
          @nicolasthy
        </a>
      </FooterText>
      <FooterText>Or discover more on the following platforms:</FooterText>
      <FooterSocials>
        <a href={EXTERNAL_URI.dribbble} title="My Dribbble Page">
          <Dribbble size={24} />
        </a>
        <a href={EXTERNAL_URI.spotify} title="My Spotify Playlists">
          <Spotify size={24} />
        </a>
        <a href={EXTERNAL_URI.github} title="My Github Profile">
          <Github size={24} />
        </a>
      </FooterSocials>
    </Container>
  )
}

export { Footer }
