import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import {
  Bars3Icon,
  XMarkIcon,
  CalculatorIcon,
  ChevronDownIcon,
} from "@heroicons/react/24/outline";
import logo from "../Assets/squareatlas.jpg";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

const navigation = [
  { name: "Home", href: "/" },
  {
    name: "Contact",
    href: "/Contact",
  },
  //service with a drop down menu
  //{ name: "Calendar", href: "#", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  return (
    <Disclosure as="nav" className="bg-black">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-2">
            <div className="relative flex h-32 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-white hover:text-white focus:outline-none">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-8 w-8" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-8 w-8" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-between sm:justify-start">
                <div className="flex flex-shrink-0 items-center mx-auto">
                  <Image
                    className="block h-auto w-auto lg:hidden"
                    src={logo}
                    alt="Your Company"
                  />
                  <Image
                    className="hidden h-auto w-auto lg:block"
                    src={logo}
                    alt="Your Company"
                  />
                </div>
                <div className="hidden sm:ml-8 sm:flex flex-1 justify-center items-center">
                  {navigation.map((item) => (
                    <Link href={item.href} key={item.name}>
                      <span
                        className={classNames(
                          item.current
                            ? "bg-gray-900 text-white"
                            : "text-gray-300 hover:bg-gray-700 hover:text-white",
                          "rounded-md px-3 py-2 text-md font-medium"
                        )}
                        aria-current={item.current ? "page" : undefined}
                      >
                        {item.name}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <Link href="/Contact">
                  <button className="hidden sm:block rounded-md uppercase bg-cyan-500 p-2 text-white text-sm hover:text-white focus:outline-none">
                    Free Estimate
                  </button>
                </Link>
                <button type="button" className="lg:hidden">
                  <CalculatorIcon />
                </button>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pt-2 pb-3">
              {navigation.map((item) => (
                <Link href={item.href} key={item.name}>
                  <button
                    className={classNames(
                      item.current
                        ? "bg-gray-900 text-white"
                        : "text-gray-300 hover:bg-gray-700 hover:text-white",
                      "block rounded-md px-3 py-2 text-base font-medium"
                    )}
                    aria-current={item.current ? "page" : undefined}
                  >
                    {item.name}
                  </button>
                </Link>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
