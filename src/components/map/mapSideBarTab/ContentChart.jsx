import theme from '../../../styles/Theme';
import { ThemeProvider } from '@mui/material/styles';
import { BarChart } from '@mui/x-charts/BarChart';

const ContentChart = () => {
  return (
    <ThemeProvider theme={theme}>
      <BarChart
        series={[
          {
            data: [1000, 12000, 20000, 3000],
            stack: 'A',
            label: 'Expected Resource',
            color: theme.palette.primary.light,
          },
        ]}
        height={350}
        xAxis={[
          {
            scaleType: 'band',
            data: ['Green Gas', 'Metal', 'Plastic', 'Tree'],
            categoryGapRatio: '0.6',
          },
        ]}
        margin={{ top: 50, bottom: 30, left: 40, right: 10 }}
      />
    </ThemeProvider>
  );
};

export default ContentChart;
