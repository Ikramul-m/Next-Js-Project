"use client";
import React, { useState } from "react";
import { Menu, MenuItem } from "./UI/navbar-menu";
import { cn } from "./Utils/cn";
import Link from "next/link";

export default function Navbar({ className }: { className?: string }) {
    const [active, setActive] = useState<string | null>(null);
    return (
        <div className={cn("fixed top-12 right-9 max-w-2xl mx-auto z-50 bg-transparent", className)}>
            <Menu setActive={setActive}>
                <Link href={"/"}>
                    <MenuItem setActive={setActive} active={active} item="HOME" >
                        {/* test */}
                    </MenuItem>
                </Link>

                <Link href={"#"}>
                    <MenuItem setActive={setActive} active={active} item="ABOUT"></MenuItem>
                </Link>

                <Link href={"#"}>
                    <MenuItem setActive={setActive} active={active} item="DOMAIN"></MenuItem>
                </Link>
                <Link href={"#"}>
                    <MenuItem setActive={setActive} active={active} item="HOSTING"></MenuItem>
                </Link>

                <Link href={"#"}>
                    <MenuItem setActive={setActive} active={active} item="BLOG"></MenuItem>
                </Link>

                <Link href={"#"}>
                    <MenuItem setActive={setActive} active={active} item="CONTACT"></MenuItem>
                </Link>

            </Menu>
        </div>
    )
}