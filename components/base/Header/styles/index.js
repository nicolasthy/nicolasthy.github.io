import styled from "styled-components"
import { FONTS } from "../../../../themes/constants"

export const Container = styled.header`
  display: flex;
  align-items: center;

  a {
    text-decoration: none;
  }
`

export const LogoLink = styled.a`
  cursor: pointer;

  &:hover {
    opacity: 1;
  }
`

export const Logo = styled.span`
  background: ${({ theme }) => theme.logo.background};
  color: ${({ theme }) => theme.logo.color};
  box-shadow: 0 16px 12px -10px rgba(5, 7, 26, 0.1);
  margin: 15px 0;
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 15px;
  line-height: 32px;
  font-family: ${FONTS.serif};
  font-size: 32px;
  font-weight: 700;
  font-style: italic;
  user-select: none;
`

export const ToggleIcon = styled.div`
  margin: 0 0 0 auto;
  cursor: pointer;
  color: ${({ theme }) => theme.themeIcon.color};
`

export const Menu = styled.ul`
  list-style: none;
  display: flex;
`

export const MenuItem = styled.li`
  margin: 0 10px;
  border-radius: 50px;
  padding: 4px 15px;
  font-family: ${FONTS.sansSerif};
  background: ${({ active, theme }) => (active ? theme.menu.activeBackground : "")};
  a {
    color: ${({ active, theme }) => (active ? theme.menu.activeColor : theme.textLight)};
    opacity: ${({ active }) => (active ? 1 : 0.7)};
    transition: 0.2s linear;

    &:hover {
      color: ${({ theme }) => theme.menu.activeColor};
      opacity: 0.8;
    }
  }
`
