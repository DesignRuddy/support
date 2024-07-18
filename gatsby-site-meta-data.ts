export default {
  /**
   * basic Information
   */
  title: `통합 고객센터`,
  description: `소속 고객센터`,
  language: `ko`,
  siteUrl: `https://support.sosok.so`, 
  ogImage: `/og-image.png`, // Path to your in the 'static' folder

  /**
   * comments setting
   */
  comments: {
    utterances: {
      repo: ``, //`danmin20/danmin-gatsby-blog`,
    },
  },

  /**
   * introduce yourself
   */
  author: {
    name: `bluefrog`,
    nickname: `청개구리`,
    stack: ['최대 할인', '최대 혜택 !', '여행, 생활'],
    bio: {
      email: `contact@bluefrog.co.kr`,
      residence: 'Incheon Songdo, South Korea',
      bachelorDegree: 'Kyunghee Univ. Computer Engineering (2018.03-2022.02)',
    },
    social: {
      github: `https://sososk.so`,
      linkedIn: `https://www.sosok.so`,
      resume: `https://www.figma.com/file/dtkCl6G7G5DVe18DN2LWny/%EC%9D%B4%EC%A0%95%EB%AF%BC-%EC%9D%B4%EB%A0%A5%EC%84%9C?node-id=0%3A1`,
    },
    dropdown: {
      tistory: 'https://danminblog.tistory.com/',
      velog: 'https://velog.io/@danmin20',
    },
  },

  /**
   * definition of featured posts
   */
  featured: [
    {
      title: '소속 APP',
      category: 'featured-sosok',
    },
    {
      title: '소속 비즈니스',
      category: 'featured-business',
    },
    {
      title: '소속 아지트',
      category: 'featured-azit',
    },
  ],

  /**
   * metadata for About Page
   */
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

  /**
   * metadata for Playground Page
   */
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

  /**
   * metadata for Buy Me A Coffee
   */
  remittances: {
    toss: {
      link: 'https://toss.me/',
      qrCode: 'toss_qr.svg',   // Path to your in the 'assets' folder
    },
    kakaopay: {
      qrCode: 'kakao_qr.svg',   // Path to your in the 'assets' folder
    },
  },

  /**
   * metadata for Footer infomations
   */
  subservient: [
    {
      services:[
        {
          title: "notice",
          name: "공지사항"
        },
        {
          title: "faq",
          name: "자주 묻는 질문"
        },
        {
          title: "jointcertificate",
          name: "공동인증서"
        },
      ],
      inquiry:{},
      customer:{},
      infomation:{}
    }
  ]
};
