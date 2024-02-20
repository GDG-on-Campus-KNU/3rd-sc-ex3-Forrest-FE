import theme from '../../../styles/Theme';
import { BarChart } from '@mui/x-charts/BarChart';

const YearsChart = () => {
  const data = [3, 2, 1, 1];

  const labels = ['Years', 'Months', 'Days', 'Hours'];

  return (
    <BarChart
      series={[
        {
          data,
          stack: 'A',
          label: 'Estimated amount of recovery time',
          color: theme.palette.third.light,
        },
      ]}
      height={160}
      yAxis={[
        {
          scaleType: 'band',
          data: labels,
          categoryGapRatio: 0.6,
        },
      ]}
      layout='horizontal'
      margin={{ top: 50, bottom: 30, left: 50, right: 20 }}
    />
  );
};

export default YearsChart;
