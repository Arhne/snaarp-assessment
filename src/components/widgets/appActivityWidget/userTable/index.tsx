import { Table } from "antd";
import React from "react";
import styles from "./style.module.scss";
import { userActivityData } from "../../../../utils/data";

interface ITableAction {
  key: string;
  name: string;
  nameImg?: string;
  location: string;
  organization: string;
  device: string;
  deviceImg: React.ReactNode;
  activity: string;
  activityImg: React.ReactNode;
  time: string;
}

export const UserTableComp = () => {
  
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      render: (name: string, content: ITableAction) => (
        <div className={styles.userWrap}>
          <div className={styles.iconWrap}>
            <img src={content.nameImg} alt="" width={50} height={50} />
          </div>
            <p className={styles.small}>{name}</p>
        </div>
      ),
    },
    {
      title: "Location",
      dataIndex: "location",
      render: (location: string) => (
        <p className={styles.cellSmall}>{location}</p>
      ),
    },
    {
      title: "Organization",
      dataIndex: "organization",
      render: (organization: string) => (
        <p className={styles.cellSmall}>{organization}</p>
      ),
    },

    {
      title: "Device",
      dataIndex: "device",
      render: (device: string, content: ITableAction) => (
         <div className={styles.userWrap}>
           {content.deviceImg}
            <p className={styles.small}>{device}</p>
        </div>
      )
    },
    {
      title: "Current Activity",
      dataIndex: "activity",
      render: (activity: string, content: ITableAction) => (
         <div className={styles.userWrap}>
           {content.activityImg}
            <p className={styles.small}>{activity}</p>  
        </div>
      )
    },
    {
      title: "Time Usage",
      dataIndex: "time",
      render: (time: string) => (
        <p className={styles.cellSmall}>{time}</p>
      ),
    }
  ];


  return (
    <div className={styles.StaffTable}>
     
      <div className={styles.tableWrap}>
        <Table
          columns={columns}
          dataSource={userActivityData}
          rowSelection={{ type: "radio" }}
          pagination={false}
        />
      </div>
      
    </div>
  );
};
