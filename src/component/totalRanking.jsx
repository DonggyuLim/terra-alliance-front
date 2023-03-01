import uuid from "react-uuid";
import styles from "./totalRanking.module.css"

export default function TotalRankingBoard({ rank,isRank }) {
    
    return (
        <li className={styles.container} key={uuid()}>
            {isRank == true?<div className={styles.rank}>{rank.rank}</div>:<div></div>}
            
            <div className={styles.address}>{rank.address}</div>
            <div className={styles.amount}>{Number(rank.uatr).toLocaleString()}</div>
            <div className={styles.amount}>{Number(rank.uhar).toLocaleString() }</div>
            <div className={styles.amount}>{Number(rank.ucor).toLocaleString()}</div>
            <div className={styles.amount}>{Number(rank.uord).toLocaleString()}</div>
            <div className={styles.amount}>{Number(rank.scor).toLocaleString()}</div>
            <div className={styles.amount}>{Number(rank.sord).toLocaleString()}</div> 
            <div className={styles.amount}>{Number(rank.shar).toLocaleString()}</div> 
            <div className={styles.amount}>{Number(rank.satr).toLocaleString()}</div> 
            <div className={styles.amount}>{Number(rank.total).toLocaleString()}</div>
        </li>
    )
}