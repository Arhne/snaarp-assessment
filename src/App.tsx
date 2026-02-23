import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import Dashboard from './pages/dashboard';
import Navbar from './components/navBar';
import Sidebar from './components/sideBar';
import './app.scss';

const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      { index: true, element: <Dashboard /> },
      { path: 'organization', element: <h1>Organization & Reg</h1> },
      { path: 'reporting', element: <h1>Reporting</h1> },
      { path: 'billing', element: <h1>Billing</h1> },
      { path: 'account', element: <h1>Account</h1> },
      { path: 'storage', element: <h1>Storage</h1> },
      { path: 'settings', element: <h1>Settings</h1> },
      { path: 'device-management', element: <h1>Device Management</h1> },
      { path: 'productivity-report', element: <h1>Productivity Report</h1> },
      { path: 'user-panel', element: <h1>User Panel</h1> },
      { path: 'support', element: <h1>Support</h1> },
    ],
  },
]);

function AppLayout() {
  return (
    <div className="App">
      <div className="sidebarContainer">
        <Sidebar />
      </div>
      <div className="mainContainer">
        <Navbar />
        <div className="mainContainerScroll">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

function App() {
  return <RouterProvider router={router} />;
}

export default App
