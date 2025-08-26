import FaqAccordion from '@/components/faq-accordion'
import MaxWidthWrapper from '@/components/max-width-wrapper'
import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Home() {
  return (

    <div className='!antialiased'>
      <MaxWidthWrapper className='px-4 pt-4'>
        <div className='pt-[1.685rem] flex flex-col gap-12 w-full md:gap-8.5 md:flex-row items-center justify-between'>
          <div className='flex flex-col gap-5'>
            <div className='flex flex-col gap-1.5 md:gap-2'>
              <h1 className='text-primary font-bold leading-7.5 text-[1.559rem] md:text-[2.188rem] md:leading-10 tracking-[0px]  md:max-w-[573px] text-center md:text-left'>The Authentic Place For All Your Farm Fresh Organic Food</h1>
              <p className='text-black text-base leading-5.5 md:leading-[1.433rem] tracking-[0px] text-center md:text-left md:max-w-[504.45px]'>Harvest Hub helps to connect consumers with verified local organic farmers through a
                seamless online marketplace.</p>
            </div>
            <div className='flex gap-[0.791rem] justify-center md:!justify-start'>
              <Link href={"*"} className={cn(buttonVariants({ className: "gap-[9.76px] h-12 md:gap-[11px] bg-[#1C1B1B] items-center" }))}>
                <svg width="25" height="29" viewBox="0 0 25 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20.4393 27.4107C18.918 28.8855 17.257 28.6526 15.6581 27.9541C13.966 27.24 12.4136 27.2089 10.6284 27.9541C8.393 28.9165 7.21321 28.6371 5.87818 27.4107C-1.69734 19.6024 -0.579639 7.71127 8.02044 7.27661C10.1161 7.38528 11.5753 8.42536 12.8017 8.5185C14.6335 8.14593 16.3877 7.0748 18.3436 7.21452C20.6877 7.4008 22.4574 8.33222 23.6217 10.0088C18.7783 12.9117 19.927 19.2919 24.3668 21.0771C23.482 23.4056 22.3332 25.7187 20.4238 27.4263L20.4393 27.4107ZM12.6465 7.18347C12.4136 3.72171 15.2234 0.865362 18.4523 0.585938C18.9025 4.59103 14.8198 7.57156 12.6465 7.18347Z" fill="white" />
                </svg>

                <p className='text-white tracking-[0px] font-bold text-[0.766rem] leading-[1.054rem] md:text-sm md:leading-5'>Get On iPhone</p>
              </Link>
              <Link href={"*"} className={cn(buttonVariants({ className: "gap-[9.76px] h-12 md:gap-[11px] bg-[#1C1B1B] items-center" }))}>
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
          <div className='relative w-[345.07px] h-[315.73px] md:h-[540.8px] md:w-[590.71px] rounded-full animate-[spin_20s_linear_infinite]'>
            <Image src={"/hero-img.png"} alt='hero-img' fill />
          </div>
        </div>
      </MaxWidthWrapper>
      {/* vision section starts */}
      <section id='vision' className='mt-[1.672rem] bg-[#1F51140F] md:mt-[1.75rem] lg:mt-[11.599rem]  py-[1.759rem] md:py-[3.688rem] md:pb-[4.938rem] lg:pb-[6rem] px-4'>
        <MaxWidthWrapper className='md:items-center md:justify-between flex flex-col md:flex-row-reverse md:gap-6'>
          <div className='flex flex-col gap-[0.688rem] md:gap-4'>
            <h3 className='text-primary text-center md:text-left text-2xl leading-[1.873rem] font-bold md:text-[2rem] md:leading-10 tracking-[0px] '>Our Vision</h3>
            <p className='text-black text-base md:leading-5.5 leading-[1.412rem] font-normal tracking-[0px] md:max-w-[31.098rem] text-center md:text-left'>To become the leading digital marketplace for organic farm goods and beverages, trusted for its integrity, transparency, and commitment to a healthier planet and people.</p>
          </div>
          <div className='w-[281.92px] h-[238.57px] lg:w-[709px] lg:h-[600px] relative mx-auto md:mx-0 hidden md:block'>
            <Image src={"/vision.png"} fill alt='vision-hero' />
          </div>
             <div className='w-full relative md:hidden min-h-[340px] mt-4 md:mt-0'>
            <Image alt='woman looking fruits' src={"/vision.png"} className='object-contain object-center' fill={true} />
          </div>
        </MaxWidthWrapper>
      </section>
      {/* Mission section starts */}
      <section id='our-mission' className=' bg-[#D55D0112] py-[1.759rem] md:py-[3.688rem] md:pb-[4.938rem] lg:pb-[6rem] px-4'>
        <MaxWidthWrapper className='md:items-center md:justify-between flex flex-col md:flex-row md:gap-6 '>
          <div className='flex flex-col gap-[0.688rem] md:gap-4'>
            <h3 className='text-primary text-center md:text-left text-2xl leading-[1.873rem] font-bold md:text-[2rem] md:leading-10 tracking-[0px] '>Our Mission</h3>
            <p className='text-black text-base leading-5.5 font-normal tracking-[0px] md:max-w-[31.098rem] text-center md:text-left'>
              To revolutionize how organic farm goods are bought and sold by creating a transparent, farmer-first platform that supports healthy lifestyles, sustainable agriculture, and direct community impact.
            </p>
          </div>
          <div className='w-[281.92px] h-[238.57px] lg:w-[709px] lg:h-[600px] relative mx-auto md:mx-0 hidden md:block'>
            <Image src={"/mission.png"} fill alt='mission-hero' />
          </div>
          <div className='w-full relative md:hidden min-h-[340px] mt-4 md:mt-0'>
            <Image alt='woman looking fruits' src={"/mission.png"} className='object-contain object-center' fill={true} />
          </div>
        </MaxWidthWrapper>
      </section>
      {/* values section starts */}
      <MaxWidthWrapper className='py-8 pt-[4.75rem] w-full px-4 md:pb-[83px]'>
        <h3 className='text-primary text-center text-2xl leading-[1.873rem] font-bold md:text-[2rem] md:leading-10 tracking-[0px] '>Values</h3>
        <div className='flex flex-col md:flex-row-reverse mt-[1.75rem] md:mt-[3.875rem] w-full md:gap-10 md:justify-between items-center'>
          <div className='flex flex-col gap-2.5 w-full md:max-w-[528.5px]'>
            <div className='md:flex md:items-center md:gap-[1.313rem] w-full'>
              <span className='hidden md:block md:w-[10.32px] md:h-[10.32px] bg-[#317422] rounded-full'></span>
              <div className='flex flex-col w-full bg-[#D9D9D96B] rounded-[13.21px] md:rounded-[1.25rem] p-4 md:py-[21px] md:px-[27px] gap-[7px] md:gap-[3px] text-center md:text-left lg:min-w-[497.08px]'>
                <h4 className='text-lg font-bold leading-[0.906rem] tracking-[0px] text-black md:leading-5.5 text-center md:text-left'>Transparency</h4>
                <p className='text-base text-black leading-4.5 md:leading-5.5 font-normal md:max-w-[357px] text-center md:text-left '>Every product’s origin and journey are clear.</p>
              </div>
            </div>
            <div className='md:flex md:items-center md:gap-[1.313rem] w-full'>
              <span className='hidden md:block md:w-[10.32px] md:h-[10.32px] bg-[#317422] rounded-full'></span>
              <div className='flex flex-col w-full bg-[#D9D9D96B] rounded-[13.21px] md:rounded-[1.25rem] p-4 md:py-[21px] md:px-[27px] gap-[7px] md:gap-[3px] text-center md:text-left lg:min-w-[497.08px]'>
                <h4 className='text-lg font-bold leading-[0.906rem] tracking-[0px] text-black md:leading-5.5 text-center md:text-left'>Sustainability</h4>
                <p className='text-base text-black leading-4.5 md:leading-5.5 font-normal md:max-w-[357px] text-center md:text-left '>We promote eco-friendly farming and packaging practices</p>
              </div>
            </div>
            <div className='md:flex md:items-center md:gap-[1.313rem] w-full'>
              <span className='hidden md:block md:w-[10.32px] md:h-[10.32px] bg-[#317422] rounded-full'></span>
              <div className='flex flex-col w-full bg-[#D9D9D96B] rounded-[13.21px] md:rounded-[1.25rem] p-4 md:py-[21px] md:px-[27px] gap-[7px] md:gap-[3px] text-center md:text-left lg:min-w-[497.08px]'>
                <h4 className='text-lg font-bold leading-[0.906rem] tracking-[0px] text-black md:leading-5.5 text-center md:text-left'>Empowerment</h4>
                <p className='text-base text-black leading-4.5 md:leading-5.5 font-normal md:max-w-[357px] text-center md:text-left '>We give farmers the tools to succeed without middlemen.</p>
              </div>
            </div>
            <div className='md:flex md:items-center md:gap-[1.313rem] w-full'>
              <span className='hidden md:block md:w-[10.32px] md:h-[10.32px] bg-[#317422] rounded-full'></span>
              <div className='flex flex-col w-full bg-[#D9D9D96B] rounded-[13.21px] md:rounded-[1.25rem] p-4 md:py-[21px] md:px-[27px] gap-[7px] md:gap-[3px] text-center md:text-left lg:min-w-[497.08px]'>
                <h4 className='text-lg font-bold leading-[0.906rem] tracking-[0px] text-black md:leading-5.5 text-center md:text-left'>Health & Wellness</h4>
                <p className='text-base text-black leading-4.5 md:leading-5.5 font-normal md:max-w-[357px] text-center md:text-left '>Only organic, home-grown goods with no compromise</p>
              </div>
            </div>
            <div className='md:flex md:items-center md:gap-[1.313rem] w-full'>
              <span className='hidden md:block md:w-[10.32px] md:h-[10.32px] bg-[#317422] rounded-full'></span>
              <div className='flex flex-col w-full bg-[#D9D9D96B] rounded-[13.21px] md:rounded-[1.25rem] p-4 md:py-[21px] md:px-[27px] gap-[7px] md:gap-[3px] text-center md:text-left lg:min-w-[497.08px]'>
                <h4 className='text-lg font-bold leading-[0.906rem] tracking-[0px] text-black md:leading-5.5 text-center md:text-left'>Innovation</h4>
                <p className='text-base text-black leading-4.5 md:leading-5.5 font-normal md:max-w-[357px] text-center md:text-left '>Integrating AI and modern tech to inform pricing and supply chain decisions</p>
              </div>
            </div>
          </div>
          <div className='relative md:h-[409.52px] md:w-[470.56px]'>
            <Image src={"/values.png"} fill alt='hero-values' />
          </div>
        </div>
      </MaxWidthWrapper>
      {/* what makes us different section starts */}
      <div className='relative py-8 pt-[4.75rem] w-full px-4 min-h-[788px] md:min-h-[757px] bg-[url("/what-makes-us.png")] bg-no-repeat bg-cover bg-center'>
        {/* Dark overlay */}
        <div className='absolute inset-0 bg-black/70'></div>

        <MaxWidthWrapper className='relative z-10'>
          <h3 className='text-white text-center text-2xl leading-[1.873rem] font-bold md:text-[2rem] md:leading-10 tracking-[0px]'>
            What Makes Us Different
          </h3>
          <div className='flex flex-col md:flex-row mt-[1.75rem] md:mt-[3.875rem] w-full gap-10 md:justify-between items-center'>
            <div className='flex flex-col gap-2 md:gap-1'>
              <h3 className='md:leading-9 tracking-[0px] text-[1.375rem] leading-8 font-bold md:text-[1.75rem] text-white text-center md:text-left md:max-w-[367.89px]  md:text-wrap'>
                We&apos;re more than a marketplace. We&apos;re a movement.
              </h3>
              <p className='text-base leading-5.5 font-normal tracking-[0px] md:max-w-[367.89px] lg:max-w-[450px] text-center md:text-left text-white md:text-wrap text-balance'>We connect you directly with local farmers, we ensure every product is organic, traceable, and fairly sourced.</p>
            </div>
            <div className='relative w-[352.49px] h-[397.41px] md:w-[763.95px] md:h-[407.58px]'>
              <Image src={"/ordering.png"} className='hidden md:block' fill alt='hero-values' />
              <div className='relative md:hidden w-full min-h-[397.1px]'>

                <Image alt='woman looking fruits' src={"/mobile-ordering.png"} className='object-cover object-center' fill={true} />
              </div>
            </div>
          </div>
        </MaxWidthWrapper>
      </div>
      <MaxWidthWrapper className='py-8 pt-[4.75rem] w-full px-4 md:pb-[83px] md:max-w-[936.05px]'>
        <h3 className='text-primary text-center text-2xl leading-[1.873rem] font-bold md:text-[2rem] md:leading-10 tracking-[0px] mb-8 md:mb-[70px]'>Values</h3>
        <div className='flex flex-col gap-8'>
          <div className='flex flex-col md:flex-row-reverse gap-7 md:justify-between md:items-center'>
            <div className='flex flex-col'>
              <h5 className='text-black font-semibold tracking-[0px] text-lg leading-5.5 md:text-[1.75rem] md:leading-[2.185rem] mb-[10px]'>Consumers</h5>
              <ul className='flex flex-col gap-2 md:gap-1'>
                <div className='flex w-full items-center gap-2 md:px-2'>
                  <span className='size-1 bg-black rounded-full'></span>
                  <li className='text-base leading-5.5 font-normal tracking-[0px]'>Health-conscious families</li>
                </div>
                <div className='flex w-full items-center gap-2 md:px-2'>
                  <span className='size-1 bg-black rounded-full'></span>
                  <li className='text-base leading-5.5 font-normal tracking-[0px]'>People seeking affordable, local organic produce</li>
                </div>
                <div className='flex w-full items-center gap-2 md:px-2'>
                  <span className='size-1 bg-black rounded-full'></span>
                  <li className='text-base leading-5.5 font-normal tracking-[0px]'>People seeking affordable, local organic produce</li>
                </div>
              </ul>
            </div>
            <Image width={319.46} height={274.99} className='hidden md:block' alt='woman looking fruits' src={"/consumers-1.png"} />
            <div className='w-full relative md:hidden bg-red-100 aspect-video rounded-[.5rem]'>

              <Image alt='woman looking fruits' src={"/consumers-1.png"} className='object-cover object-center rounded-[.5rem]' fill={true} />
            </div>
          </div>
          <div className='flex flex-col md:flex-row gap-7 md:justify-between md:items-center'>
            <div className='flex flex-col'>
              <h5 className='text-black font-semibold tracking-[0px] text-lg leading-5.5 md:text-[1.75rem] md:leading-[2.185rem] mb-[10px]'>Farmers</h5>
              <ul className='flex flex-col gap-2 md:gap-1'>
                <div className='flex w-full items-center gap-2 md:px-2'>
                  <span className='size-1 bg-black rounded-full'></span>
                  <li className='text-base leading-5.5 font-normal tracking-[0px]'>Small-to-mid-scale organic farmers</li>
                </div>
                <div className='flex w-full items-center gap-2 md:px-2'>
                  <span className='size-1 bg-black rounded-full'></span>
                  <li className='text-base leading-5.5 font-normal tracking-[0px]'>New growers needing direct market access</li>
                </div>
                <div className='flex w-full items-center gap-2 md:px-2'>
                  <span className='size-1 bg-black rounded-full'></span>
                  <li className='text-base leading-5.5 font-normal tracking-[0px]'>Rural farmers seeking e-commerce exposure</li>
                </div>
              </ul>
            </div>
            <Image width={319.46} height={274.99} alt='woman looking fruits' className='hidden md:block' src={"/consumers-2.png"} />
            <div className='w-full relative md:hidden bg-red-100 aspect-video rounded-[.5rem]'>

              <Image alt='woman looking fruits' src={"/consumers-2.png"} className='object-cover object-center rounded-[.5rem]' fill={true} />
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
      {/* faq starts here */}
      <div className='bg-[#0D4700] px-4 py-[35px] flex w-full items-center md:py-[60px] flex-col'>
        <h4 className='md:text-[2rem] text-[1.625rem] leading-[2rem] md:leading-10 tacking-[0px] font-bold text-white'>
          FAQ
        </h4>
        <FaqAccordion />
      </div>
    </div>
  )
}