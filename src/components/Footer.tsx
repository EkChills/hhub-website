import React from 'react'
import MaxWidthWrapper from './max-width-wrapper'
import Image from 'next/image'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { buttonVariants } from './ui/button'

export default function Footer() {
    return (
        <div className='w-full bg-[#1F511412]'>
            <MaxWidthWrapper className='w-full flex flex-col md:min-h-[262px] items-center md:flex-row md:justify-between gap-8 p-4 pt-[40px] md:pt-0'>
                <div>
                    <div className='flex items-center'>
                        <Image width={92} height={84} alt='logo' src={"/dashboard-logo.svg"} />
                        <p className='text-[#1F5114] font-bold text-[1.063rem] leading-[1.25rem] tracking-[0px]'>Harvest Hub</p>
                    </div>
                    <div className='flex items-center ml-[45px] mt-[17px] gap-4 md:ml-[25px]' id='socials'>
                        <Image width={21} height={23} alt='facebook' src={"/facebook.svg"} />
                        <Image width={21} height={23} alt='instagram' src={"/insta.svg"} />
                        <Image width={21} height={23} alt='linkedIn' src={"/linkedin.svg"} />
                        <Image width={21} height={23} alt='TikTok' src={"/tiktok.svg"} />
                    </div>
                </div>
                <div className='flex flex-col items-center text-center md:items-start md:text-left gap-1.5 '>
                    <p className='text-base text-[#1F5114] font-semibold leading-5.5 tracking-[0px]'>Company</p>
                    <p className='text-base text-[#202020] leading-5.5 tracking-[0px] font-normal'>About</p>
                    <p className='text-base text-[#202020] leading-5.5 tracking-[0px] font-normal'>Our Vision</p>
                    <p className='text-base text-[#202020] leading-5.5 tracking-[0px] font-normal'>Our Mission</p>
                </div>
                <div className='flex flex-col items-center text-center md:items-start md:text-left gap-1.5 '>
                    <p className='text-base text-[#1F5114] font-semibold leading-5.5 tracking-[0px]'>Legal</p>
                    <p className='text-base text-[#202020] leading-5.5 tracking-[0px] font-normal'>Terms & Conditions</p>
                    <p className='text-base text-[#202020] leading-5.5 tracking-[0px] font-normal'>Privacy</p>
                </div>
                <div className='flex flex-col'>
                    <div className='flex flex-col items-center text-center md:items-start md:text-left gap-1.5 '>
                        <p className='text-base text-[#1F5114] font-semibold leading-5.5 tracking-[0px]'>Contract</p>
                        <p className='text-base text-[#202020] leading-5.5 tracking-[0px] font-normal'><span className='font-medium '>Email: </span>info@harvesthub.co</p>
                        <p className='text-base text-[#202020] leading-5.5 tracking-[0px] font-normal'><span className='font-medium '>Call: </span>+1 (929) 418-8318</p>
                        <div className='flex flex-col'>
                    <div className='flex flex-col items-center text-center md:items-start md:text-left gap-1.5 mt-2'>
                        <p className='text-base text-[#1F5114] font-semibold leading-5.5 tracking-[0px]'>Download Our Mobile Application</p>
                        <div className='flex gap-[0.791rem] justify-center md:justify-start flex-col md:flex-row'>
                            <Link href={"#"} className={cn(buttonVariants({ className: "gap-[9.76px] md:gap-[11px] bg-[#1C1B1B] items-center" }))}>
                                <svg width="25" height="29" viewBox="0 0 25 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M20.4393 27.4107C18.918 28.8855 17.257 28.6526 15.6581 27.9541C13.966 27.24 12.4136 27.2089 10.6284 27.9541C8.393 28.9165 7.21321 28.6371 5.87818 27.4107C-1.69734 19.6024 -0.579639 7.71127 8.02044 7.27661C10.1161 7.38528 11.5753 8.42536 12.8017 8.5185C14.6335 8.14593 16.3877 7.0748 18.3436 7.21452C20.6877 7.4008 22.4574 8.33222 23.6217 10.0088C18.7783 12.9117 19.927 19.2919 24.3668 21.0771C23.482 23.4056 22.3332 25.7187 20.4238 27.4263L20.4393 27.4107ZM12.6465 7.18347C12.4136 3.72171 15.2234 0.865362 18.4523 0.585938C18.9025 4.59103 14.8198 7.57156 12.6465 7.18347Z" fill="white" />
                                </svg>

                                <p className='text-white tracking-[0px] font-bold text-[0.766rem] leading-[1.054rem] md:text-sm md:leading-5'>Get On iPhone</p>
                            </Link>
                            <Link href={"#"} className={cn(buttonVariants({ className: "gap-[9.76px] md:gap-[11px] bg-[#1C1B1B] items-center" }))}>
                                <svg width="25" height="28" viewBox="0 0 25 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clipPath="url(#clip0_3576_1702)">
                                        <path d="M11.9092 13.4209L0.538208 25.3343C0.665903 25.7868 0.895375 26.2042 1.20908 26.5544C1.52279 26.9047 1.91243 27.1786 2.34821 27.3552C2.78399 27.5317 3.25438 27.6064 3.72343 27.5733C4.19247 27.5402 4.64774 27.4004 5.05444 27.1644L17.849 19.8775L11.9092 13.4209Z" fill="#EA4335" />
                                        <path d="M23.4071 11.3957L17.8743 8.22656L11.6465 13.6917L17.8997 19.8602L23.3903 16.7251C23.8767 16.4704 24.2841 16.0874 24.5684 15.6177C24.8527 15.148 25.0029 14.6094 25.0029 14.0603C25.0029 13.5113 24.8527 12.9727 24.5684 12.503C24.2841 12.0332 23.8767 11.6503 23.3903 11.3956L23.4071 11.3957Z" fill="#FBBC04" />
                                        <path d="M0.538152 2.72656C0.469461 2.98067 0.435247 3.24285 0.436431 3.50607V24.5534C0.437109 24.8166 0.471291 25.0786 0.538152 25.3331L12.299 13.7247L0.538152 2.72656Z" fill="#4285F4" />
                                        <path d="M11.9939 14.0298L17.8744 8.22564L5.09685 0.904785C4.6161 0.623248 4.06933 0.474146 3.51221 0.472662C2.12967 0.469975 0.914193 1.38758 0.538208 2.71811L11.9939 14.0298Z" fill="#34A853" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_3576_1702">
                                            <rect width="24.5666" height="27.1577" fill="white" transform="translate(0.436279 0.472656)" />
                                        </clipPath>
                                    </defs>
                                </svg>


                                <p className='text-white tracking-[0px] font-bold text-[0.766rem] leading-[1.054rem] md:text-sm md:leading-5'>Get On Android</p>
                            </Link>
                        </div>
                    </div>
                </div>
                    </div>
                </div>
                
            </MaxWidthWrapper>

        </div>
    )
}
