import React from "react";
import Link from "next/link";

import { BsFillTelephoneFill } from "react-icons/bs";
import { FaLocationDot } from "react-icons/fa6";

import {
  navigationMenuTriggerStyle,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenu,
} from "@/components/ui/navigation-menu";

const currentYear = new Date().getFullYear();

const Footer: React.FC = () => {
  return (
    <footer className="relative flex flex-col items-center justify-end border-t-2 pb-2 pt-8">
      {/* Navigation Menu */}
      <NavigationMenu className="mb-4">
        <ul>
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
        </ul>
      </NavigationMenu>

      <div className="absolute right-[200px] top-[50%] flex translate-y-[-50%] flex-col items-start justify-center gap-2 max-lg_desktop:static max-lg_desktop:mb-4 max-lg_desktop:translate-y-[0] max-lg_desktop:flex-row max-lg_desktop:gap-4 max-rg_mobile:flex-col max-rg_mobile:gap-2">
        <div className="flex items-center justify-center">
          <FaLocationDot />
          <Link
            href="https://maps.app.goo.gl/KR8gV53LadBkzzG4A"
            target="_blank"
            className="hover:underline"
          >
            <h3>地址: 台中北屯區文心路四段151號</h3>
          </Link>
        </div>

        <div className="flex items-center justify-center">
          <BsFillTelephoneFill />
          <h3>電話: (04)-22355670</h3>
        </div>
      </div>

      <div>Copyright ©{currentYear} 澄臻美學牙醫診所</div>
    </footer>
  );
};

export default Footer;
