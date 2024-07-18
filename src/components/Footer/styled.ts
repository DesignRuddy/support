import styled from '@emotion/styled';

import { contentMaxWidth, MOBILE_MEDIA_QUERY } from '@/src/styles/const';

/**
 * 예전 스타일 컴포넌트입니다.
 */

// export const Wrapper = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   width: 100%;
//   height: 62px;
//   bottom: 0;
//   z-index: -1;
//   margin: 50px 0px 100px 0px;
//   background-color: ${({ theme }) => theme.color.gray10};
//   font-family: SUIT-Regular;

//   @media ${MOBILE_MEDIA_QUERY} {
//     font-size: 13px;
//     height: 40px;
//   }
// `;

// export const Footer = styled.p`
//   text-align: center;
//   width: 100%;
//   max-width: ${contentMaxWidth};
// `;

// export const Link = styled.a`
//   // border-bottom: 1px solid ${({ theme }) => theme.color.black100};
// `;
export const Wrapper = styled.footer`
  /* background-color: #f9f9f9; */
  padding: 20px;
  text-align: left;
  background-color: #F5F6F8;
`;

export const Footer = styled.div`
  max-width: 1050px;
  margin: 0 auto;
  padding: 20px;
  display: flex;
  flex-direction: column;
`;

export const Link = styled.a`
  color: #0073e6;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

export const FooterTop = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  max-width: 1050px;
  padding: 20px 0;
`;

export const FooterSection = styled.div`
  flex: 1 1 25%;
  
  @media (max-width: 690px) {
    flex: 1 1 100%;
  }
`;

export const FooterTitle = styled.h4`
  font-size: 16px;
  font-weight: bolder;
  color: #333;
  text-align: left;
  margin-bottom: 10px;
`;

export const FooterList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  text-align: left;
`;

export const FooterItem = styled.li`
  margin-bottom: 10px;
  font-size: 14px;
  color: #666;
`;

export const CompanyInfo = styled.address`
  font-size: 12px;
  text-align: left;
  max-width: 1200px;
  line-height: 1.5;
  justify-content: flex-start;
  color: #999;
`;

export const SocialMedia = styled.div`
  display: flex;
  margin: 20px 0;

  & > a {
    margin: 0 5px;
    color: #666;
    font-size: 20px;
    text-decoration: none;

    &:hover {
      color: #0073e6;
    }
  }
`;