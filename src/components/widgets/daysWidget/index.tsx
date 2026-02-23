import { NetworkBanner } from '../..'
import styles from "./cloud.module.scss"
import { BsCalendar2Day } from 'react-icons/bs'

function DaysActivityWidget() {
    return (
        <div className={styles.cloudWrapper}>
            {/* <div className={styles.sectionOne}> */}
                {/* <div className={styles.flexGroup}> */}

                    <div className={styles.banner}>
                        <NetworkBanner
                            icon={<BsCalendar2Day />}
                            bannerTitle={"Days Activity"}
                            amount={'267 Days'}
                            isPercentageIncrease={true}
                            percentage={15}
                        />
                    </div>


                {/* </div> */}

            {/* </div> */}
        </div>
    )
}

export default DaysActivityWidget