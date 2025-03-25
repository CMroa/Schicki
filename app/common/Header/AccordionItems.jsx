import { Accordion } from '@mantine/core'
import React from 'react'

export default function AccordionItems({ dataAccordion }) {

    const items = dataAccordion.map((item, index) => (
        <Accordion.Item key={index} value={item.subCategory}>
            <Accordion.Control>{item.subCategory}</Accordion.Control>
            <Accordion.Panel>
                {item.links.map(link => (
                    <>
                      <div>{link.label}</div>
                    </>
                ))}
            </Accordion.Panel>
        </Accordion.Item>
    ))

  return (
    <>
        <Accordion>
            {items}
        </Accordion>
    </>
  )
}
