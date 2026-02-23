import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
} from 'recharts';
import { fileSharingData } from '../../../utils/data';
import style from "./fileSharing.module.scss"
import { GrDocumentText } from 'react-icons/gr';
import { PiChartBar } from 'react-icons/pi';
import { FaChartLine } from 'react-icons/fa';
import { IoIosArrowDown } from 'react-icons/io';

const LEGEND_COLORS = ['#3b82f6', '#8b5cf6', '#10b981']; 

function getColor(index: number) {
  return LEGEND_COLORS[index % LEGEND_COLORS.length];
}

export default function FileSharingWidget() {
    return (
        <div className={style.fileSharingWidget}>
            <div className={style.header}>
                <div >
                    <div className={style.flexContent}>
                        <div className={style.iconWrapper}><GrDocumentText /></div>
                        <p className={style.smallText}>File Sharing</p>
                    </div>
                    <p className={style.small}>Keep track of file and how there are shared</p>
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

            <ResponsiveContainer width="100%" height={300}>
                <BarChart data={fileSharingData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#2d3748" />
                    <XAxis dataKey="month" stroke="#9ca3af" />
                    <YAxis stroke="#9ca3af" />
                    <Tooltip
                        contentStyle={{
                            backgroundColor: '#1a1f2e',
                            border: '1px solid #2d3748',
                            borderRadius: '8px',
                        }}
                    />
                    <Legend />
                    <Bar dataKey="public" fill="#3b82f6" radius={[8, 8, 0, 0]} />
                    <Bar dataKey="shared" fill="#8b5cf6" radius={[8, 8, 0, 0]} />
                    <Bar dataKey="organization" fill="#10b981" radius={[8, 8, 0, 0]} />
                </BarChart>
            </ResponsiveContainer>

        </div>
    );
}
