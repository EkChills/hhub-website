import React from 'react'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

export default function FaqAccordion() {
    return (
        <Accordion type="single" className='max-w-[470px] w-full' collapsible>
            <AccordionItem value="item-1">
                <AccordionTrigger className='text-white text-base'>Can I buy single items like one mango or one egg?</AccordionTrigger>
                <AccordionContent>
                    <div className='border-l-[4px]  text-white pl-2 text-sm'>
                        No. To keep prices fair and logistics simple, our platform supports only bulk purchases, such as crates, bunches, or cartons.
                    </div>
                </AccordionContent>
            </AccordionItem>
            
        </Accordion>
    )
}
