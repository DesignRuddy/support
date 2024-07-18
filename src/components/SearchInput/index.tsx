// SearchInput.js
import React from 'react';

import { Search } from '@/src/type';

import * as S from './styled';

type SearchInputProps = {
    Search?: Search;
    onFocus: () => void;
    onBlur: () => void;
    handleSearchChange: (searchValue: string) => void;
}

const SearchInput: React.FC<SearchInputProps> = (props: SearchInputProps) => {
    const {
        onBlur,
        onFocus,
        handleSearchChange
    } = props;

    return (
        <S.Wrapper>
            <S.SearchTitle>
                궁금했던 질문을 작성해주세요.
            </S.SearchTitle>

            <S.InputWrapper>
                {/* <S.SearchIcon /> */}
                <S.SearchInput
                    placeholder="찾으시는 키워드를 입력해주세요 !"
                    onChange={(e) => handleSearchChange(e.target.value)}
                    onFocus={onFocus}
                    onBlur={onBlur}
                />
            </S.InputWrapper>
        </S.Wrapper>
    );
};

export default SearchInput;
