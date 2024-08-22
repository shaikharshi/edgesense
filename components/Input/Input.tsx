import React from 'react'
import { Input } from "@/components/ui/input"


const InputField = (props: any) => {
    return (
        <Input className='px-2 py-6 border border-accent-color' name='{props.name}' type="{props.type}" placeholder="{props.placeholder}" />
    )
}

export default InputField