import { PlaylistsList } from "../../playlists/PlaylistsList/PlaylistsList"
import { ArrowLink } from "../../shared/ArrowLink/ArrowLink"

import { Container } from "./styles"

const AboutPlaylists = () => {
  return (
    <Container>
      <span>Discover nineteen musique</span>
      <PlaylistsList />
      <ArrowLink href={"/posts"} as={"/posts"} label="View all playlists" />
    </Container>
  )
}

export { AboutPlaylists }
