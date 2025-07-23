export default function IntroInput({
  setInputValue,
}: {
  setInputValue: React.Dispatch<React.SetStateAction<string>>;
}) {
  return (
    <input
      type='text'
      className='w-full max-h-[57px] min-h-fit py-[13px] text-center rounded-[12px] text-lg font-semibold 
      border box-border transition-color duration-300 ease-in-out 
      focus:bg-primary2 focus:text-primary focus:outline-none focus:border-primary bg-[#EEEEEE] text-[#939393] hover:bg-primary2 
      flex items-center justify-center'
      placeholder='한글 또는 영어 이름을 입력해주세요'
      onChange={(e) => {
        if (e.target.value.length > 2) {
          setInputValue(e.target.value);
        }
      }}
    />
  );
}
