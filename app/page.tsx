"use client";
import React from 'react';
import { Box, Container, Typography, Button, Grid, Paper, Stack } from '@mui/material';
import { Users, PiggyBank, Building2, ArrowRight, Shield, Handshake, Award } from 'lucide-react';
import Link from 'next/link';
import EventGallery from '@/components/EventGallery';

export default function Home() {
  const scrollToFooter = () => {
    const footer = document.querySelector('footer');
    if (footer) {
      footer.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <Box>
      {/* Hero Section */}
      <Box 
        sx={{
          background: '#2A4F55',
          color: 'white',
          py: { xs: 8, md: 12 },
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6}>
              <Typography 
                variant="h1" 
                sx={{ 
                  fontSize: { xs: '2.5rem', md: '3.5rem' },
                  fontWeight: 700,
                  mb: 2
                }}
              >
                Building Financial Success Together
              </Typography>
              <Typography 
                variant="h2" 
                sx={{ 
                  fontSize: { xs: '1.2rem', md: '1.5rem' },
                  fontWeight: 400,
                  mb: 4,
                  opacity: 0.9
                }}
              >
                Join Nipost Crescent Multipurpose Cooperative Society for a secure financial future
              </Typography>
              <Link href='/about' >
              <Button 
                variant="contained" 
                size="large"
                endIcon={<ArrowRight />}
                sx={{
                  backgroundColor: '#457b83',
                  '&:hover': {
                    backgroundColor: '#386268'
                  },
                  px: 4,
                  py: 1.5
                }}
              >
                About Us
              </Button>
              </Link>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box 
                component="img"
                // src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3"
                src='/hero.jpg'
                alt="Cooperative meeting"
                sx={{
                  width: '100%',
                  height: {sx:'auto', md:'350px'},
                  borderRadius: 2,
                  boxShadow: '0 20px 40px rgba(0,0,0,0.2)'
                }}
              />
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Features Section */}
      <Container maxWidth="lg" sx={{ py: { xs: 8, md: 12 } }}>
        <Typography 
          variant="h3" 
          align="center" 
          sx={{ 
            mb: 8,
            color: '#2A4F55',
            fontWeight: 600
          }}
        >
          Why Choose Our Cooperative?
        </Typography>
        <Grid container spacing={4}>
          {[
            {
              icon: <Shield size={40} />,
              title: 'Secure Savings',
              description: 'Your savings are protected and managed with the highest security standards'
            },
            {
              icon: <PiggyBank size={40} />,
              title: 'Competitive Returns',
              description: 'Enjoy attractive interest rates on your savings and investments'
            },
            {
              icon: <Handshake size={40} />,
              title: 'Easy Loans',
              description: 'Access to low-interest loans with flexible repayment terms'
            },
            {
              icon: <Users size={40} />,
              title: 'Strong Community',
              description: 'Join a community of members supporting each other\'s financial growth'
            }
          ].map((feature, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Paper 
                elevation={0}
                sx={{
                  p: 3,
                  height: '100%',
                  textAlign: 'center',
                  border: '1px solid #eaeaea',
                  '&:hover': {
                    boxShadow: '0 8px 24px rgba(0,0,0,0.1)',
                    transform: 'translateY(-4px)',
                    transition: 'all 0.3s ease'
                  }
                }}
              >
                <Box sx={{ color: '#2A4F55', mb: 2 }}>{feature.icon}</Box>
                <Typography variant="h6" sx={{ mb: 1, color: '#2A4F55' }}>
                  {feature.title}
                </Typography>
                <Typography color="text.secondary">
                  {feature.description}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>


      {/* Event Gallery */}
      <EventGallery/>

      {/* About Section */}
      <Box sx={{ bgcolor: '#f7f9fa', py: { xs: 8, md: 12 } }}>
        <Container maxWidth="lg">
          <Grid container spacing={6} alignItems="center">
            <Grid item xs={12} md={6}>
              <Box 
                component="img"
                // src="https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?ixlib=rb-4.0.3"
                src='/img1.jpg'
                alt="About our cooperative"
                sx={{
                  width: '100%',
                  height: 'auto',
                  borderRadius: 2
                }}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography 
                variant="h3" 
                sx={{ 
                  color: '#2A4F55',
                  mb: 3,
                  fontWeight: 600
                }}
              >
                About Our Cooperative
              </Typography>
              <Typography paragraph sx={{ mb: 3, fontSize: '1.1rem' }}>
                Nipost Crescent Multipurpose Cooperative Society Limited is dedicated to improving the financial well-being of our members through collective savings, affordable loans, and financial education.
              </Typography>
              <Stack spacing={2}>
                {[
                  'Established with a vision of financial empowerment',
                  'Governed by democratic principles',
                  'Focused on member welfare and growth',
                  'Committed to transparency and accountability'
                ].map((point, index) => (
                  <Box key={index} sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    <Award size={20} style={{ color: '#2A4F55' }} />
                    <Typography>{point}</Typography>
                  </Box>
                ))}
              </Stack>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* CTA Section */}
      <Box 
        sx={{
          bgcolor: '#2A4F55',
          color: 'white',
          py: { xs: 6, md: 8 },
          textAlign: 'center'
        }}
      >
        <Container maxWidth="md">
          <Typography 
            variant="h3" 
            sx={{ 
              mb: 3,
              fontWeight: 600
            }}
          >
            Ready to Join Our Cooperative?
          </Typography>
          <Typography 
            sx={{ 
              mb: 4,
              fontSize: '1.1rem',
              opacity: 0.9
            }}
          >
            Take the first step towards a secure financial future with our cooperative society.
          </Typography>
          <Button 
            variant="contained" 
            size="large"
            endIcon={<ArrowRight />}
            sx={{
              backgroundColor: 'white',
              color: '#2A4F55',
              '&:hover': {
                backgroundColor: '#f0f0f0'
              },
              px: 4,
              py: 1.5
            }}
            onClick={() => {scrollToFooter(); }}
          >
           Contact Us
          </Button>
        </Container>
      </Box>

     

    </Box>
  );
}