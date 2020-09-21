import { Container, Cover, PlaylistItem } from "./styles"

const PLAYLISTS = [
  {
    title: "nineteen ep.1 - bonjour l'étoile",
    cover: "/static/playlists/nineteen-ep1.jpg",
  },
  {
    title: "nineteen ep.2 - madame",
    cover: "/static/playlists/nineteen-ep2.jpg",
  },
  {
    title: "nineteen ep.3 - polaire",
    cover: "/static/playlists/nineteen-ep3.jpg",
  },
]

const PlaylistsList = () => {
  return (
    <Container>
      {PLAYLISTS.map((playlist) => (
        <PlaylistItem key={playlist.title}>
          <Cover>
            <img src={playlist.cover} alt={playlist.title} />
          </Cover>
          <span>{playlist.title}</span>
        </PlaylistItem>
      ))}
    </Container>
  )
}

export { PlaylistsList }
