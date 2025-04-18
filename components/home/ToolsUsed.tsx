"use client";

import React, { forwardRef, useRef } from "react";
import { cn } from "@/lib/utils";
import { AnimatedBeam } from "@/components/magicui/animated-beam"; // You might not need this for just the tools
import { SiTrello, SiFlutter, SiMessenger, SiNotion } from "react-icons/si";
import { PiFigmaLogo } from "react-icons/pi";
import { FaSlack, FaGithub } from "react-icons/fa";
import { VscCode } from "react-icons/vsc";

const Circle = forwardRef<
    HTMLDivElement,
    { className?: string; children?: React.ReactNode }
>(({ className, children }, ref) => {
    return (
        <div
            ref={ref}
            className={cn(
                "z-10 flex size-14 items-center justify-center rounded-full border-2 border-border p-4 shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)]",
                className,
            )}
        >
            {children}
        </div>
    );
});

Circle.displayName = "Circle";

export function ToolsUsed() {
    const containerRef = useRef<HTMLDivElement>(null);
    const figmaRef = useRef<HTMLDivElement>(null);
    const trelloRef = useRef<HTMLDivElement>(null);
    const slackRef = useRef<HTMLDivElement>(null);
    const githubRef = useRef<HTMLDivElement>(null);
    const messengerRef = useRef<HTMLDivElement>(null);
    const flutterRef = useRef<HTMLDivElement>(null);
    const notionRef = useRef<HTMLDivElement>(null);
    const vscodeRef = useRef<HTMLDivElement>(null);

    return (
        <div
            className={cn(
                "relative flex w-full items-center justify-center overflow-hidden py-12",
            )}
            ref={containerRef}
        >
            <div className="flex flex-wrap justify-center gap-8 max-w-3xl">
                <Circle ref={figmaRef} className="bg-pink-100 text-pink-600">
                    <PiFigmaLogo className="w-8 h-8" />
                </Circle>
                <Circle ref={trelloRef} className="bg-blue-100 text-blue-600">
                    <SiTrello className="w-8 h-8" />
                </Circle>
                <Circle ref={slackRef} className="bg-purple-100 text-purple-600">
                    <FaSlack className="w-8 h-8" />
                </Circle>
                <Circle ref={githubRef} className="bg-gray-200 text-gray-800">
                    <FaGithub className="w-8 h-8" />
                </Circle>
                <Circle ref={messengerRef} className="bg-green-100 text-green-600">
                    <SiMessenger className="w-8 h-8" />
                </Circle>
                <Circle ref={flutterRef} className="bg-teal-100 text-teal-600">
                    <SiFlutter className="w-8 h-8" />
                </Circle>
                <Circle ref={notionRef} className="bg-indigo-100 text-indigo-600">
                    <SiNotion className="w-8 h-8" />
                </Circle>
                <Circle ref={vscodeRef} className="bg-blue-200 text-blue-700">
                    <VscCode className="w-8 h-8" />
                </Circle>
                {/* Add more tools here as needed */}
            </div>
        </div>
    );
}