import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";
import Social from "./components/Social";
import Image from "next/image";
import Photo from "./components/Photo";

export default function Home() {
  return (
    // layout for home || hero section
    <main className="h-full">
      {/* // HERO CONTAINER */}
      <div className="container mx-auto h-full">
        <div className="flex flex-col lg:flex-row items-center justify-between lg:pt-8 lg:pb-24">
          {/* TEXT || SELF INTRO */}
          <div className="text-center lg:text-left order-2 lg:order-none">
            {/* Role Position || Experties */}
            <span className="text-2xl">Software Developer</span>
            {/* Name */}
            <h1 className="h1 mb-6">
              Hello, I'm <br />
              <span className="bg-gradient-to-r from-accent to-green-500 text-transparent bg-clip-text">
                Nischal Puri!
              </span>
            </h1>
            {/* Short Intro */}
            <p className="max-w-[500px] mb-9 text-white/80">
              I'm a software developer passionate about transforming ideas into
              engaging digital experiences. With a solid foundation in web
              technologies and hands-on experience from various projects, I'm
              eager to learn and contribute to a dynamic team.
            </p>
            {/* CONTAINER: CV Buttons and Social Icons  */}
            <div className="flex flex-col lg:flex-row gap-8 items-center">
              {/*  CV Download */}
              <Button
                variant="outline"
                size="lg"
                className="uppercase flex gap-2 items-center"
              >
                <span>Download CV</span>
                <FiDownload className="text-xl" />
              </Button>
              <div className="mb-8 lg:mb-0">
                {/* SOCIAL ICONS LINK */}
                <Social
                  containerStyle={"flex gap-6"}
                  iconStyle={
                    "size-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-gradient-to-r hover:from-accent hover:to-green-500 hover:text-primary hover:transition-all hover:duration-500"
                  }
                />
              </div>
            </div>
          </div>
          {/* SELF PHOTO */}
          <div className="order-1 lg:order-none mb-6 lg:mb-0 ">
            <Photo />
          </div>
        </div>
      </div>
    </main>
  );
}
