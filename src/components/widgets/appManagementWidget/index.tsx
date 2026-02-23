
import { NetworkBanner } from '../..'
import { appData } from '../../../utils/data'
import styles from "./cloud.module.scss"

function AppManagementWidget() {
  return (
    <div className={styles.cloudWrapper}>
        <div className={styles.sectionOne}>
                        <div className={styles.flexGroup}>
                            {appData.map((data) => (
                                <div key={data.id} className={styles.banner}>
                                    <NetworkBanner
                                        icon={data.icon}
                                        bannerTitle={data.bannerTitle}
                                        amount={data.amount}
                                        isPercentageIncrease={data.isPercentageIncrease}
                                        percentage={data.percentage}
                                    />
                                </div>
                            ))}
        
                        </div>
                        
                    </div>
    </div>
  )
}

export default AppManagementWidget