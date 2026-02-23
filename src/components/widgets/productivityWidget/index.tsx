
import { CiClock2 } from 'react-icons/ci'
import { NetworkBanner } from '../..'
import styles from "./cloud.module.scss"

function ProductivityWidget() {
    return (
        <div className={styles.cloudWrapper}>
           
                    <div className={styles.banner}>
                        <NetworkBanner
                            icon={<CiClock2 />}
                            bannerTitle={"Hours Productivity"}
                            amount={'576 Hrs'}
                            isPercentageIncrease={false}
                            percentage={15}
                        />
                    </div>
        </div>
    )
}

export default ProductivityWidget