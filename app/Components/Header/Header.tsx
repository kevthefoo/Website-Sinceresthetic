"use client";

import { FaInstagramSquare, FaFacebookSquare, FaLine } from "react-icons/fa";

import logo from "@/public/images/logo/logo_new.png";
import Image from "next/image";

import Link from "next/link";
import React from "react";
import { useState, useEffect } from "react";

import {
  navigationMenuTriggerStyle,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenu,
} from "@/components/ui/navigation-menu";

const Header: React.FC = () => {
  const [active, setActive] = useState(false);

  const handleActive = () => {
    setActive(!active);
  };

  useEffect(() => {
    if (active) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [active]);

  return (
    <header className="max-rg_desktop:px-8 fixed z-[100] flex h-20 w-full items-center justify-between border-b-2 bg-white px-32 py-2">
      {/* Logo */}
      <Link href="/" className="flex items-center justify-center gap-2">
        <Image src={logo} alt="logo" height={50} />
        <div className="select-none">
          <h5 className="text-xl">澄臻美學牙醫診所</h5>
          <h5 className="text-[13px]">Sinceresthetic Dental Clinic</h5>
        </div>
      </Link>

      {/* Navigation Menu */}
      <NavigationMenu className="max-lg_tablet:hidden">
        <NavigationMenuItem className="list-none hover:border-b-2 hover:border-gray-500 hover:text-gray-500">
          <Link href="/" legacyBehavior passHref>
            <NavigationMenuLink
              className={`${navigationMenuTriggerStyle()} text-base`}
            >
              首頁
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>

        <NavigationMenuItem className="list-none hover:border-b-2 hover:border-gray-500 hover:text-gray-500">
          <Link href="/about" legacyBehavior passHref>
            <NavigationMenuLink
              className={`${navigationMenuTriggerStyle()} text-base`}
            >
              關於澄臻
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>

        <NavigationMenuItem className="list-none hover:border-b-2 hover:border-gray-500 hover:text-gray-500">
          <Link href="/services" legacyBehavior passHref>
            <NavigationMenuLink
              className={`${navigationMenuTriggerStyle()} text-base`}
            >
              診療項目
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>

        <NavigationMenuItem className="list-none hover:border-b-2 hover:border-gray-500 hover:text-gray-500">
          <Link href="/team" legacyBehavior passHref>
            <NavigationMenuLink
              className={`${navigationMenuTriggerStyle()} text-base`}
            >
              醫療團隊
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem className="list-none hover:border-b-2 hover:border-gray-500 hover:text-gray-500">
          <Link
            href="https://page.line.me/920oaogn?openQrModal=true"
            legacyBehavior
            passHref
          >
            <NavigationMenuLink
              target="_blank"
              className={`${navigationMenuTriggerStyle()} text-base`}
            >
              立即預約
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenu>

      {/* Social Media Icons */}
      <div className="max-lg_tablet:hidden flex items-center justify-center gap-2">
        <Link href="https://instagram.com/sinceresthetic" target="_blank">
          <i className="text-2xl">
            <FaInstagramSquare />
          </i>
        </Link>
        <Link href="https://www.facebook.com/sinceresthetic" target="_blank">
          <i className="text-2xl">
            <FaFacebookSquare />
          </i>
        </Link>
        <Link
          href="https://page.line.me/920oaogn?openQrModal=true"
          target="_blank"
        >
          <i className="text-2xl">
            <FaLine />
          </i>
        </Link>
      </div>

      {/* Mobile Menu Toggle Button*/}
      <div
        className="max-lg_tablet:flex absolute right-8 top-[50%] z-50 hidden h-7 w-7 translate-y-[-50%] cursor-pointer flex-col justify-between"
        onClick={() => {
          handleActive();
        }}
      >
        <div
          className={
            active
              ? "absolute left-0 top-1/2 h-1 w-full rotate-45 bg-black transition ease-in-out"
              : "h-1 w-full bg-black transition ease-in-out"
          }
        ></div>
        <div
          className={
            active ? "" : "h-1 w-full bg-black transition delay-150 ease-in-out"
          }
        ></div>
        <div
          className={
            active
              ? "absolute left-0 top-1/2 h-1 w-full rotate-[-45deg] bg-black transition ease-in-out"
              : "h-1 w-full bg-black transition ease-in-out"
          }
        ></div>
      </div>

      {/* Mobile Menu*/}
      <div
        className={
          active
            ? "fixed left-0 top-0 z-30 flex h-screen w-full flex-col items-center justify-start bg-white pt-[300px] transition duration-700 ease-linear"
            : "fixed left-full top-0 z-30 flex h-screen w-full items-center justify-center bg-white transition duration-700 ease-linear"
        }
      >
        <nav className={active ? "" : ""}>
          <ul className="flex flex-col justify-center gap-8 text-center">
            <li className="relative before:absolute before:right-[95px] before:top-[10px] before:h-[1px] before:w-16 before:bg-black before:content-[''] after:absolute after:left-[95px] after:top-[10px] after:h-[1px] after:w-16 after:bg-black after:content-['']">
              <Link href="/" onClick={() => setActive(false)}>
                首頁
              </Link>
            </li>
            <li className="relative before:absolute before:right-[95px] before:top-[10px] before:h-[1px] before:w-16 before:bg-black before:content-[''] after:absolute after:left-[95px] after:top-[10px] after:h-[1px] after:w-16 after:bg-black after:content-['']">
              <Link href="/about" onClick={() => setActive(false)}>
                關於澄臻
              </Link>
            </li>
            <li className="relative before:absolute before:right-[95px] before:top-[10px] before:h-[1px] before:w-16 before:bg-black before:content-[''] after:absolute after:left-[95px] after:top-[10px] after:h-[1px] after:w-16 after:bg-black after:content-['']">
              <Link href="/services" onClick={() => setActive(false)}>
                診療項目
              </Link>
            </li>
            <li className="relative before:absolute before:right-[95px] before:top-[10px] before:h-[1px] before:w-16 before:bg-black before:content-[''] after:absolute after:left-[95px] after:top-[10px] after:h-[1px] after:w-16 after:bg-black after:content-['']">
              <Link href="/team" onClick={() => setActive(false)}>
                醫療團隊
              </Link>
            </li>
            <li className="relative before:absolute before:right-[95px] before:top-[10px] before:h-[1px] before:w-16 before:bg-black before:content-[''] after:absolute after:left-[95px] after:top-[10px] after:h-[1px] after:w-16 after:bg-black after:content-['']">
              <Link
                href="https://page.line.me/920oaogn?openQrModal=true"
                target="_blank"
                onClick={() => setActive(false)}
              >
                立即預約
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
