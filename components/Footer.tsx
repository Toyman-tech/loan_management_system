"use client";
import React from 'react';
import { Box, Container, Grid, Typography, Stack, IconButton } from '@mui/material';
import { Mail, Phone, MapPin } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  return (
    <Box component="footer" sx={{ bgcolor: '#f8f9fa', pt: 8, pb: 4 }}>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {/* About */}
          <Grid item xs={12} md={4}>
            <Typography variant="h6" sx={{ color: '#2A4F55', mb: 2 }}>
              NIPOST MCSL
            </Typography>
            <Typography variant="body2" sx={{ mb: 2 }}>
              NIPOST (OSUN) Crescent Multipurpose Cooperative Society Limited is committed to providing interest-free financial services to our members.
            </Typography>
            <Typography variant="body2" sx={{ color: '#2A4F55', fontWeight: 'bold' }}>
              Reg. Number: 19944
            </Typography>
          </Grid>

          {/* Quick Links */}
          <Grid item xs={12} sm={6} md={2}>
            <Typography variant="h6" sx={{ color: '#2A4F55', mb: 2 }}>
              Quick Links
            </Typography>
            <Stack spacing={1}>
              {['Home', 'About Us', 'Services'].map((item) => (
                <Link key={item} href={`/${item.toLowerCase().replace(' ', '-')}`} style={{ textDecoration: 'none' }}>
                  <Typography variant="body2" sx={{ color: 'text.secondary', '&:hover': { color: '#2A4F55' } }}>
                    {item}
                  </Typography>
                </Link>
              ))}
            </Stack>
          </Grid>

          {/* Services */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" sx={{ color: '#2A4F55', mb: 2 }}>
              Our Services
            </Typography>
            <Stack spacing={1}>
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                Interest-Free Loans
              </Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                Savings Accounts
              </Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                Investment Plans
              </Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                Financial Advisory
              </Typography>
            </Stack>
          </Grid>

          {/* Contact */}
          <Grid item xs={12} md={3}>
            <Typography variant="h6" sx={{ color: '#2A4F55', mb: 2 }}>
              Contact Us
            </Typography>
            <Stack spacing={2}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <MapPin size={18} />
                <Typography variant="body2">General Post Office, Osogbo, Osun State</Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <Phone size={18} />
                <Typography variant="body2">08109940257, 08151583466</Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <Mail size={18} />
                <Typography variant="body2">nipost.oscrescent.cooperative@gmail.com</Typography>
              </Box>
            </Stack>
          </Grid>
        </Grid>

        <Box sx={{ mt: 8, pt: 4, borderTop: '1px solid #eaeaea', textAlign: 'center' }}>
          <Typography variant="body2" color="text.secondary">
            © {new Date().getFullYear()} NIPOST (OSUN) Crescent Multipurpose Cooperative Society Limited. All rights reserved.
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
            Motto: Interest Free Our Values
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}