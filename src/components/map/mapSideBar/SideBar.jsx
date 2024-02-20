import SideBarContent from './SideBarContent';
import CloseIcon from '@mui/icons-material/Close';
import Box from '@mui/material/Box';

const SideBar = ({ isOpen, onClose }) => {
  return (
    <Box
      sx={{
        position: 'fixed',
        top: 0,
        left: isOpen ? 60 : '-32rem',
        width: '32rem',
        height: '100vh',
        backgroundColor: 'background.paper',
        boxShadow: 'rgba(0, 0, 0, 0.15) 0px 1px 2px 0px',
        transition: 'left 0.5s ease',
        '@media (maxWidth: 32rem)': {
          width: 'calc(100% - 60px)',
          right: isOpen ? 60 : 'calc(100% - 60px)',
        },
        '@media (maxWith: 280px)': {
          width: 'calc(100% - 60px)',
          right: isOpen ? 0 : '100%',
        },
      }}
    >
      <SideBarContent />
      <div
        onClick={onClose}
        style={{
          position: 'absolute',
          top: 10,
          right: 10,
          cursor: 'pointer',
          color: 'black',
          '@media (maxWidth: 32rem)': {
            top: 5,
            right: 5,
          },
        }}
      >
        <CloseIcon sx={{ fontSize: 32 }} />
      </div>
    </Box>
  );
};

export default SideBar;
