import { useState } from 'react';

import CustomTabPanel from './CustomTabPanel';
import { Box, Tab, Tabs } from '@mui/material';

const ContentTabs = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const a11yProps = (index) => {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label='basic tabs example'
        >
          <Tab label='Analytics' {...a11yProps(0)} />
          <Tab label='Article' {...a11yProps(1)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        Analytics Content
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        Article Content
      </CustomTabPanel>
    </Box>
  );
};

export default ContentTabs;
