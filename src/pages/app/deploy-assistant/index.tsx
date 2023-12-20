import FunkyPagesHero from 'components/general/FunkyPagesHero';
import { useState } from 'react';

import Icon from 'utils/Icon';
import toast from 'helper';

type filterTypes = 'Trending' | 'Recently added' | 'Your Threads' | 'Starred' | 'Interactions';

const generalFilters: filterTypes[] = [
  'Trending',
  'Recently added',
  'Your Threads',
  'Starred',
  'Interactions',
];

const DeployAssistant = () => {
  const [url, setUrl] = useState<string>(
    `<--Global site tag (gtag.js) - Assistant --><script async src="https://www.assistantcreator.com/gtag/js?id=GA_MEASUREMENT_ID"></script><script> window.dataLayer = window.dataLayer || []  function gtag(){dataLayer.push(arguments);}  gtag('js', new Date()); gtag('config', 'GA_MEASUREMENT_ID');</script>`,
  );
  const [currFilter, setCurrFilter] = useState<filterTypes>('Trending');

  return (
    <div className='container flex w-full flex-col gap-6 px-container-base py-[1.875rem]'>
      <FunkyPagesHero description='' title='Deploy Assistant' />
      <p className='font-semibold text-gray-500'>
        Get your trained assistant in your website, copy and paste this code into the "HEAD" section
        of your websites
      </p>

      <p className='text-gray-500'>Your URL</p>
      <div className='flex  w-full flex-col rounded-[0.375rem] bg-white p-4 py-12 md:p-[2rem]'>
        <div className='mb-4 flex items-center gap-4'></div>
        <p className='mb-[1.5rem] text-[14px] leading-[1.5rem] tracking-[0.00938rem] text-secondary-9/60 sm:text-[16px]'>
          {url}
        </p>
        <div className='flex flex-col items-center gap-4 self-end sm:flex-row sm:gap-[3rem]'>
          <div className='flex w-full items-center gap-[0.5rem] sm:w-max'>
            <button
              onClick={() => {
                navigator.clipboard.writeText(url);
                toast.success('Copied to clipboard!');
              }}
              className='flex h-[2.5rem] items-center gap-[0.5rem]  rounded-[0.25rem] px-4 transition-opacity duration-300 ease-in-out hover:opacity-90 active:opacity-100 '
            >
              <Icon
                name='BookmarkIcon'
                svgProp={{
                  className:
                    'text-primary-9 group-hover:-translate-y-[2px] transition-transform ease-in-out duration-300',
                }}
              />
              <span className='text-[14px] leading-[1.5rem] tracking-[0.00938rem]'>Copy</span>
            </button>
          </div>
        </div>
      </div>
      <p className='text-gray-500'>
        Read our
        <span className='font-semibold text-black'> {'  '}API Documentation </span>for more
      </p>
    </div>
  );
};

export default DeployAssistant;
