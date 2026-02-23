import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';
import { PiDevices, PiPlugs, PiPlugsConnected, PiUser } from "react-icons/pi"
import style from "../deviceManagementWidget/device.module.scss"
import { FaArrowDown, FaArrowUp } from "react-icons/fa6"
import { MdOutlineEmail, MdOutlineMarkEmailRead } from 'react-icons/md';

const data = [
    { year: '2020', iphone: 4000 },
    { year: '2021', iphone: 3500 },
    { year: '2022', iphone: 3800 },
    { year: '2023', iphone: 2000 },

];

function EmailManagementWidget() {
    return (
        <div className={style.container}>
            <div className={style.networkBannerWrapper}>
                <div className={style.flexContentGrid}>

                    <div className={style.colContent}>
                        <div className={style.flexContent}>
                            <div className={style.iconWrapper}><MdOutlineEmail/></div>
                            <p className={style.small}>Emails</p>
                        </div>
                        <div className={style.flexContent}>
                            <h6>316</h6>
                            <FaArrowDown className={style.decrease} />
                            <p className={`${style.small} ${style.decrease}`}>{`23%`}</p>
                        </div>
                        <p className={style.small}>Compared to last week</p>
                    </div>

                    <div className={style.chartWrapper}>
                        <AreaChart
                            style={{ width: '100%', maxWidth: '700px', maxHeight: '70vh', aspectRatio: 1.618 }}
                            responsive
                            data={data}
                            margin={{
                                top: 20,
                                right: 0,
                                left: 0,
                                bottom: 0,
                            }}
                            onContextMenu={(_, e) => e.preventDefault()}
                        >
                            <Tooltip />
                            <Area type="monotone" dataKey="iphone" stroke={"#EF4444"} fill={"#EF4444"} />
                        </AreaChart>
                    </div>
                </div>
                <hr className={style.spacing}/>
                <div className={style.flexDescr}>
                <div>
                    <div className={style.flexContent}>
                        <div className={style.iconWrapper}><PiPlugsConnected /></div>
                        <p className={style.smallText}>Active</p>
                    </div>
                    <h6>592</h6>
                </div>
                <div>
                    <div className={style.flexContent}>
                        <div className={style.iconWrapper}><PiPlugs />
                        </div>
                        <p className={style.smallText}>Offline</p>
                    </div>
                    <h6>1,913</h6>
                </div>
                </div>
            </div>
           
            <div className={style.networkBannerBottomWrapper}>
                <div className={style.flexDescr}>
                    <div>

                        <div className={style.flexContent}>
                            <div className={style.iconWrapper}><MdOutlineMarkEmailRead /></div>
                            <p className={style.small}>Read</p>
                        </div>
                        <h6 className={style.small}>1,403 emails</h6>

                    </div>
                    <div>

                        <div className={style.flexContent}>
                            <div className={style.iconWrapper}><MdOutlineEmail /></div>
                            <p className={style.small}>Unread</p>
                        </div>
                        <h6 className={style.small}>623 emails</h6>

                    </div>
                   
                </div>
            </div>
        </div>
    )
}

export default EmailManagementWidget