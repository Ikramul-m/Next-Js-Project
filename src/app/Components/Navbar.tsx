"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./UI/navbar-menu";
import { cn } from "./Utils/cn";
import Link from "next/link";

export default function Navbar({ className }: { className?: string }) {
    const [active, setActive] = useState<string | null>(null);
    return (
        <div className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}>
            <Menu setActive={setActive}>
                <Link href={"/"}>
                    <MenuItem setActive={setActive} active={active} item="HOME">
                        {/* test */}
                    </MenuItem>
                </Link>

                <MenuItem setActive={setActive} active={active} item="ABOUT"></MenuItem>

                <MenuItem setActive={setActive} active={active} item="DOMAIN"></MenuItem>

                <MenuItem setActive={setActive} active={active} item="HOSTING"></MenuItem>

                <MenuItem setActive={setActive} active={active} item="BLOG"></MenuItem>

                <MenuItem setActive={setActive} active={active} item="CONTACT"></MenuItem>

                
            </Menu>
        </div>
    )
}