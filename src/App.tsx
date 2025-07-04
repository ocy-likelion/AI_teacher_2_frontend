import { DialogClose } from '@radix-ui/react-dialog';
import { Button } from './components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';

function App() {
  return (
    <>
      <h1>안녕 세상아</h1>
      <h1>Hello World</h1>
      <div>
        <p className="font-korean-title">한국어 폰트 제목 클래스 사용</p>
        <p className="text-primary">한국어 폰트</p>
        <p className="">English font</p>
      </div>

      <section className="flex flex-col items-center gap-2">
        <div className="w-1/2 flex justify-center">
          <Button size="full" className="text-md">
            확인
          </Button>
        </div>
        <div className="w-1/2 flex justify-center">
          <Button size="full" variant="disabled">
            확인
          </Button>
        </div>
        <div className="flex justify-center gap-2">
          <Button size="lg" variant="border">
            취소하기
          </Button>
          <Button size="lg">삭제하기</Button>
        </div>

        <div className="flex justify-center">
          <Dialog>
            <DialogTrigger asChild>
              <Button>모달 열기</Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader className="flex flex-col gap-2 items-center">
                <DialogTitle>정말 삭제하시겠습니까?</DialogTitle>
                <DialogDescription>
                  삭제된 문제는 복구할 수 없어요
                </DialogDescription>
              </DialogHeader>
              <DialogFooter>
                <div className="flex justify-center gap-2">
                  <DialogClose asChild>
                    <Button
                      size="lg"
                      variant="border"
                      onClick={() => console.log('취소')}
                    >
                      취소하기
                    </Button>
                  </DialogClose>
                  <DialogClose asChild>
                    <Button size="lg">삭제하기</Button>
                  </DialogClose>
                </div>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>

        <div className="flex justify-center">
          <Dialog>
            <DialogTrigger asChild>
              <Button>자녀 정보 수정</Button>
            </DialogTrigger>
            <DialogContent className="flex flex-col items-center gap-6">
              <DialogHeader>
                <DialogTitle>자녀 정보 수정</DialogTitle>
              </DialogHeader>
              <div className="w-full flex flex-col items-center gap-2">
                <Input
                  className="w-3/4 border-primary"
                  placeholder="이름을 입력하세요"
                />
                <Select>
                  <SelectTrigger className="w-3/4">
                    <SelectValue placeholder="학년을 선택하세요" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1">초등 1학년</SelectItem>
                    <SelectItem value="2">초등 2학년</SelectItem>
                    <SelectItem value="3">초등 3학년</SelectItem>
                    <SelectItem value="4">초등 4학년</SelectItem>
                    <SelectItem value="5">초등 5학년</SelectItem>
                    <SelectItem value="6">초등 6학년</SelectItem>
                    <SelectItem value="7">중등 1학년</SelectItem>
                    <SelectItem value="8">중등 2학년</SelectItem>
                    <SelectItem value="9">중등 3학년</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <DialogFooter>
                <DialogClose asChild>
                  <Button size="lg">수정하기</Button>
                </DialogClose>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>

        <div className="flex justify-center">
          <Dialog>
            <DialogTrigger asChild>
              <Badge
                className="text-lg cursor-pointer"
                onClick={() => console.log('배지 클릭')}
              >
                # 원의 넓이
              </Badge>
            </DialogTrigger>
            <DialogContent className="flex flex-col items-center gap-6">
              <DialogHeader>
                <DialogTitle># 원의 넓이</DialogTitle>
              </DialogHeader>
              <p className="w-3/4 text-sm">
                설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명
              </p>
              <DialogFooter>
                <DialogClose asChild>
                  <Button size="lg">닫기</Button>
                </DialogClose>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      </section>
    </>
  );
}

export default App;
