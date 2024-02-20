import { Box, Skeleton, Typography } from '@mui/material';

const SideBarContent = () => {
  return (
    <Box
      sx={{
        width: '100%',
        height: '100%',
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
            }}
            variant='rounded'
            width={201}
            height={202}
          />
          <Typography variant='var(--fontSizeXs)'>BEFORE</Typography>
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
            }}
            variant='rounded'
            width={201}
            height={202}
          />
          <Typography variant='var(--fontSizeXs)'>AFTER</Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default SideBarContent;
