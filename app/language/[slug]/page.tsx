import type { Metadata } from "next";
import { NoteDocPage, staticParamsFor } from "@/components/notes/pages";

export const metadata: Metadata = { title: "언어공부" };

export function generateStaticParams() {
  return staticParamsFor("lang");
}

export default function Page({ params }: PageProps<"/language/[slug]">) {
  return <NoteDocPage kind="lang" params={params} />;
}
