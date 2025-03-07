import styled from '@emotion/styled';
import { Link } from 'gatsby';

import { contentMaxWidth, hoverUnderline, MOBILE_MEDIA_QUERY } from '@/src/styles/const';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 60px;
  position: fixed;
  padding: 0 25px;
  top: 0;
  left: 0;
  background-color: ${({ theme }) => theme.color.white100};
  z-index: 100;

  @media ${MOBILE_MEDIA_QUERY} {
    padding: 0 15px;
  }
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  margin: 0 auto;
  justify-content: space-between;
  width: 100%;
  max-width: ${contentMaxWidth};
  font-family: SUIT-Bold;

  .mobile-logo {
    @media ${MOBILE_MEDIA_QUERY} {
      width: 25px;
      height: 25px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-family: Montserrat;
      font-weight: 800;
      a {
        color: ${({ theme }) => theme.color.white100};
      }
    }
  }
`;

export const Menu = styled.div`
  display: flex;
  gap: 24px;
  text-decoration: none;
  align-items: center;
`;

export const MenuLink = styled(Link) <{ isselected: string }>`
  font-size: 17px;

  ${({ theme }) => hoverUnderline(theme)};
  &:after {
    bottom: -2px;
  }

  &:hover {
    @media ${MOBILE_MEDIA_QUERY} {
      transform: ${({ isselected }) => (isselected === 'true' ? 'scaleX(1)' : 'scaleX(0)')};
    }
  }

  @media ${MOBILE_MEDIA_QUERY} {
    font-size: 13px;
  }
`;
