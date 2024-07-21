import { graphql, navigate } from 'gatsby';
import React, { useEffect, useMemo, useRef, useState } from 'react';

import Seo from '@/src/components/Seo';
import Layout from '@/src/layout';
import SearchInput from '@/src/components/SearchInput'
import { AllMarkdownRemark } from '@/src/type';

import * as S from './styled';
import PostCard from '@/src/components/PostCard';
import HelpsClass from '@/src/models/helps';
// import { DividerHorizontalIcon } from '@radix-ui/react-icons';

type HelpsTemplateProps = {
  location: Location;
  pageContext: {
    // currentCategory: string;
    // categories: string[];
    edges: AllMarkdownRemark['edges'];
  };
};

const HelpsTemplate: React.FC<HelpsTemplateProps> = ({ location, pageContext }) => {

  const { edges } = pageContext;

  const [searchTerm, setSearchTerm] = useState('');
  const [filteredFaqs, setFilteredFaqs] = useState<HelpsClass[]>([]);
  const [isFocused, setIsFocused] = useState(false);
  const [currentCategory, setCurrentCategory] = useState('전체');


  const items = useMemo(() => edges.map(({ node }) => new HelpsClass(node)), [edges]);

  const filteredPosts = useMemo(() => {
    if (currentCategory === '전체') {
      return items;
    }
    return items.filter(post => post.services === currentCategory);
  }, [currentCategory, items]);

  // const currentTabIndex = useMemo(
  //   () => categories.findIndex((category) => category === currentCategory),
  //   [categories, currentCategory],
  // );

  /**
   * /posts로 back || categories의 value로 이동
   */

  // const onTabIndexChange = (value: number) => {
  //   if (value === 0) return navigate(`/helps`);
  //   navigate(`/helps/${categories[value]}`);
  // };

  // const ref = useRef<HTMLDivElement>(null);

  // currentTab이 가운데에 오도록 스크롤
  // useEffect(() => {
  //   if (!ref.current) return;
  //   const currentTab = ref.current.children[currentTabIndex] as HTMLDivElement;
  //   ref.current.scrollTo({ left: currentTab.offsetLeft - (ref.current.offsetWidth - currentTab.offsetWidth) / 2 });
  // }, []);

  useEffect(() => {
    if (searchTerm) {
      const Terms = edges
        .map(({ node }) => new HelpsClass(node))
        .filter(help =>
          help.title.includes(searchTerm) ||
          help.excerpt.includes(searchTerm)
        );
      setFilteredFaqs(Terms);
    } else {
      setFilteredFaqs([]);
    }
    console.log("filteredFaqs", filteredFaqs);
  }, [searchTerm, edges]);

  const handleSearchChange = (term: any) => {
    setSearchTerm(term);
  };

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = (event: React.FocusEvent<HTMLDivElement>) => {
    // 드롭다운이나 검색 필드 외부를 클릭할 때만 포커스를 해제합니다.
    if (!event.currentTarget.contains(event.relatedTarget as Node)) {
      setIsFocused(false);
    }
  };

  const handleCategoryChange = (category: string) => {
    setCurrentCategory(category);
  };

  const item = edges.map(data => data.node)
  // console.log("data.slug?", filteredFaqs.map(data => data.slug));
  console.log(item);

  const path = location.pathname.split('/')[1];

  return (
    <>
      <Layout location={location}>
        <Seo title={'질문하기'} />


        <S.SearchWrapper>
          <SearchInput
            handleSearchChange={handleSearchChange}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
          />
        </S.SearchWrapper>

        {/* 검색쿼리에 관한 DropDown */}
        <S.DropDownWrapper
          isFocused={isFocused}
          onFocus={handleFocus}
          onBlur={handleBlur}
          tabIndex={-1} // 이 속성은 div가 포커스를 받을 수 있도록 합니다.
        >
          {searchTerm ? (
            <S.DropDown>
              {filteredFaqs.map(help => (
                <S.DropDownItem
                  key={help.id}
                  onClick={() => navigate(
                    help.slug
                  )} // 아이템 클릭 시 상세 페이지로 이동
                >
                  {help.title}
                </S.DropDownItem>
              ))}
            </S.DropDown>
          ) : (
            <></>
          )
          }
        </S.DropDownWrapper>

        <S.MainWrapper>

          {/* 서비스 탭 */}
          <S.TabWrapper>
            <S.Tabs>
              {['전체', '소속', '비즈니스', '아지트'].map((category, index) => (
                <S.Tab
                  key={index}
                  isSelected={currentCategory === category ? 'true' : 'false'}
                  onClick={() => handleCategoryChange(category)}
                >
                  {category}
                </S.Tab>
              ))}
            </S.Tabs>
          </S.TabWrapper>


          {/* 카테고리 탭 */}
          <S.PostCardsWrapper>
            {item.map((item, index) => (
              <PostCard key={index} item={item} />
            ))}
          </S.PostCardsWrapper>

        </S.MainWrapper>
      </Layout>
    </>
  );
};

export default HelpsTemplate;


export const pageQuery = graphql`
  query($id: String) {
		 markdownRemark(fields: {slug: {eq: $id}}) {
      id
      excerpt(pruneLength: 500, truncate: true)
      frontmatter {
        date(formatString: "YYYY.MM.DD")
        title
        categories
      }
      fields {
        slug
      }
    }
  }
`;
