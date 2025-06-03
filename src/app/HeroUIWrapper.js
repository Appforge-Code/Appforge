'use client';

import { HeroUIProvider } from '@heroui/react';
import { ToastProvider } from "@heroui/toast";

export default function HeroUIWrapper({ children }) {
    return (
        <HeroUIProvider>
            <ToastProvider />
            {children}
        </HeroUIProvider>)
}
