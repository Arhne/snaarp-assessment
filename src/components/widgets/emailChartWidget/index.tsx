
import { PieChart, Pie, Label } from 'recharts';
import style from "./email.module.scss"
import { MdOutlineEmail } from 'react-icons/md';

const PIE_COLORS = ['#10B981', '#EF4444', '#3B82F6', '#F59E0B', '#8B5CF6', '#EC4899', '#6B7280'];

const pieData = [
    { name: 'Group A', value: 400, fill: PIE_COLORS[0] },
    { name: 'Group B', value: 300, fill: PIE_COLORS[1] },
    { name: 'Group C', value: 500, fill: PIE_COLORS[2] },

];

function getColor(index: number) {
    return PIE_COLORS[index % PIE_COLORS.length];
}
function EmailChartWidget() {
    return (
        <div className={style.container}>
            <div className={style.flexContent}>
                <div className={style.iconWrapper}><MdOutlineEmail /></div>
                <p className={style.smallText}>Email Chart</p>
            </div>
        
                <div className={style.pieWrapper}>
                    <PieChart responsive style={{ height: 'calc(100% - 20px)', width: '33%', flex: '1 1 200px', aspectRatio: 1 }}>
                        <Pie data={pieData} dataKey="value" nameKey="name" outerRadius="80%" innerRadius="60%" isAnimationActive={false} />
                        <Label position="center" fill="#000" fontSize="10px" fontWeight="bold">
                        Emails Charts
                        </Label>
                        
                    </PieChart>
            </div>
            <div className={style.storageLists}>
                {['Sent', 'Recieved', 'Unsent'].map((item, index) => (
                    <div key={index} className={style.flexListContent}>
                        <div className={style.bulletPoint} style={{ backgroundColor: getColor(index) }}></div>
                        <p className={style.small}>{item}</p>
                    </div>
                ))}
            </div>
            <div className={style.totalEmailWrapper}>
            <h5>Total Emails Sent</h5>
            <h5>5,421</h5>
            </div>
           
        </div>

    )
}

export default EmailChartWidget