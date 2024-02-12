import { Box } from '@mui/material';

const SideBarContent = () => {
  return (
    <Box
      sx={{
        width: '40vw',
        height: '100vh',
        backgroundColor: 'background.paper',
      }}
      role='presentation'
    >
      <div>Content Here</div>
    </Box>
  );
};

export default SideBarContent;
