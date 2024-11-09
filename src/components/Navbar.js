import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-gray-900 text-white py-4">
      <div className="container mx-auto flex justify-center items-center">
        <div className="flex space-x-8">
          <Link href="/"><p className="text-white">Home</p></Link>
          <Link href="/Projects"><p className="text-white">About</p></Link>
          <Link href="https://github.com/itzmatt019"><p className="text-white">Github</p></Link>
          <Link href="https://x.com/itzmatt019"><p className="text-white">X</p></Link>
        </div>
      </div>
    </nav>
  );
}
//