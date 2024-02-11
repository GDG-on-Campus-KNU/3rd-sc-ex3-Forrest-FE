import { Outlet } from 'react-router-dom';

import { SideContainer } from '../styles/Layout';

import SideBar from '../components/common/MainNavigation';

const RootLayout = () => {
  return (
    <SideContainer>
      <SideBar />
      <main>
        <Outlet />
      </main>
    </SideContainer>
  );
};

export default RootLayout;
