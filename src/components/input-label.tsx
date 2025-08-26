import React, { RefObject } from 'react'
import { Label } from './ui/label';
import { Input } from './ui/input';

interface InputLabelType {
    label: string;
    placeholder: string;
    ref: RefObject<HTMLInputElement | null>
    type?: string;
}

export default function InputLabel({label, placeholder, ref, type = "text"}:InputLabelType) {

    return (
        <div className="grid w-full items-center gap-3">
            <Label className='text-sm leading-[1.25rem] tracking-[-0.28px] font-medium'  htmlFor={label}>{label}</Label>
            <Input type={type} required className='min-h-[50px] rounded-[5px] w-full' ref={ref} id={label} placeholder={placeholder} />
        </div>

    )
}
