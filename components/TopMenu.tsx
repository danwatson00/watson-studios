import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import Link from 'next/link';
import { NavItem } from '../types/types';
import { navItems } from '../constants/constants';
import MenuDropdown from './MenuDropdown';

export default function TopMenu() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static">
      <Container disableGutters>
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              ml: 2,
              display: { xs: 'none', md: 'flex' },
              fontWeight: 300,
              color: 'inherit',
              textDecoration: 'none'
            }}
          >
            Watson Studios
          </Typography>
          <Box 
            sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
            justifyContent='space-between'
            alignItems='center'
          >
            <Typography
              variant="h5"
              noWrap
              component="a"
              href=""
              sx={{
                ml: 2,
                mr: 2,
                display: { xs: 'flex', md: 'none' },
                fontWeight: 300,
                color: 'inherit',
                textDecoration: 'none'
              }}
            >
              Watson Studios
            </Typography>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: 'block', md: 'none' },
                }}
              >
                {navItems.map((item: NavItem) => {
                  if (item.isDropdown) {
                    return (
                      <MenuDropdown title={item.title} dropdownItems={item.dropdownItems} color="common.white" />
                    )
                  } else {
                    return (
                      <MenuItem key={item.title} onClick={handleCloseNavMenu}>
                        <Link 
                          style={{ textDecoration: 'none' }} 
                          href={`/${item.title.toLowerCase()}`}
                        >
                          <Typography color="common.white" textAlign="center">
                            {item.title}
                          </Typography>
                        </Link>
                      </MenuItem>
                    )
                  }
                  
                })}
              </Menu>
            </Box>
          <Box 
            sx={{ mr: 2, flexGrow: 1, display: { xs: 'none', md: 'flex' } }}
            justifyContent='flex-end'
          >
            {navItems.map((item: NavItem) => {
              if (item.isDropdown) {
                return (
                  <MenuDropdown color="common.white" title={item.title} dropdownItems={item.dropdownItems} />
                )
              } else {
                return (
                  <MenuItem key={item.title} onClick={handleCloseNavMenu}>
                    <Link 
                      style={{ textDecoration: 'none' }} 
                      href={`/${item.title.toLowerCase()}`}
                    >
                      <Typography sx={{ textDecoration: "none" }} color="common.white" textAlign="center">{item.title}</Typography>
                    </Link>
                  </MenuItem>
                )
              }
            })}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}