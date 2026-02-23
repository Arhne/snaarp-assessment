import { activeCountries } from '../../../utils/data';
import style from "./cloud.module.scss"
import { IoIosArrowDown } from 'react-icons/io';
import { GiGlobe } from 'react-icons/gi';


export default function WebActivityReportWidget() {
    return (
        <div className={style.widgetContainer}>
            <div className={style.header}>
                <div className={style.flexContent}>
                    <div className={style.iconWrapper}><GiGlobe size={12} /></div>
                    <p className={style.smallText}>Web Activity</p>
                </div>
                <div className={`${style.chartFlex} ${style.chartWrapper}`}>
                        <p className={style.smallText}>Month</p>
                        <IoIosArrowDown />
                    </div>
            </div>

            <div className={style.activeCountries}>
               
                {activeCountries.map((country) => (
                    <div key={country.name} className="space-y-1">
                        <div className={style.countryRow}>
                            <span className={style.flag}>{country.flag} {country.name}</span>
                            <span className={style.progress}>{country.percentage}%</span>
                        </div>
                        <div className={style.progressBar}>
                            <div
                                className={style.progressFill}
                                style={{ width: `${country.percentage}%` }}
                            />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
