import Image from "next/image";
import { HiMenu } from "react-icons/hi";
import { BsInstagram, BsWhatsapp } from "react-icons/bs";

export default function Header(){
    return(
      <header className="fixed top-0 left-0 w-full h-20 bg-stone-800 px-4 flex justify-between items-center">
        <Image
          src="https://i.imgur.com/sg47pOo.png"
          alt="Logo"
          width={60}
          height={60}
        />
        <div className="flex gap-6 text-white text-4xl">
          <HiMenu />
          <BsInstagram />
          <BsWhatsapp />
        </div>
      </header>
    )
}