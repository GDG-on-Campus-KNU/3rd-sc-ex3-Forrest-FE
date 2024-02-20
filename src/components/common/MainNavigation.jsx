import { useNavigate } from 'react-router-dom';

import { FlexWrapper } from '../../styles/Layout';
import { SideBarText } from '../../styles/Text';
import ForestIcon from '@mui/icons-material/Forest';
import HomeIcon from '@mui/icons-material/Home';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import { styled } from '@mui/system';

import { useMapStore } from '../../store/useMapStore';
import { useRouterStore } from '../../store/useRouterStore';

// eslint-disable-next-line no-unused-vars
const ColoredIcon = styled(({ icon: Icon, isClicked, ...rest }) => (
  <Icon {...rest} />
))(({ theme, isClicked }) => ({
  color: isClicked ? theme.palette.primary.main : theme.palette.text.primary,
}));

const MainNavigation = () => {
  const { isHomeClicked, isWarClicked, setIsHomeClicked, setIsWarClicked } =
    useRouterStore();
  const { setIsSideBarOpen } = useMapStore();
  const navigate = useNavigate();

  const handleWarClick = () => {
    setIsSideBarOpen(false);
    setIsWarClicked();
    navigate('/map');
  };

  return (
    <Box
      sx={{
        width: 60,
        height: '100%',
        bgcolor: 'background.paper',
        boxShadow: 'rgba(0, 0, 0, 0.15) 0px 1px 2px 0px',
      }}
    >
      <nav aria-label='main mailbox folders'>
        <List disablePadding>
          <ListItem disablePadding>
            <ListItemButton
              onClick={() => {
                setIsSideBarOpen(false);
                setIsHomeClicked();
                navigate('/');
              }}
            >
              <ListItemIcon>
                <FlexWrapper>
                  <ColoredIcon icon={HomeIcon} isClicked={isHomeClicked} />
                  <SideBarText>Home</SideBarText>
                </FlexWrapper>
              </ListItemIcon>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton onClick={handleWarClick}>
              <ListItemIcon>
                <FlexWrapper>
                  <ColoredIcon icon={ForestIcon} isClicked={isWarClicked} />
                  <SideBarText>War</SideBarText>
                </FlexWrapper>
              </ListItemIcon>
            </ListItemButton>
          </ListItem>
        </List>
      </nav>
    </Box>
  );
};

export default MainNavigation;
