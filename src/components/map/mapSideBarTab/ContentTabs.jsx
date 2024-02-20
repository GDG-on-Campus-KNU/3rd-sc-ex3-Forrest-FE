import { useState } from 'react';

import theme from '../../../styles/Theme';
import ContentChart from './ContentChart';
import CustomTabPanel from './CustomTabPanel';
import YearsChart from './YearsChart';
import { Box, Tab, Tabs, Typography } from '@mui/material';

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
        <ContentChart />
        <Box sx={{ marginTop: 5 }}>
          <YearsChart />
        </Box>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <Typography
          variant='body2'
          sx={{
            color: theme.palette.secondary.main,
          }}
        >
          &lsquoThe Russo-Ukrainian War is an ongoing international conflict
          between Russia and Ukraine, which began in February 2014. Following
          Ukraine&apos;s Revolution of Dignity, Russia annexed Crimea from
          Ukraine and supported pro-Russian separatists fighting the Ukrainian
          military in the Donbas war. The first eight years of conflict also
          included naval incidents, cyberwarfare, and heightened political
          tensions. In February 2022, Russia launched a full-scale invasion of
          Ukraine and began occupying more of the country.
          <br />
          <br />
          In early 2014, the Euromaidan protests led to the Revolution of
          Dignity and the ousting of Ukraine&apos;s pro-Russian president Viktor
          Yanukovych. Shortly after, pro-Russian unrest erupted in eastern and
          southern Ukraine. Simultaneously, unmarked Russian troops moved into
          Ukraine&apos;s Crimea and took over government buildings, strategic
          sites and infrastructure. Russia soon annexed Crimea after a highly
          disputed referendum. In April 2014, Russian-backed separatist forces
          seized government buildings in Ukraine&apos;s eastern Donbas region
          and proclaimed the Donetsk People&apos;s Republic (DPR) and the
          Luhansk People&apos;s Republic (LPR) as independent states, starting
          the Donbas war. The separatists received considerable but covert
          support from Russia, and Ukrainian attempts to fully retake
          separatist-held areas failed. Although Russia denied involvement,
          Russian troops took part in the fighting. In February 2015, Russia and
          Ukraine signed the Minsk II agreements to end the conflict, but they
          were never fully implemented in the years that followed. The Donbas
          war settled into a violent but static conflict between Ukraine and the
          Russian and separatist forces, with many brief ceasefires but no
          lasting peace and few changes in territorial control.
          <br />
          <br />
          Beginning in 2021, Russia built up a large military presence near its
          border with Ukraine, including within neighbouring Belarus. Russian
          officials repeatedly denied plans to attack Ukraine. Russian president
          Vladimir Putin criticized the enlargement of NATO and demanded that
          Ukraine be barred from ever joining the military alliance. He also
          expressed irredentist views and questioned Ukraine&apos;s right to
          exist. Russia recognized the DPR and LPR as independent states in
          February 2022. Putin announced a \&lsquospecial military
          operation\&rsquo; to \&lsquodemilitarize and denazify\&rsquo; Ukraine,
          claiming Russia had no plans to occupy the country. Russian forces
          subsequently invaded Ukraine. The invasion was internationally
          condemned; many countries imposed sanctions against Russia and
          increased existing sanctions. In the face of fierce resistance, Russia
          abandoned an attempt to take Kyiv in early April 2022. From August,
          Ukrainian forces began recapturing territories in the north-east and
          south. In late September, Russia declared the annexation of four
          partially-occupied regions of Ukraine, which was internationally
          condemned. Russia spent the winter conducting inconclusive offensives
          in the Donbas. In spring 2023, Russia dug into positions ahead of
          another Ukrainian counteroffensive, which failed to gain significant
          ground. The war has resulted in a refugee crisis and tens of thousands
          of deaths.&rsquo;
        </Typography>
      </CustomTabPanel>
    </Box>
  );
};

export default ContentTabs;
