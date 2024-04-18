// shyd extra

// import React from 'react'
import React, { useState } from 'react';
  function Sidebar() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [selectedDropdown, setSelectedDropdown] = useState(null);
  
    const toggleSidebar = () => {
      setIsSidebarOpen(!isSidebarOpen);
    };
  
    const handleDropdownSelect = (dropdownName) => {
      setSelectedDropdown(dropdownName);
    };

  return (



    
    <div className="app">
      <button onClick={toggleSidebar}>Toggle Sidebar</button>
      <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
        <ul>
          <li onClick={() => handleDropdownSelect('dropdown1')}>
            Dropdown 1
            {selectedDropdown === 'dropdown1' && (
              <ul className="dropdown">


                
               <a href="/Inlang"> <li >Html quiz</li> </a>



                <li>Option 2</li>
                <li>Option 3</li>
              </ul>
            )}
          </li>
          <li onClick={() => handleDropdownSelect('dropdown2')}>
            Dropdown 2
            {selectedDropdown === 'dropdown2' && (
              <ul className="dropdown">
                <li>Option A</li>
                <li>Option B</li>
                <li>Option C</li>
              </ul>
            )}
          </li>
        </ul>
      </div>
      <div className="main-content">
        {/* Main content goes here */}
      </div>
    </div>

    
  );
}
  

export default Sidebar 