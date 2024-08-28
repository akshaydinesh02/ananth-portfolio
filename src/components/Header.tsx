import Link from "next/link";
import {
  Menubar,
  MenubarTrigger,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
} from "./ui/menubar";

const Header = () => {
  return (
    <div className="text-accent w-[80%] mb-8">
      <div className="mb-8">
        <Link href="/">
          <div className="flex flex-col items-center justify-center font-mainHeader uppercase">
            <h1 className="text-5xl tracking-normal">
              Ananth Bharadwaj Munikoti
            </h1>
            <p className="text-lg tracking-wider">Director of Photography</p>
          </div>
        </Link>
      </div>
      <nav className="flex items-center justify-between w-full text-md">
        <div className="flex w-[30%] justify-between">
          <Link href="/narrative">
            <div>Narrative</div>
          </Link>
          <Link href="/commercial">
            <div>Commercial & Music Video</div>
          </Link>
        </div>
        <div className="flex w-[30%] justify-between">
          <Menubar>
            <MenubarMenu>
              <MenubarTrigger className="cursor-pointer">Reel</MenubarTrigger>
              <MenubarContent className="text-accent bg-primary">
                <MenubarItem className="bg-primary cursor-pointer border-b">
                  Narrative
                </MenubarItem>
                <MenubarItem className="bg-primary cursor-pointer">
                  Commercial
                </MenubarItem>
              </MenubarContent>
            </MenubarMenu>
          </Menubar>

          <Menubar>
            <MenubarMenu>
              <MenubarTrigger className="cursor-pointer">Stills</MenubarTrigger>
              <MenubarContent className="text-accent bg-primary">
                <MenubarItem className="bg-primary cursor-pointer border-b">
                  Landscape / Nature
                </MenubarItem>
                <MenubarItem className="bg-primary cursor-pointer">
                  <Link href="/stills/commercial">Commercial</Link>
                </MenubarItem>
              </MenubarContent>
            </MenubarMenu>
          </Menubar>

          <Link href="/about">
            <div>About</div>
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Header;
