import { Link } from 'react-router-dom';

import { Typography, Button, Grid } from '@mui/material';

const ErrorPage = () => {
  return (
    <Grid
      container
      direction='column'
      justifyContent='center'
      alignItems='center'
      style={{ minHeight: '100vh', padding: '20px' }}
    >
      <Grid item>
        <Typography variant='h1' align='center' gutterBottom>
          Oops!
        </Typography>
        <Typography variant='h4' align='center' gutterBottom>
          An error occurred. The page you are looking for cannot be found.
        </Typography>
      </Grid>
      <Grid item>
        <Button
          variant='contained'
          component={Link}
          to='/'
          style={{ marginTop: '20px' }}
        >
          Back to Home
        </Button>
      </Grid>
    </Grid>
  );
};

export default ErrorPage;
