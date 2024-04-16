import Image from "next/image";
import Link from "next/link";

import { NavLinks } from "@/constant";

const Navbar = () => {
  return (
    <nav className='flex justify-between items-center py-5'>
      <Link href='/'>
        <Image
          src='/logoipsum-297.svg'
          width={116}
          height={43}
          alt='logo'
        />
      </Link>
      <ul className='xl:flex hidden text-small gap-7'>
        {NavLinks.map((link) => (
          <Link href={link.href} key={link.text}>
            {link.text}
          </Link>
        ))}
      </ul>
    </nav>
  )
}

export default Navbar