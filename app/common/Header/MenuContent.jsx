"use client"

import { Tabs, TabsList, TabsPanel, TabsTab } from '@mantine/core'
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

export default function MenuContent() {
  return (
    <div>
        <Tabs defaultValue="WOMEN" id='tabs-drawer-burger'>
      <TabsList style={{ display:'flex', justifyContent: 'space-between' }}>
        <TabsTab value="WOMEN">
          WOMEN
        </TabsTab>

        <TabsTab value="MEN">
          MEN
        </TabsTab>

        <TabsTab value="KIDS">
          KIDS
        </TabsTab>
      </TabsList>

      <TabsPanel value="WOMEN">
        <AccordionItems key={1} dataAccordion={womenData} />
      </TabsPanel>

      <TabsPanel value="MEN">
        <AccordionItems key={2} dataAccordion={menData} />
      </TabsPanel>

      <TabsPanel value="KIDS">
        <AccordionItems key={4} dataAccordion={kidsData} />
      </TabsPanel>
    </Tabs>
    </div>
  )
}
