import React, { RefObject } from 'react'
import { Label } from './ui/label';
import { Input } from './ui/input';

interface InputLabelType {
    label: string;
    placeholder: string;
    ref: RefObject<HTMLInputElement | null>
}

export default function InputLabel({label, placeholder, ref}:InputLabelType) {

    return (
        <div className="grid w-full items-center gap-3">
            <Label className='text-sm leading-[1.25rem] tracking-[-0.28px] font-medium' htmlFor="email">{label}</Label>
            <Input type="text" className='min-h-[50px] rounded-[5px] w-full' ref={ref} id={label} placeholder={placeholder} />
        </div>

    )
}
