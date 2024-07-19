<h1 align="center">
  Gatsby Blog Template
</h1>

**Open source Code**: [**Github**]()

&nbsp;

## ✨ 기능

- ✨ 홈 화면에 원하는 글 선택적 노출
- 💅 코드 하이라이팅 지원
- 👉 글 목차 자동 생성(ToC)
- 💬 Utterances 댓글 기능 지원
- 📚 글을 카테고리별로 보여주는 Posts 페이지
- 😎 프로젝트를 보여줄 수 있는 Playground 페이지
- 📈 다양한 개츠비 플러그인 지원 (Google Analytics, Google Adsense 등)
- 🛠 sitemap.xml, robots.txt 자동 생성

&nbsp;

## 🚀 시작하기

Github Page, Netlify, Vercel 등 원하시는 배포 환경을 사용하시면 됩니다.

&nbsp;

#### 🔧 Netlify로 만들기

아래 버튼을 사용하면, 개인 계정으로 템플릿 Repository 생성 및 Netlify 배포를 동시에 진행할 수 있습니다. 

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://support-sosok.netlify.app/admin/#/collections/helps)

#### 🏃‍♀️ 실행하기

1. 생성된 Repository를 clone합니다.

2. 아래 명령어를 실행하여 로컬 환경에 블로그를 실행합니다.

```bash
# Install dependencies
$ yarn

# Start development server
# Server will run at http://localhost:8000
$ yarn dev
```

&nbsp;

## ✨ 블로그 커스텀하기

이제 `gatsby-site-meta-data.ts`의 값들을 변경해봅시다! 🙌

&nbsp;

### 1. 블로그 기본 정보

```ts
title: `title`,
description: `description`,
language: `ko`,
siteUrl: `https://sososk.so`,
ogImage: `/og-image.png` // 공유할 때 보이는 미리보기 이미지
```

&nbsp;

### 2. 댓글 설정

블로그 글들에 댓글을 달 수 있길 원하신다면 utterances를 통해서 이를 설정하실 수 있습니다. 방명록도 이와 연동됩니다.

> 🦄 utterances 사용방법은 [링크](https://utteranc.es/)를 참고해주세요!

```ts
comments: {
    utterances: {
        repo: '' ,
    },
}
```

&nbsp;

### 3. 글쓴이 정보

글쓴이(author)에 입력하신 정보는 메인 화면과 about 페이지에서 사용됩니다. 

```ts
author: {
    name: `name`,
    nickname: `nickname`,
    stack: ['Frontend', 'React', 'Typescript'],
    bio: {
      email: `contact@bluefrog.co.kr`,
      residence: 'InCheon, Songdo',
      bachelorDegree: 'bachelorDegree',
    },
    social: {
      github: `https://github.com`,
      linkedIn: `https://www.linkedin.com/in`,
      resume: `https://www.figma.com`,
    },
    // 드롭다운으로 보여주고 싶은 추가 링크들
    dropdown: {
      tistory: 'tistory',
      velog: 'https://velog.io',
    },
},
```

&nbsp;

### 4. 메인 화면에 노출시킬 항목 설정

메인 화면에 그루핑하여 노출시킬 글들을 설정할 수 있습니다.

```ts
featured: [
  {
    title: 'example1',
    category: 'featured-example1',
  },
  {
    title: 'example2',
    category: 'featured-example2',
  },
],
```

위의 category에 들어가는 키워드는 마크다운 파일로 글을 작성할 때 넣은 category와 동일합니다.

> 글의 카테고리를 작성할 때, `featured-` 를 포함할 경우, 지정한 title로 홈에 노출됩니다.  
> `featured-example1`으로 작성할 경우, 카테고리는 `example1`으로 분류됩니다.

&nbsp;

### 5. timestamps

timestamp 정보를 배열로 작성하면 Category에 따라 분리되어 보여지게 됩니다.

```ts
timestamps: [
  {
    category: 'Career',
    date: '2022.01.04 - NOW',
    en: 'A Corp.',
    kr: 'A 회사',
    info: 'A 팀',
    link: '',
  },
  {
    category: 'Career',
    date: '2021.01.04 - 2022.01.04',
    en: 'B Corp.',
    kr: 'B 회사',
    info: 'B 팀',
    link: '',
  },
  {
    category: 'Activity',
    date: '2023.07 - NOW',
    en: 'Community',
    kr: '커뮤니티',
    info: 'IT 커뮤니티',
    link: '',
  },
],
```

&nbsp;

### 6. projects

project 정보를 배열로 작성하면 Playground 페이지에 보여지게 됩니다.

```js
projects: [
  {
    title: 'Portfolio',
    description: '포트폴리오',
    techStack: ['React', 'Next.js', 'Typescript'],
    thumbnailUrl: '', // Path to your in the 'assets' folder
    links: {
    post: '',
    github: '',
    demo: '',
    googlePlay: '',
    appStore: '',
    },
  },
],
```

&nbsp;

### 7. remittances

remittance 정보는 Buy me a coffee 컴포넌트에 사용됩니다.

```js
remittances: {
  toss: {
    link: 'https://toss.me',
    qrCode: 'toss_qr.svg', // Path to your in the 'assets' folder
  },
  kakaopay: {
    qrCode: 'kakao_qr.svg', // Path to your in the 'assets' folder
  },
}
```

그렇게 내용을 문제 없이 입력하셨다면 나만의 블로그가 탄생한 것을 확인하실 수 있습니다.🎉

> config를 수정했을 경우, `yarn dev`로 재실행 해주셔야 합니다!

&nbsp;

## ✍️ 글 쓰기

본격적으로 블로그에 글을 쓰려면 `/content` 아래에 디렉토리를 생성하고 `index.md`에 markdown으로 작성하시면 됩니다.

> 폴더의 이름으로 경로가 생성됩니다.

&nbsp;

#### 🏗 메타 정보

index.md 파일의 상단에는 아래와 같이 emoji, title, date, categories 정보를 제공해야 합니다.

> emoji는 글머리에 보여지게 되며, categories는 띄어쓰기로 구분하여 입력할 수 있습니다.

```
---
emoji: ✨
title: My first writing
date: '2023-12-11'
categories: life dev
---
```

#### 🖼 이미지 경로

글에 이미지를 첨부하고 싶으시다면 같은 디렉토리에 이미지 파일을 추가하셔서 아래와 같이 사용하시면 됩니다.

```
![](ex.png)
```

이미지를 여러 장 나열하여 보여주고 싶다면 표를 이용하면 됩니다.

```
| | |
| - | - |
| ![](ex1.png) | ![](ex2.png) |
```

#### 🔍 목차 생성

글의 우측에 목차가 보이기를 원하신다면 `index.md` 파일 맨 아래에 다음 내용을 추가하시면 자동으로 목차가 생성됩니다.

    ```toc
    ```

&nbsp;
