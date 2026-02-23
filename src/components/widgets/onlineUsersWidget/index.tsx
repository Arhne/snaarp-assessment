
import style from "./fileSharing.module.scss"
import { IoIosArrowDown } from 'react-icons/io';
import { PiUser } from 'react-icons/pi';
import { UserTableComp } from './userTable';



export default function OnlineUsersWidget() {
    return (
        <div className={style.fileSharingWidget}>
            <div className={style.header}>
                <div >
                    <div className={style.flexContent}>
                        <div className={style.iconWrapper}><PiUser /></div>
                        <p className={style.smallText}>Online Users</p>
                    </div>
                    <p className={style.small}>View your comprehensive online users</p>
                </div>

                <div className={style.chartFlex}>
                    <div className={`${style.chartFlex} ${style.chartWrapper}`}>
                        <p className={style.smallText}>All Organizations</p>
                        <IoIosArrowDown />
                    </div>
                </div>
            </div>

            <UserTableComp />
        </div>
    );
}
