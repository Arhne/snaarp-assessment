
import { CiGlobe } from 'react-icons/ci'
import { NetworkBanner } from '../..'
import styles from "./cloud.module.scss"

function WebActivityWidget() {
    return (
        <div className={styles.cloudWrapper}>
            {/* <div className={styles.sectionOne}> */}
                {/* <div className={styles.flexGroup}> */}

                    <div className={styles.banner}>
                        <NetworkBanner
                            icon={<CiGlobe />}
                            bannerTitle={"Web Activity"}
                            amount={'178 Activities'}
                            isPercentageIncrease={true}
                            percentage={15}
                        />
                    </div>


                {/* </div> */}

             {/* </div> */}
        </div>
    )
}

export default WebActivityWidget