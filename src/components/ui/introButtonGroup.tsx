import { GRADES_NUM, SCHOOL, type Grades } from '@/utils/constants/grades';
import { useState } from 'react';
import IntroButton from './introButton';

type IntroButtonGroupProps = {
  type: number;
  selectedValue: number | null;
  onSelect: React.Dispatch<React.SetStateAction<number | null>>;
};

export default function IntroButtonGroup({
  type,
  selectedValue,
  onSelect,
}: IntroButtonGroupProps) {
  const handleClick = (grade: number) => {
    if (selectedValue === grade) {
      onSelect(null);
    } else {
      onSelect(grade);
    }
  };

  const buttonGenerator = (children: Grades[], gradeLength: number) => {
    return Array.from({ length: gradeLength }, (_, i) => i).map((value) => {
      const isSelected = selectedValue === value;
      return (
        <IntroButton
          value={value}
          isSelected={isSelected}
          handleClick={handleClick}
          children={children}
        />
      );
    });
  };

  switch (type) {
    case 0:
      return <>{buttonGenerator(SCHOOL, SCHOOL.length)}</>;
    case 1:
      return <>{buttonGenerator(GRADES_NUM, GRADES_NUM.length)}</>;
    default:
      return <></>;
  }
}
