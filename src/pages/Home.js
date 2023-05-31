import Image from "next/image";
import { useMediaQuery } from "@react-hook/media-query";
import Link from "next/link";
// Picture
import Hero from "../Assets/hero.jpg";
import HeroMobile from "../Assets/HeroMobile.jpg";
import LawnMaintenance from "../Assets/lawn1.JPEG";
import LeafRemoval from "../Assets/leaf-removal.jpg";
import MulchMaintenance from "../Assets/lawn4.jpg";
import PropertyCleanup from "../Assets/lawn3.jpg";
//icons
import { SocialIcon } from "react-social-icons";
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import Navbar from "@/components/navbar";

const services = [
  {
    title: "Lawn Maintenance",
    description: "We offer regular lawn mowing and maintenance services.",
    imageUrl: LawnMaintenance,
    link: "/services/lawn-maintenance",
  },
  {
    title: "Leaf Removal",
    description:
      "We can remove all the leaves from your yard and dispose of them properly.",
    imageUrl: LeafRemoval,
    link: "/services/lawn-removal",
  },
  {
    title: "Mulch Maintenance",
    description:
      "We can spread mulch in your garden beds to help retain moisture and suppress weeds.",
    imageUrl: MulchMaintenance,
    link: "/services/mulch-maintenance",
  },
  {
    title: "Property Clean Ups",
    description:
      "We can clean up your entire property, including your garden beds and outdoor spaces.",
    imageUrl: PropertyCleanup,
    link: "/services/property-clean-ups",
  },
];

function Home() {
  const isMobile = useMediaQuery("(max-width: 640px)");

  return (
    <>
      <div className="relative bg-black">
        <Image
          src={isMobile ? HeroMobile : Hero}
          alt="hero picture"
          className=" w-screen h-[350px]"
        />
        <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center mt-[-2rem]">
          <div className=" text-center">
            <h1
              className={`text-4xl font-bold text-black mt-10 ${
                isMobile ? "hidden" : ""
              }`}
            >
              Lawn Care & Full Landscape Maintenance
            </h1>
            <p
              className={`text-xl text-black mt-5 ${isMobile ? "hidden" : ""}`}
            >
              Atlas Lawn Services guarrentees excellent professional service. We
              care for your lawn like its our own!
            </p>
          </div>
          {isMobile && (
            <>
              <div className="flex flex-col">
                <div className=" text-right">
                  <h1 className="text-3xl font-[900] text-white mt-10  pr-2">
                    Lawn Care & Full Landscape Maintenance
                  </h1>
                </div>
                <div className="text-right">
                  <p className="text-base font-semibold text-white mt-5 pl-[10rem] pr-2">
                    Atlas Lawn Services guarrentees excellent professional
                    service.
                  </p>
                </div>
                <div className="text-center">
                  <p className="text-base font-semibold text-white pl-[14rem] pr-2">
                    We care for your lawn like its our own!
                  </p>
                </div>
                <div className=" text-right mt-12 pr-14">
                  <Link href="/Contact">
                    <button className=" bg-cyan-500 text-white py-2 px-4 rounded-3xl">
                      Free Estimate
                    </button>
                  </Link>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
      <div className="bg-black">
        <div className=" text-center">
          <h1 className="text-white font-Lato font-bold text-3xl py-4">
            Our Services
          </h1>
          <p className="text-white font-lato text-lg">
            Let Atlas Lawn Help You Achieve the Lawn of Your Dreams{" "}
          </p>
        </div>
        <div className="flex flex-wrap justify-center">
          {services.map((service) => {
            return (
              <div
                key={service.title}
                className="w-full sm:w-1/2 lg:w-1/4 px-4 py-4 flex flex-col"
              >
                <div className="border border-white-200 shadow-md rounded-lg overflow-hidden hover:shadow-lg flex-grow">
                  <Image
                    width={600}
                    height={68}
                    src={service.imageUrl}
                    alt={service.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="px-4 py-2 h-full">
                    <h3 className="text-lg font-bold mb-2 text-white text-center">
                      {service.title}
                    </h3>
                    <p className="text-white">{service.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="bg-black">
        <h1 className="text-white font-Lato font-bold text-3xl py-2 text-center">
          Contact Us
        </h1>
        <p className=" text-white font-lato text-lg text-center pb-4">
          Let us get you a free estimate
        </p>
        <div className=" flex flex-col space-y-2 mt-4 pb-4 md:flex-row justify-between px-10">
          <div className="flex items-center space-x-5 justify-center">
            <PhoneIcon className="text-[#63e5ff] h-7 w-7 animate-pulse" />
            <p className="text-xl text-white">(830)-837-3949</p>
          </div>
          <div className="flex items-center space-x-5 justify-center">
            <EnvelopeIcon className="text-[#63e5ff] h-7 w-7 animate-pulse" />
            <p className="text-xl text-white">atlaslawnservicesnb@gmail.com</p>
          </div>
          <div className="flex items-center space-x-5 justify-center">
            <MapPinIcon className="text-[#63e5ff] h-7 w-7 animate-pulse" />
            <p className="text-xl text-white">New Braunfels TX</p>
          </div>
        </div>
      </div>
      <div className="bg-white">
        <h3 className="text-black font-Lato font-bold py-2 text-xs text-center">
          Accessibilty Statement
        </h3>
        <p className="text-black font-Lato font-bold pb-2 text-xs text-center">
          ©2023 AtlasLawnServices -- All Rights Reserverd |{" "}
          <button>Privacy Policy</button>{" "}
        </p>
      </div>
    </>
  );
}

export default Home;
