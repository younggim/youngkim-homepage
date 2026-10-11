import type { RefCategory } from "./references";

export type SkillLevel = "사용 중" | "학습 중" | "목표";

export interface Skill {
  name: string;
  level: SkillLevel;
}

export interface RoadmapItem {
  label: string;
  done: boolean;
  category: RefCategory;
}

export const profile = {
  name: "Younggi Kim",
  nameKo: "김영기",
  nickname: "Contemplating Dragon",
  nicknameKo: "",
  tagline: "사유와 독서를 즐기는 여행자이자 AI를 활용한 업무 flow 개선을 주도하는 삶",
  motto: "From bits to electrons.",
  role: "LG전자 책임 연구원",
  siteUrl: "https://youngkim-homepage.vercel.app",
  // GitHub 저장소: 수정하기 버튼이 이 저장소의 웹 편집기를 엽니다.
  repo: { name: "younggim/youngkim-homepage", branch: "main" },

  // 비어 있으면 About 페이지의 자기소개 문단을 숨깁니다.
  about: [] as string[],

  journey: [
    {
      stage: "Software",
      title: "소프트웨어",
      status: "done" as const,
      items: ["알고리즘", "자료구조", "웹 개발"],
    },
    {
      stage: "Bridge",
      title: "브리지",
      status: "now" as const,
      items: ["컴퓨터 구조", "운영체제", "임베디드 C"],
    },
    {
      stage: "Hardware",
      title: "하드웨어 (목표)",
      status: "next" as const,
      items: ["회로이론", "전자회로", "디지털 설계(Verilog)", "PCB"],
    },
  ],

  skills: {
    software: [
      { name: "C", level: "사용 중" },
      { name: "C++", level: "사용 중" },
      { name: "Python", level: "사용 중" },
      { name: "TypeScript", level: "사용 중" },
      { name: "Linux", level: "사용 중" },
      { name: "Git", level: "사용 중" },
    ] satisfies Skill[],
    hardware: [
      { name: "Arduino", level: "학습 중" },
      { name: "Raspberry Pi", level: "학습 중" },
      { name: "STM32", level: "목표" },
      { name: "Verilog / FPGA", level: "학습 중" },
      { name: "KiCad", level: "목표" },
      { name: "오실로스코프 / 멀티미터", level: "목표" },
    ] satisfies Skill[],
  },

  roadmap: [
    { label: "컴퓨터 구조", done: true, category: "digital" },
    { label: "회로이론", done: false, category: "circuits" },
    { label: "전자회로 I", done: false, category: "circuits" },
    { label: "신호 및 시스템", done: false, category: "signals" },
    { label: "디지털 시스템 설계", done: false, category: "digital" },
    { label: "임베디드 시스템", done: false, category: "embedded" },
    { label: "디지털 통신", done: false, category: "comm" },
  ] satisfies RoadmapItem[],

  // TODO: 실제 정보로 채워 주세요. 빈 배열이면 화면에 "준비 중"으로 표시됩니다.
  education: [] as string[],
  awards: [] as string[],
  certificates: [
    "MBB 자격 취득 (2016)",
    "CDS (L3) 자격 취득 (2024)",
    "ADSP (데이터분석전문가) 자격 취득 (2025)",
  ] as string[],

  // 빈 문자열이면 Contact 페이지에서 숨겨집니다.
  links: {
    email: "skylogics@gmail.com",
    phone: "",
    github: "",
    linkedin: "",
  },

  // 빈 문자열이면 Contact 상단 메시지 카드를 숨깁니다.
  contactMessage: {
    title: "",
    body: "",
  },
};
