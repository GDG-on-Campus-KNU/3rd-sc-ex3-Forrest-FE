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
  const {
    isHomeClicked,
    isWar1Clicked,
    isWar2Clicked,
    setIsHomeClicked,
    setIsWar1Clicked,
    setIsWar2Clicked,
  } = useRouterStore();
  const { setIsSideBarOpen } = useMapStore();
  const navigate = useNavigate();

  const handleWar1Click = () => {
    setIsSideBarOpen(false);
    setIsWar1Clicked();
    navigate('/map');
  };

  const handleWar2Click = () => {
    setIsSideBarOpen(false);
    setIsWar2Clicked();
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
            <ListItemButton onClick={handleWar1Click}>
              <ListItemIcon>
                <FlexWrapper>
                  <ColoredIcon icon={ForestIcon} isClicked={isWar1Clicked} />
                  <SideBarText>War1</SideBarText>
                </FlexWrapper>
              </ListItemIcon>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton onClick={handleWar2Click}>
              <ListItemIcon>
                <FlexWrapper>
                  <ColoredIcon icon={ForestIcon} isClicked={isWar2Clicked} />
                  <SideBarText>War2</SideBarText>
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
