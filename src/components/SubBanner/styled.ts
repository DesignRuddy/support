import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';

import { hoverUnderline, MOBILE_MEDIA_QUERY, contentMaxWidth } from '@/src/styles/const';
import { Link } from 'gatsby';

const blinkingCursor = keyframes`
  0% {
    opacity: 0;
  }

  50% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`;

// 현재 안씀
// export const Section = styled.div`
//   display: flex;
//   flex-direction: column;
//   width: 100%;
//   height: 100%; 
//   min-height: 270px;
//   padding: 20px;
//   position: relative;
//   bottom: 0;
//   z-index: 1;
//   background-color: ${({ theme }) => theme.color.gray40};
//   font-family: SUIT-Bold, sans-serif;

//   @media ${MOBILE_MEDIA_QUERY} {
//     min-height: 200px;
//     padding: 10px;
//     font-size: 13px;
//     height: 40px;
//   }
// `;
export const Wrapper = styled.div`
  background-color: palegreen;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: auto;
  word-break: keep-all;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  padding: 54px 15px;
  /* background-color: ${({ theme }) => theme.color.white100}; */
  /* box-shadow: 0 0 30px rgb(0 0 0 / 0.1); */

  @media ${MOBILE_MEDIA_QUERY} {
    margin-bottom: 39px;
    padding-bottom: 30px;
  }
`
export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  width: 100%;
  max-width: ${contentMaxWidth};
`

export const inner = styled.div`
  width: 100%;
  height: 100%;
  margin: 0 auto;
  max-width: 690px;
  padding: 24px 0;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;

  @media ${MOBILE_MEDIA_QUERY} {
    min-height: 350px;
    padding: 10px;
    font-size: 13px;
    display: flex;
    flex-direction: column;
  }
`;

// export const Item = styled.div`
//   flex: 1 1 50%;

//   @media (max-width: 768px) {
//     flex: 1 1 100%;
//   }
// `;

export const Title = styled.p`
  top: 0;
  font-size: 24px;
  font-weight: bolder;
  text-align: left; 
  margin-bottom: 20px;
  line-height: 1.5;  /* 줄 간격을 1.5배로 설정 */
  

  @media ${MOBILE_MEDIA_QUERY} {
    font-size: 20px;
    display: flex; /* 추가: Flexbox 사용 */
    justify-content: center; /* 추가: 가로 중앙 정렬 */
    text-align: center;
  }
`;

export const Character = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  margin-right: 20%;

  img {
    width: 200px;
    @media ${MOBILE_MEDIA_QUERY} {
      width: 175px; /* 모바일에서 이미지 너비 */
    }
  }

  @media ${MOBILE_MEDIA_QUERY} {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
  }
`;

export const ImageContainer = styled.div`
  /* display: flex; */
  position: relative;

  @media ${MOBILE_MEDIA_QUERY} {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export const ContactLink = styled.a`
  cursor: pointer;
  position: relative;
  width: 100%;

  img {
    width: 328px;
    @media ${MOBILE_MEDIA_QUERY} {
      width: 250px; /* 모바일에서 이미지 너비 */
    }
  }

  @media ${MOBILE_MEDIA_QUERY} {
    display: flex; /* 추가: Flexbox 사용 */
    justify-content: center; /* 추가: 가로 중앙 정렬 */
    width: 100%;
    height: 100%;
  }
`;

export const inquiryWrapper = styled.div`
  position: relative;
  justify-content: left;
  width: 100%;
  height: 100%;

  @media ${MOBILE_MEDIA_QUERY} {
    position: relative;
    display: flex;
    flex-direction: column;
    margin-bottom: 0px;
    justify-content: center;
    align-items: center;
  }
`;