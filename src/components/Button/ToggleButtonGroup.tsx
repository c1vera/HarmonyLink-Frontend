import React from 'react';
import styled from 'styled-components';

interface Option {
  label: string | number;
  value: string | number;
  key: string | number;
}

interface ToggleButtonGroupProps {
  options: Option[];
  name: string;
  value: string | number;  
  onChange: (value: string) => void;
}

const ButtonGroup = styled.div`
  display: flex;
`;

const ToggleButton = styled.label<{ isActive: boolean }>`
  padding: 10px 20px;
  border: none;
  cursor: pointer;
  background-color: ${props => props.isActive ? '#FF688D' : '#FFAEC1'};
  color: #ffffff;
  border-radius: 12px;
  width: 30px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items : center;
  &:hover {
    background-color: ${props => props.isActive ? '#FF688D' : '#FFAEC1'};
  }
`;

const HiddenRadio = styled.input`
  display: none;
`;

const ToggleButtonGroup: React.FC<ToggleButtonGroupProps> = ({ options, name, value, onChange }) => {
  return (
    <ButtonGroup>
      {options.map((option) => (
        <ToggleButton
          key={option.value}
          isActive={value === option.value}
          htmlFor={`radio-${option.value}`}
        >
          <HiddenRadio
            id={`radio-${option.value}`}
            type="radio"
            name={name}
            value={option.value}
            checked={value === option.value}
            onChange={(e) => onChange(e.currentTarget.value)}
          />
          {option.label}
        </ToggleButton>
      ))}
    </ButtonGroup>
  );
};

export default ToggleButtonGroup;
