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

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const Wrapper = styled.div`
  background-color: rgb(245,246,248, 0.8);
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: auto;
  word-break: keep-all;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  padding: 54px 15px;

  @media ${MOBILE_MEDIA_QUERY} {
    margin-bottom: 39px;
    padding-bottom: 30px;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Tabs = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-bottom: 12px;
  gap: 24px;
  overflow-y: hidden;
  overflow-x: scroll;
`;

export const Tab = styled.div<{ isSelected: boolean }>`
  font-size: 17px;
  cursor: pointer;
  line-height: 50px;
  color: ${({ isSelected }) => (isSelected ? 'black' : 'gray')};
  border-bottom: ${({ isSelected }) => (isSelected ? '2px solid black' : 'none')};
`;

export const ServicesGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
`;

export const ServiceCard = styled.div`
  width: 100px;
  height: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid #ccc;
  border-radius: 8px;
  text-align: center;
`;

export const Modal = styled.div`
  /* background-color: ${({ theme }) => theme.color.white100}; */
  border-radius: 15px;
  box-shadow: 0 5px 30px 0 rgb(0 0 0 / 0.2);
  animation: ${fadeIn} 0.5s ease both;
`;

export const ModalButton = styled.button`
  margin-top: 20px;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
`;

export const ModalContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
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