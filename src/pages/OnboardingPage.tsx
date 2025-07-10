import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { selectItemsLists } from '@/features/users/components/SelectItemsLists';
import { useEffect, useState, type FormEvent } from 'react';

// const data = [
//   {
//     id: 'gildongmom',
//     password: '1q2w3e4r',
//     childName: '고길동',
//   },
// ];

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

  const clickHandler = (e: FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    if (!!formData.get('id') && !!formData.get('password')) {
      const idInput = formData.get('id')!.toString();
      const passwordInput = formData.get('password')!.toString();
      setId(idInput);
      setPassword(passwordInput);
      console.log(id, password);
    }

    console.log(id, password);

    //로그인 관련 이벤트

    setIsUser(false);

    console.log(isUser);
    console.log(introMessage);
  };

  return (
    <div className='w-full h-full mt-[50px]'>
      <div className='min-h-[115px] px-6 mb-[10vh]'>
        <img
          src='/images/Logo_Img_noBg.svg'
          alt=''
          className='aspect-square size-[49px]'
        />
        <h1 className='font-korean-title font-medium text-3xl'>
          {introMessage}
        </h1>
      </div>
      {!!isUser && (
        <form
          id='login'
          onSubmit={(e) => clickHandler(e)}
          className='flex flex-col gap-3 px-[25px]'
        >
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
        <form id='childInfo' className=''>
          <div className='transform flex flex-col gap-5 px-[25px]'>
            <Label
              htmlFor='childName'
              className='font-korean-title text-xl font-bold'
            >
              자녀의 이름을 입력해 주세요.
            </Label>
            <Input
              name='chileName'
              id='childName'
              className='px-[15px] py-[9px] h-[52px] box-border mb-2 border-primary border-[1px]'
              placeholder='이름을 입력하세요.'
            />
            <Button type='submit'>확인</Button>
          </div>
          <div className='transform flex-col gap-5 px-[25px] hidden'>
            <Label className='font-korean-title text-xl font-bold'>
              자녀의 학년을 입력해 주세요.
            </Label>
            <Select>
              <SelectTrigger className='w-3/4'>
                <SelectValue placeholder='학년을 선택하세요' />
              </SelectTrigger>
              <SelectContent>{selectItemsLists}</SelectContent>
            </Select>
            <Button type='submit'>확인</Button>
          </div>
        </form>
      )}
    </div>
  );
}
