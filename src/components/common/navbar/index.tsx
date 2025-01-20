import { ModeToggle } from '@/components/theme/toggler';

export const Navbar = () => (
  <header className='bg-background border-b border-b-primary py-4'>
    <div className='container mx-auto flex items-center justify-between px-4'>
      {/* Logo */}
      <h1 className='text-xl font-bold'>funance.</h1>

      {/* Navigation */}
      <nav>
        <ul className='flex space-x-4 items-center'>
          <li>
            <a href='#' className='hover:underline'>
              Home
            </a>
          </li>
          <li>
            <a href='#' className='hover:underline'>
              Transactions
            </a>
          </li>
          <li>
            <a href='#' className='hover:underline'>
              Settings
            </a>
          </li>
          <li>
            <ModeToggle />
          </li>
        </ul>
      </nav>
    </div>
  </header>
);
