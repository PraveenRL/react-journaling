import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Paper from "@mui/material/Paper";
import BottomNav from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";

const BottomNavigation = ({ items }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const navigate = useNavigate();

  const handleChange = (index) => {
    setSelectedIndex(index);
    navigate(items[index].path);
  };

  return (
    <Paper
      sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
      elevation={3}
    >
      <BottomNav
        showLabels
        value={selectedIndex}
        onChange={(event, newValue) => handleChange(newValue)}
      >
        {items?.map((item) => (
          <BottomNavigationAction
            key={item.id}
            label={item.label}
            icon={<item.icon />}
          />
        ))}
      </BottomNav>
    </Paper>
  );
};

export default BottomNavigation;
