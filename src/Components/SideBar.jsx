import React from "react";
import "./../Styles/SideBar.css";
import {
  Sidebar,
  Menu,
  MenuItem,
  SubMenu,
  menuClasses,
} from "react-pro-sidebar";
import { HashLink as Link } from "react-router-hash-link";
import { FaHome } from "react-icons/fa";
import { MdBiotech } from "react-icons/md";
import { IoMdPersonAdd } from "react-icons/io";
import { GrProjects } from "react-icons/gr";
import { RiContactsBook2Fill } from "react-icons/ri";
import { PiCertificateDuotone } from "react-icons/pi";

function SideBar() {
  return (
    <Sidebar
      collapsed
      collapsedWidth="60px"
      backgroundColor="inherit"
      style={{
        position: "fixed",
        boxShadow: "0 0 10px rgba(63, 81, 181, 0.3)",
        borderRadius: "20px",
        border: "none",
        height: "45%",
        gap: "2rem",
        marginTop: "none",
      }}
    >
      <Menu
        className="menu"
        menuItemStyles={{
          button: ({ level, active, disabled }) => {
            // only apply styles on first level elements of the tree
            if (level === 0)
              return {
                color: disabled ? "inherit" : "white",
                backgroundColor: active ? "inherit" : "inherit",
                "&:hover": {
                  backgroundColor: "inherit",
                  scale: 1.1,
                  transform: "scale(1.2)",
                  transition: "all 0.1s ease-in-out",
                },
              };
          },
        }}
      >
        <MenuItem component={<Link smooth to="#home" />}>
          <FaHome />
        </MenuItem>
        <MenuItem component={<Link smooth to="#technologies" />}>
          <MdBiotech />
        </MenuItem>
        <MenuItem component={<Link smooth to="#about" />}>
          <IoMdPersonAdd />
        </MenuItem>
        <MenuItem component={<Link smooth to="#projects" />}>
          <GrProjects />
        </MenuItem>
        <MenuItem component={<Link smooth to="#certificates" />}>
          <PiCertificateDuotone />
        </MenuItem>
        <MenuItem component={<Link smooth to="#contact" />}>
          <RiContactsBook2Fill />
        </MenuItem>
      </Menu>
    </Sidebar>
  );
}

export default SideBar;
