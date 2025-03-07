import { navigate } from 'gatsby';
import React, { useEffect, useMemo, useRef } from 'react';

import PostCard from '@/src/components/PostCard';
import Seo from '@/src/components/Seo';
import Layout from '@/src/layout';
import { AllMarkdownRemark } from '@/src/type';

import * as S from './styled';
import HelpsClass from '@/src/models/helps';

type PostsTemplateProps = {
  location: Location;
  pageContext: {
    currentCategory: string;
    categories: string[];
    edges: AllMarkdownRemark['edges'];
  };
};

const PostsTemplate: React.FC<PostsTemplateProps> = ({ location, pageContext }) => {
  const { edges, currentCategory } = pageContext;
  const { categories } = pageContext;
  const currentTabIndex = useMemo(
    () => categories.findIndex((category) => category === currentCategory),
    [categories, currentCategory],
  );
  const posts = edges.map(({ node }) => new HelpsClass(node));

  /**
   * /posts로 back || categories의 value로 이동
   */
  const onTabIndexChange = (value: number) => {
    if (value === 0) return navigate(`/helps`);
    navigate(`/helps/${categories[value]}`);
  };

  const ref = useRef<HTMLDivElement>(null);

  // currentTab이 가운데에 오도록 스크롤

  useEffect(() => {
    if (!ref.current) return;
    const currentTab = ref.current.children[currentTabIndex] as HTMLDivElement;
    ref.current.scrollTo({ left: currentTab.offsetLeft - (ref.current.offsetWidth - currentTab.offsetWidth) / 2 });
  }, []);

  console.log(posts)

  return (
    <Layout location={location}>
      <Seo title='자주묻는질문 - sosok' />
      <S.CategoryWrapper>
        <S.CategoryTitle>{categories[currentTabIndex]}</S.CategoryTitle>
        <S.CategorySubtitle>{`${posts.length} post${posts.length < 2 ? '' : 's'}`}</S.CategorySubtitle>
      </S.CategoryWrapper>

      <S.TabWrapper>
        <S.Tabs ref={ref}>
          {categories.map((title, index) => (
            <S.Tab
              key={index}
              isSelected={currentTabIndex === index ? 'true' : 'false'}
              onClick={() => onTabIndexChange(index)}
            >
              {title}
            </S.Tab>
          ))}
        </S.Tabs>

        <S.PostCardsWrapper>
          {posts.map((post, index) => (
            <PostCard key={index} item={post} />
          ))}
        </S.PostCardsWrapper>
      </S.TabWrapper>
    </Layout>
  );
};

export default PostsTemplate;
