"use client";
import React from 'react';
import { Box, Container, Typography, Grid, Paper, Button } from '@mui/material';
import { Wallet, PiggyBank, Users, BadgeDollarSign, Building, FileSpreadsheet } from 'lucide-react';
import Link from 'next/link';

export default function Services() {
  return (
    <Box sx={{ bgcolor: 'white' }}>
      {/* Hero Section */}
      <Box sx={{ bgcolor: '#2A4F55', color: 'white', py: 8 }}>
        <Container maxWidth="lg">
          <Typography variant="h2" sx={{ fontWeight: 700, mb: 2 }}>
            Our Services
          </Typography>
          <Typography variant="h5" sx={{ opacity: 0.9 }}>
            Interest-free financial solutions for our members
          </Typography>
        </Container>
      </Box>

      {/* Main Services */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Grid container spacing={4}>
          {[
            {
              icon: <Wallet size={40} />,
              title: 'Interest-Free Loans',
              description: 'Access to ethical financing without interest charges',
              features: [
                'Personal Loans',
                'Business Development Loans',
                'Emergency Loans',
                'Flexible Repayment Terms'
              ]
            },
            {
              icon: <PiggyBank size={40} />,
              title: 'Savings Programs',
              description: 'Secure and reliable savings options for your future',
              features: [
                'Regular Savings Account',
                'Target Savings',
                'Fixed Deposit',
                'Emergency Funds'
              ]
            },
            {
              icon: <Building size={40} />,
              title: 'Investment Plans',
              description: 'Grow your wealth through ethical investment options',
              features: [
                'Business Investment',
                'Asset Financing',
                'Joint Ventures',
                'Project Financing'
              ]
            }
          ].map((service, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Paper 
                elevation={0}
                sx={{
                  p: 4,
                  height: '100%',
                  border: '1px solid #eaeaea',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    transition: 'all 0.3s ease',
                    boxShadow: '0 10px 30px rgba(0,0,0,0.1)'
                  }
                }}
              >
                <Box sx={{ color: '#2A4F55', mb: 2 }}>{service.icon}</Box>
                <Typography variant="h5" sx={{ mb: 2, color: '#2A4F55' }}>
                  {service.title}
                </Typography>
                <Typography sx={{ mb: 3 }}>
                  {service.description}
                </Typography>
                <Box component="ul" sx={{ pl: 2 }}>
                  {service.features.map((feature, idx) => (
                    <Typography component="li" key={idx} sx={{ mb: 1 }}>
                      {feature}
                    </Typography>
                  ))}
                </Box>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Additional Services */}
      <Box sx={{ bgcolor: '#f8f9fa', py: 8 }}>
        <Container maxWidth="lg">
          <Typography variant="h3" sx={{ color: '#2A4F55', mb: 6, textAlign: 'center' }}>
            Additional Benefits
          </Typography>
          <Grid container spacing={4}>
            {[
              {
                icon: <Users size={40} />,
                title: 'Membership Benefits',
                description: 'Exclusive benefits for our cooperative members including financial advisory and networking opportunities'
              },
              {
                icon: <BadgeDollarSign size={40} />,
                title: 'Financial Education',
                description: 'Regular workshops and seminars on financial management and business development'
              },
              {
                icon: <FileSpreadsheet size={40} />,
                title: 'Annual General Meeting',
                description: 'Participate in our AGM for transparent reporting and decision-making'
              }
            ].map((benefit, index) => (
              <Grid item xs={12} md={4} key={index}>
                <Paper 
                  elevation={0}
                  sx={{
                    p: 4,
                    height: '100%',
                    textAlign: 'center',
                    border: '1px solid #eaeaea'
                  }}
                >
                  <Box sx={{ color: '#2A4F55', mb: 2 }}>{benefit.icon}</Box>
                  <Typography variant="h5" sx={{ mb: 2, color: '#2A4F55' }}>
                    {benefit.title}
                  </Typography>
                  <Typography>
                    {benefit.description}
                  </Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* CTA Section */}
      <Box sx={{ py: 8 }}>
        <Container maxWidth="sm" sx={{ textAlign: 'center' }}>
          <Typography variant="h4" sx={{ color: '#2A4F55', mb: 3 }}>
            Ready to Get Started?
          </Typography>
          <Typography sx={{ mb: 4 }}>
            Contact us to learn more about our services and how we can help you achieve your financial goals.
          </Typography>
          <Button
            component={Link}
            href="/#footer"
            variant="contained"
            size="large"
            sx={{
              backgroundColor: '#2A4F55',
              '&:hover': {
                backgroundColor: '#457b83'
              },
              px: 4,
              py: 1.5
            }}
          >
            Contact Us
          </Button>
        </Container>
      </Box>
    </Box>
  );
}