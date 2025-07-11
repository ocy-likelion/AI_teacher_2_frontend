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
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';

// const data = {
//   id: 'gildongmom',
//   password: '1q2w3e4r',
//   childName: '고길동',
//   childGrade: '8',
// };

export default function OnboardingPage() {
  const [isUser, setIsUser] = useState<boolean>(true);
  const [childGrade, setChildGrade] = useState<string | null>(null);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: { id: '', password: '' },
    mode: 'onSubmit',
  });

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

  const clickHandler = (data: { id: string; password: string }) => {
    console.log(data);

    setIsUser(false);
  };

  const changeGrade = (num: string) => {
    setChildGrade(num);
  };

  const childFormSubmit = (e: FormEvent) => {
    e.preventDefault();
    const childName = new FormData(e.target as HTMLFormElement).get(
      'childName'
    );
    if (childName !== '') {
      const childNameDom = document.getElementById('childName');
      const childGradeDom = document.getElementById('childGrade');
      childNameDom?.classList.add('hidden');
      childGradeDom?.classList.remove('hidden');
    }

    if (childGrade !== null && childGrade !== undefined && childGrade !== '') {
      navigate('/');
    }
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
          onSubmit={handleSubmit((data) => clickHandler(data))}
          className='flex flex-col gap-3 px-[25px]'
        >
          <Label htmlFor='id' className='font-korean-title text-xl font-bold'>
            이름
          </Label>
          <Input
            id='id'
            placeholder='이름을 입력하세요.'
            className='px-[15px] py-[9px] h-[52px] box-border mb-2 border-primary border-[1px] rounded-[12px]'
            {...register('id', { required: 'ID 입력은 필수입니다.' })}
          />
          {/* {errors.id && <span>ID를 입력해주세요</span>} */}
          <Label
            htmlFor='password'
            className='font-korean-title text-xl font-bold'
          >
            비밀번호
          </Label>
          <Input
            type='password'
            id='password'
            placeholder='******'
            className='px-[15px] py-[9px] h-[52px] box-border mb-2 border-primary border-[1px] rounded-[12px]'
            {...register('password', {
              required: '비밀번호 입력은 필수입니다.',
            })}
          />
          {/* {errors.password && <span>비밀번호를 입력해주세요</span>} */}
          <Button type='submit' className='h-[48px]'>
            로그인
          </Button>
        </form>
      )}
      {!isUser && (
        <form id='childInfo' onSubmit={(e) => childFormSubmit(e)}>
          <div
            id='childName'
            className='transform flex flex-col gap-5 px-[25px]'
          >
            <Label
              htmlFor='childName'
              className='font-korean-title text-xl font-bold'
            >
              자녀의 이름을 입력해 주세요.
            </Label>
            <Input
              name='childName'
              id='childName'
              className='px-[15px] py-[9px] h-[52px] box-border mb-2 border-primary border-[1px] rounded-[12px]'
              placeholder='이름을 입력하세요.'
            />
            <Button type='submit' className='h-[48px]'>
              확인
            </Button>
          </div>
          <div
            id='childGrade'
            className='transform flex flex-col gap-5 px-[25px] hidden'
          >
            <Label className='font-korean-title text-xl font-bold'>
              자녀의 학년을 입력해 주세요.
            </Label>
            <Select onValueChange={changeGrade}>
              <SelectTrigger className='min-h-[52px] w-full rounded-[12px]'>
                <SelectValue placeholder='학년을 선택하세요' />
              </SelectTrigger>
              <SelectContent className='rounded-[12px]'>
                {selectItemsLists}
              </SelectContent>
            </Select>
            <Button type='submit' className='h-[48px]'>
              확인
            </Button>
          </div>
        </form>
      )}
    </div>
  );
}
