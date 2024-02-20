import { Box, Typography } from '@mui/material';

const CustomTabPanel = ({ children, value, index, ...other }) => {
  return (
    <div
      role='tabpanel'
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 2 }}>
          <Typography component='div'>{children}</Typography>
        </Box>
      )}
    </div>
  );
};

export default CustomTabPanel;
