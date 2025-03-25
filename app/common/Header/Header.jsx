import React from 'react'
import './Header.css'
import { IconHeart, IconSearch, IconShoppingBag, IconUser } from '@tabler/icons-react'
import { useDisclosure, useMediaQuery } from '@mantine/hooks';
import { Burger, Image } from '@mantine/core';
import imageLogo from '../../../assets/logo_image.png'
import { Drawer, Button } from '@mantine/core';
import DrawerContent from './DrawerContent';

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
                    <Burger lineSize={1} opened={opened} onClick={toggle} aria-label="Toggle navigation" />
                  </Button>
                  <Drawer.Root
                    offset={8} 
                    opened={opened} 
                    onClose={close} 
                    title="Authentication"
                    size={isSmallScreen ? '70%' : '40%'}
                    overlayProps={{ backgroundOpacity: 0.5, blur: 4 }}
                  >
                    <Drawer.Overlay />
                    <Drawer.Content>
                      <Drawer.Header>  
                        <Drawer.CloseButton style={{ marginLeft: 'unset' }} />
                        {/* <Drawer.Title></Drawer.Title> */}
                      </Drawer.Header>
                      <Drawer.Body>
                        <DrawerContent/>
                      </Drawer.Body>
                    </Drawer.Content>
                  </Drawer.Root>
                  </>
                  </div>
                  <div>
                    <Image
                      src={imageLogo}
                      fit={true}
                      className='image-logo-header'
                    />
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
