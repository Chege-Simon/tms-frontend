import Sidebar from './Sidebar';
    import Topbar from './Topbar';
    import { Outlet } from 'react-router-dom';

    function Layout() {
      return (
        <div className="flex">
          <Sidebar />
          <div className="flex-1 ml-16 mt-16">
            <Topbar />
            <div className="p-6">
              <Outlet />
            </div>
          </div>
        </div>
      );
    }

    export default Layout;