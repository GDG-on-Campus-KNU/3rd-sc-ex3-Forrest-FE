import { Link } from 'react-router-dom';

import { Typography, Button, Grid, Box } from '@mui/material';
import { styled } from '@mui/system';

const AnimatedBox = styled(Box)({
  transition: 'transform 0.2s ease-in-out',
  '&:hover': {
    transform: 'scale(1.05)',
  },
});

const ErrorPage = () => {
  return (
    <Grid
      container
      direction='column'
      justifyContent='center'
      alignItems='center'
      style={{ minHeight: '100vh', padding: '20px' }}
    >
      <AnimatedBox
        component={Grid}
        item
        sx={{
          textAlign: 'center',
          mb: 4,
        }}
      >
        <Typography variant='h1' align='center' gutterBottom>
          Oops!
        </Typography>
        <Typography variant='h4' align='center' gutterBottom>
          An error occurred. The page you are looking for cannot be found.
        </Typography>
      </AnimatedBox>
      <AnimatedBox
        component={Grid}
        item
        sx={{
          textAlign: 'center',
        }}
      >
        <Button
          variant='contained'
          component={Link}
          to='/'
          style={{ marginTop: '20px' }}
        >
          Back to Home
        </Button>
      </AnimatedBox>
    </Grid>
  );
};

export default ErrorPage;
