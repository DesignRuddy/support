import React from 'react';

import * as S from './styled';
import HelpsClass from '@/src/models/helps';

type PostCardProps = {
  item: any;
};

const PostCard: React.FC<PostCardProps> = ({ item }) => {
  const { id, excerpt, frontmatter, fields } = item;

  const { slug } = fields;
  console.log("item", item);
  
  return (
    <S.Wrapper>
      <S.PostCard key={id} to={slug}>
        <S.Title className='title'>
          <span style={{ marginRight: '8px', fontSize: '21px', fontWeight: 'bold' }}>Q.</span>
          {frontmatter.title}
        </S.Title>
        <S.Description dangerouslySetInnerHTML={{ __html: excerpt }} />
      </S.PostCard>
    </S.Wrapper>
  );
};

export default PostCard;
