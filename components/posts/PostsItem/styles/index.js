import styled from "styled-components"

import { FONTS, LANGUAGES_COLORS } from "../../../../themes/constants"

export const Container = styled.li`
  background: ${({ theme }) => theme.posts.item};
  box-shadow: ${({ theme }) => theme.posts.itemShadow};
  border-radius: 25px;
  margin: 30px 0;
  padding: 30px 30px;
  transition: background 0.2s linear, box-shadow 0.2s linear;

  &:hover {
    background: ${({ theme }) => theme.posts.itemHover};
    box-shadow: ${({ theme }) => theme.posts.itemHoverShadow};
  }

  p {
    color: ${({ theme }) => theme.textLight};
    margin: 0;
  }
`

export const StyledLink = styled.div`
  a {
    text-decoration: none;
  }
`

export const PostTitle = styled.h3`
  margin: 0;
  color: ${({ theme }) => theme.posts.itemTitleColor};
  font-weight: 500;
`

export const TagsList = styled.ul`
  display: flex;
  list-style: none;
  padding: 0;
  margin: 15px 0 0 0;
`

export const TagsItem = styled.li`
  text-transform: uppercase;
  font-size: 11px;
  font-weight: 600;
  padding: 5px 20px;
  margin: 0 8px 0 0;
  font-family: ${FONTS.sansSerif};
  background: ${({ tag }) => LANGUAGES_COLORS[tag] || "#000000"};
  border-radius: 50px;
  color: #f7f7ff;
`
