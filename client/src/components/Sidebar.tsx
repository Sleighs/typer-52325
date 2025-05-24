import React from 'react';
import styled from 'styled-components';

const SidebarContainer = styled.div`
  width: 200px;
  background-color: #252526;
  color: #fff;
  padding: 20px;
  border-right: 1px solid #333;
`;

const FileList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const FileItem = styled.li<{ isActive?: boolean }>`
  padding: 8px 12px;
  cursor: pointer;
  border-radius: 4px;
  background-color: ${props => props.isActive ? '#37373d' : 'transparent'};
  color: ${props => props.isActive ? '#fff' : '#ccc'};
  
  &:hover {
    background-color: #2a2d2e;
  }
`;

interface SidebarProps {
  onFileSelect: (fileName: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ onFileSelect }) => {
  const files = [
    'AviationSoftware.ts',
    'DatingCalculatorAPI.ts',
    'MultiplayerGameServer.ts',
    'SocialMediaPlatform.ts',
    'OnlineBankingSystem.ts',
    'ProjectManagementTool.ts'
  ];

  return (
    <SidebarContainer>
      <h3>Files</h3>
      <FileList>
        {files.map((file) => (
          <FileItem key={file} onClick={() => onFileSelect(file)}>
            {file}
          </FileItem>
        ))}
      </FileList>
    </SidebarContainer>
  );
};

export default Sidebar; 