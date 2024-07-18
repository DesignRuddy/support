import { navigate } from 'gatsby';
import React, { useEffect, useMemo, useRef, useState } from 'react';

import Seo from '@/src/components/Seo';
import Layout from '@/src/layout';
import SearchInput from '@/src/components/SearchInput'
import FaQClass from '@/src/models/post';
import { AllMarkdownRemark } from '@/src/type';
// import CategoryButton from '@/src/components/CategoryButton';
import PostCard from '@/src/components/PostCard';

import * as S from './styled';
import PostClass from '@/src/models/post';
import PostsTemplate from '../posts-template';
import { DividerHorizontalIcon } from '@radix-ui/react-icons';

type FaqTemplateProps = {
  location: Location;
  pageContext: {
    currentCategory: string;
    categories: string[];
    edges: AllMarkdownRemark['edges'];
  };
};

const FaqTemplate: React.FC<FaqTemplateProps> = ({ location, pageContext }) => {

  const { edges, currentCategory, categories } = pageContext;
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredFaqs, setFilteredFaqs] = useState<PostClass[]>([]);
  const [isFocused, setIsFocused] = useState(false);

  const faq = edges?.map(({ node }) => new FaQClass(node));
  const posts = edges.map(({ node }) => new PostClass(node));

  const currentTabIndex = useMemo(
    () => categories?.findIndex((category) => category === currentCategory),
    [categories, currentCategory],
  );

  const onTabIndexChange = (value: number) => {
    if (value === 0) return navigate(`/posts`);
    navigate(`/posts/${categories[value]}`);
  };

  const ref = useRef<HTMLDivElement>(null);

  // currentTab이 가운데에 오도록 스크롤

  useEffect(() => {
    if (!ref.current) return;
    const currentTab = ref.current.children[currentTabIndex] as HTMLDivElement;
    ref.current.scrollTo({ left: currentTab.offsetLeft - (ref.current.offsetWidth - currentTab.offsetWidth) / 2 });
  }, []);

  console.log(posts)

  useEffect(() => {
    if (searchTerm) {
      const Terms = edges
        .map(({ node }) => new FaQClass(node))
        .filter(faq =>
          faq.title.includes(searchTerm) ||
          faq.excerpt.includes(searchTerm)
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

  // console.log("Data", faq);

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

        {isFocused && (
          searchTerm ? (
            <S.DropDown>
              {filteredFaqs.map(faq => (
                <S.DropDownItem
                  key={faq.id}
                  onClick={() => navigate("/")} // 아이템 클릭 시 상세 페이지로 이동
                >
                  {faq.title}
                </S.DropDownItem>
              ))}
            </S.DropDown>
          ) : (
            <S.DropDown style={{ padding: 20 }}>
              검색어를 입력해주세요.
            </S.DropDown>
          )
        )}
      </Layout>
    </>
  );
};

export default FaqTemplate;

