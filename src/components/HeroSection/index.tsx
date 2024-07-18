import { useState } from 'react';

import { Author } from '@/src/type';

import * as S from './styled';
import { navigate } from 'gatsby';

type HeroSectionProps = {
  author?: Author;
};

const HeroSection: React.FC<HeroSectionProps> = () => {
  // const [isDropdownOpened, setIsDropdownOpened] = useState(false);

  const handleInputClick = () => {
    navigate(`/faq/`);
  }

  return (
    <S.section>
      <S.IntroWrapper>
        <S.Title>
          무엇을 도와드릴까요 ?
        </S.Title>
        <S.KeywordInput type='text' placeholder='검색할 키워드를 입력하세요.' onClick={handleInputClick}/>

      </S.IntroWrapper>
    </S.section>
  );
};

export default HeroSection;
