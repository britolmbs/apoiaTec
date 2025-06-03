"use client"

import * as React from "react"
import * as SheetPrimitive from "@radix-ui/react-dialog"
import {XIcon} from "lucide-react"
import { cn } from "@/lib/utils"

function Sheet({ ...props }: React.ComponentProps<typeof SheetPrimitive.Root>) {
   return <SheetPrimitive.Root data-slot="sheet" {...props} />

}

function SheetTrigger ({
    ...props
}: React.ComponentProps<typeof SheetPrimitive.Trigger>) {
    return <SheetPrimitive.Trigger data-slot="sheet-trigger" {...props} />
}

function sheetClose({...props}:
    React.ComponentProps<typeof SheetPrimitive.Close>) {
        return <SheetPrimitive.Close data-slot="sheet-close" {...props} />
    }

function SheetPortal({...props}:
    React.ComponentProps<typeof SheetPrimitive.Portal>) {
        return <SheetPrimitive.Portal data-slot="sheet-portal" {...props} />
    }

    
