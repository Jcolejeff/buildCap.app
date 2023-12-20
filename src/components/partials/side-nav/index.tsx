import CONSTANTS from 'constant';
import usePlan from 'hooks/business-logic/usePlan';
import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import useStore from 'store';
import { ItitleLinks, planTypes, routePathTypes } from 'types';
import Icon from 'utils/Icon';

type ISideNavTitles =
  | 'Customize Avatar'
  | 'View Pages'
  | 'Deploy Assistant'
  | 'Assistant Settings'
  | 'Assets and Templates'
  | 'CV Profile'
  | 'Consultancy'
  | 'Advertise a Service'
  | 'Online Training'
  | 'Master Classes'
  | 'Bi-annual Bootcamps';

interface extendedRouteInterface extends ItitleLinks<ISideNavTitles, routePathTypes> {
  icons: JSX.Element;
}

interface ISideNavLinks {
  discussions: extendedRouteInterface[];
  features: extendedRouteInterface[];
}

export const sideNavLinks: ISideNavLinks = {
  discussions: [
    {
      link: 'customize-your-avatar',
      title: 'Customize Avatar',
      icons: (
        <Icon
          svgProp={{
            width: 22.75,
            height: 22.75,
            className: 'text-current',
          }}
          name='fileIcon'
        />
      ),
    },
    {
      link: 'view-pages',
      title: 'View Pages',
      icons: (
        <Icon
          name='gForumIcon'
          svgProp={{
            width: 22.75,
            height: 22.75,
            className: 'text-current',
          }}
        />
      ),
    },
    {
      link: 'deploy-assistant',
      title: 'Deploy Assistant',
      icons: (
        <Icon
          svgProp={{
            width: 22.75,
            height: 22.75,
            className: 'text-current',
          }}
          name='pForumIcon'
        />
      ),
    },
  ],
  features: [
    {
      link: 'settings',
      title: 'Assistant Settings',
      icons: (
        <Icon
          svgProp={{
            width: 22.75,
            height: 22.75,
            className: 'text-current',
          }}
          name='btsIcon'
        />
      ),
    },

    // {
    //   link: 'cv-profile',
    //   title: 'CV Profile',
    //   icons: (
    //     <Icon
    //       svgProp={{
    //         width: 22.75,
    //         height: 22.75,
    //         className: 'text-current',
    //       }}
    //       name='cvIcon'
    //     />
    //   ),
    // },
  ],
};

const SideNav = () => {
  const [navOpen, setNavOpen] = useState(true);
  const currentUserPlan = useStore((state) => state.plan);
  const navigate = useNavigate();

  const { isAllowed } = usePlan({ currUserPlan: currentUserPlan });

  const location = useLocation();

  return (
    <div
      className={`sticky bottom-0 top-0 ${
        navOpen ? ` w-[260px]` : `w-[86px]`
      } relative flex h-full flex-col py-[1.65rem] shadow-3 transition-[width] duration-300 ease-in-out`}
    >
      {/* <button
        onClick={() => setNavOpen((prev) => !prev)}
        className='absolute -right-[11px] top-[2rem] h-[22px] w-[22px] rounded-[30px] bg-primary-1 ring-[7px] ring-primary-15 z-10'
      /> */}
      <div className='pb-[2.5rem]'>
        <div
          onClick={() => navigate(`/`)}
          className='flex cursor-pointer items-center gap-[0.625rem] px-[1.66rem]'
        >
          <div className='flex items-center'>
            <Icon name='nfmLogo' svgProp={{ width: 34.75, height: 34.75 }} />
          </div>
          <h4
            className={`text-[16px] font-[700] leading-[20px] tracking-[0.15px] text-primary-8 md:text-[19px] md:font-[700] md:leading-[24px] ${
              navOpen ? `opacity-100` : `scale-0 opacity-0`
            }  duration-300`}
          >
            App Assistant
          </h4>
        </div>
      </div>
      <div className='no-scrollbar flex flex-grow flex-col gap-[1.125rem] overflow-y-auto overflow-x-hidden'>
        <div className='px-4 '>
          <div
            onClick={() => navigate(`/${CONSTANTS.ROUTES['my-assistants']}`)}
            className={`flex items-center gap-[0.625rem] px-4 py-[0.625rem] hover:bg-primary-light 
            ${
              isAllowed(`student`) ? `text-secondary-9` : `text-secondary-13`
            } hover:text-primary-1 ${
              location?.pathname === `/${CONSTANTS.ROUTES['my-assistants']}`
                ? `bg-primary-1 !text-white/95`
                : ``
            }
            group cursor-pointer rounded-[6px] transition duration-300 ease-in-out`}
          >
            <div className='flex items-center'>
              {!isAllowed(`student`) ? (
                <Icon
                  svgProp={{
                    width: 22.75,
                    height: 22.75,
                  }}
                  name='padLock'
                />
              ) : (
                <Icon
                  name='dashboardIcon'
                  svgProp={{
                    width: 22.75,
                    height: 22.75,
                  }}
                />
              )}
            </div>
            <h6
              className={`text-[14px] font-[400] leading-[24px] tracking-[0.15px] 
          ${navOpen ? `opacity-100` : `scale-0 opacity-0`}
          duration-300`}
            >
              Back to your assistants
            </h6>
          </div>
        </div>
        <div
          className={`relative h-[1px] w-full bg-gray-200   ${
            navOpen ? `opacity-100` : `opacity-0`
          } transition-opacity duration-300`}
        ></div>
        <div className='mb-[1.125rem] flex flex-col'>
          {sideNavLinks['discussions']?.map((i, idx) => (
            <div className='px-4' key={idx}>
              <div
                onClick={() => navigate(`/${i?.link}`)}
                className={`flex cursor-pointer items-center gap-[0.625rem] rounded-[6px] px-4 py-[0.625rem] text-secondary-9
               hover:bg-primary-light 
                ${location?.pathname === `/${i?.link}` ? `!bg-primary-1 !text-white/95` : ``}
                group
                transition duration-300 ease-in-out hover:text-primary-1`}
              >
                <div className='flex items-center'>{i?.icons}</div>
                <h6
                  className={`whitespace-nowrap text-[14px] font-[400] leading-[24px]  tracking-[0.15px]
              ${navOpen ? `opacity-100` : `scale-0 opacity-0`}
              duration-300`}
                >
                  {i?.title}
                </h6>
              </div>
            </div>
          ))}
        </div>
        <div
          className={`relative h-[1px] w-full bg-gray-200   ${
            navOpen ? `opacity-100` : `opacity-0`
          } transition-opacity duration-300`}
        ></div>
        <div className='mb-[1.125rem] flex  flex-col'>
          {sideNavLinks['features']?.map((i, idx) => (
            <div className='px-4' key={idx}>
              <div
                onClick={() => navigate(`/${i?.link}`)}
                className={`flex cursor-pointer items-center gap-[0.625rem] rounded-[6px] px-4 py-[0.625rem] text-secondary-9
            hover:bg-primary-light 
                ${location?.pathname === `/${i?.link}` ? `bg-primary-1 !text-white/95` : ``}
                group
                transition duration-300 ease-in-out hover:text-primary-1`}
              >
                <div className='flex items-center'>{i?.icons}</div>
                <h6
                  className={`whitespace-nowrap text-[14px] font-[400] leading-[24px]   tracking-[0.15px]
              ${navOpen ? `opacity-100` : `scale-0 opacity-0`}
              duration-300`}
                >
                  {i?.title}
                </h6>
              </div>
            </div>
          ))}
        </div>

        {/* <div className='w-full px-4 '>
          <div
            className={`group h-[60px] w-full  cursor-pointer rounded-[8px] bg-primary-1 px-3 text-white transition duration-300`}
          >
            <ManageSubscriptions
              triggerClassName='w-full h-full'
              trigger={
                <div className='flex h-full w-full items-center gap-[0.8rem]'>
                  <div className='flex items-center'>{planTokens[currentUserPlan]?.icon}</div>
                  <h6
                    className={`whitespace-nowrap text-[16px] font-[600] leading-[24px] tracking-[0.15px] ${
                      navOpen ? `opacity-100` : `scale-0 opacity-0`
                    } duration-300`}
                  >
                    {planTokens[currentUserPlan]?.name}
                  </h6>
                </div>
              }
            />
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default SideNav;
