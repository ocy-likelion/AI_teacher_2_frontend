import Profile from './Profile';

export default function UserSection() {
  return (
    <section className='flex flex-col items-center gap-6'>
      <Profile />
      <div className='flex flex-col items-center gap-1'>
        <p className='title-sm md:title-md'>보호자 이름</p>
        <p className='body-md md:title-sm'>username@example.com</p>
        <p className='label md:body-sm text-gray5 dark:text-gray3 cursor-pointer active:font-semibold active:scale-105 duration-300 ease-in-out underline'>
          프로필 수정
        </p>
      </div>
    </section>
  );
}
