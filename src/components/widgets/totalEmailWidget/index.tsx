import { LineChart, Line, XAxis, YAxis, Tooltip, Legend } from 'recharts';
import style from "./fileSharing.module.scss"
import { PiChartBar } from 'react-icons/pi';
import { FaChartLine } from 'react-icons/fa';
import { IoIosArrowDown } from 'react-icons/io';
import { MdOutlineEmail } from 'react-icons/md';

const data = [
    { name: 'Jan', pv: 2400,
        amt: 2400},
    { name: 'Feb', total: 20,pv: 1398,
        amt: 2210, },
    { name: 'Mar', pv: 9800,
        amt: 2290, },
    { name: 'Apr', pv: 3908,
        amt: 2000, },
    { name: 'May', pv: 4800,
        amt: 2181, },
    { name: 'Jun', pv: 3800,
        amt: 2500, },
    { name: 'Jul', pv: 4300,
        amt: 2100, },
    { name: 'Aug', pv: 4300,
        amt: 2100, },
    { name: 'Sep', pv: 4300,
        amt: 2100, },
    { name: 'Oct', pv: 4300,
        amt: 2100, },
    { name: 'Nov', pv: 4300,
        amt: 2100, },
    { name: 'Dec', pv: 4300,
        amt: 2100, },
];

export default function TotalEmailWidget() {
    return (
        <div className={style.fileSharingWidget}>
            <div className={style.header}>
                <div >
                    <div className={style.flexContent}>
                        <div className={style.iconWrapper}><MdOutlineEmail /></div>
                        <p className={style.smallText}>Total Email</p>
                    </div>
                </div>

                <div className={style.chartFlex}>
                    <div className={style.chartWrapper}><PiChartBar /></div>
                    <div className={style.chartWrapper}><FaChartLine /></div>
                    <div className={`${style.chartFlex} ${style.chartWrapper}`}>
                        <p className={style.smallText}>Month</p>
                        <IoIosArrowDown />
                    </div>
                </div>
            </div>

            <LineChart
                style={{ width: '100%', maxWidth: '700px', height: '100%', maxHeight: '70vh', aspectRatio: 1.618 }}
                responsive
                data={data}
                margin={{
                    top: 5,
                    right: 0,
                    left: 0,
                    bottom: 5,
                }}
            >
                {/* <CartesianGrid strokeDasharray="3 3" /> */}
                <XAxis dataKey="name" />
                <YAxis width="auto" />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
            </LineChart>

        </div>
    );
}
