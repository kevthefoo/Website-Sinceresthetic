"use client";

import { FaInstagramSquare, FaFacebookSquare, FaLine } from "react-icons/fa";
import { useState } from "react";
import logo from "@/public/images/logo/logo_new.png";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  navigationMenuTriggerStyle,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenu,
} from "@/components/ui/navigation-menu";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed z-[100] flex h-auto w-full flex-col items-center justify-between border-b-2 bg-white px-4 py-2 md:h-20 md:flex-row md:px-32">
      {/* Logo */}
      <Link href="/" className="flex items-center justify-center gap-2">
        <Image src={logo} alt="logo" height={50} />
        <div className="select-none">
          <h5 className="text-xl">澄臻美學牙醫診所</h5>
          <h5 className="text-[13px]">Sinceresthetic Dental Clinic</h5>
        </div>
      </Link>

      {/* Hamburger Menu for Mobile */}
      <button
        className="text-2xl md:hidden"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        ☰
      </button>

      {/* Navigation Menu */}
      <NavigationMenu
        className={`${
          isMenuOpen ? "flex" : "hidden"
        } flex-col items-center md:flex md:flex-row`}
      >
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
      <div className="mt-2 flex items-center justify-center gap-2 md:mt-0">
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
    </header>
  );
};

export default Header;
