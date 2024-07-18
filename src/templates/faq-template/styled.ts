import styled from '@emotion/styled';

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

export const DropDownWrapper = styled.div`
  position: absolute;
  width: 100%;
  font-size: 16px;
  background-color: none;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); 
  border-radius: 4px;
  overflow: hidden; 
  z-index: 1000;
`;

export const DropDown = styled.div`
  border: 1px solid #dfe1e5;
  border-radius: 6px;
  box-shadow: 0 3px 15px 0 rgba(0, 0, 0, 0.16);
  width: 100%;
  color: #ccc;
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
