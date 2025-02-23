import React from 'react';
import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Grid,
  Typography,
  Stack,
  Avatar,
} from '@mui/material';
import { Apple, Android } from '@mui/icons-material';
import { LandingPageConfig } from '../config/landingConfig';

// Hero Section
const HeroSection: React.FC<{ config: LandingPageConfig['hero'] }> = ({ config }) => (
  <Box
    sx={{
      bgcolor: 'primary.main',
      color: 'primary.contrastText',
      textAlign: 'center',
      overflow: 'hidden',
    }}
  >
    <Container maxWidth="lg" sx={{ pt: 8, pb: 6 }}>
      <Typography variant="h1" component="h1" gutterBottom>
        {config.title}
      </Typography>
      <Typography variant="h5" paragraph>
        {config.subtitle}
      </Typography>
    </Container>
    {config.image && config.showImage && (
      <Box
        sx={{
          width: '100%',
          mt: 0,
          position: 'relative',
        }}
      >
        <Box
          component="img"
          src={`${process.env.PUBLIC_URL}${config.image}`}
          alt="Hero"
          sx={{
            width: '100%',
            height: config.imageHeight ? `${config.imageHeight}px` : '250px',
            display: 'block',
            objectFit: 'cover',
            objectPosition: 'center',
          }}
        />
      </Box>
    )}
  </Box>
);

// Features Section
const FeaturesSection: React.FC<{ config: LandingPageConfig['features'] }> = ({ config }) => (
  <Box sx={{ py: 8 }}>
    <Container maxWidth="lg">
      <Typography variant="h2" align="center" gutterBottom>
        {config.sectionTitle}
      </Typography>
      <Typography variant="h5" align="center" color="text.secondary" paragraph>
        {config.description}
      </Typography>
      <Grid container spacing={4} sx={{ mt: 4 }}>
        {config.items.map((feature, index) => (
          <Grid item xs={12} md={4} key={index}>
            <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', p: 3 }}>
              <CardContent sx={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', p: 0 }}>
                <Typography variant="h5" gutterBottom>
                  {feature.title}
                </Typography>
                <Typography color="text.secondary">
                  {feature.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  </Box>
);

// About Section
const AboutSection: React.FC<{ config: LandingPageConfig['about'] }> = ({ config }) => (
  <Box sx={{ py: 8, bgcolor: 'grey.50' }}>
    <Container maxWidth="lg">
      <Box sx={{ maxWidth: '800px', mx: 'auto' }}>
        <Typography variant="h2" align="center" gutterBottom>
          {config.title}
        </Typography>
        <Typography paragraph align="center" sx={{ mb: 6 }}>
          {config.content}
        </Typography>
        <Grid container spacing={3} justifyContent="center">
          {config.stats.map((stat, index) => (
            <Grid item xs={12} sm={4} key={index}>
              <Box sx={{ textAlign: 'center' }}>
                <Typography variant="h3" color="primary" gutterBottom>
                  {stat.value}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {stat.label}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  </Box>
);

// Testimonials Section
const TestimonialsSection: React.FC<{ config: LandingPageConfig['testimonials'] }> = ({ config }) => (
  <Box sx={{ py: 8 }}>
    <Container maxWidth="lg">
      <Typography variant="h2" align="center" gutterBottom>
        {config.sectionTitle}
      </Typography>
      <Grid container spacing={4} sx={{ mt: 4 }}>
        {config.items.map((testimonial, index) => (
          <Grid item xs={12} md={6} key={index}>
            <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', p: 3 }}>
              <CardContent sx={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', p: 0 }}>
                <Typography 
                  variant="body1" 
                  sx={{ 
                    mb: 4,
                    fontSize: '1.125rem',
                    lineHeight: 1.6,
                    fontStyle: 'italic'
                  }}>
                  "{testimonial.content}"
                </Typography>
                <Stack direction="row" spacing={2} alignItems="center">
                  <Avatar 
                    src={`${process.env.PUBLIC_URL}${testimonial.avatar}`} 
                    alt={testimonial.name}
                    sx={{ 
                      width: 56, 
                      height: 56,
                      border: '2px solid',
                      borderColor: 'primary.main'
                    }}
                  />
                  <Box>
                    <Typography 
                      variant="subtitle1" 
                      sx={{ 
                        fontWeight: 500,
                        color: 'text.primary'
                      }}
                    >
                      {testimonial.name}
                    </Typography>
                    <Typography 
                      variant="body2" 
                      sx={{ 
                        color: 'text.secondary',
                        fontSize: '0.875rem'
                      }}
                    >
                      {testimonial.role}
                    </Typography>
                  </Box>
                </Stack>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  </Box>
);

// Contact & Download Section
const ContactAndDownloadSection: React.FC<{ config: LandingPageConfig['contactAndDownload'] }> = ({ config }) => {
  return (
    <Box sx={{ py: 8, bgcolor: 'grey.50' }}>
      <Container maxWidth="lg">
        <Typography variant="h2" align="center" gutterBottom>
          {config.sectionTitle}
        </Typography>
        <Typography variant="h5" align="center" color="text.secondary" paragraph>
          {config.description}
        </Typography>

        {/* Download Section */}
        <Box sx={{ mt: 4, mb: 8, display: 'flex', justifyContent: 'center' }}>
          <Stack
            direction={{ xs: 'column', sm: 'row' }}
            spacing={3}
            alignItems="center"
          >
            {config.downloads.map((download, index) => (
              <Button
                key={index}
                variant="contained"
                color="primary"
                href={download.url}
                target="_blank"
                rel="noopener noreferrer"
                startIcon={download.platform === 'ios' ? <Apple /> : <Android />}
                size="large"
                sx={{
                  minWidth: 200,
                  height: 56,
                  borderRadius: 2,
                  fontSize: '1rem',
                }}
              >
                {download.buttonText}
              </Button>
            ))}
          </Stack>
        </Box>

        <Box sx={{ maxWidth: '600px', mx: 'auto' }}>
          <Card>
            <CardContent>
              <Typography variant="h5" gutterBottom align="center">
                Contact Information
              </Typography>
              <Stack spacing={2} sx={{ mt: 3 }}>
                <Typography align="center">
                  <strong>Email:</strong> {config.contactInfo.email}
                </Typography>
                {config.contactInfo.phone && (
                  <Typography align="center">
                    <strong>Phone:</strong> {config.contactInfo.phone}
                  </Typography>
                )}
                {config.contactInfo.supportHours && (
                  <Typography align="center">
                    <strong>Hours:</strong> {config.contactInfo.supportHours}
                  </Typography>
                )}
                {config.contactInfo.address && (
                  <Typography align="center">
                    <strong>Address:</strong> {config.contactInfo.address}
                  </Typography>
                )}
              </Stack>
            </CardContent>
          </Card>
        </Box>
      </Container>
    </Box>
  );
};

interface HomeProps {
  config: LandingPageConfig;
}

const Home: React.FC<HomeProps> = ({ config }) => {
  return (
    <Box component="main">
      <HeroSection config={config.hero} />
      <FeaturesSection config={config.features} />
      <AboutSection config={config.about} />
      <TestimonialsSection config={config.testimonials} />
      <ContactAndDownloadSection config={config.contactAndDownload} />
    </Box>
  );
};

export default Home;