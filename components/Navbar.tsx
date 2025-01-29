"use client";
import React, { useState } from 'react';
import { AppBar, Box, Toolbar, IconButton, Typography, Menu, Container, Button, MenuItem } from '@mui/material';
import { Menu as MenuIcon } from 'lucide-react';
import Link from 'next/link';

const pages = [
  { title: 'Home', path: '/' },
  { title: 'About Us', path: '/about' },
  { title: 'Services', path: '/services' }
];

export default function Navbar() {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const scrollToFooter = () => {
    const footer = document.querySelector('footer');
    if (footer) {
      footer.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <AppBar position="sticky" sx={{ backgroundColor: 'white', boxShadow: '0 2px 4px rgba(0,0,0,0.05)' }}>
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          {/* Logo for larger screens */}
          <Typography
            variant="h6"
            noWrap
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontWeight: 700,
              color: '#2A4F55',
              textDecoration: 'none',
            }}
          >
            NCMCS
          </Typography>

          {/* Mobile menu */}
          <Box 
          justifyContent='space-between'
          sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' },  }}>
            <IconButton
              size="large"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              sx={{ color: '#2A4F55' }}
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
              {pages.map((page) => (
                <MenuItem key={page.title} onClick={handleCloseNavMenu}>
                  <Link href={page.path} style={{ textDecoration: 'none', color: '#2A4F55' }}>
                    <Typography textAlign="center">{page.title}</Typography>
                  </Link>
                </MenuItem>
              ))}
              <MenuItem onClick={() => { handleCloseNavMenu(); scrollToFooter(); }}>
                <Typography textAlign="center" sx={{ color: '#2A4F55' }}>Contact Us</Typography>
              </MenuItem>
            </Menu>
          </Box>

          {/* Logo for mobile */}
          <Typography
            variant="h5"
            noWrap
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
            //   flexGrow: 1,
              fontWeight: 700,
              color: '#2A4F55',
              textDecoration: 'none',
            }}
          >
            NCMCS
          </Typography>

          {/* Desktop menu */}
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'center' }}>
            {pages.map((page) => (
              <Link key={page.title} href={page.path} style={{ textDecoration: 'none' }}>
                <Button
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: '#2A4F55', display: 'block', mx: 2 }}
                >
                  {page.title}
                </Button>
              </Link>
            ))}
          </Box>

          {/* Contact Us button */}
          <Box sx={{ flexGrow: 0, display: { xs: 'none', md: 'flex' },}}>
            <Button
              variant="contained"
              onClick={scrollToFooter}
              sx={{
                backgroundColor: '#2A4F55',
                '&:hover': {
                  backgroundColor: '#457b83'
                }
              }}
            >
              Contact Us
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}