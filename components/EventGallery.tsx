"use client";
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Box, Typography, Container } from '@mui/material';

const images = [
  {
    // url: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3"
    // 
    url:'/img1.jpg',
    caption: "Annual General Meeting"
  },
  {
    // url: "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?ixlib=rb-4.0.3",
    url:'/img2.jpg',
    caption: "Members during AGM presentation"
  },
  {
    // url: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?ixlib=rb-4.0.3",
    url:'/img3.jpg',
    caption: "Committee members at the AGM"
  },
  {
    // url: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3",
    url:'/img4.jpg',
    caption: "Annual General Meeting (AGM)"
  },
  {
    // url: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3",
    url:'/img5.jpg',
    caption: "Annual General Meeting (AGM)"
  },
  {
    // url: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3",
    url:'/img6.jpg',
    caption: "Annual General Meeting (AGM)"
  },
  {
    // url: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3",
    url:'/img7.jpg',
    caption: "Annual General Meeting (AGM)"
  }
];

export default function EventGallery() {
  return (
    <Box sx={{ py: 8, bgcolor: '#f8f9fa' }}>
      <Container maxWidth="lg">
        <Typography 
          variant="h3" 
          sx={{ 
            color: '#2A4F55',
            mb: 4,
            textAlign: 'center',
            fontWeight: 600
          }}
        >
          Annual General Meeting
        </Typography>
        <Typography 
          sx={{ 
            mb: 6,
            textAlign: 'center',
            maxWidth: '800px',
            mx: 'auto'
          }}
        >
          Every year, we gather to discuss our achievements, plan for the future, and strengthen our community bonds through our Annual General Meeting.
        </Typography>
        <Box sx={{ 
          '.swiper': { 
            width: '100%',
            height: { xs: '300px', md: '500px' }
          },
          '.swiper-slide': {
            textAlign: 'center',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          },
          '.swiper-slide img': {
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            borderRadius: '8px',
          },
          '.swiper-button-next, .swiper-button-prev': {
            color: '#2A4F55',
          },
          '.swiper-pagination-bullet-active': {
            backgroundColor: '#2A4F55',
          }
        }}>
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            loop={true}
          >
            {images.map((image, index) => (
              <SwiperSlide key={index}>
                <img src={image.url} alt={image.caption} />
                <Typography
                  sx={{
                    position: 'absolute',
                    bottom: '20px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    color: 'white',
                    backgroundColor: 'rgba(42, 79, 85, 0.8)',
                    padding: '8px 16px',
                    borderRadius: '4px',
                    width: 'auto',
                    textAlign: 'center',
                  }}
                >
                  {image.caption}
                </Typography>
              </SwiperSlide>
            ))}
          </Swiper>
        </Box>
      </Container>
    </Box>
  );
}