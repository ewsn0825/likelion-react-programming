import { Outlet } from 'react-router-dom';
import FooterBar from './FooterBar';
import HeaderBar from './HeaderBar';

function RootLayout({ displaySideMenu = false }) {
  return (
    <>
      <HeaderBar />
      <main className="flex gap-4 p-5">
        {displaySideMenu && <nav>side navigation</nav>}
        <div className="flex-1">
          <Outlet />
        </div>
      </main>
      <FooterBar />
    </>
  );
}

export default RootLayout;