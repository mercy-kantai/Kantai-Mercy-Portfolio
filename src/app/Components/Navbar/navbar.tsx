import Link from 'next/link';
const Header = () => {
    return (
      <header className="bg-green-900 text-white shadow-md sticky top-0 z-50 ">
        <nav className="container mx-auto p-4">
          <ul className="flex justify-between">
            <li><Link href="/">Home</Link></li>
            <li><Link href="#about">About</Link></li>
            <li><Link href="#services">Services</Link></li>
            <li><Link href="#portfolio">Project</Link></li>
            <li><Link href="#contact">Contact</Link></li>
          </ul>
        </nav>
      </header>
    );
  };
  export default Header;