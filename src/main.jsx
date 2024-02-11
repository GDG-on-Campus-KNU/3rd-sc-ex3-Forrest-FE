import { ThemeProvider } from '@mui/material';

import ReactDOM from 'react-dom/client';

import App from './App.jsx';
import theme from './styles/Theme.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>
);
