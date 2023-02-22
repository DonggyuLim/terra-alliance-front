import styles from "./totalnav.module.css"


export default function TotalNav ({isRank}) {
    return (
        <div className={styles.container}>
             {isRank == true?<div className={styles.rank}>Rank</div>:<div></div>}
            
            <div className={styles.address}>Address</div>
            <div className={styles.amount}>UATR</div>
            <div className={styles.amount}>UHAR</div>
            <div className={styles.amount}>UCOR</div>
            <div className={styles.amount}>UORD</div>
            <div className={styles.amount}>SCOR</div>
            <div className={styles.amount}>SORD</div>
            <div className={styles.amount}>Total</div>
        </div>
    )
}