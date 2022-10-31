import React from 'react'
import { useTheme } from "../hooks/useTheme";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';

const education = [
  {
    id: 1,
    header: 'BACHELORS DEGREE IN ACCOUNTING',
    info: 'Bagged a bachelors degree in Accounting from the Federal University of Agriculture, Abeokuta, Nigeria. (2016 - 2020)'
  },
  {
    id: 2,
    header: 'FRONTEND WEB DEVELOPMENT COURSE',
    info: 'Participated in a four-month programme in Frontend web development learning at UnivelCity, Yaba, Lagos. (Nov 2021 - Feb 2022)'
  },
  {
    id: 3,
    header: 'FULL COURSE ON JAVASCRIPT WITH THE NETNINJA',
    info: 'Participated in an in-depth online learning with The Netninja UK tutored by Shaun J. Pelling. (April 2022 - May 2022)'
  },
  {
    id: 4,
    header: 'FULL COURSE ON REACT & FIREBASE WITH THE NETNINJA',
    info: 'Participated in an in-depth online learning with The Netninja UK tutored by Shaun J. Pelling. (May 2022 - July 2022)'
  }
]

export default function Education() {
  const { mode } = useTheme();

  return (
    <div id='education' className={`py-20 ${mode}`}>
        <div className='px-5 lg:px-10'>
          <h3 className='text-sm font-body opacity-50 tracking-widest'>EDUCATION</h3>
          <h2 className='mt-5 font-[serif] tracking-widest text-2xl font-bold'>EDUCATION</h2>
        </div>

        <div className='mt-20 w-full px-3 lg:px-10'>
          <Accordion  allowZeroExpanded className='mt-5'>
            {education.map((item) => (
                  <AccordionItem key={item.id} className='mt-3'>
                  <AccordionItemHeading className='flex justify-between lg:w-3/4 h-[3rem] p-4 items-center rounded bg-grey dark:bg-black dark:border-grey dark:border-2'>
                      <AccordionItemButton className='font-body'>
                          {item.header}
                      </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                      <p className='font-body lg:w-3/4 p-3 mt-1 rounded border-2 dark:bg-[#777] border-grey'>
                          {item.info}
                      </p>
                  </AccordionItemPanel>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
    </div>
  )
}
