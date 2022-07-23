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
import { deepOrange } from '@mui/material/colors';
import { useLogOutUserMutation } from 'redux/api';
import { useAuth } from 'hooks/useAuth';
import SearchBar from 'components/SearchBar';
import AddContactForm from 'components/AddContactForm';
import CustomDialog from 'components/CustomDialog';
import { useNavigate } from 'react-router-dom';

const stringAvatar = name => ({
  children: `${name[0].toUpperCase()}`,
});

const UserMenu = () => {
  const [logOutUser] = useLogOutUserMutation();
  const { user } = useAuth();
  const [anchorUserMenu, setAnchorUserMenu] = useState(null);
  const [openModal, setOpenModal] = useState(false);
  const navigate = useNavigate();

  const openUserMenuHandler = event => setAnchorUserMenu(event.currentTarget);
  const closeUserMenuHandler = () => setAnchorUserMenu(null);

  const openModalHandler = () => setOpenModal(true);
  const closeModalHandler = () => setOpenModal(false);

  const logOutHandler = async e => {
    const response = await logOutUser();
    if (response?.data) navigate('/login');
  };

  return (
    <>
      <Box sx={{ width: '100%' }}>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <SearchBar />
            <Fab
              size="small"
              color="warning"
              aria-label="add contact"
              onClick={openModalHandler}
              variant="circular"
            >
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
              <MenuItem key="Logout" onClick={logOutHandler}>
                <Typography textAlign="center">Logout</Typography>
              </MenuItem>
            </Menu>
          </Box>
        </Box>
      </Box>

      <CustomDialog title="Add contact" open={openModal} close={() => {}}>
        <AddContactForm closeModal={closeModalHandler} />
      </CustomDialog>
    </>
  );
};

export default UserMenu;
