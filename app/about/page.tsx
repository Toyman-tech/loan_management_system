"use client";
import React from 'react';
import { Box, Container, Typography, Grid, Paper } from '@mui/material';
import { Award, Users, Target, Heart } from 'lucide-react';

export default function About() {
  return (
    <Box sx={{ bgcolor: 'white' }}>
      {/* Hero Section */}
      <Box sx={{ bgcolor: '#2A4F55', color: 'white', py: 8 }}>
        <Container maxWidth="lg">
          <Typography variant="h2" sx={{ fontWeight: 700, mb: 2 }}>
            About Our Cooperative
          </Typography>
          <Typography variant="h5" sx={{ opacity: 0.9 }}>
            Interest Free, Our Values
          </Typography>
        </Container>
      </Box>

      {/* Mission & Vision */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Paper elevation={0} sx={{ p: 4, height: '100%', border: '1px solid #eaeaea' }}>
              <Box sx={{ color: '#2A4F55', mb: 2 }}>
                <Target size={40} />
              </Box>
              <Typography variant="h5" sx={{ color: '#2A4F55', mb: 2 }}>
                Our Mission
              </Typography>
              <Typography>
                To provide interest-free financial services and promote economic well-being among our members through sustainable cooperative practices, adhering to our core value of interest-free operations.
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} md={6}>
            <Paper elevation={0} sx={{ p: 4, height: '100%', border: '1px solid #eaeaea' }}>
              <Box sx={{ color: '#2A4F55', mb: 2 }}>
                <Heart size={40} />
              </Box>
              <Typography variant="h5" sx={{ color: '#2A4F55', mb: 2 }}>
                Our Vision
              </Typography>
              <Typography>
                To be the leading cooperative society in Osun State, fostering financial independence and community development through interest-free solutions.
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Container>

      {/* History Section */}
      <Box sx={{ bgcolor: '#f8f9fa', py: 8, textAlign: {xs:'center', md:'start'}}}>
        <Container maxWidth="lg">
          <Typography variant="h3" sx={{ color: '#2A4F55', mb: 4, textAlign: 'center' }}>
            Our History
          </Typography>
          <Typography paragraph sx={{ mb: 2 }}>
            NIPOST (OSUN) Crescent Multipurpose Cooperative Society Limited (MCSL) was established and registered under Section 7 (1) 2 of the Cooperative Society Law Cap II of the State of Osun, Nigeria Law of 2001, with registration number 1994. Our headquarters is located at the General Post Office, Osogbo, Osun State.
          </Typography>
          <Typography paragraph sx={{ mb: 2 }}>
           The idea behind this Co-operative Society (Interest Free our values) slot eminated from Mr. Kamil Adeyeye Adeagbo and Alhaji Mufutau Olawale Olamide discussion at the celebration of completion of Holy Qur'an of the two children of Mr. Nurudeen Eyiwuawi -Ayo. At Abeokuta, Ogun State. On 27th April, 2013.
          </Typography>
          <Typography paragraph sx={{ mb: 3 }}>
            But the first meeting was held on 5th of june, 2013 after payment of May, 2013. salary by Thirteen members and six members absent with permission.
          </Typography>
          <Grid container spacing={4}>
            <Grid item xs={12} md={4}>
              <Paper elevation={0} sx={{ p: 3, textAlign: 'center', height: '100%' }}>
                <Typography variant="h6" sx={{ color: '#2A4F55', mb: 2 }}>
                  Legal Status
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Registered under Cooperative Society Law Cap II of Osun State
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} md={4}>
              <Paper elevation={0} sx={{ p: 3, textAlign: 'center', height: '100%' }}>
                <Typography variant="h6" sx={{ color: '#2A4F55', mb: 2 }}>
                  Location
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Headquartered at General Post Office, Osogbo
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} md={4}>
              <Paper elevation={0} sx={{ p: 3, textAlign: 'center', height: '100%' }}>
                <Typography variant="h6" sx={{ color: '#2A4F55', mb: 2 }}>
                  Annual Meeting
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Regular AGMs for transparent management reporting
                </Typography>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Values Section */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Typography variant="h3" sx={{ color: '#2A4F55', mb: 6, textAlign: 'center' }}>
          Our Core Values
        </Typography>
        <Grid container spacing={4}>
          {[
            {
              icon: <Users size={40} />,
              title: 'Interest-Free Operations',
              description: 'We operate on a strictly interest-free basis, making financial services accessible to all'
            },
            {
              icon: <Award size={40} />,
              title: 'Member-Focused',
              description: 'Dedicated to serving our members with transparent and ethical financial solutions'
            },
            {
              icon: <Heart size={40} />,
              title: 'Community Development',
              description: 'Committed to the economic growth and welfare of our community'
            }
          ].map((value, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Paper 
                elevation={0}
                sx={{
                  p: 4,
                  height: '100%',
                  textAlign: 'center',
                  border: '1px solid #eaeaea',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    transition: 'all 0.3s ease'
                  }
                }}
              >
                <Box sx={{ color: '#2A4F55', mb: 2 }}>{value.icon}</Box>
                <Typography variant="h5" sx={{ mb: 2, color: '#2A4F55' }}>
                  {value.title}
                </Typography>
                <Typography>
                  {value.description}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}