import Editor from "@monaco-editor/react";
import { useState, useEffect } from "react";
import themeData from "../../../../Dracula.json";

export const EditorComponent = () => {
  async function downloadTheme() {
    const response = await fetch("../../../../Dracula.json");
    const data = await response.json();
    console.log(data);
    setEditorState({ ...editorState, theme: data });
  }

  function handleEditorTheme(editor, monaco) {
    monaco.editor.defineTheme("dracula", themeData);
    monaco.editor.setTheme("dracula");
  }

  return (
    <>
      <Editor
        height="80vh"
        width="100%"
        defaultLanguage="javascript"
        defaultValue="// Welcome to the code playground"
        options={{
          fontSize: 18,
          fontFamily: "monospace",
        }}
        onMount={handleEditorTheme}
      />
    </>
  );
};
