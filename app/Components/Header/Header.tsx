import { FaInstagramSquare, FaFacebookSquare, FaLine } from "react-icons/fa";

import logo from "@/public/images/logo_original.png";
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
        <header className="fixed w-full flex border-b-2 items-center justify-between px-32 py-2 h-20">
            <div className="flex items-center justify-center gap-2">
                <Image src={logo} alt="logo" height={50} />
                <div className="select-none">
                    <h2>澄臻美學牙醫診所</h2>
                    <h2>Sinceresthetic Dental Clinic</h2>
                </div>
            </div>
            <NavigationMenu>
                <NavigationMenuItem className="list-none">
                    <Link href="/docs" legacyBehavior passHref>
                        <NavigationMenuLink
                            className={navigationMenuTriggerStyle()}
                        >
                            立即預約
                        </NavigationMenuLink>
                    </Link>
                </NavigationMenuItem>
                <NavigationMenuItem className="list-none">
                    <Link href="/docs" legacyBehavior passHref>
                        <NavigationMenuLink
                            className={navigationMenuTriggerStyle()}
                        >
                            關於澄臻
                        </NavigationMenuLink>
                    </Link>
                </NavigationMenuItem>

                <NavigationMenuItem className="list-none">
                    <Link href="/docs" legacyBehavior passHref>
                        <NavigationMenuLink
                            className={navigationMenuTriggerStyle()}
                        >
                            診療項目
                        </NavigationMenuLink>
                    </Link>
                </NavigationMenuItem>

                <NavigationMenuItem className="list-none">
                    <Link href="/docs" legacyBehavior passHref>
                        <NavigationMenuLink
                            className={navigationMenuTriggerStyle()}
                        >
                            醫療團隊
                        </NavigationMenuLink>
                    </Link>
                </NavigationMenuItem>

                <NavigationMenuItem className="list-none">
                    <Link href="/docs" legacyBehavior passHref>
                        <NavigationMenuLink
                            className={navigationMenuTriggerStyle()}
                        >
                            診所環境
                        </NavigationMenuLink>
                    </Link>
                </NavigationMenuItem>
            </NavigationMenu>
            <div className="flex items-center justify-center gap-2">
                <Link href="https://instagram.com">
                    <i className="text-xl">
                        <FaInstagramSquare />
                    </i>
                </Link>
                <Link href="https://facebook.com">
                    <i className="text-xl">
                        <FaFacebookSquare />
                    </i>
                </Link>
                <Link href="https://line.me/">
                    <i className="text-xl">
                        <FaLine />
                    </i>
                </Link>
            </div>
        </header>
    );
};

export default Header;
