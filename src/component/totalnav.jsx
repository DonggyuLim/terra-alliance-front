import styles from "./totalnav.module.css"


export default function TotalNav ({isRank}) {
    return (
        <div className={styles.container}>
             {isRank == true?<div className={styles.rank}>Rank</div>:<div></div>}
            
            <div className={styles.address}>Address</div>
            <div className={styles.amount}>ATR</div>
            <div className={styles.amount}>HAR</div>
            <div className={styles.amount}>COR</div>
            <div className={styles.amount}>ORD</div>
            <div className={styles.amount}>SCOR</div>
            <div className={styles.amount}>SORD</div>
            <div className={styles.amount}>SHAR</div>
            <div className={styles.amount}>SATR</div>
            <div className={styles.amount}>Total</div>
        </div>
    )
}