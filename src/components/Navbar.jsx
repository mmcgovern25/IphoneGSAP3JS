import { appleImg, bagImg, searchImg } from '../utils';
import { navLists } from '../constants';

const Navbar = () => {
  return (
    <header className='w-full py-5 sm:px-10 flex justify-between items-center'>
      <nav className='flex w-full screen-max-width items-center'>
        <div className='max-sm:pl-5 sm:pl-0'>
          <img src={appleImg} alt='Apple' className='w-4 h-5' />
        </div>

        <div className='flex flex-1 justify-center max-sm:hidden'>
          {navLists.map((nav) => (
            <a
              key={nav.name}
              href={nav.url}
              target='_blank'
              rel='noopener noreferrer'
              className='px-5 text-sm cursor-pointer text-gray hover:text-white transition-all'
            >
              {nav.name}
            </a>
          ))}
        </div>

        <div className='flex items-baseline gap-7 max-sm:justify-end max-sm:flex-1 sm:pr-0 pr-5'>
          <img src={searchImg} alt='search' width={18} height={18} />
          <img src={bagImg} alt='bag' width={18} height={18} />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
