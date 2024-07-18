import React from 'react';

import * as S from './styled';

/**
 * 이 파일은 삭제/수정하지 말아주세요!
 */
const Footer: React.FC = () => {
  return (
    // <S.Wrapper>
    //   <S.Footer>
    //     © Powered by <S.Link href='https://sosok.so'>bluefrog</S.Link>
    //   </S.Footer>
    // </S.Wrapper>
    <S.Wrapper>
      <S.Footer>
        <S.FooterTop>
          <S.FooterSection>
            <S.FooterTitle>서비스</S.FooterTitle>
            <S.FooterList>
              <S.FooterItem>공지사항</S.FooterItem>
              <S.FooterItem>자주 묻는 질문</S.FooterItem>
              <S.FooterItem>비즈니스 </S.FooterItem>
            </S.FooterList>
          </S.FooterSection>

          <S.FooterSection>
            <S.FooterTitle>약관</S.FooterTitle>
            <S.FooterList>
              <S.FooterItem>서비스 약관</S.FooterItem>
              <S.FooterItem>개인정보 처리방침</S.FooterItem>
              <S.FooterItem>마케팅 수신약관</S.FooterItem>
            </S.FooterList>
          </S.FooterSection>

          <S.FooterSection>
            <S.FooterTitle>문의</S.FooterTitle>
            <S.FooterList>
              <S.FooterItem>기업 제휴</S.FooterItem>
              <S.FooterItem>제휴 입점문의</S.FooterItem>
              <S.FooterItem>광고 문의</S.FooterItem>
            </S.FooterList>
          </S.FooterSection>

          <S.FooterSection>
            <S.FooterTitle>고객센터</S.FooterTitle>
            <S.FooterList>
              <S.FooterItem>전화: 031-715-5634</S.FooterItem>
              <S.FooterItem>이메일(고객전용): support@bluefrog.co.kr</S.FooterItem>
              <S.FooterItem>이메일(외부기관전용): contact@bluefrog.co.kr</S.FooterItem>
              <S.FooterItem>카카오톡 채널: @sosok</S.FooterItem>
            </S.FooterList>
          </S.FooterSection>
        </S.FooterTop>

        <S.CompanyInfo>
          <S.FooterTitle>
            (주) bluefrog
          </S.FooterTitle>
          {/* <p>© Powered by <S.Link href='https://sosok.so'>bluefrog</S.Link></p>
          <p>사업자 등록번호: 120-88-01280 | 대표: 이준석</p>
          <p>호스팅 서비스: 주식회사 블루프로그 </p>
          <p>인천 연수구 송도과학로 70 AT센터 (업무동, 1307 ~ 8)</p>
          <p>고객센터: 032-715-5634 (연수구, AT센터 오피스라인)</p> */}
          사업자 등록번호: 338-87-02374 | 대표: 이준석 <br />
          인천 연수구 송도과학로 70 AT센터 (업무동, 1307 ~ 8) <br />
          고객센터: 032-715-5634 (송도동, 송도 AT센터 오피스라인)
        </S.CompanyInfo>

        <S.SocialMedia>
          <a href="#">S</a>
          <a href="#">O</a>
          <a href="#">S</a>
          <a href="#">O</a>
          <a href="#">K</a>
        </S.SocialMedia>
      </S.Footer>
    </S.Wrapper>
  );
};

export default Footer;
