import React, { useState } from 'react'
import { 
  Dropdown, 
  DropdownToggle, 
  DropdownMenu, 
  DropdownItem 
} from 'reactstrap';


const ProfileIcon = (props) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen(prevState => !prevState);

  return (
    <div className="pa5 tc">
      <Dropdown isOpen={dropdownOpen} toggle={toggle}>
      <DropdownToggle
      caret
      tag="span"
      data-toggle="dropdown"
      aria-expanded={dropdownOpen}
      >
      <img
      src="http://tachyons.io/img/logo.jpg"
      className="br-100 ba h3 w3 dib" alt="avatar" />
      </DropdownToggle>
      <DropdownMenu
      right
      className="b--transparent shadow-5"
      style={{back: 'rbga(255,255,225,0.5)'}}
      >
        <DropdownItem>View Profile</DropdownItem>
        <DropdownItem onClick={() => props.onRouteChange('signout')} > Sign Out</DropdownItem>
        
      </DropdownMenu>
      </Dropdown>
    </div>
  );

}

export default ProfileIcon;