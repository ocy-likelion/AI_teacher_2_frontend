import type { Grades } from '@/utils/constants/grades';

type IntroButtonProps = {
  value: number;
  isSelected: boolean;
  handleClick: (grade: number) => void;
  children: Grades[];
};

export default function IntroButton({
  value,
  isSelected,
  handleClick,
  children,
}: IntroButtonProps) {
  return (
    <button
      key={value}
      onClick={() => handleClick(value)}
      className={`w-full max-h-[57px] min-h-fit py-[13px] text-center rounded-[12px] text-lg font-semibold border dark:border-gray5 box-border
              transition-color duration-300 ease-in-out
                ${isSelected ? 'bg-primary2 text-primary border-primary dark:border-primary dark:bg-primary3' : 'bg-[#EEEEEE] text-[#939393] hover:bg-primary2 dark:bg-gray5 dark:text-white'}
                flex items-center justify-center`}
    >
      {children[value].label}
    </button>
  );
}
