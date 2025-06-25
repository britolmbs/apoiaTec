"use client"

import { debounce } from "lodash"
import { ChangeEvent, useRef, useState } from "react"
import { toast } from "sonner"
import { changeDescription } from "../_actions/change-bio"

export function Description ({ initialDescription }: { initialDescription: string }) {
    const [description, setDescription] = useState(initialDescription)
    const [originalDescription] = useState(initialDescription)

    const debouncedSaveDescription = useRef(
        debounce( async (currentDescription : string) => {
            if(currentDescription.trim() === "") {
                setDescription(originalDescription)
                return;
            }
            if (currentDescription !== description) {
                try{
                    const response= await changeDescription({description: currentDescription})
                    
                    if(response.error) {
                        toast.error(response.error)
                        setDescription(currentDescription);
                        return;
                    }
                    toast.success("Descrição alterada com sucesso")
                }catch (err) {
                    setDescription(currentDescription);
                }
            }
        }, 500)
    ).current

    function handleChangeDescription(e: ChangeEvent<HTMLTextAreaElement>) {
        const value = e.target.value;
        setDescription(value);
        debouncedSaveDescription(value)
    }

    return(
        <textarea
        className="text-base bg-gray-50 border border-gray-100 rounded-md outline-none p-2 w-full max-w-2xl my-3 h-40 resize-none text-center"
        value={description}
        onChange={handleChangeDescription}
        />

        
    )
}