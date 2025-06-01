'use client'

import * as React from "react";

import { HeroUIProvider } from "@heroui/react";

function HeroUIProvider({ chidern }) {
    return (
        <HeroUIProvider>
            {chidern}
        </HeroUIProvider>
    );
}