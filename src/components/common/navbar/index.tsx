import { ModeToggle } from "@/components/theme/toggler";

export const Navbar = () => (
  <header className="bg-navbar py-4 shadow-md">
    <div className="container mx-auto flex items-center justify-between px-4">
      {/* Logo */}
      <h1 className="text-xl font-bold">funance.</h1>

      {/* Navigation */}
      <nav>
        <ul className="flex space-x-4 items-center">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Transactions</a>
          </li>
          <li>
            <a href="#">Settings</a>
          </li>
          <li>
            <ModeToggle />
          </li>
        </ul>
      </nav>
    </div>
  </header>
);
