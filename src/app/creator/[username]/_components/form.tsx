'use client'

import { z } from "zod"
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { Form, FormControl, FormMessage, FormField, FormItem, FormLabel } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"

const formSchema = z.object({
    name: z.string().min(1, "O nome é obrigatório"),
    message: z.string().min(1, "A Menssage é obrigatória"),
    price: z.enum(["15", "25", "35"], {
        required_error: "O valor é Obrigatório",
    })
})

type FormData = z.infer<typeof formSchema>

export function FormDonate() {

    const form = useForm<FormData>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            message: "",
            price: "15",
        },
    })

    function onSubmit(values: z.infer<typeof formSchema>) {

    }

    return (
       <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 mt-5">
            <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
                <FormItem>
                    <FormLabel>Nome</FormLabel>
                    <FormControl>
                        <Input placeholder="Digite Seu Nome" {...field}
                        className="bg-white" />
                    </FormControl>
                    
                    <FormMessage />
                </FormItem>
            )}
            />

            <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
                <FormItem>
                    <FormLabel>Mensagem</FormLabel>
                    <FormControl>
                        <Textarea
                        placeholder="Digite sua menssagem"
                        {...field}
                        className="bg-white h-32 resize-none" />
                    </FormControl>
                </FormItem>
            )} />

            <FormField
            control={form.control}
            name="price"
            render={({ field }) => (
                <FormItem>
                    <FormLabel>Valor da doação</FormLabel>
                    <FormControl>
                        <RadioGroup
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                        className="flex items-center gap-3"
                        >
                           {["15", "25", "35"].map((value) => (
                            <div key={value} className="flex items-center gap-2">
                                <RadioGroupItem value={value} id={value} />
                                <Label className="text-lg" htmlFor={value}>R$ {value}</Label>
                            </div>
                           ))} 

                        </RadioGroup>
                    </FormControl>
                </FormItem>
            )} />

            <Button type="submit">Fazer Doação</Button>

        </form>
        </Form>
    )
}