import { Box, Typography, Menu, MenuItem, styled } from "@mui/material";
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import { useState } from "react";

const Logout = styled(Typography)`
  font-size: 14px;
  margin-left: 20px;
`;

function Profile({ account, setAccount }) {
  const [open, setOpen] = useState(false);

  const handleClick = (event) => {
    setOpen(event.currentTarget);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const logoutUser = () => {
    setAccount("");
  };

  return (
    <>
      <Box>
        <Typography
          onClick={handleClick}
          style={{ marginTop: 2, cursor: "pointer" }}
        >
          {" "}
          {account}{" "}
        </Typography>
      </Box>
      <Menu
        style={{ marginTop: "5px" }}
        anchorEl={open}
        open={Boolean(open)}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem
          onClick={() => {
            handleClose();
            logoutUser();
          }}
        >
          <Logout>Logout</Logout>
          <PowerSettingsNewIcon color="primary" fontSize="small" />
        </MenuItem>
      </Menu>
    </>
  );
}

export default Profile;
