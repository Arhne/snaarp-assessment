
import { NetworkBanner } from '../..'
import { networkData } from '../../../utils/data'
import styles from "./cloud.module.scss"

function CloudNetworkWidget() {
  return (
    <div className={styles.cloudWrapper}>
        <div className={styles.sectionOne}>
                        <div className={styles.flexGroup}>
                            {networkData.map((data) => (
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

export default CloudNetworkWidget