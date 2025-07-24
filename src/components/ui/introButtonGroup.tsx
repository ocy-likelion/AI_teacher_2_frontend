import { GRADES_NUM, SCHOOL, type Grades } from '@/utils/constants/grades';
import IntroButton from './introButton';

type IntroButtonGroupProps = {
  type: number;
  selectedValue: number;
  onSelect: React.Dispatch<React.SetStateAction<number>>;
  schoolType: number;
};

export default function IntroButtonGroup({
  type,
  selectedValue,
  schoolType,
  onSelect,
}: IntroButtonGroupProps) {
  const handleClick = (grade: number) => {
    if (selectedValue === grade) {
      onSelect(-1);
    } else {
      onSelect(grade);
    }
  };

  const buttonGenerator = (children: Grades[]) => {
    let totalButton: number =
      children.length === 2 ? 2 : schoolType === 0 ? 6 : 3;
    return Array.from({ length: totalButton }, (_, i) => i).map((value) => {
      const isSelected = selectedValue === value;
      return (
        <IntroButton
          key={value}
          value={value}
          isSelected={isSelected}
          handleClick={handleClick}
          children={children[value].label}
        />
      );
    });
  };

  switch (type) {
    case 0:
      return <>{buttonGenerator(SCHOOL)}</>;
    case 1:
      return <>{buttonGenerator(GRADES_NUM)}</>;
    default:
      return <></>;
  }
}
