import { Tabs } from '@mantine/core'
import React from 'react'
import AccordionItems from './AccordionItems'

const womenData = [
  {
    subCategory: "New",
    links: [{ label: "Shoes"}, {label:"Accesories"}, {label:"Dresses"}, {label:"skirts"}]
  },
  {
    subCategory: "Apparel",
    links: [{ label: "Tops"}, {label:"bottoms"}, {label:"Skirts"}, {label:"T-shirts"}, {label:"Dresses"}]
  },
  {
    subCategory: "Bag",
    links: [{ label: "Mini"}, {label:"Gym"}, {label:"Suede"}, {label:"Japanes"}, {label:"Waterproof"}, {label:"Sport"}, {label:"Travel"}]
  },
  {
    subCategory: "Shoes",
    links: [{ label: "Wedding"}, {label:"casual"}, {label:"Kawaii"}, {label:"Beach"}]
  },
  {
    subCategory: "Beauty",
    links: [{ label: "Watch"}, {label:"Chain"}]
  },
  {
    subCategory: "Accessories",
    links: [{ label: "Watch"}, {label:"Chain"}]
  },
]

const menData = [
  {
    subCategory: "New",
    links: [{ label: "Shoes"}, {label:"Accesories"}]
  },
  {
    subCategory: "Apparel",
    links: [{ label: "Watch"}, {label:"Chain"}]
  },
  {
    subCategory: "Bag",
    links: [{ label: "Watch"}, {label:"Chain"}]
  },
  {
    subCategory: "Shoes",
    links: [{ label: "Watch"}, {label:"Chain"}]
  },
  {
    subCategory: "Beauty",
    links: [{ label: "Watch"}, {label:"Chain"}]
  },
  {
    subCategory: "Accessories",
    links: [{ label: "Watch"}, {label:"Chain"}]
  },
]

const kidsData = [
  {
    subCategory: "New",
    links: [{ label: "Shoes"}, {label:"Accesories"}]
  },
  {
    subCategory: "Apparel",
    links: [{ label: "Watch"}, {label:"Chain"}]
  },
  {
    subCategory: "Bag",
    links: [{ label: "Watch"}, {label:"Chain"}]
  },
  {
    subCategory: "Shoes",
    links: [{ label: "Watch"}, {label:"Chain"}]
  },
  {
    subCategory: "Beauty",
    links: [{ label: "Watch"}, {label:"Chain"}]
  },
  {
    subCategory: "Accessories",
    links: [{ label: "Watch"}, {label:"Chain"}]
  },
]

export default function DrawerContent() {
  return (
    <div>
        <Tabs defaultValue="WOMEN" id='tabs-drawer-burger'>
      <Tabs.List style={{ display:'flex', justifyContent: 'space-between' }}>
        <Tabs.Tab value="WOMEN">
          WOMEN
        </Tabs.Tab>

        <Tabs.Tab value="MEN">
          MEN
        </Tabs.Tab>

        <Tabs.Tab value="KIDS">
          KIDS
        </Tabs.Tab>
      </Tabs.List>

      <Tabs.Panel value="WOMEN">
        <AccordionItems dataAccordion={womenData} />
      </Tabs.Panel>

      <Tabs.Panel value="MEN">
        <AccordionItems dataAccordion={menData} />
      </Tabs.Panel>

      <Tabs.Panel value="KIDS">
        <AccordionItems dataAccordion={kidsData} />
      </Tabs.Panel>
    </Tabs>
    </div>
  )
}
