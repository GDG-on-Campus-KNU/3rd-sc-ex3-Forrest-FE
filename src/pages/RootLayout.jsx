import { Outlet } from 'react-router-dom';

import { SideContainer } from '../styles/Layout';

import MainNavigation from '../components/common/MainNavigation';

const RootLayout = () => {
  return (
    <SideContainer>
      <MainNavigation />
      <main>
        <Outlet />
      </main>
    </SideContainer>
  );
};

export default RootLayout;
