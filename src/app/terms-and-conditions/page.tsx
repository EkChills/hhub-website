import MaxWidthWrapper from '@/components/max-width-wrapper'
import React from 'react'

export default function TermsAndConditions() {
    return (
        <MaxWidthWrapper className='w-full flex flex-col items-center justify-center gap-4 p-4'>
            <div className='flex flex-col gap-[0.688rem] md:gap-4'>
                <h3 className='text-primary text-center text-2xl leading-[1.873rem] font-bold md:text-[2rem] md:leading-10 tracking-[0px] '>Terms and Conditions</h3>
                <div className="flex flex-col">
                    <h2 className="text-[#1F5114] md:text-[1.75rem] font-bold tracking-[0px] text-[1.25rem] leading-5.5 mt-6 md:mt-[82px] text-center mb-[30px] md:mb-[57px] md:leading-[2.579rem]">1. Eligibility and Compliance</h2>
                    <p className='text-black text-base leading-5.5 font-normal tracking-[0px] max-w-4xl text-center '>
                        Farmers must meet all local, state, and federal regulations concerning organic certification.
                        By listing products, farmers confirm that all items comply with USDA Organic Standards (or the appropriate certifying body if international) and are produced using organic farming methods.
                        Home-grown products are accepted, provided they meet organic farming practices and comply with all applicable health and safety regulations.
                    </p>
                </div>
                <div className="flex flex-col">
                    <h2 className="text-[#1F5114] md:text-[1.75rem] font-bold tracking-[0px] text-[1.25rem] leading-5.5 mt-6 md:mt-[82px] text-center mb-[30px] md:mb-[57px] md:leading-[2.579rem]">2. Product Accuracy and Transparency</h2>
                    <p className='text-black text-base leading-5.5 font-normal tracking-[0px] max-w-4xl text-center '>
                        All product listings must accurately describe the nature, condition, and origin of the produce. Misrepresentation of products as organic or sustainably sourced will result in removal from the platform.
                        Farmers are required to disclose any potential allergens, product treatments, or preservation methods used on their produce.
                    </p>
                </div>
                <div className="flex flex-col">
                    <h2 className="text-[#1F5114] md:text-[1.75rem] font-bold tracking-[0px] text-[1.25rem] leading-5.5 mt-6 md:mt-[82px] text-center mb-[30px] md:mb-[57px] md:leading-[2.579rem]">3. Organic Certification Requirements</h2>
                    <p className='text-black text-base leading-5.5 font-normal tracking-[0px] max-w-4xl text-center '>
                        Farmers must provide proof of organic certification where applicable and consent to audits if needed. Non-certified farmers may be required to provide additional documentation to verify organic practices.
                        Farmers agree to update their organic status promptly if it changes and remove any non-organic items from the platform immediately.
                    </p>
                </div>
                <div className="flex flex-col">
                    <h2 className="text-[#1F5114] md:text-[1.75rem] font-bold tracking-[0px] text-[1.25rem] leading-5.5 mt-6 md:mt-[82px] text-center mb-[30px] md:mb-[57px] md:leading-[2.579rem]">4. Product Quality and Safety Standards</h2>
                    <p className='text-black text-base leading-5.5 font-normal tracking-[0px] max-w-4xl text-center '>
                        Products must meet the platform&apos;s quality standards, including freshness and safe handling practices.
                        Farmers must take measures to ensure safe packaging and handling, following all applicable health and safety regulations
                    </p>
                </div>
                <div className="flex flex-col">
                    <h2 className="text-[#1F5114] md:text-[1.75rem] font-bold tracking-[0px] text-[1.25rem] leading-5.5 mt-6 md:mt-[82px] text-center mb-[30px] md:mb-[57px] md:leading-[2.579rem]">5. Marketing and Labeling</h2>
                    <p className='text-black text-base leading-5.5 font-normal tracking-[0px] max-w-4xl text-center '>
                        Only products that meet organic certification requirements or natural farming standards are permitted to be marketed as organic.
                        Farmers agree not to include misleading marketing terms like &quot;organic-like,&quot; &quot;almost organic,&quot; or similar wording for uncertified items.
                        Home-grown products must be labeled accurately to reflect their farming practices.
                    </p>
                </div>
                <div className="flex flex-col">
                    <h2 className="text-[#1F5114] md:text-[1.75rem] font-bold tracking-[0px] text-[1.25rem] leading-5.5 mt-6 md:mt-[82px] text-center mb-[30px] md:mb-[57px] md:leading-[2.579rem]">6. Responsibility and Accountability</h2>
                    <p className='text-black text-base leading-5.5 font-normal tracking-[0px] max-w-4xl text-center '>
                        Farmers are solely responsible for the authenticity of the product listings and quality of sold items.
                        Farmers are not responsible for delivering products. The company, HarvestHub, will use a third-party delivery service to pick up goods and deliver them to end users for faster delivery.
                        Any disputes regarding the quality or condition of the items sold may be subject to review, and continued non-compliance with platform standards may result in suspension.
                        Intellectual Property
                        Farmers must ensure that any images, logos, or branding used on the app are original or used with permission, and do not infringe on any third-party rights.
                    </p>
                </div>
                <div className="flex flex-col">
                    <h2 className="text-[#1F5114] md:text-[1.75rem] font-bold tracking-[0px] text-[1.25rem] leading-5.5 mt-6 md:mt-[82px] text-center mb-[30px] md:mb-[57px] md:leading-[2.579rem]">7. Fees and Payment Structure</h2>
                    <p className='text-black text-base leading-5.5 font-normal tracking-[0px] max-w-4xl text-center '>
                        By agreeing to these terms, farmers consent to the platform’s fee structure (pay-as-you-go, per-sale fee, or subscription model) and agree to any applicable charges on sales.
                        Amendments
                        The platform reserves the right to update these Terms and Conditions to reflect changes in policies or standards, with notice provided to all registered farmers.
                        Termination
                        Violation of these terms, especially regarding organic certification and product authenticity, may result in account suspension or permanent removal from the platform.                    </p>
                </div>
            </div>
        </MaxWidthWrapper>
    )
}

