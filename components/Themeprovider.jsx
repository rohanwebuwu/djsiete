"use client"

import * as React from "react"
import { ThemeProvider as NextThemesProvider } from "next-themes"


export function ThemeProvider(props) {
    const { children, ...rest } = props;
    return <NextThemesProvider {...rest}>{children}</NextThemesProvider>;
}
