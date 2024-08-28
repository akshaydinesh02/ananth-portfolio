import Link from "next/link";

const Header = () => {
  return (
    <div className="text-accent w-[80%] mb-16">
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
          <Link href="/">
            <div>Narrative</div>
          </Link>
          <Link href="/">
            <div>Commercial</div>
          </Link>
          <Link href="/">
            <div>Music Video</div>
          </Link>
        </div>
        <div className="flex w-[30%] justify-between">
          <Link href="/">
            <div>Reel</div>
          </Link>
          <Link href="/">
            <div>Stills</div>
          </Link>
          <Link href="/">
            <div>About</div>
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Header;
