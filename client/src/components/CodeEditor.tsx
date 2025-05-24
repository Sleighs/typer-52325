import React from 'react';
import styled from 'styled-components';
import Editor from '@monaco-editor/react';

const EditorContainer = styled.div`
  flex: 1;
  position: relative;
  height: 100vh;
  width: 100%;
`;

interface CodeEditorProps {
  code: string;
  language?: string;
}

const CodeEditor: React.FC<CodeEditorProps> = ({ code, language = 'typescript' }) => {
  return (
    <EditorContainer>
      <Editor
        height="100%"
        width="100%"
        defaultLanguage={language}
        value={code}
        theme="vs-dark"
        options={{
          readOnly: true,
          minimap: { enabled: false },
          scrollBeyondLastLine: false,
          fontSize: 14,
        }}
      />
    </EditorContainer>
  );
};

export default CodeEditor; 