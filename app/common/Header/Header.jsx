"use client"

import React from 'react'
import './Header.css'
import { IconHeart, IconSearch, IconShoppingBag, IconUser } from '@tabler/icons-react'
import { useDisclosure, useMediaQuery } from '@mantine/hooks';
import { Burger, DrawerBody, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay, DrawerRoot, Image } from '@mantine/core';
import { Button } from '@mantine/core';
import MenuContent from './MenuContent';
import Link from 'next/link';

export default function Header() {
  const [opened, { toggle, open, close }] = useDisclosure();
  const isSmallScreen = useMediaQuery('(min-width: 0px) and (max-width: 768px)')
  
  return (
    <>
      <header>
          <section>
              <nav className='navigation-header'>
                  <div className='burger-container-header'>
                  <>
                  <Button variant="transparent" onClick={open}>
                    <Burger component='div' lineSize={1} opened={opened} onClick={toggle} aria-label="Toggle navigation" />
                  </Button>
                  <DrawerRoot
                    offset={8} 
                    opened={opened} 
                    onClose={close} 
                    // title="Authentication"
                    size={isSmallScreen ? '70%' : '40%'}
                    // overlayProps={{ backgroundOpacity: 0.5, blur: 4 }}
                  >
                    <DrawerOverlay />
                    <DrawerContent>
                      <DrawerHeader>  
                        <DrawerCloseButton style={{ marginLeft: 'unset' }} />
                        {/* <Drawer.Title></Drawer.Title> */}
                      </DrawerHeader>
                      <DrawerBody>
                        <MenuContent/>
                      </DrawerBody>
                    </DrawerContent>
                  </DrawerRoot>
                  </>
                  </div>
                  <div>
                    <Link href={'/'}>
                      <Image
                        src={'https://raw.githubusercontent.com/CMroa/Schicki/refs/heads/main/public/logo_image.png'}
                        fit={true}
                        className='image-logo-header'
                      />
                    </Link>
                  </div>
                  <div className='icons-container-header'>
                    <IconHeart stroke={1} />
                    <IconUser stroke={1} />
                    <IconSearch stroke={1} />
                    <IconShoppingBag stroke={1} />
                  </div>
              </nav>
          </section>
      </header>
    </>
  )
}
