import { AreaChart, Area, Tooltip } from 'recharts';
import { PiDevices, PiPlugs, PiPlugsConnected } from "react-icons/pi"
import style from "./device.module.scss"
import { FaArrowUp } from "react-icons/fa6"

const data = [
    { year: '2020', iphone: 4000 },
    { year: '2021', iphone: 3500 },
    { year: '2022', iphone: 3800 },
    { year: '2023', iphone: 2000 },

];

function DeviceManagementWidget() {
    return (
        <div className={style.container}>
            <div className={style.networkBannerWrapper}>
                <div className={style.flexContentGrid}>

                    <div className={style.colContent}>
                        <div className={style.flexContent}>
                            <div className={style.iconWrapper}><PiDevices /></div>
                            <p className={style.small}>Number of Devices</p>
                        </div>
                        <div className={style.flexContent}>
                            <h6>3836</h6>
                            <FaArrowUp className={style.increase} />
                            <p className={`${style.small} ${style.increase}`}>{`15%`}</p>
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
                            <Area type="monotone" dataKey="iphone" stroke={"#10B981"} fill={"#10B981"} />
                        </AreaChart>
                    </div>
                </div>
                <hr className={style.spacing}/>
                <div className={style.flexDescr}>
                <div>
                    <div className={style.flexContent}>
                        <div className={style.iconWrapper}><PiPlugsConnected /></div>
                        <p className={style.smallText}>Plugged</p>
                    </div>
                    <h6>1,923</h6>
                </div>
                <div>
                    <div className={style.flexContent}>
                        <div className={style.iconWrapper}><PiPlugs />
                        </div>
                        <p className={style.smallText}>Unplugged</p>
                    </div>
                    <h6>1,913</h6>
                </div>
                </div>
            </div>
           
            <div className={style.networkBannerBottomWrapper}>
                <div className={style.flexDescr}>
                    <div>

                        <div className={style.flexContent}>
                            <div className={style.iconWrapper}><PiDevices /></div>
                            <p className={style.small}>Windows</p>
                        </div>
                        <h6 className={style.small}>1,923 devices</h6>

                    </div>
                    <div>

                        <div className={style.flexContent}>
                            <div className={style.iconWrapper}><PiDevices /></div>
                            <p className={style.small}>Mac</p>
                        </div>
                        <h6 className={style.small}>1,923 devices</h6>

                    </div>
                    <div>

                        <div className={style.flexContent}>
                            <div className={style.iconWrapper}><PiDevices /></div>
                            <p className={style.small}>Linux</p>
                        </div>
                        <h6 className={style.small}>1,801 devices</h6>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default DeviceManagementWidget