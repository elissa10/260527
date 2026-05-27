// i18n.jsx — bilingual content dictionary for 이은선 (Lee Eun-sun)
// Content sourced from the user's draft. Korean is canonical; English is supplied
// for the language toggle.

const COPY = {
  ko: {
    // ── meta ─────────────────────────────────────────────
    siteName: "이은선",
    siteRole: "AI 강사 · 콘텐츠 디렉터",
    navAbout: "소개",
    navPrograms: "강의",
    navWork: "출강 이력",
    navBooks: "저서",
    navContent: "콘텐츠",
    navInquiry: "강의 문의",

    // ── hero ─────────────────────────────────────────────
    heroEyebrow: "AI Instructor · Seoul",
    heroNameKo: "이은선",
    heroNameEn: "Lee Eun-sun",
    heroTitle1: "사람이 먼저인",
    heroTitle2: "AI 활용 교육.",
    heroDeck:
      "공공기관·기업·군·학교를 아우르는 현장에서 실용적인 AI 활용 교육을 설계하고 진행합니다. 강사용 교재 저작과 기관 맞춤 교육 콘텐츠 제작도 함께합니다.",
    heroQuote:
      "“AI를 쓰는 법보다, 사람을 먼저 이해하는 법을 가르칩니다.”",
    heroLocation: "Seoul, KR",
    heroSince: "강의 7년차 · 2018—",
    heroCtaPrimary: "강의 문의하기",
    heroCtaSecondary: "프로필 보기",
    heroStat1Label: "누적 강의처",
    heroStat1Value: "120+",
    heroStat2Label: "출판 워크북",
    heroStat2Value: "2종",
    heroStat3Label: "강의 분야",
    heroStat3Value: "AI · 코딩 · 자동화",

    // ── about ────────────────────────────────────────────
    aboutKicker: "소개",
    aboutTitle: "현장에 가장 가까운\n실용 AI 강사.",
    aboutLead:
      "한 가지 도구를 가르치는 것이 아니라, 수강생이 자기 일의 맥락 안에서 AI를 다룰 수 있도록 만드는 것을 가장 중요하게 생각합니다.",
    aboutFieldsLabel: "전문 분야",
    aboutFields: [
      "생성형 AI",
      "AI 리터러시",
      "업무 자동화",
      "파이썬",
      "데이터 시각화",
      "로봇 교육",
      "디지털 리터러시",
      "교수법 설계",
    ],
    aboutFieldsMain: ["생성형 AI", "AI 리터러시", "업무 자동화"],
    aboutAudienceLabel: "주요 대상",
    aboutAudience: [
      "기업 임직원",
      "공공기관",
      "군 (장교·군무원)",
      "교사 연수",
      "중장년층",
      "청년 SW 교육",
    ],
    aboutContactLabel: "연락",
    aboutEmail: "elissa10@hanmail.net",
    aboutInsta: "@ielissa2021",

    // ── programs ─────────────────────────────────────────
    programsKicker: "강의 프로그램",
    programsTitle: "AI를 ‘쓰게 만드는’\n3가지 트랙.",
    programsLead:
      "조직과 수강생의 출발선에 맞춰 길이와 깊이를 조정합니다. 가장 많이 신청되는 세 가지 트랙을 소개합니다.",
    programs: [
      {
        tag: "Track 01",
        title: "AI 리터러시 입문",
        duration: "2H · 4H · 1Day",
        for: "임직원 전체 / 공공기관 / 중장년",
        desc:
          "생성형 AI가 무엇이고, 내 업무에 어떻게 닿을 수 있는지 첫걸음을 다지는 입문 강의. 손에 익는 실습 위주로 진행합니다.",
        outcomes: ["AI 핵심 개념 이해", "프롬프트 기본기", "업무에 즉시 적용"],
      },
      {
        tag: "Track 02",
        title: "업무 자동화 실전",
        duration: "1Day · 2Day · 4주 과정",
        for: "기업 실무자 / 행정 담당자",
        desc:
          "Gemini·ChatGPT와 구글 워크스페이스를 엮어 반복 업무를 자동화하는 실전 워크숍. 보고서 작성·데이터 정리·문서 검토까지.",
        outcomes: ["반복 업무 자동화", "데이터 시각화", "팀 단위 적용"],
      },
      {
        tag: "Track 03",
        title: "강사·교사 양성",
        duration: "4주 · 8주 심화",
        for: "강사 양성 / 교사 연수",
        desc:
          "AI를 직접 가르치게 될 강사·교사들을 위한 심화 과정. 콘텐츠 설계부터 교수법, 운영 노하우까지 함께 다룹니다.",
        outcomes: ["커리큘럼 설계", "AI 교수법", "강의 운영 실무"],
      },
    ],
    programsCta: "전체 커리큘럼 보기",

    // ── work / clients ───────────────────────────────────
    workKicker: "출강 이력",
    workTitle: "강단에서 만난\n120여 곳의 현장.",
    workLead:
      "최근 출강한 일부 기관과 강의 주제를 소개합니다. 군·공공·교육·기업 전 영역에서 의뢰가 이어지고 있습니다.",
    work: [
      { name: "교관 대상 AI 활용 교수법", org: "육군정보통신학교", tag: "군" },
      { name: "생성형 AI 비즈니스 데이터 시각화", org: "기업 대상", tag: "기업" },
      { name: "AI로 스마트 행정", org: "동해시 직원", tag: "공공" },
      { name: "Gemini · 구글 활용 AI 업무 자동화", org: "씨트론", tag: "기업" },
      { name: "파이보 — 파이썬 교사 연수", org: "서울로봇고등학교", tag: "교육" },
      { name: "생성형 AI 업무 활용", org: "레오나해운항공", tag: "기업" },
      { name: "생성형 AI 활용 강의", org: "특수전사령부 군무원·장교", tag: "군" },
      { name: "디지털 리터러시 강사 양성 (심화)", org: "강사 양성 프로그램", tag: "강사" },
      { name: "중장년 생성형 AI · 스마트폰 활용", org: "구로일드림센터", tag: "공공" },
      { name: "AI 로봇 퀘스트", org: "삼성청년 SW아카데미 14기", tag: "교육" },
      { name: "파이썬 부트캠프", org: "강원대학교", tag: "교육" },
      { name: "파이썬 프로그래밍", org: "육군사관학교", tag: "군" },
    ],
    workClientsLabel: "최근 출강",
    workClients: [
      "육군정보통신학교",
      "특수전사령부",
      "육군사관학교",
      "동해시청",
      "씨트론",
      "레오나해운항공",
      "삼성청년 SW아카데미",
      "강원대학교",
      "서울로봇고등학교",
      "구로일드림센터",
    ],

    // ── books ────────────────────────────────────────────
    booksKicker: "저서 · 워크북",
    booksTitle: "수업에서 그대로\n쓰이는 교재.",
    booksLead:
      "강의 현장에서 검증한 흐름을 그대로 워크북에 담았습니다. 강사용·자습용 모두 사용 가능합니다.",
    books: [
      {
        tag: "피지컬 컴퓨팅",
        title: "디지털교육워크북 — 도와줘요, 피지컬컴퓨팅",
        desc:
          "전기 기초부터 센서 활용까지. 초등학생부터 성인까지 한 권으로 따라올 수 있도록 설계한 피지컬 컴퓨팅 가이드.",
        link: "https://smartstore.naver.com/edumaker/products/10267084166",
        linkLabel: "스마트스토어에서 보기",
      },
      {
        tag: "디지털 리터러시",
        title: "디지털교육워크북 — 도와줘요, 윈도우",
        sub: "공동 집필",
        desc:
          "윈도우 기초부터 파일 관리·인터넷 활용까지. 초보자와 강의용 교재 모두 염두에 두고 설계한 디지털 라이프 입문서.",
        link: "https://smartstore.naver.com/edumaker/products/10266756607",
        linkLabel: "스마트스토어에서 보기",
      },
    ],
    booksServiceLabel: "콘텐츠 제작 서비스",
    booksServices: [
      {
        title: "강의 교재 제작",
        desc: "기관·업체 맞춤 교재와 워크북을 기획부터 인쇄본까지 함께 만듭니다.",
      },
      {
        title: "커리큘럼 설계",
        desc: "교육 목표와 대상에 맞는 체계적인 커리큘럼·운영안을 설계합니다.",
      },
      {
        title: "강의 슬라이드 · 실습",
        desc: "현장에서 바로 쓸 수 있는 슬라이드와 실습 자료를 만듭니다.",
      },
    ],

    // ── content ──────────────────────────────────────────
    contentKicker: "콘텐츠",
    contentTitle: "강의실 밖에서도\n계속 나누는 이야기.",
    contentLead:
      "유튜브 · 인스타그램에서 ‘AI를 처음 만나는 사람’을 위한 짧은 가이드를 꾸준히 올리고 있습니다.",
    contentItems: [
      { kind: "YouTube", title: "초보자를 위한 ChatGPT 첫걸음", meta: "12분 · 영상" },
      { kind: "YouTube", title: "엑셀 없이도 되는 데이터 정리 5가지", meta: "9분 · 영상" },
      { kind: "Instagram", title: "오늘의 프롬프트 한 줄", meta: "주 3회 업로드" },
      { kind: "Newsletter", title: "이번 주 AI 도구 추천", meta: "격주 발행" },
    ],

    // ── inquiry form ─────────────────────────────────────
    formKicker: "강의 문의",
    formTitle: "어떤 자리에서\n만나면 좋을까요?",
    formLead:
      "조직, 대상, 일정만 알려주시면 24시간 안에 견적과 커리큘럼 초안을 보내드립니다.",
    formOrgLabel: "기관 · 회사",
    formOrgPh: "예: ○○주식회사 / ○○시청 / ○○대학교",
    formContactLabel: "담당자 · 연락처",
    formContactPh: "이름 / 이메일 / 휴대전화",
    formAudienceLabel: "대상 · 인원",
    formAudienceOpts: ["임직원", "공공·행정", "군", "교사·강사", "중장년", "학생"],
    formTopicLabel: "관심 주제",
    formTopicOpts: ["AI 리터러시", "업무 자동화", "파이썬", "강사 양성", "기타"],
    formScheduleLabel: "희망 일정 · 시간",
    formSchedulePh: "예: 2026년 7월 중, 평일 오후 2시간",
    formMessageLabel: "전하고 싶은 이야기",
    formMessagePh: "조직의 현재 상황, 기대하는 변화, 예산 등 어떤 내용이든 좋습니다.",
    formSubmit: "강의 문의 보내기",
    formNote: "* 이메일(elissa10@hanmail.net)로도 직접 문의 가능합니다.",
    formSent: "문의가 전송됐어요. 24시간 안에 답장드릴게요.",

    // ── footer ───────────────────────────────────────────
    footerLine: "사람이 먼저인 AI 교육.",
    footerCopy: "© 2026 이은선. 모든 콘텐츠 저작권은 강사 본인에게 있습니다.",
    footerEmailLabel: "이메일",
    footerInstaLabel: "인스타그램",
    footerYoutubeLabel: "유튜브",
    backToTop: "맨 위로",
  },

  en: {
    siteName: "Lee Eun-sun",
    siteRole: "AI Instructor · Content Director",
    navAbout: "About",
    navPrograms: "Programs",
    navWork: "Clients",
    navBooks: "Books",
    navContent: "Content",
    navInquiry: "Inquiry",

    heroEyebrow: "AI Instructor · Seoul",
    heroNameKo: "이은선",
    heroNameEn: "Lee Eun-sun",
    heroTitle1: "AI training",
    heroTitle2: "that starts with people.",
    heroDeck:
      "I design and deliver practical AI training for public agencies, companies, the military, and schools — and write the workbooks the rooms use.",
    heroQuote:
      "“I teach how to understand people first, then how to use the tools.”",
    heroLocation: "Seoul, KR",
    heroSince: "Teaching since 2018",
    heroCtaPrimary: "Book a session",
    heroCtaSecondary: "See profile",
    heroStat1Label: "Rooms taught",
    heroStat1Value: "120+",
    heroStat2Label: "Workbooks",
    heroStat2Value: "2",
    heroStat3Label: "Topics",
    heroStat3Value: "AI · Code · Ops",

    aboutKicker: "About",
    aboutTitle: "An instructor who\nstays close to the floor.",
    aboutLead:
      "I don't teach a single tool. I teach people to put AI to work inside the shape of their own job — that's the work.",
    aboutFieldsLabel: "Fields",
    aboutFields: [
      "Generative AI",
      "AI Literacy",
      "Workflow Automation",
      "Python",
      "Data Visualization",
      "Robotics",
      "Digital Literacy",
      "Instructional Design",
    ],
    aboutFieldsMain: ["Generative AI", "AI Literacy", "Workflow Automation"],
    aboutAudienceLabel: "Audiences",
    aboutAudience: [
      "Corporate teams",
      "Public sector",
      "Military",
      "Teachers",
      "Older learners",
      "Software academies",
    ],
    aboutContactLabel: "Contact",
    aboutEmail: "elissa10@hanmail.net",
    aboutInsta: "@ielissa2021",

    programsKicker: "Programs",
    programsTitle: "Three tracks\nthat get AI used.",
    programsLead:
      "Length and depth are tuned to the room. These are the three tracks people ask for most.",
    programs: [
      {
        tag: "Track 01",
        title: "AI Literacy — first steps",
        duration: "2H · 4H · 1Day",
        for: "All staff / Public sector / Older learners",
        desc:
          "An entry course on what generative AI is and how it touches the work in front of you. Hands-on from minute one.",
        outcomes: ["Core concepts", "Prompting basics", "Apply today"],
      },
      {
        tag: "Track 02",
        title: "Workflow automation — in practice",
        duration: "1Day · 2Day · 4-week",
        for: "Operators / Administrators",
        desc:
          "A working session that wires Gemini and ChatGPT to Google Workspace to remove repeat work — reports, cleanup, review.",
        outcomes: ["Automate repeats", "Data viz", "Team rollout"],
      },
      {
        tag: "Track 03",
        title: "Train the trainer",
        duration: "4-week · 8-week deep",
        for: "Instructors / Teacher PD",
        desc:
          "A deeper program for the people who will teach AI next. Content design, pedagogy, and the operational side of running a class.",
        outcomes: ["Curriculum", "Pedagogy", "Class ops"],
      },
    ],
    programsCta: "See full catalog",

    workKicker: "Clients",
    workTitle: "120+ rooms\non the record.",
    workLead:
      "A slice of recent engagements across military, public sector, education, and corporate.",
    work: [
      { name: "AI Pedagogy for Instructors", org: "Army Comms School", tag: "Military" },
      { name: "Business Data Viz with Generative AI", org: "Corporate", tag: "Corp" },
      { name: "Smart Administration with AI", org: "Donghae City", tag: "Public" },
      { name: "Workflow Automation w/ Gemini + Google", org: "Citron", tag: "Corp" },
      { name: "Paibo — Python Teacher PD", org: "Seoul Robotics HS", tag: "Education" },
      { name: "Generative AI at Work", org: "Leona Marine Air", tag: "Corp" },
      { name: "Generative AI Applications", org: "Special Warfare Cmd", tag: "Military" },
      { name: "Digital Literacy Trainer (Adv.)", org: "Trainer program", tag: "Trainer" },
      { name: "AI & Smartphone for Older Adults", org: "Guro I-Dream", tag: "Public" },
      { name: "AI Robot Quest", org: "Samsung SW Academy 14", tag: "Education" },
      { name: "Python Bootcamp", org: "Kangwon National Univ.", tag: "Education" },
      { name: "Python Programming", org: "Korea Military Academy", tag: "Military" },
    ],
    workClientsLabel: "Recent",
    workClients: [
      "Army Comms School",
      "Special Warfare Cmd",
      "Korea Military Academy",
      "Donghae City",
      "Citron",
      "Leona Marine Air",
      "Samsung SW Academy",
      "Kangwon National Univ.",
      "Seoul Robotics HS",
      "Guro I-Dream",
    ],

    booksKicker: "Publications",
    booksTitle: "Workbooks the\nrooms actually use.",
    booksLead:
      "Every flow is class-tested first. Designed to work both as a trainer's guide and for self-study.",
    books: [
      {
        tag: "Physical Computing",
        title: "Workbook — Help Me, Physical Computing",
        desc:
          "From the basics of electricity to working with sensors. Designed so a grade-schooler and a working adult can both follow.",
        link: "https://smartstore.naver.com/edumaker/products/10267084166",
        linkLabel: "Buy on Smartstore",
      },
      {
        tag: "Digital Literacy",
        title: "Workbook — Help Me, Windows",
        sub: "Co-authored",
        desc:
          "From Windows basics to files and the internet. Written with both first-time users and instructors in mind.",
        link: "https://smartstore.naver.com/edumaker/products/10266756607",
        linkLabel: "Buy on Smartstore",
      },
    ],
    booksServiceLabel: "Content production",
    booksServices: [
      {
        title: "Workbooks on commission",
        desc: "Custom workbooks and trainer guides — from outline to printed copy.",
      },
      {
        title: "Curriculum design",
        desc: "Structured curriculum and operational plan to fit your audience.",
      },
      {
        title: "Slides + lab kits",
        desc: "Ready-to-deliver slides and hands-on lab material for the room.",
      },
    ],

    contentKicker: "Content",
    contentTitle: "More of the conversation,\noutside the classroom.",
    contentLead:
      "Short guides for people meeting AI for the first time, on YouTube and Instagram.",
    contentItems: [
      { kind: "YouTube", title: "ChatGPT — a starter for first-timers", meta: "12 min · video" },
      { kind: "YouTube", title: "5 ways to clean data without Excel", meta: "9 min · video" },
      { kind: "Instagram", title: "One prompt a day", meta: "3×/week" },
      { kind: "Newsletter", title: "Tools worth your week", meta: "Bi-weekly" },
    ],

    formKicker: "Inquiry",
    formTitle: "Where should\nwe meet?",
    formLead:
      "Tell me your organization, audience, and dates. I'll send a quote and a draft curriculum within 24 hours.",
    formOrgLabel: "Organization",
    formOrgPh: "e.g. ○○ Inc. / ○○ City Hall / ○○ University",
    formContactLabel: "Contact",
    formContactPh: "Name / email / phone",
    formAudienceLabel: "Audience",
    formAudienceOpts: ["Staff", "Public", "Military", "Trainers", "Older adults", "Students"],
    formTopicLabel: "Topic",
    formTopicOpts: ["AI Literacy", "Automation", "Python", "Train the trainer", "Other"],
    formScheduleLabel: "Dates",
    formSchedulePh: "e.g. mid-July 2026, weekday afternoons, 2 hours",
    formMessageLabel: "Anything else",
    formMessagePh: "Current state, the change you're hoping for, budget — whatever helps.",
    formSubmit: "Send inquiry",
    formNote: "* You can also reach me directly at elissa10@hanmail.net.",
    formSent: "Inquiry sent — I'll be back within 24 hours.",

    footerLine: "AI training that starts with people.",
    footerCopy: "© 2026 Lee Eun-sun. All content is the author's own.",
    footerEmailLabel: "Email",
    footerInstaLabel: "Instagram",
    footerYoutubeLabel: "YouTube",
    backToTop: "Back to top",
  },
};

window.COPY = COPY;
