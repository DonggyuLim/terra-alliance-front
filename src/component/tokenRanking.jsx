import uuid from "react-uuid";
import styles from "./tokenRanking.module.css"
export default function TokenRanking({ rank, index }) {
    
    return (
        <li className={styles.container} key={uuid()}>
            <div className={styles.rank}>{index + 1}</div>
            <div className={styles.address}>{rank.address}</div>
            <div className={styles.total}>{Number(rank.amount).toLocaleString()}</div>
        </li>
    )
} 