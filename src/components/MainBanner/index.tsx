import { useState } from 'react';
import ReactRotatingText from 'react-rotating-text';

import { Author } from '@/src/type';

import * as S from './styled';

type MainBannerProps = {
  author: Author;
};

const MainBanner: React.FC<MainBannerProps> = ({ author }) => {
  const { stack, social, name, nickname, dropdown } = author;

  const [isDropdownOpened, setIsDropdownOpened] = useState(false);

  return (
    <S.Wrapper>
      <S.IntroWrapper>
        <S.Title>
          {/* <ReactRotatingText items={stack} /> */}
          No.1 멤버십 &nbsp;
          <br />
          <strong>
            <ReactRotatingText items={stack} />
          </strong>
          <br />
          <strong>
            <div style={{ fontWeight: 600 }}> sosok &nbsp;</div>
          </strong>
          에서 만나 보세요.
        </S.Title>
      </S.IntroWrapper>
    </S.Wrapper>
  );
};

export default MainBanner;
