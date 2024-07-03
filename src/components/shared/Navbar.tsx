"use client";

import Link from "next/link";

import { FiMenu } from "react-icons/fi";
import { MdClose } from "react-icons/md";
import { MdAdsClick } from "react-icons/md";

import { useState } from "react";
import { Button } from "@nextui-org/react";

import { signOut, useSession } from "next-auth/react";

const Navbar = () => {
  const { data: session }: any = useSession();
    const navLinks = [
        { name: "Home", route: "/" },
        { name: "Add jobs", route: "/addjob" },
        { name: "Bookmark", route: "/bookmark" },
      ];
  const [openMobileMenu, setOpenMobileMenu] =
    useState(false);

  const handleOpenMobileMenu = () => {
    setOpenMobileMenu(!openMobileMenu);

  };
  return (
   <div className="flex justify-center   items-center mx-auto mt-6">
     <div className=" absolute bg-transparent top-4 z-10 m-auto lg:w-[55%] ">
      <div className="max-w-[1280px] mx-auto flex justify-between items-center">
        <Link href={"/"}>
          <div className="flex items-center gap-1">
            <h1 className="text-black font-semibold uppercase text-xl">
            JobFinds
            </h1>

            <MdAdsClick className="text-purple-600 text-3xl" />
          </div>
        </Link>

        <ul className="flex gap-10 items-center max-md:hidden">
          {navLinks.map((link, index) => (
            <Link href={link.route} key={index}>
              <li>{link.name}</li>
            </Link>
          ))}
        </ul>

        <div className="max-md:flex justify-center items-center gap-10">
        {!session ?  (<Link href={"/register"}>
            <Button className="bg-purple-400 font-semibold text-white">Register</Button>
          </Link>)
        :
        
        (
          <>
            
         
            <Button 
             onClick={() => {
              signOut();
            }}
            className="bg-purple-400 font-semibold text-white">logout</Button>
            
          </>
        )
        }
         

          <div
            className="md:hidden text-3xl cursor-pointer text-black"
            onClick={handleOpenMobileMenu}
          >
            {openMobileMenu ? <MdClose /> : <FiMenu />}
          </div>

          {openMobileMenu && (
            <ul className="md:hidden bg-purple-600 absolute top-14 right-5 px-4 py-6 text-center text-white rounded-md flex flex-col gap-3 shadow-md">
              {navLinks.map((link, index) => (
                <Link
                  href={link.route}
                  key={index}
                  onClick={() => setOpenMobileMenu(false)}
                >
                  <li>{link.name}</li>
                </Link>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
   </div>
  );
};

export default Navbar;