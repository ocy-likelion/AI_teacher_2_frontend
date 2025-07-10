import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/Label';
import {
  Select,
  SelectContent,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { selectItemsLists } from '@/features/users/components/SelectItemsLists';
import { useEffect, useState } from 'react';

export default function OnboardingPage() {
  const [isUser, setIsUser] = useState<boolean>(true);
  const [id, setId] = useState<FormDataEntryValue | null>();
  const [password, setPassword] = useState<FormDataEntryValue | null>('');

  useEffect(() => {}, [isUser]);
  var introMessage = isUser ? (
    <>
      <span className='text-primary'>일타</span>에 오신 걸 환영합니다!
    </>
  ) : (
    <>
      안녕하세요!
      <br />
      <span className='text-primary'>일타</span>는 처음 이용하시는 군요?{' '}
    </>
  );

  const clickHandler = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const idInput = formData.get('id');
    const passwordInput = formData.get('password');
    setId(idInput);
    setPassword(passwordInput);

    console.log(id, password);

    //로그인 관련 이벤트

    setIsUser(true);
  };

  return (
    <div className='w-full h-full mt-[50px] mb-[10vh]'>
      <div className='min-h-[115px] px-6'>
        <img
          src='/images/Logo_Img_noBg.svg'
          alt=''
          className='aspect-square size-[49px]'
        />
        <h1 className='font-korean-title font-medium text-3xl'>
          {introMessage}
        </h1>
      </div>
      {isUser && (
        <form onSubmit={clickHandler} className='flex flex-col gap-3 px-[25px]'>
          <Label htmlFor='id'>이름</Label>
          <Input
            name='id'
            id='id'
            placeholder='이름을 입력하세요.'
            className='px-[15px] py-[9px] box-border mb-2 border-primary border-[1px]'
            onChange={(e) => {
              setId(e.target.value);
            }}
          />
          <Label htmlFor='password'>비밀번호</Label>
          <Input
            type='password'
            name='password'
            id='password'
            placeholder='******'
            className='px-[15px] py-[9px] box-border mb-2 border-primary border-[1px]'
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <Button type='submit'>로그인</Button>
        </form>
      )}
      {!isUser && (
        <form className='flex flex-col gap-3 px-[25px]'>
          <div className='transform'>
            <Label htmlFor='childName'>자녀의 이름을 입력해 주세요.</Label>
            <Input
              name='chileName'
              id='childName'
              placeholder='이름을 입력하세요.'
            />
            <Button>확인</Button>
          </div>
          <div className='hidden'>
            <Label>자녀의 학년을 입력해 주세요.</Label>
            <Select>
              <SelectTrigger className='w-3/4'>
                <SelectValue placeholder='학년을 선택하세요' />
              </SelectTrigger>
              <SelectContent>{selectItemsLists}</SelectContent>
            </Select>
            <Button>확인</Button>
          </div>
        </form>
      )}
    </div>
  );
}
