import Icon from 'utils/Icon';
import profilePicture from 'assets/image/profilePicture.png';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { shimmer, toBase64 } from 'utils/general/shimmer';
import useStore from 'store';

const Profile = () => {
  const { data } = useStore((store) => store.authDetails);
  return (
    <div className='container flex w-full flex-col px-container-base py-[1.875rem]'>
      <div className='relative w-full overflow-hidden rounded-lg border  bg-white shadow-3'>
        <Icon name='profileCover' />
        <div className='flex flex-col md:flex-row'>
          <div className='w-25 absolute bottom-[120px] left-[20px]  rounded-lg bg-white p-[1px] md:bottom-[15px]'>
            <LazyLoadImage
              src={profilePicture}
              alt=''
              className='h-full w-full bg-cover bg-top transition-transform duration-300 ease-in-out group-hover:scale-105'
              placeholderSrc={`data:image/svg+xml;base64,${toBase64(shimmer(700, 475))}`}
            />
          </div>
          <div className='p-5 md:ps-40'>
            <h5 className='mb-2 pt-24 text-2xl font-bold tracking-tight text-gray-500 md:pt-0'>
              {data?.first_name} {data?.last_name}
            </h5>
            <ul className='flex flex-wrap gap-x-2 gap-y-1 md:gap-x-4'>
              <li className='flex items-center'>
                <span>
                  <Icon name='colorFillIcon' />
                </span>
                <p className='ms-1 flex whitespace-nowrap text-[13px] leading-[24px] tracking-[0.15px] text-gray-400 lg:text-[16px]'>
                  UX designer
                </p>
              </li>
              <li className='flex items-center'>
                <span>
                  <Icon name='outlinedLocation' />
                </span>
                <p className='ms-1 flex whitespace-nowrap text-[13px] leading-[24px] tracking-[0.15px] text-gray-400 lg:text-[16px]'>
                  Vatican City
                </p>
              </li>
              <li className='flex items-center'>
                <span>
                  <Icon name='calenderIcon' />
                </span>
                <p className='ms-1 flex whitespace-nowrap text-[13px] leading-[24px] tracking-[0.15px] text-gray-400 lg:text-[16px]'>
                  Joined April 2021
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div></div>
    </div>
  );
};

export default Profile;
