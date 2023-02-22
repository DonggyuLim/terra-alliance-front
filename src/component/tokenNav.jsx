import styles from "./tokenNav.module.css"

export default function TokenNav() {
    
    return (
        <div className={styles.container}>
            <div className={styles.rank}>Rank</div>
            <div className={styles.address}>Address</div>
            {/* <div className={styles.name}>{tokenName}</div> */}
            <div className={styles.total}>total</div>
        </div>
    )
}