
import { BsLightningCharge } from 'react-icons/bs';
import style from './banner.module.scss'
import { FaArrowDown, FaArrowUp } from "react-icons/fa6";
import { AreaChart, Area, CartesianGrid, Tooltip } from 'recharts';
import { PieChart, Pie, Label } from 'recharts';
import { PiWarningOctagonFill } from 'react-icons/pi';

interface IBanner {
  icon: React.ReactNode;
  bannerTitle: string;
  amount: string;
  isPercentageIncrease: boolean;
  percentage: number;
}
interface IPieBanner {
  icon: React.ReactNode;
  bannerTitle: string;
}

const data = [
  { year: '2020', iphone: 4000 },
  { year: '2021', iphone: 3500 },
  { year: '2022', iphone: 3800 },
  { year: '2023', iphone: 2000 },

];
const PIE_COLORS = ['#10B981', '#EF4444', '#3B82F6', '#F59E0B', '#8B5CF6', '#EC4899', '#6B7280'];

const pieData = [
  { name: 'Group A', value: 400, fill: PIE_COLORS[0] },
  { name: 'Group B', value: 300, fill: PIE_COLORS[1] },
  { name: 'Group C', value: 500, fill: PIE_COLORS[2] },
  { name: 'Group D', value: 400, fill: PIE_COLORS[3] },
  { name: 'Group E', value: 300, fill: PIE_COLORS[4] },
  { name: 'Group F', value: 500, fill: PIE_COLORS[5] },
  { name: 'Group G', value: 500, fill: PIE_COLORS[6] },
];

function getColor(index: number) {
  return PIE_COLORS[index % PIE_COLORS.length];
}

export function NetworkBanner({ icon, bannerTitle, amount, isPercentageIncrease, percentage }: IBanner) {
  return (
    <div className={style.networkBannerWrapper}>
      <div className={style.colContent}>
        <div className={style.flexContent}>
          <div className={style.iconWrapper}>{icon}</div>
          <p className={style.smallText}>{bannerTitle}</p>
        </div>
        <div className={style.flexContent}>
          <h6>{amount}</h6>
          {isPercentageIncrease ? <FaArrowUp className={style.increase} /> : <FaArrowDown className={style.decrease} />}
          <p className={`${style.small} ${isPercentageIncrease ? style.increase : style.decrease}`}>{`${percentage}%`}</p>
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
          <CartesianGrid strokeDasharray="3 3" />
          {/* <XAxis dataKey="year" /> */}
          {/* <YAxis width="auto" /> */}
          <Tooltip />
          <Area type="monotone" dataKey="iphone" stroke={isPercentageIncrease ? "#10B981" : "#EF4444"} fill={isPercentageIncrease ? "#10B981" : "#EF4444"} />
        </AreaChart>
      </div>
    </div>
  )
}

export function StoragePieChart({ icon, bannerTitle }: IPieBanner) {
  return (
    <div className={style.container}>
      <div className={style.flexContent}>
        <div className={style.iconWrapper}>{icon}</div>
        <p className={style.smallText}>{bannerTitle}</p>
      </div>
      <div className={style.storageBannerWrapper}>
        <div className={style.pieWrapper}>
          <PieChart responsive style={{ height: 'calc(100% - 20px)', width: '33%', flex: '1 1 200px', aspectRatio: 1 }}>
            <Pie data={pieData} dataKey="value" nameKey="name" outerRadius="80%" innerRadius="60%" isAnimationActive={false} />
            <Label position="center" fill="#000" fontSize="12px" fontWeight="bold">
              80% Used
            </Label>
          </PieChart>
        </div>


        <div className={style.noteWrapper}>
          <div className={style.warningNote}>
            <PiWarningOctagonFill size={17} color='#F59E0B'/>
            <div>
              <h6 className={`${style.small} ${style.noteText}`}>Note</h6>
              <p className={style.small}>You've almost reached your limit.</p>
              <p className={style.small}>You haveve used 80% of your storage. Upgrade plan to access more space.</p>
            </div>
          </div>
          <div className={style.storageLists}>
            {['Files', 'Folders', 'Videos', 'Apps', 'Audios', 'Miscellaneous', 'Available Space'].map((item, index) => (
              <div key={index} className={style.flexListContent}>
                <div className={style.bulletPoint} style={{ backgroundColor: getColor(index) }}></div>
                <p className={style.small}>{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className={style.btn}>
        <button className={style.upgradebtn}>
          <BsLightningCharge />
          Upgrade Plan
        </button>

      </div>
    </div>
  )
}

