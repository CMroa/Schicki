"use client"

import { Accordion, AccordionControl, AccordionItem, AccordionPanel } from '@mantine/core'
import React from 'react'

export default function AccordionItems({ dataAccordion }) {

    const items = dataAccordion.map((item, index) => (
        <AccordionItem key={index + item.subCategory} value={item.subCategory}>
            <AccordionControl>{item.subCategory}</AccordionControl>
            <AccordionPanel>
                <div>
                    {item.links.map((link, index) => (
                        <div key={index + link.label}>{link.label}</div>
                    ))}
                </div>
            </AccordionPanel>
        </AccordionItem>
    ))

  return (
    <>
        <Accordion>
            {items}
        </Accordion>
    </>
  )
}
