"use client"
import { Button } from "@/components/ui/button";
import { createUsername } from "../_actions/create-username";
import { useState } from "react";
import { string } from "zod";

export function UrlPreview(){

    const [error, setError] = useState<null | string>(null)

    async function submitAction(formData: FormData) {
        const username = formData.get("username") as string

        if(username  === "") {
            return;
        }

        const response = await createUsername ({ username })

        if(response.error) {
            setError(response.error)
        }
    }

    return (
        <div className="flex items-center flex-1 p-2 text-gray-100">
        <form className="flex flex-1 flex-col  md:flew-row gap-4 items-start md:items-center"
        action={submitAction}
        >
        <div className="flex items-center justify-center w-full">
             <p>
              {process.env.NEXT_PUBLIC_URL}/creator/
            </p>
            <input type="text"
            className="flex-1 outline-none border h-9 border-gray-300 bg-gray-50 text-black rounded-md px-1"
            placeholder="Digite seu username"
            name="username"
             />
        </div>
        <Button type="submit"
        className="bg-blue-500 hover:bg-blue-600 h-9 w-full md:w-fit text-white px-4 rounded-md cursor-pointer"
        >Salvar</Button>
        {error && <p className="text-red-500">{error}</p>}
        </form>
        </div>
    )
}