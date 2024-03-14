import { useState } from 'react'
import './App.css'
import './Avatar.css'
import './Menu.css'
import Button from './Button'
import { FaAtom } from "react-icons/fa";
import Avatar from './Avatar';
import cc from './cc.jpg'
import Menu from './Menu';
import MenuButton from './MenuButton'
import MenuDropdown from './MenuDropdown'
import MenuItem from './MenuItem'

const button = (
  <div>
    <Button onClick={() => console.log("click!")} className="button" size="button-small" variant="success">
      <FaAtom />
      Press
    </Button>
  </div>
)

const avatar = (
  <div>
    <Avatar />
    <Avatar>CC</Avatar>
    <Avatar src={cc} alt="cc image" />
  </div>
)

const items = ["Tennis", "Pickleball", "Racquetball", "Squash"]
const menu = (
  <div>
    <Menu>
      <MenuButton>Sports</MenuButton>
      <MenuDropdown>
      {items.map(item => <MenuItem key={item}>{item}</MenuItem>)}
      </MenuDropdown>
    </Menu>
  </div>
)


function App() {

  return (
    <>
      <div className='main'>
        {/* {button} */}
        {/* {avatar} */}
        {menu}
      </div>
    </>
  )
}

export default App
