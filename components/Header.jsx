import Link from "next/link";

// shadcn components
import { Button } from "./ui/button";

// local components
import Nav from "./Nav";
const Header = () => {
  return (
    // HEADER
    <header className="py-8 xl:py-12 text-white ">
      {/* // CONTAINER: LOGO AND NAVIGATION */}
      <div className="container mx-auto flex justify-between items-center">
        {/* // LOGO */}
        <Link href="#">
          <h1 className="text-4xl font-semibold">
            Nisal<span className="text-accent">.</span>
          </h1>
        </Link>

        {/* // DESKTOP NAVIGATION */}
        <div className="hidden xl:flex items-center gap-8">
          <Nav />
          <Link href={"/contact"}>
            <Button>Hire me</Button>
          </Link>
        </div>

        {/* // MOBILE NAVIGATION */}
        <div className="xl:hidden">mobile nav</div>
      </div>
    </header>
  );
};

export default Header;
