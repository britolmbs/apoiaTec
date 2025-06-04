"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

function Table({ className, ...props }: React.ComponentProps<"table">) {
    return(
        <div
        data-slot="table-container"
        className="relative w-full overflow-x-auto"
        > 
        <table
        data-slot="table"
        className={cn("w-full caption-bottom text-sm", className)}
        {...props}
        />
        </div>
    )
}
function TableHeader({ className, ...props }: React.ComponentProps<"thead"){
    return(
        <thead
        data-slot="table-header"
        className={cn ("[&_tr]:border-b", className)}
        {...props}
        />
    )
}

function TableBody({ className, ...props}: React.ComponentProps<"tbody">) {
    return(
        <tbody 
        data-slot="table-body"
        className={cn("[&_tr:last-child]:border-0", className)}
        {...props}
        />
    )
}

