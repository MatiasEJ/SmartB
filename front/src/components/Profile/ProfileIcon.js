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
    <Dropdown isOpen={dropdownOpen} toggle={toggle}>
      <DropdownToggle
        tag="span"
        data-toggle="dropdown"
        aria-expanded={dropdownOpen}
      >
      <img
      src="http://tachyons.io/img/logo.jpg"
      className="br-100 h3 w3 dib" alt="avatar" />
      </DropdownToggle>
      <DropdownMenu className="b--transparent shadow-5" style={{marginTop: '20px', back: 'rbga(255,255,225,0.5)'}}>
        <DropdownItem>View Profile</DropdownItem>
        <DropdownItem>SignOut</DropdownItem>
        
      </DropdownMenu>
    </Dropdown>
  );

}

export default ProfileIcon;