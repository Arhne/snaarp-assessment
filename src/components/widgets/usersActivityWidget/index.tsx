import { PiUser } from 'react-icons/pi'
import { NetworkBanner } from '../..'
import styles from "./cloud.module.scss"

function UsersActivityWidget() {
    return (
        <div className={styles.cloudWrapper}>
            {/* <div className={styles.sectionOne}> */}
                {/* <div className={styles.flexGroup}> */}

                    <div className={styles.banner}>
                        <NetworkBanner
                            icon={<PiUser />}
                            bannerTitle={"Users"}
                            amount={'8,836'}
                            isPercentageIncrease={false}
                            percentage={15}
                        />
                    </div>


                {/* </div> */}

            {/* </div> */}
        </div>
    )
}

export default UsersActivityWidget