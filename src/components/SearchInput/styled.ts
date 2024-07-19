import styled from '@emotion/styled';

import { MOBILE_MEDIA_QUERY, contentMaxWidth } from '@/src/styles/const';

export const Wrapper = styled.div`
  width: 100%;
  height: auto;

  @media ${MOBILE_MEDIA_QUERY} {
    border-radius: 20px;
    width: 100%;
  }
`;

export const SearchWrapper = styled.div`
  width: 100%;
  max-width: ${contentMaxWidth};
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;


export const SearchTitle = styled.div`
  margin-bottom: 60px;
  line-height: 27px;
  font-family: 'SUIT-Bold';
  font-size: 27px;
`;

export const SearchIcon = styled.span`
  position: absolute;
  left: 0;
  transform: translateY(-50%);
  background-image: url('/search_icon.svg'); 
  background-size: cover;
  width: 25px; // 아이콘의 크기에 맞게 조정
  height: 25px;
  pointer-events: auto;
`;

export const SearchInput = styled.input`
    padding: 8px 12px;
    width: 100%;
    border: none;
    outline: none;
    border-bottom: 1px solid #ccc;
    font-size: 27px;
    caret-color: #36E579;
    margin: 0;

    @media ${MOBILE_MEDIA_QUERY} {
      border-radius: 5px;
      width: 100%;
      font-size: 18px;

      &::placeholder{
        font-size: 18px;
      }
    }

    &::placeholder{
        color: #ccc;
    }

    &:focus {
    outline: none;
}
`;
