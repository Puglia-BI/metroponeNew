import {
  SandpackProvider,
  ClasserProvider,
  SandpackPreview,
  useActiveCode,
  SandpackLayout,
  SandpackStack,
  FileTabs,
  useSandpack
} from "@codesandbox/sandpack-react";

import Editor from "@monaco-editor/react";
import { getLanguageOfFile } from "./utils";

function MonacoEditor() {
  const { code, updateCode } = useActiveCode();
  const { sandpack } = useSandpack();

  const language = getLanguageOfFile(sandpack.activePath);

  return (
    <SandpackStack customStyle={{ height: "100vh", margin: 0 }}>
      <FileTabs />
      <div style={{ flex: 1, paddingTop: 8, background: "#1e1e1e" }}>
        <Editor
          width="100%"
          height="100%"
          language={language}
          theme="vs-dark"
          key={sandpack.activePath}
          defaultValue={code}
          onChange={(value) => updateCode(value || "")}
        />
      </div>
    </SandpackStack>
  );
}

export default function App() {
  return (
    <SandpackProvider template="vue">
      <SandpackLayout theme="dark">
        <MonacoEditor />
        <SandpackPreview customStyle={{ height: "100vh" }} />
      </SandpackLayout>
    </SandpackProvider>
  );
}
