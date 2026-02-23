import { NavLink } from 'react-router-dom';
import { CiGrid41, CiUser, CiSettings } from 'react-icons/ci';
import { HiOutlineBuildingOffice2, HiOutlineChartBar, HiOutlineCreditCard, HiOutlineCircleStack, HiOutlineQuestionMarkCircle } from 'react-icons/hi2';
import { PiDevices } from 'react-icons/pi';
import { MdOutlineAssessment, MdOutlinePerson } from 'react-icons/md';
import type { IconType } from 'react-icons';
import styles from './sideBar.module.scss';

const MENU_TOP: { path: string; label: string; icon: IconType }[] = [
  { path: '/', label: 'Dashboard', icon: CiGrid41 },
  { path: '/organization', label: 'Organization & Reg', icon: HiOutlineBuildingOffice2 },
  { path: '/reporting', label: 'Reporting', icon: HiOutlineChartBar },
  { path: '/billing', label: 'Billing', icon: HiOutlineCreditCard },
  { path: '/account', label: 'Account', icon: CiUser },
  { path: '/storage', label: 'Storage', icon: HiOutlineCircleStack },
  { path: '/settings', label: 'Settings', icon: CiSettings },
  { path: '/device-management', label: 'Device Management', icon: PiDevices },
];

const MENU_BOTTOM: { path: string; label: string; icon: IconType }[] = [
  { path: '/productivity-report', label: 'Productivity Report', icon: MdOutlineAssessment },
  { path: '/user-panel', label: 'User Panel', icon: MdOutlinePerson },
  { path: '/support', label: 'Support', icon: HiOutlineQuestionMarkCircle },
];

function Sidebar() {
  return (
    <nav className={styles.sidebar}>
      <h3 className={styles.sidebarTitle}>Snaarp</h3>
      <div className={styles.menuTop}>
        {MENU_TOP.map((item) => {
          const Icon = item.icon;
          return (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) => (isActive ? `${styles.link} ${styles.active}` : styles.link)}
              end={item.path === '/'}
            >
              <Icon className={styles.linkIcon} aria-hidden />
              <span>{item.label}</span>
            </NavLink>
          );
        })}
      </div>
      <div className={styles.menuSpacer} aria-hidden />
      <div className={styles.menuBottom}>
        {MENU_BOTTOM.map((item) => {
          const Icon = item.icon;
          return (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) => (isActive ? `${styles.link} ${styles.active}` : styles.link)}
            >
              <Icon className={styles.linkIcon} aria-hidden />
              <span>{item.label}</span>
            </NavLink>
          );
        })}
      </div>
    </nav>
  );
}

export default Sidebar;
