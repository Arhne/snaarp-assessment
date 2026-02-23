import { Table } from "antd";
import React from "react";
import styles from "./style.module.scss";
import { appActivityData } from "../../../../utils/data";

interface ITableAction {
  key: string;
  users: number;
  activityImg: React.ReactNode;
  activity: string;
  time: string;
  date: string;
}

export const UserTableComp = () => {
  
  const columns = [
    {
      title: "Application",
      dataIndex: "activity",
      render: (activity: string, content: ITableAction) => (
        <div className={styles.userWrap}>
          {content.activityImg}
            <p className={styles.small}>{activity}</p>
        </div>
      ),
    },
    {
      title: "Total Users",
      dataIndex: "users",
      render: (users: number) => (
        <p className={styles.cellSmall}>{users}</p>
      ),
    },
    {
      title: "Total Number of Hours",
      dataIndex: "time",
      render: (time: string) => (
        <p className={styles.cellSmall}>{time}</p>
      ),
    },

    {
      title: "Date",
      dataIndex: "date",
      render: (date: string) => (
         <div className={styles.userWrap}>
            <p className={styles.small}>{date}</p>
        </div>
      )
    },
  ];


  return (
    <div className={styles.StaffTable}>
     
      <div className={styles.tableWrap}>
        <Table
          columns={columns}
          dataSource={appActivityData}
          rowSelection={{ type: "radio" }}
          pagination={false}
        />
      </div>
      
    </div>
  );
};
