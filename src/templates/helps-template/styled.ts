import styled from '@emotion/styled';
import { contentMaxWidth, MOBILE_MEDIA_QUERY } from '@/src/styles/const';

export const heplsWrapper = styled.div`
  width: 100%;
`;

export const SearchWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 80px;
  margin-bottom: 30px;
`;

export const TestDiv =styled.div`
  font-size: 16px;
`;

export const DropDownWrapper = styled.div<{ isFocused: boolean }>`
  position: absolute;
  width: 100%;
  font-size: 16px;
  background-color: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); 
  border-radius: 8px;
  overflow: hidden; 
  z-index: 1000;
  display: ${props => (props.isFocused ? 'block' : 'hidden')}; // 조건부 렌더링
`;

export const DropDown = styled.div`
  border: 0.5px solid #dfe1e5;
  border-radius: 6px;
  box-shadow: 0 3px 15px 0 rgba(0, 0, 0, 0.16);
  width: 100%;
  color: #333;
  height: auto;
  font-size: 14px; 
  font-family: SUIT-Regular;
  `;

export const DropDownItem = styled.button`
  width: 100%; 
  padding: 14px 20px; 
  border: none;
  border-radius: 12px;
  background: none; 
  text-align: left; 
  font-size: 14px; 
  color: #333; 
  cursor: pointer; 
  font-family: SUIT-Regular;
  transition: background-color 0.2s; // 

  &:hover {
    background-color: #f7f7f7; // 
  }
`;


/** 
 * 여기서부터 카테고리 
 */ 
export const CategoryWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 30px;
  margin-bottom: 30px;
`;

export const CategoryTitle = styled.div`
  width: fit-content;
  margin-bottom: 15px;
  font-size: 30px;
  text-align: center;

  @media ${MOBILE_MEDIA_QUERY} {
    font-size: 25px;
  }
`;

export const CategorySubtitle = styled.div`
  padding-bottom: 10px;
  font-size: 20px;
  /* text-align: center; */
  font-family: SUIT-Regular;
`;

/**
 * 여기서 부터는 탭
 */
export const MainWrapper = styled.div`
  display: flex;
  flex-direction: row;
  top: 0px;
  width: 100%;
`;

export const TabWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-self: flex-start;
  top: 0px;
  max-width: 250px;
`;

export const Tabs = styled.div`
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  width: 100%;
  /* max-width: ${contentMaxWidth} + 40px; */
  /* gap: 24px; */
  overflow-y: hidden;
  overflow-x: scroll;
  @media ${MOBILE_MEDIA_QUERY} {
    justify-content: flex-start;
  }
`;

export const Tab = styled.div<{ isSelected: 'true' | 'false' }>`
  font-size: 17px;
  font-weight: bolder;
  width: 100%;
  cursor: pointer;
  line-height: 50px;
  padding: 12px 16px;
  color: ${({ isSelected, theme }) => (isSelected === 'true' ? theme.color.black100 : theme.color.gray60)};
`;

export const PostCardsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;
