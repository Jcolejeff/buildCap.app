import { Dialog, DialogContent, DialogTrigger } from 'components/shadcn/dialog';

import { useState } from 'react';
import CreatePageForm from './form';

interface Iprop {
  trigger: JSX.Element;
  triggerClassName?: string;
  title?: string;
}

const EditAssistantModal = ({ trigger, triggerClassName, title }: Iprop) => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <Dialog onOpenChange={(i) => setModalOpen(i)} open={modalOpen}>
      <DialogTrigger className={triggerClassName}>{trigger}</DialogTrigger>
      <DialogContent className='no-scrollbar mt-4 h-full max-w-full overflow-auto  overflow-x-hidden  bg-white px-6 md:w-fit md:!max-w-[1000px] lg:px-[2rem]'>
        <div className='flex w-full flex-col '>
          <div className='flex w-full flex-col gap-[0.87rem]'>
            <CreatePageForm setModalOpen={setModalOpen} />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default EditAssistantModal;
