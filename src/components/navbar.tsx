"use client"

import { navLinks } from '@/lib/nav-links'
import { cn } from '@/lib/utils'
import { Menu, X } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import React, { useEffect, useState, useTransition } from 'react'

export default function Navbar() {
    const pathname = usePathname()
    const router = useRouter()
    const [isPending, startTransition] = useTransition()
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)

    function handleNavigate(link: string) {
        startTransition(() => {
            router.push(link)
        })
        if (!isPending) {
            setIsMenuOpen(false)

        }
    }

    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflowY = "hidden"
        } else {
            document.body.style.overflowY = "auto"
        }
    }, [isMenuOpen])

    return (
        <div className='flex items-center justify-between  pr-4 h-[92px] md:h-[125px]'>
            <Link href={"/"}>
                <div className='flex items-center'>
                    <Image width={92} height={92} alt='logo' src={"/dashboard-logo.svg"} />
                    <p className='text-black font-bold text-[1.098rem] leading-[1.2rem] tracking-[0px]'>Harvest Hub</p>
                </div>
            </Link>
            <div className=''>
                <svg onClick={() => setIsMenuOpen(true)} width="31" height="27" viewBox="0 0 31 27" className='md:hidden cursor-pointer' fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_4421_15951)">
                        <path d="M25.826 18.3672C26.3104 18.3675 26.7762 18.5541 27.1268 18.8884C27.4774 19.2227 27.6859 19.679 27.7092 20.1629C27.7325 20.6468 27.5687 21.121 27.2518 21.4875C26.935 21.8539 26.4893 22.0843 26.0071 22.1311L25.826 22.1399H5.7054C5.22097 22.1396 4.75521 21.953 4.40462 21.6187C4.05403 21.2844 3.84548 20.8281 3.82221 20.3442C3.79893 19.8603 3.96269 19.3861 4.27957 19.0197C4.59645 18.6532 5.04215 18.4228 5.52431 18.3761L5.7054 18.3672H25.826ZM25.826 9.56448C26.3263 9.56448 26.8061 9.76322 27.1598 10.117C27.5136 10.4707 27.7123 10.9505 27.7123 11.4508C27.7123 11.9511 27.5136 12.4309 27.1598 12.7846C26.8061 13.1384 26.3263 13.3371 25.826 13.3371H5.7054C5.20512 13.3371 4.72533 13.1384 4.37158 12.7846C4.01783 12.4309 3.81909 11.9511 3.81909 11.4508C3.81909 10.9505 4.01783 10.4707 4.37158 10.117C4.72533 9.76322 5.20512 9.56448 5.7054 9.56448H25.826ZM25.826 0.761719C26.3263 0.761719 26.8061 0.960454 27.1598 1.31421C27.5136 1.66796 27.7123 2.14775 27.7123 2.64803C27.7123 3.14831 27.5136 3.62809 27.1598 3.98185C26.8061 4.3356 26.3263 4.53433 25.826 4.53433H5.7054C5.20512 4.53433 4.72533 4.3356 4.37158 3.98185C4.01783 3.62809 3.81909 3.14831 3.81909 2.64803C3.81909 2.14775 4.01783 1.66796 4.37158 1.31421C4.72533 0.960454 5.20512 0.761719 5.7054 0.761719H25.826Z" fill="black" />
                    </g>
                    <defs>
                        <clipPath id="clip0_4421_15951">
                            <rect width="29.8932" height="25.5475" fill="white" transform="translate(0.819092 0.761719)" />
                        </clipPath>
                    </defs>
                </svg>
                <div className='hidden md:flex md:items-center md:gap-6'>
                    {
                        navLinks.map((link, idx) => (
                            <Link key={idx} href={link.link} className={cn("text-[#202020] font-normal hover:text-[#1F5114] transition text-base leading-5.5", pathname === link.link ? "font-bold text-primary" : "")}>{link.text}</Link>
                        ))
                    }

                </div>

            </div>
            {isMenuOpen && <div className='fixed inset-0 bg-[#20202091] z-20 md:hidden'>
                <div className='bg-white w-[calc(100%-48px)] h-full rounded-r-[50px] flex flex-col py-4 pr-4'>
                    <div className='flex items-center gap-4 justify-between'>
                        <div className='flex items-center'>
                            <Image width={92} height={92} alt='logo' src={"/dashboard-logo.svg"} />
                            <p className='text-black font-bold text-[1.098rem] leading-[1.2rem] tracking-[0px]'>Harvest Hub</p>
                        </div>
                        <X className='size-7.5 text-black cursor-pointer' onClick={() => setIsMenuOpen(false)} />

                    </div>
                    <div className='mt-5 flex flex-col gap-8 pl-6'>
                        {
                            navLinks.map((l, idx) => (
                                <div onClick={() => handleNavigate(l.link)} key={idx} className='flex gap-3 items-center cursor-pointer'>
                                    {l.icon}
                                    <p className={cn("text-lg font-normal text-primary capitalize tracking-[0px]", pathname === l.link ? "font-bold" : "")}>{l.text}</p>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>}
        </div>
    )
}
