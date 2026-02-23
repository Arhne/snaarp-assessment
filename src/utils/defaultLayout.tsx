export interface WidgetPosition {
  id: string;
  title: string;
  colSpan: number;
  rowSpan: number;
}

export const defaultLayout: WidgetPosition[] = [
  { id: 'cloud-network', title: 'Cloud Network', colSpan: 2, rowSpan: 1 },
  { id: 'storage', title: 'Storage', colSpan: 1, rowSpan: 1 },
  { id: 'file-sharing', title: 'File Sharing', colSpan: 1, rowSpan: 1 },
  { id: 'active-users', title: 'Active Users', colSpan: 1, rowSpan: 1 },
  
  { id: 'device-management', title: 'Device Management', colSpan: 1, rowSpan: 1 },
  { id: 'user-management', title: 'User Management', colSpan: 1, rowSpan: 1 },
  { id: 'email-management', title: 'Email Management', colSpan: 1, rowSpan: 1 },
  { id: 'app-management', title: 'App Management', colSpan: 1, rowSpan: 1 },


  { id: 'productivity', title: 'Hours Productivity', colSpan: 1, rowSpan: 1 },
  { id: 'days-activity', title: 'Days Activity', colSpan: 1, rowSpan: 1 },
  { id: 'users-activity', title: 'Users Activity', colSpan: 1, rowSpan: 1 },
  { id: 'web-activity', title: 'Web Activity', colSpan: 1, rowSpan: 1 },
  { id: 'email-chart', title: 'Email Chart', colSpan: 1, rowSpan: 1 },
  { id: 'total-email', title: 'Total Email', colSpan: 1, rowSpan: 2 },
  { id: 'online-users', title: 'Online Users', colSpan: 1, rowSpan: 1 },
  { id: 'app-activity', title: 'App Activity Report', colSpan: 1, rowSpan: 1 },
  { id: 'web-activity-report', title: 'Web Activity Report', colSpan: 1, rowSpan: 1 },
];
