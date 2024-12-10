import React from 'react';
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import { Link } from 'react-router-dom';
import { FaHome, FaBuilding, FaProjectDiagram, FaUser, FaBook, FaCalendarAlt } from 'react-icons/fa'; // Import icons

function UserSidebar() {
  return (
    <Sidebar
      width="250px"
      style={{
        background: '', // Dark gray background from the logo's color
        color: '#FFC107', // Yellow color for the text to match the logo
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}
      className="text-white"
    >
      <Menu>
        <MenuItem icon={<FaHome size={20} style={{ color: '#FFC107' }} />} style={{ color: '#FFC107' }}>
          <Link to="/dashboard" style={{ display: 'block', width: '100%', color: 'inherit' }}>Dashboard Home</Link>
        </MenuItem>
        <SubMenu label="Companies" icon={<FaBuilding size={20} style={{ color: '#FFC107' }} />} style={{ color: '#FFC107' }}>
          <MenuItem>
            <Link to="/dashboard/companies-list" style={{ display: 'block', width: '100%', color: 'inherit' }}>Companies List</Link>
          </MenuItem>
          <MenuItem>
            <Link to="/dashboard/companies-create" style={{ display: 'block', width: '100%', color: 'inherit' }}>Create Company</Link>
          </MenuItem>
        </SubMenu>
        <SubMenu label="Projects" icon={<FaProjectDiagram size={20} style={{ color: '#FFC107' }} />} style={{ color: '#FFC107' }}>
          <MenuItem>
            <Link to="/dashboard/project-list" style={{ display: 'block', width: '100%', color: 'inherit' }}>Project List</Link>
          </MenuItem>
          <MenuItem>
            <Link to="/dashboard/project-create" style={{ display: 'block', width: '100%', color: 'inherit' }}>Create Project</Link>
          </MenuItem>
        </SubMenu>
        <MenuItem icon={<FaUser size={20} style={{ color: '#FFC107' }} />} style={{ color: '#FFC107' }}>
          <Link to="/dashboard/users" style={{ display: 'block', width: '100%', color: 'inherit' }}>Users</Link>
        </MenuItem>
      </Menu>
      {/* Additional Menu Items or Footer Links */}
      <Menu>
        <MenuItem icon={<FaBook size={20} style={{ color: '#FFC107' }} />} style={{ color: '#FFC107' }}>
          <Link to="/documentation" style={{ display: 'block', width: '100%', color: 'inherit' }}>Documentation</Link>
        </MenuItem>
        <MenuItem icon={<FaCalendarAlt size={20} style={{ color: '#FFC107' }} />} style={{ color: '#FFC107' }}>
          <Link to="/calendar" style={{ display: 'block', width: '100%', color: 'inherit' }}>Calendar</Link>
        </MenuItem>
      </Menu>
    </Sidebar>
  );
}

export default UserSidebar;
