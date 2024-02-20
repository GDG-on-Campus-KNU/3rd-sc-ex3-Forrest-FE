import ContentTabs from '../mapSideBarTab/ContentTabs';
import { Box, Skeleton, Typography } from '@mui/material';

const SideBarContent = () => {
  return (
    <Box
      sx={{
        width: '100%',
        height: '100%',
        overflow: 'auto',
      }}
      role='presentation'
    >
      <Box
        sx={{
          width: '100%',
          height: '20rem',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          '@media (max-width: 32rem)': {
            height: '16rem',
          },
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            paddingRight: '1.2rem',
          }}
        >
          <Skeleton
            sx={{
              marginBottom: '1rem',
              width: { xs: 120, sm: 180, md: 200 },
              height: { xs: 120, sm: 180, md: 200 },
            }}
            variant='rounded'
          />
          <Typography variant='subtitle2'>BEFORE</Typography>
        </Box>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            paddingLeft: '1.2rem',
          }}
        >
          <Skeleton
            sx={{
              marginBottom: '1rem',
              width: { xs: 120, sm: 180, md: 200 },
              height: { xs: 120, sm: 180, md: 200 },
            }}
            variant='rounded'
          />
          <Typography variant='subtitle2'>AFTER</Typography>
        </Box>
      </Box>
      <ContentTabs />
    </Box>
  );
};

export default SideBarContent;
