import React from 'react';
import { Menu, Button } from 'antd';
import './Navbar.css';

const Navbar = () => {
  return (
    <div className='navbar'>
      <div>
        <h1 className='brand-h1'>Sudha Interior</h1>
      </div>
      <div className='nav_links'>
        <Menu mode='horizontal' className='nav_menu'>
          <Menu.Item className='menu_item_home'>Home</Menu.Item>
          <Menu.Item>Shop</Menu.Item>
          <Menu.Item>Works</Menu.Item>
        </Menu>
        <Button className='btn-border'>Consult</Button>
      </div>
    </div>
  );
};

export default Navbar;
