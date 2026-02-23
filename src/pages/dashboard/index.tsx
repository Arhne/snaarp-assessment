import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { DraggableWidget, DraggableGrid } from '../../components';
import Header from '../../components/customHeader';
import { CiGlobe } from 'react-icons/ci';
import styles from './dashboard.module.scss';
import { useWidgetState } from '../../hooks/useWidget';
import CloudNetworkWidget from '../../components/widgets/cloudNetworkWidget';
import StorageWidget from '../../components/widgets/storageWidget';
import FileSharingWidget from '../../components/widgets/fileSharingWidget';
import ActiveUsersWidget from '../../components/widgets/activeusersWidget';
import { PiDevices } from 'react-icons/pi';
import DeviceManagementWidget from '../../components/widgets/deviceManagementWidget';
import UserManagementWidget from '../../components/widgets/userManagementWidget';
import EmailManagementWidget from '../../components/widgets/emailManagementWidget';
import AppManagementWidget from '../../components/widgets/appManagementWidget';
import ProductivityWidget from '../../components/widgets/productivityWidget';
import DaysActivityWidget from '../../components/widgets/daysWidget';
import UsersActivityWidget from '../../components/widgets/usersActivityWidget';
import WebActivityWidget from '../../components/widgets/webWidget';
import EmailChartWidget from '../../components/widgets/emailChartWidget';
import TotalEmailWidget from '../../components/widgets/totalEmailWidget';
import OnlineUsersWidget from '../../components/widgets/onlineUsersWidget';
import AppActivityWidget from '../../components/widgets/appActivityWidget';
import WebActivityReportWidget from '../../components/widgets/webActivityWidget';


const DRAGGABLE_WIDGET_IDS = ['cloud-network', 'storage', 'file-sharing', 'active-users'] as const;
const MANAGEMENT_WIDGET_IDS = ['device-management', 'user-management', 'email-management', 'app-management'] as const;
const PRODUCTIVITY_WIDGET_IDS = ['productivity', 'days-activity', 'users-activity', 'web-activity', 'email-chart', 'total-email', 'online-users', 'app-activity', 'web-activity-report'] as const;

const widgetComponents: Record<string, React.ComponentType> = {
  'cloud-network': CloudNetworkWidget,
  'storage': StorageWidget,
  'file-sharing': FileSharingWidget,
  'active-users': ActiveUsersWidget,
  'device-management': DeviceManagementWidget,
  'user-management': UserManagementWidget,
  'email-management': EmailManagementWidget,
  'app-management': AppManagementWidget,
  'productivity': ProductivityWidget,
  'days-activity': DaysActivityWidget,
  'users-activity': UsersActivityWidget,
  'web-activity': WebActivityWidget,
  'email-chart': EmailChartWidget,
  'total-email': TotalEmailWidget,
  'online-users': OnlineUsersWidget,
  'app-activity': AppActivityWidget,
  'web-activity-report': WebActivityReportWidget,
};



function Dashboard() {
  const { layout, updateLayout } = useWidgetState();

  const draggableWidgets = layout.filter((w) => DRAGGABLE_WIDGET_IDS.includes(w.id as (typeof DRAGGABLE_WIDGET_IDS)[number]));
  const managementWidgets = layout.filter((w) => MANAGEMENT_WIDGET_IDS.includes(w.id as (typeof MANAGEMENT_WIDGET_IDS)[number]));
  const productivityWidgets = layout.filter((w) => PRODUCTIVITY_WIDGET_IDS.includes(w.id as (typeof PRODUCTIVITY_WIDGET_IDS)[number]));

  const handleCloudDragEnd = (fromIndex: number, toIndex: number) => {
    if (fromIndex === toIndex) return;
    const fromId = draggableWidgets[fromIndex]?.id;
    const toId = draggableWidgets[toIndex]?.id;
    if (fromId == null || toId == null) return;
    const layoutFrom = layout.findIndex((w) => w.id === fromId);
    const layoutTo = layout.findIndex((w) => w.id === toId);
    if (layoutFrom === -1 || layoutTo === -1) return;
    const newLayout = Array.from(layout);
    const [removed] = newLayout.splice(layoutFrom, 1);
    newLayout.splice(layoutTo, 0, removed);
    updateLayout(newLayout);
  };

  const handleManagementDragEnd = (fromIndex: number, toIndex: number) => {
    if (fromIndex === toIndex) return;
    const fromId = managementWidgets[fromIndex]?.id;
    const toId = managementWidgets[toIndex]?.id;
    if (fromId == null || toId == null) return;
    const layoutFrom = layout.findIndex((w) => w.id === fromId);
    const layoutTo = layout.findIndex((w) => w.id === toId);
    if (layoutFrom === -1 || layoutTo === -1) return;
    const newLayout = Array.from(layout);
    const [removed] = newLayout.splice(layoutFrom, 1);
    newLayout.splice(layoutTo, 0, removed);
    updateLayout(newLayout);
  };

  const handleProductivityDragEnd = (fromIndex: number, toIndex: number) => {
    if (fromIndex === toIndex) return;
    const fromId = productivityWidgets[fromIndex]?.id;
    const toId = productivityWidgets[toIndex]?.id;
    if (fromId == null || toId == null) return;
    const layoutFrom = layout.findIndex((w) => w.id === fromId);
    const layoutTo = layout.findIndex((w) => w.id === toId);
    if (layoutFrom === -1 || layoutTo === -1) return;
    const newLayout = Array.from(layout);
    const [removed] = newLayout.splice(layoutFrom, 1);
    newLayout.splice(layoutTo, 0, removed);
    updateLayout(newLayout);
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <div className={styles.dashboardWrapper}>
        <Header icon={<CiGlobe />} title="Cloud Network" />

        <DraggableGrid dragType="cloud-widget" onDragEnd={handleCloudDragEnd} className={styles.widgetGrid}>
          {draggableWidgets.map((widget, index) => {
            const WidgetComponent = widgetComponents[widget.id];
            if (!WidgetComponent) return null;
            return (
              <DraggableWidget
                key={widget.id}
                id={widget.id}
                index={index}
                onMove={handleCloudDragEnd}
                className={styles.widgetItem}
                dragType="cloud-widget"
              >
                <WidgetComponent />
              </DraggableWidget>
            );
          })}
        </DraggableGrid>

        <Header icon={<PiDevices />} title="Device Management Dashboard" isUpgradePlan />
        <DraggableGrid dragType="management-widget" onDragEnd={handleManagementDragEnd} className={styles.widgetMgtGrid}>
          {managementWidgets.map((widget, index) => {
            const WidgetComponent = widgetComponents[widget.id];
            if (!WidgetComponent) return null;
            return (
              <DraggableWidget
                key={widget.id}
                id={widget.id}
                index={index}
                onMove={handleManagementDragEnd}
                className={styles.widgetItem}
                dragType="management-widget"
              >
                <WidgetComponent />
              </DraggableWidget>
            );
          })}
        </DraggableGrid>

        <Header icon={<PiDevices />} title="Productivity Report" isUpgradePlan />
        <DraggableGrid dragType="productivity-widget" onDragEnd={handleProductivityDragEnd} className={styles.widgetProductivityGrid}>
          {productivityWidgets.map((widget, index) => {
            const WidgetComponent = widgetComponents[widget.id];
            if (!WidgetComponent) return null;
            const placementClass =
              index === 5 ? styles.productivityItem6 :
              index === 6 ? styles.productivityItem7 :
              index === 7 ? styles.productivityItem8 :
              index === 8 ? styles.productivityItem9 : '';
            return (
              <DraggableWidget
                key={widget.id}
                id={widget.id}
                index={index}
                onMove={handleProductivityDragEnd}
                className={`${styles.widgetItem} ${placementClass}`.trim()}
                dragType="productivity-widget"
              >
                <WidgetComponent />
              </DraggableWidget>
            );
          })}
        </DraggableGrid>
      </div>
    </DndProvider>
  );
}

export default Dashboard