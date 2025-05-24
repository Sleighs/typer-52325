import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import Sidebar from './Sidebar';
import Controls from './Controls';
import CodeEditor from './CodeEditor';
import {
  AviationSoftware,
  DatingCalculatorAPI,
  MultiplayerGameServer,
  SocialMediaPlatform,
  OnlineBankingSystem,
  ProjectManagementTool
} from '../scripts/sampleCodes';

const IDEContainer = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  background-color: #1e1e1e;
  overflow: hidden;
`;

const EditorWrapper = styled.div`
  flex: 1;
  position: relative;
  height: 100vh;
  overflow: hidden;
`;

const IDESimulation: React.FC = () => {
  const [isTyping, setIsTyping] = useState<boolean>(true);
  const [typingSpeed, setTypingSpeed] = useState<number>(50);
  const [code, setCode] = useState<string>('');
  const [currentFile, setCurrentFile] = useState<string>('AviationSoftware.ts');
  const currentIndexRef = useRef<number>(0);

  const getSampleCode = (fileName: string): string => {
    switch (fileName) {
      case 'AviationSoftware.ts':
        return AviationSoftware;
      case 'DatingCalculatorAPI.ts':
        return DatingCalculatorAPI;
      case 'MultiplayerGameServer.ts':
        return MultiplayerGameServer;
      case 'SocialMediaPlatform.ts':
        return SocialMediaPlatform;
      case 'OnlineBankingSystem.ts':
        return OnlineBankingSystem;
      case 'ProjectManagementTool.ts':
        return ProjectManagementTool;
      default:
        return AviationSoftware;
    }
  };

  useEffect(() => {
    let timeoutId: ReturnType<typeof setTimeout>;

    const typeCode = () => {
      const sampleCode = getSampleCode(currentFile);
      if (currentIndexRef.current < sampleCode.length && isTyping) {
        const nextChar = sampleCode[currentIndexRef.current];
        setCode(prev => {
          const newCode = prev + nextChar;
          console.log('Typing:', nextChar, 'Current code:', newCode);
          return newCode;
        });
        currentIndexRef.current += 1;
        timeoutId = setTimeout(typeCode, typingSpeed);
      }
    };

    if (isTyping) {
      if (currentIndexRef.current === 0) {
        setCode('');
      }
      typeCode();
    }

    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [isTyping, typingSpeed, currentFile]);

  const handleSpeedChange = (speed: number): void => {
    setTypingSpeed(speed);
  };

  const handleFileSelect = (fileName: string): void => {
    setCurrentFile(fileName);
    setCode('');
    currentIndexRef.current = 0;
  };

  return (
    <IDEContainer>
      <Sidebar onFileSelect={handleFileSelect} />
      <EditorWrapper>
        <Controls
          isTyping={isTyping}
          onToggleTyping={() => setIsTyping(!isTyping)}
          onSpeedChange={handleSpeedChange}
        />
        <CodeEditor code={code} />
      </EditorWrapper>
    </IDEContainer>
  );
};

export default IDESimulation;