import React from 'react';
import styled from 'styled-components';

const ControlsContainer = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  z-index: 1000;
  display: flex;
  gap: 10px;
`;

const Button = styled.button`
  background-color: #0e639c;
  color: white;
  border: none;
  padding: 5px 10px;
  border-radius: 3px;
  cursor: pointer;
  
  &:hover {
    background-color: #1177bb;
  }
`;

interface ControlsProps {
  isTyping: boolean;
  onToggleTyping: () => void;
  onSpeedChange: (speed: number) => void;
}

const Controls: React.FC<ControlsProps> = ({
  isTyping,
  onToggleTyping,
  onSpeedChange,
}) => {
  return (
    <ControlsContainer>
      <Button onClick={onToggleTyping}>
        {isTyping ? 'Pause' : 'Resume'}
      </Button>
      <Button onClick={() => onSpeedChange(50)}>Normal</Button>
      <Button onClick={() => onSpeedChange(20)}>Fast</Button>
      <Button onClick={() => onSpeedChange(100)}>Slow</Button>
    </ControlsContainer>
  );
};

export default Controls; 