import SideBarContent from './SideBarContent';
import CloseIcon from '@mui/icons-material/Close';
import Box from '@mui/material/Box';

const SideBar = ({ isOpen, onClose }) => {
  return (
    <Box
      sx={{
        position: 'fixed',
        top: 0,
        left: isOpen ? 60 : '-40vw',
        width: '40',
        height: '100%',
        backgroundColor: 'white',
        boxShadow: 'rgba(0, 0, 0, 0.15) 0px 1px 2px 0px',
        transition: 'left 0.5s ease',
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
        }}
      >
        <CloseIcon />
      </div>
    </Box>
  );
};

export default SideBar;
