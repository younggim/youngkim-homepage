import type { Metadata } from "next";
import { NoteIndexPage } from "@/components/notes/pages";

export const metadata: Metadata = { title: "언어공부" };

export default function Page() {
  return (
    <NoteIndexPage
      kind="lang"
      title="언어공부"
      desc="외국어 공부 기록을 모읍니다. 표현, 단어, 문법 정리와 함께 PDF, 단어장(CSV), 음성 파일(MP3, M4A)을 첨부할 수 있어요."
    />
  );
}
