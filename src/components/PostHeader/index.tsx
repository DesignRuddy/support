import React from 'react';


import * as S from './styled';
import HelpsClass from '@/src/models/helps';

type HelpsHeaderProps = {
  help: HelpsClass;
};

const HelpsHeader: React.FC<HelpsHeaderProps> = ({ help }) => {
  return (
    <S.Header>
      {/* {post.emoji && <S.Emoji>{help}</S.Emoji>} */}
      <S.Categories>
        {help.categories.map((category) => (
          <S.Category key={category} to={`/helps/${category}`}>
            {category}
          </S.Category>
        ))}
      </S.Categories>

      <S.Title>{help.title}</S.Title>
      {/* <S.Info>{post.date}</S.Info> */}
    </S.Header>
  );
};

export default HelpsHeader;
