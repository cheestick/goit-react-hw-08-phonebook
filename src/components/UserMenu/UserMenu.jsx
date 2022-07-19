import React, { useState } from 'react';
import {
  Box,
  Tooltip,
  IconButton,
  Avatar,
  Menu,
  MenuItem,
  Typography,
  Divider,
  Fab,
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { Container } from '@mui/system';
import { deepOrange } from '@mui/material/colors';
import { useLogOutUserMutation } from 'redux/api';
import { useAuth } from 'hooks/useAuth';
import SearchBar from 'components/SearchBar';

const stringAvatar = name => ({
  children: `${name[0].toUpperCase()}`,
});

const UserMenu = () => {
  const [logOutUser] = useLogOutUserMutation();
  const { user } = useAuth();

  const [anchorUserMenu, setAnchorUserMenu] = useState(null);

  const openUserMenuHandler = event => {
    setAnchorUserMenu(event.currentTarget);
  };

  const closeUserMenuHandler = () => {
    setAnchorUserMenu(null);
  };

  return (
    <Container maxWidth="sm">
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <SearchBar />
          <Fab size="small" color="warning" aria-label="add contact">
            <AddIcon />
          </Fab>
        </Box>

        <Box>
          <Tooltip title="Open settings">
            <IconButton onClick={openUserMenuHandler}>
              <Avatar
                sx={{ bgcolor: deepOrange[500] }}
                {...stringAvatar(user.name)}
              ></Avatar>
            </IconButton>
          </Tooltip>
          <Menu
            id="account-menu"
            anchorEl={anchorUserMenu}
            transformOrigin={{ horizontal: 'right', vertical: 'top' }}
            anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
            open={Boolean(anchorUserMenu)}
            onClose={closeUserMenuHandler}
          >
            <MenuItem key="email" onClick={closeUserMenuHandler}>
              <Typography textAlign="center">{user.email}</Typography>
            </MenuItem>
            <Divider />
            <MenuItem key="Logout" onClick={logOutUser}>
              <Typography textAlign="center">Logout</Typography>
            </MenuItem>
          </Menu>
        </Box>
      </Box>
    </Container>
  );
};

export default UserMenu;
