"use client"

import InputLabel from '@/components/input-label'
import MaxWidthWrapper from '@/components/max-width-wrapper'
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import React, { useRef } from 'react'

export default function Contact() {
    const nameInputRef = useRef<HTMLInputElement>(null)

    return (
        <div className=' w-full bg-[#7997725E] md:py-8'>
            <MaxWidthWrapper>
                <div className='w-full px-4 bg-white md:rounded-[1.25rem] flex flex-col md:flex-row-reverse md:px-6 py-[42px] md:py-[102px] gap-[50px] lg:gap-[80px] md:gap-[40px]'>
                    <div className='flex md:w-[60%] flex-col gap-[1.688rem] md:gap-4 '>
                        <div className='flex flex-col md:flex-row gap-[1.688rem] md:gap-8'>
                            <InputLabel placeholder='Type your name' label='Name' ref={nameInputRef} />
                            <InputLabel placeholder='Type your email' label='Email' ref={nameInputRef} />
                        </div>
                        <InputLabel placeholder='Type your subject' label='Subject' ref={nameInputRef} />
                        <Textarea placeholder='Type your message here' className='min-h-[120px]' />
                        <Button className='w-full min-h-[50px] font-bold' size={"lg"}>Submit</Button>
                    </div>
                    <div className='md:w-[40%] !text-white w-full flex flex-col bg-primary py-[57px] md:py-10 md:min-h-full items-center  rounded-[15px] md:gap-[60px] gap-[38px]'>
                        <div className='flex flex-col md:gap-[17.2px] text-center gap-3.5'>
                            <h1 className='md:text-[2.188rem] text-[1.688rem] leading-8 font-bold md:leading-10 md:tracking-[0px]'>Get In Touch</h1>
                            <p className='text-[1.25rem] text-base font-medium leading-5.5 tracking-[0px]'>Feel free to drop us a line</p>
                        </div>
                        <div className='flex flex-col md:gap-[60px] gap-[35px] items-center'>
                            <div className='flex gap-2.5'>
                                <svg width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M26.2974 20.2439L19.7099 19.4814L16.5599 22.6314C13.0116 20.8264 10.1274 17.9422 8.32236 14.3939L11.4849 11.2314L10.7224 4.66895H3.83486C3.10986 17.3939 13.5724 27.8564 26.2974 27.1314V20.2439Z" fill="white" />
                                </svg>
                                <p className='text-sm md:text-lg tracking-[0px] font-normal'>+1 (929) 418-8318</p>
                            </div>
                            <div className='flex gap-2.5'>
                               <svg width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M25.0474 5.4707H5.04736C3.67236 5.4707 2.55986 6.5957 2.55986 7.9707L2.54736 22.9707C2.54736 24.3457 3.67236 25.4707 5.04736 25.4707H25.0474C26.4224 25.4707 27.5474 24.3457 27.5474 22.9707V7.9707C27.5474 6.5957 26.4224 5.4707 25.0474 5.4707ZM25.0474 10.4707L15.0474 16.7207L5.04736 10.4707V7.9707L15.0474 14.2207L25.0474 7.9707V10.4707Z" fill="white"/>
</svg>

                                <p className='text-sm md:text-lg tracking-[0px] font-normal'>info@harvesthub.co</p>
                            </div>
                        </div>
                    </div>
                </div>
            </MaxWidthWrapper>
        </div>
    )
}
