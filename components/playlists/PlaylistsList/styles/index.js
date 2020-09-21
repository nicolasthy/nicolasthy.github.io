import styled from "styled-components"
import { FONTS } from "../../../../themes/constants"

export const Container = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 30px;
`

export const Cover = styled.div`
  background: ${({ theme }) => theme.playlists.itemBackground};
  box-shadow: ${({ theme }) => theme.playlists.itemShadow};
  transition: box-shadow 0.2s linear;

  img {
    display: block;
    width: 100%;
    opacity: ${({ theme }) => theme.playlists.itemOpacity};
    transition: opacity 0.2s linear;
  }

  &:hover {
    box-shadow: ${({ theme }) => theme.playlists.itemHoverShadow};

    img {
      opacity: ${({ theme }) => theme.playlists.itemHoverOpacity};
    }
  }
`

export const PlaylistItem = styled.li`
  width: 32%;
  text-align: center;

  span {
    font-family: ${FONTS.sansSerif};
    font-size: 12px;
    color: ${({ theme }) => theme.textLight};
    opacity: 0.4;
  }
`
