import Editor from "@monaco-editor/react";

export const EditorComponent = () => {
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
      />
    </>
  );
};
