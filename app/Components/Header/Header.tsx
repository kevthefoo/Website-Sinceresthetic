import { FaInstagramSquare, FaFacebookSquare, FaLine } from "react-icons/fa";

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
    return (
        <header className="fixed w-full flex border-b-2 items-center justify-between px-32 py-2 h-20 bg-white z-[100]">
            {/* Logo */}
            <div className="flex items-center justify-center gap-2">
                <Image src={logo} alt="logo" height={50} />
                <div className="select-none">
                    <h5 className="text-xl">澄臻美學牙醫診所</h5>
                    <h5 className="text-[13px]">
                        Sinceresthetic Dental Clinic
                    </h5>
                </div>
            </div>

            {/* Navigation Menu */}
            <NavigationMenu>
                <NavigationMenuItem className="list-none">
                    <Link
                        href="https://page.line.me/920oaogn?openQrModal=true"
                        legacyBehavior
                        passHref
                    >
                        <NavigationMenuLink
                            target="_blank"
                            className={navigationMenuTriggerStyle()}
                        >
                            立即預約
                        </NavigationMenuLink>
                    </Link>
                </NavigationMenuItem>
                <NavigationMenuItem className="list-none">
                    <Link href="/about" legacyBehavior passHref>
                        <NavigationMenuLink
                            className={navigationMenuTriggerStyle()}
                        >
                            關於澄臻
                        </NavigationMenuLink>
                    </Link>
                </NavigationMenuItem>

                <NavigationMenuItem className="list-none">
                    <Link href="/services" legacyBehavior passHref>
                        <NavigationMenuLink
                            className={navigationMenuTriggerStyle()}
                        >
                            診療項目
                        </NavigationMenuLink>
                    </Link>
                </NavigationMenuItem>

                <NavigationMenuItem className="list-none">
                    <Link href="/team" legacyBehavior passHref>
                        <NavigationMenuLink
                            className={navigationMenuTriggerStyle()}
                        >
                            醫療團隊
                        </NavigationMenuLink>
                    </Link>
                </NavigationMenuItem>

                <NavigationMenuItem className="list-none">
                    <Link href="/clinic" legacyBehavior passHref>
                        <NavigationMenuLink
                            className={navigationMenuTriggerStyle()}
                        >
                            診所環境
                        </NavigationMenuLink>
                    </Link>
                </NavigationMenuItem>
            </NavigationMenu>

            {/* Social Media Icons */}
            <div className="flex items-center justify-center gap-2">
                <Link
                    href="https://instagram.com/sinceresthetic"
                    target="_blank"
                >
                    <i className="text-xl">
                        <FaInstagramSquare />
                    </i>
                </Link>
                <Link
                    href="https://www.facebook.com/sinceresthetic"
                    target="_blank"
                >
                    <i className="text-xl">
                        <FaFacebookSquare />
                    </i>
                </Link>
                <Link
                    href="https://page.line.me/920oaogn?openQrModal=true"
                    target="_blank"
                >
                    <i className="text-xl">
                        <FaLine />
                    </i>
                </Link>
            </div>
        </header>
    );
};

export default Header;
