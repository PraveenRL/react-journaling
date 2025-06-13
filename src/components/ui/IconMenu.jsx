import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import IconButton from "@mui/material/IconButton";
import { useState } from "react";

const IconMenu = ({ children, id, label, menuItems, onSelect }) => {
  const [anchorEl, setAnchorEl] = useState();
  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = (item) => {
    setAnchorEl(null);
    onSelect(item);
  };

  return (
    <>
      <IconButton
        size="large"
        aria-label={label}
        aria-controls="menu-appbar"
        aria-haspopup="true"
        onClick={handleMenu}
        color="inherit"
      >
        {children}
      </IconButton>
      <Menu
        id={id}
        anchorEl={anchorEl}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        transformOrigin={{ vertical: "top", horizontal: "right" }}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        keepMounted
      >
        {menuItems.map((item) => (
          <MenuItem key={item.id} onClick={() => handleClose(item)}>
            {item.label}
          </MenuItem>
        ))}
      </Menu>
    </>
  );
};

export default IconMenu;
