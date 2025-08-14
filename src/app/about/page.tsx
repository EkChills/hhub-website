import MaxWidthWrapper from '@/components/max-width-wrapper'
import Image from 'next/image'
import React from 'react'

export default function page() {
    return (
        <div className='py-[1.759rem] md:py-[3.688rem] md:pb-[4.938rem] lg:pb-[6rem] px-4'>
            <MaxWidthWrapper className='md:items-center md:justify-between flex flex-col md:flex-row md:gap-6 '>
                <div className='flex flex-col gap-[0.688rem] md:gap-4'>
                    <h3 className='text-primary text-center md:text-left text-2xl leading-[1.873rem] font-bold md:text-[2rem] md:leading-10 tracking-[0px] '>About</h3>
                    <p className='text-black text-base leading-5.5 font-normal tracking-[0px] md:max-w-[31.098rem] lg:max-w-[625.88px] lg:text-justify lg:text-balance text-center md:text-left'>
                        At Harvest Hub, we believe that the journey from the farm to your table should be transparent, fair, and nourishing. We are an online marketplace dedicated to connecting consumers with authentic, organic farm products, straight from local, trusted farmers.
Born out of a passion for healthy living and sustainable agriculture, Harvest Hub is more than just a store. It is a movement. We empower farmers by giving them a direct platform to showcase and sell their organic produce in bulk, not just eggs, but crates of them, not just a mango, but whole harvests. This model reduces waste, guarantees freshness, and ensures fair pricing for both farmers and customers.
                    </p>
                </div>
                <div className='w-[281.92px] h-[238.57px] lg:w-[709px] lg:h-[600px] relative mx-auto md:mx-0 hidden md:block'>
                    <Image src={"/about-hero.png"} fill alt='about-hero' />
                </div>
                <div className='w-full relative md:hidden min-h-[340px] mt-4 md:mt-0'>
                    <Image alt='woman looking fruits' src={"/about-hero.png"} className='object-cover object-center' fill={true} />
                </div>
            </MaxWidthWrapper>
        </div>)
}
