import { PlaylistsList } from "../../playlists/PlaylistsList/PlaylistsList"
import { ArrowLink } from "../../shared/ArrowLink/ArrowLink"
import { EXTERNAL_URI } from "../../../config/siteConfig"

import { Container } from "./styles"

const AboutPlaylists = () => {
  return (
    <Container>
      <span>Discover nineteen musique</span>
      <PlaylistsList />
      <ArrowLink href={EXTERNAL_URI.spotify} label="View all playlists" internal={false} />
    </Container>
  )
}

export { AboutPlaylists }
