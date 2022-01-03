import dynamic from "next/dynamic";
import "@uiw/react-textarea-code-editor/dist.css";

export const CodeEditor = dynamic(
  () => import("@uiw/react-textarea-code-editor").then((mod) => mod.default),
  { ssr: false },
);
