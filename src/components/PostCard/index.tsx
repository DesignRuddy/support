import React from 'react';

import PostClass from '@/src/models/post';

import * as S from './styled';

type PostCardProps = {
  post: PostClass;
};

const PostCard: React.FC<PostCardProps> = ({ post }) => {
  const { id, slug, title, excerpt, date, categories } = post;

  return (
    <S.Wrapper>
      <S.PostCard key={id} to={slug}>
        <S.Title className='title'>
          <span style={{ marginRight: '8px', fontSize: '21px', fontWeight: 'bold' }}>Q.</span>
          {title}
        </S.Title>
        {/* <S.Description dangerouslySetInnerHTML={{ __html: excerpt }} /> */}
      </S.PostCard>
    </S.Wrapper>
  );
};

export default PostCard;
