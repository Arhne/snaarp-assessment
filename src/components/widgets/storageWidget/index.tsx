
import { SiGooglecloudstorage } from 'react-icons/si'
import styles from "./storage.module.scss"
import { StoragePieChart } from '../../bannerComp'

function StorageWidget() {
    return (
        <div className={styles.storageWrapper}>

            <StoragePieChart
                icon={<SiGooglecloudstorage />}
                bannerTitle='Storage'
            />

        </div>
    )
}

export default StorageWidget