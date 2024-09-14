import React from 'react';
import { Menu, Button } from 'semantic-ui-react'; // Importing Semantic UI components

const Navbar = () => (
  <Menu>
    <Menu.Item>
      {/* DEV@Deakin Text */}
      <span style={{ fontWeight: 'bold', fontSize: '1.5rem', marginRight: '20px' }}>DEV@Deakin</span>
    </Menu.Item>
    
    <Menu.Item name="home" style={{ marginLeft: '30px' }} />
    <Menu.Item name="about" />
    <Menu.Item name="features" />
    
    <Menu.Menu position="right">
      <Menu.Item>
        <Button primary>Post Login</Button>
      </Menu.Item>
    </Menu.Menu>
  </Menu>
);

export default Navbar;
