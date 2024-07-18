import { useState } from 'react';
import ReactRotatingText from 'react-rotating-text';

import { Author } from '@/src/type';

import BuyMeACoffee from '../BuyMeACoffee';
import Image from '../Image';
import * as S from './styled';

type SubBannerProps = {
  author?: Author;
};

const SubBanner: React.FC<SubBannerProps> = ({
  // author 
}) => {
  // const { stack, social, name, nickname, dropdown } = author;

  const [isDropdownOpened, setIsDropdownOpened] = useState(false);

  return (
    <S.Wrapper>
      <S.Content>
        <S.inner>
          <S.Title>
            소속 고객센터에서 <br />
            24시간 상담받을 수 있어요
          </S.Title>
          <br />

          <S.Character>
            <img
              src='touchphone.webp'
              alt='touch mobile'
              style={{ width: '200px' }}
            />
          </S.Character>

          <S.ImageContainer>
            <S.inquiryWrapper>
              <S.ContactLink href='http://pf.kakao.com/_CFIvxj/chat' target='_blank'>
                <img src='kakaocontact.webp' alt='카카오톡 채널' />
              </S.ContactLink>
            </S.inquiryWrapper>
          </S.ImageContainer>
        </S.inner>
      </S.Content>
    </S.Wrapper >
  );
};

export default SubBanner;
