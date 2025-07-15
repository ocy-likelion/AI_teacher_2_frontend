import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import type { Concept } from '@/types/concept';
import { DialogClose, DialogTrigger } from '@radix-ui/react-dialog';

type ConceptListProps = {
  concepts: Omit<Concept, 'description'>[];
};

export default function KeywordList({ concepts }: ConceptListProps) {
  return (
    <ul className='flex items-center flex-wrap gap-x-2 gap-y-0.5'>
      {concepts.map((concept) => (
        <Dialog key={concept.id}>
          <DialogTrigger asChild>
            <li className='text-primary cursor-pointer'>#{concept.name}</li>
          </DialogTrigger>
          <DialogContent className='flex flex-col items-center gap-6'>
            <DialogHeader>
              <DialogTitle className='title-sm'># {concept.name}</DialogTitle>
            </DialogHeader>
            <p className='whitespace-pre-wrap body-sm'>description</p>
            <DialogFooter>
              <DialogClose asChild>
                <Button size='sm'>닫기</Button>
              </DialogClose>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      ))}
    </ul>
  );
}
