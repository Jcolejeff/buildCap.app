import { LazyLoadImage } from 'react-lazy-load-image-component';
import pointingGirl from 'assets/image/login.jpg?format=webp&imagetools';
import Icon from 'utils/Icon';
import { useNavigate } from 'react-router-dom';
import { Input } from 'components/shadcn/input';
import CONSTANTS from 'constant';

const ForgotPassword = () => {
  const navigate = useNavigate();

  return (
    <div className='flex h-full w-full items-center'>
      <div className='mx-auto w-full bg-white px-4 md:max-w-[calc(96px+494px)] md:px-[3rem]'>
        <div className='mx-auto flex w-full flex-col items-start justify-center'>
          <div
            className='mb-[2.125rem] flex cursor-pointer items-center'
            onClick={() => navigate(`/`)}
          >
            <Icon name='nfmLogo' svgProp={{ className: 'w-[88px] md:w-[120px]' }} />
          </div>
          <div className='mb-[1.5rem] flex w-full flex-col'>
            <h5 className='font-inter text-[16px] font-[700] leading-[32px] tracking-[0.18px] text-primary-9/[0.87]'>
              Forgot Password 🔒
            </h5>
            <p className='text-[14px] leading-[16px] tracking-[0.15px] text-primary-9/[0.60]'>
              Enter your email and we'll send you instructions to reset your password
            </p>
          </div>
          <div className='mb-[1.25rem] flex w-full flex-col gap-4'>
            <Input className='w-full placeholder:text-primary-9/[0.38]' placeholder='email' />
            <button
              onClick={() => navigate(`/${CONSTANTS.ROUTES['verify-email']}?key=forgot-password`)}
              className='mb-[1.75rem] w-full rounded-[8px] bg-primary-1 py-2 text-[15px] font-[500] text-white shadow-3 transition-opacity duration-300 ease-in-out hover:opacity-90'
            >
              <span className='leading-[0.46px]'>SUBMIT</span>
            </button>
            <button
              onClick={() => navigate(`/${CONSTANTS.ROUTES['login']}`)}
              className='flex cursor-pointer items-center gap-1 place-self-center text-[14px] leading-[21px] tracking-[0.15px] text-primary-1 hover:underline'
            >
              <Icon name='arrowBackTailess' svgProp={{ width: 14 }} />
              <span> Back to login</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
