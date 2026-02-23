import style from "./fileSharing.module.scss"
import { GrDocumentText } from 'react-icons/gr';
import { IoIosArrowDown } from 'react-icons/io';
import { UserTableComp } from '../onlineUsersWidget/userTable';



export default function AppActivityWidget() {
    return (
        <div className={style.fileSharingWidget}>
            <div className={style.header}>
                <div >
                    <div className={style.flexContent}>
                        <div className={style.iconWrapper}><GrDocumentText /></div>
                        <p className={style.smallText}>App Activity Report</p>
                    </div>
                    <p className={style.small}>View your comprehensive organizational app report</p>
                </div>

                <div className={style.chartFlex}>
                   <div className={`${style.chartFlex} ${style.chartWrapper}`}>
                        <p className={style.smallText}>All Organization</p>
                        <IoIosArrowDown />
                    </div>
                   <div className={`${style.chartFlex} ${style.chartWrapper}`}>
                        <p className={style.smallText}>Month</p>
                        <IoIosArrowDown />
                    </div>
                </div>
            </div>

           <UserTableComp />

        </div>
    );
}
