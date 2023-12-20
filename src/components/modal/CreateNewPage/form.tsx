import { Button } from 'components/shadcn/ui/button';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { cn } from 'lib/utils';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
  FormLabel,
  FormDescription,
} from 'components/shadcn/ui/form';
import { Input } from 'components/shadcn/input';
import { Textarea } from 'components/shadcn/textarea';

import { useState, useEffect } from 'react';

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from 'components/shadcn/ui/select';
import { processError } from 'helper/error';
import useStore from 'store';
import { useLocation, useNavigate } from 'react-router-dom';
import CONSTANTS from 'constant';
import API from 'services';
import toast from 'helper';
import Spinner from 'components/shadcn/ui/spinner';

interface Iprops {
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  refetch: any;
}

const FormSchema = z.object({
  name: z.string().min(2, {
    message: 'Please enter a valid name.',
  }),

  website_url: z
    .string({
      required_error: 'page url is required.',
    })
    .url({
      message: 'Please enter a valid url.',
    }),

  description: z
    .string()
    .min(10, {
      message: 'Message must be at least 10 characters.',
    })
    .max(160, {
      message: 'Message must not be longer than 160 characters.',
    }),
});

const CreatNewPageForm = ({ setModalOpen, refetch }: Iprops) => {
  const [formIsLoading, setFormIsLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const app_id = searchParams.get('app_id');

  const {
    setAuthDetails,
    setLoggedIn,
    authDetails,
    appId: currentAppId,
  } = useStore((store) => store);

  const [message, setMessage] = useState<{ text: any; isError: boolean }>({
    text: '',
    isError: false,
  });

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    setFormIsLoading(true);

    try {
      const res = await API.post(`/pages`, {
        title: data.name,
        url: data.website_url,
        description: data.description,
        unique_id: Math.random().toString(36).substr(2, 9),
        is_active: true,
        app_id: Number(app_id ?? currentAppId),
      });
      toast.success('Page Created Successfully');
      setMessage({ text: 'Page created', isError: false });
      refetch();
      setTimeout(() => {
        // navigate(`/${CONSTANTS.ROUTES['my-assistants']}`);
        setModalOpen(false);
      }, 1000);
    } catch (error: any) {
      processError(error);
      setMessage({ text: processError(error), isError: true });
    }
    setFormIsLoading(false);
  }

  return (
    <section className='container relative '>
      <div className=' mx-auto    flex max-w-2xl  flex-col gap-1 rounded-[15px] bg-white  md:p-[1.5rem]'>
        <h5 className='  text-[1.2rem] font-[700] leading-[2rem] tracking-[0.01125rem]'>
          Add new page
        </h5>
        <span className='mb-3 text-sm leading-[1.5rem] tracking-[0.00938rem] text-secondary-2'>
          Our AI automatically crawls each page to understand the features on the page
        </span>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className='flex w-full flex-col gap-4'>
            <FormField
              control={form.control}
              name='name'
              render={({ field }) => (
                <FormItem>
                  <FormLabel className='my-4 text-sm font-semibold text-gray-600'>
                    Page Title
                  </FormLabel>
                  <div className='relative'>
                    <FormControl>
                      <Input
                        className='py-4 text-base transition-all duration-300 ease-in-out  placeholder:text-sm placeholder:text-gray-300  focus:placeholder:text-gray-400'
                        {...field}
                        placeholder='Enter the name of your page'
                      />
                    </FormControl>
                  </div>
                  <FormMessage className='mt-1 text-base' />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name='website_url'
              render={({ field }) => (
                <FormItem className='mt-0'>
                  <FormLabel className='my-4 text-sm font-semibold text-gray-600'>
                    Page URL
                  </FormLabel>
                  <div className='relative'>
                    <FormControl>
                      <Input
                        className='py-4 text-base transition-all duration-300 ease-in-out  placeholder:text-sm  placeholder:text-gray-300  focus:placeholder:text-gray-400'
                        {...field}
                        placeholder='https://example.com'
                      />
                    </FormControl>
                  </div>
                  <FormMessage className='mt-1 text-base' />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name='description'
              render={({ field }) => (
                <FormItem>
                  <FormLabel className='my-4 text-sm font-semibold text-gray-600'>
                    Page Description
                  </FormLabel>
                  <FormControl>
                    <Textarea
                      rows={2}
                      className='mb-[2.5rem] resize-none border-gray-200 px-[0.5rem]  text-sm placeholder:text-secondary-2/[0.38] focus-within:border-0 focus:border-green-300'
                      placeholder='Describe some details about your page, what is does and what it contains'
                      {...field}
                    />
                  </FormControl>
                  {/* <FormDescription className='text-base'>
                    You'll be contacted within 3 work days.
                  </FormDescription> */}
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className=' flex flex-col items-center gap-4'>
              <button
                disabled={formIsLoading}
                type='submit'
                className='group flex w-full items-center justify-center gap-2 rounded-[6px] bg-primary-1 px-3 py-4 transition-all duration-300 ease-in-out hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50'
              >
                <span className='font-[500] leading-[1.5rem] tracking-[0.02875rem] text-white disabled:cursor-not-allowed disabled:opacity-50'>
                  {formIsLoading ? <Spinner /> : 'Create Page'}
                </span>
              </button>

              <span
                className={`${
                  message.isError ? 'text-red-500' : 'text-green-700'
                } text-center text-[16px] transition-opacity duration-300 ease-in-out`}
              >
                {message.text}
              </span>
            </div>
          </form>
        </Form>
      </div>
    </section>
  );
};

export default CreatNewPageForm;
