import { graphql, navigate } from 'gatsby';
import React, { useEffect, useMemo, useRef, useState } from 'react';

import Seo from '@/src/components/Seo';
import Layout from '@/src/layout';
import SearchInput from '@/src/components/SearchInput'
// import HelpClass from '@/src/models/helps';
import { AllMarkdownRemark } from '@/src/type';

import * as S from './styled';
import PostClass from '@/src/models/post';
import PostCard from '@/src/components/PostCard';
// import { DividerHorizontalIcon } from '@radix-ui/react-icons';

type HelpsTemplateProps = {
  location: Location;
  pageContext: {
    currentCategory: string;
    categories: string[];
    edges: AllMarkdownRemark['edges'];
  };
};

const HelpsTemplate: React.FC<HelpsTemplateProps> = ({ location, pageContext }) => {

  const { edges, currentCategory, categories } = pageContext;
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredFaqs, setFilteredFaqs] = useState<PostClass[]>([]);
  const [isFocused, setIsFocused] = useState(false);

  const currentTabIndex = useMemo(
    () => categories.findIndex((category) => category === currentCategory),
    [categories, currentCategory],
  );
  const posts = edges.map(({ node }) => new PostClass(node));

  /**
   * /posts로 back || categories의 value로 이동
   */
  const onTabIndexChange = (value: number) => {
    if (value === 0) return navigate(`/helps`);
    navigate(`/helps/${categories[value]}`);
  };

  const ref = useRef<HTMLDivElement>(null);

  // currentTab이 가운데에 오도록 스크롤
  // useEffect(() => {
  //   if (!ref.current) return;
  //   const currentTab = ref.current.children[currentTabIndex] as HTMLDivElement;
  //   ref.current.scrollTo({ left: currentTab.offsetLeft - (ref.current.offsetWidth - currentTab.offsetWidth) / 2 });
  // }, []);

  useEffect(() => {
    if (searchTerm) {
      const Terms = edges
        .map(({ node }) => new PostClass(node))
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
                    onClick={() => navigate(help.slug)} // 아이템 클릭 시 상세 페이지로 이동
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
            </S.TabWrapper>

            <S.PostCardsWrapper>
              {posts.map((post, index) => (
                <PostCard key={index} post={post} />
              ))}
            </S.PostCardsWrapper>

          </S.MainWrapper>
      </Layout>
    </>
  );
};

export default HelpsTemplate;

export const pageQuery = graphql`
  query ($slug: String, $nextSlug: String, $prevSlug: String) {
    cur: markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
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

    next: markdownRemark(fields: { slug: { eq: $nextSlug } }) {
      id
      html
      frontmatter {
        date(formatString: "YYYY.MM.DD")
        title
        categories
      }
      fields {
        slug
      }
    }

    prev: markdownRemark(fields: { slug: { eq: $prevSlug } }) {
      id
      html
      frontmatter {
        date(formatString: "YYYY.MM.DD")
        title
        categories
      }
      fields {
        slug
      }
    }

    site {
      siteMetadata {
        siteUrl
        comments {
          utterances {
            repo
          }
        }
      }
    }
  }
`;


