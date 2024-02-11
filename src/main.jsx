import { ThemeProvider } from '@mui/material';

import ReactDOM from 'react-dom/client';

import App from './App.jsx';
import theme from './styles/Theme.jsx';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')).render(
  <QueryClientProvider client={queryClient}>
    <ThemeProvider theme={theme}>
      <ReactQueryDevtools initialIsOpen={true} />
      <App />
    </ThemeProvider>
  </QueryClientProvider>
);
