
import axios from "axios";
import { useQuery } from "react-query"
import { useLocation } from "react-router-dom";
import TotalNav from "../../component/totalnav";
import TotalRankingBoard from "../../component/totalRanking";
import config from "../../config";


export default function AccountReward() {
    const location = useLocation()
    const address = location.state.address
    console.log(address)
    const { isLoading, isError, data, error } = useQuery("account", async () => {
        const { data } = await axios.get(config.endpoint + `/account/${address}`)
        return data
    })
        
    
    if (isLoading) {
        return <span>Loading...</span>;
    }
    
    if (isError) {
        return <div>Error:{"Not Account" + error.message}</div>
    }
    const newData = {
        address,
        uatr: Number(data.uatr) / 1000000,
        uhar: Number(data.uhar)/ 1000000,
        ucor: Number(data.ucor)/ 1000000,
        uord: Number(data.uord)/ 1000000,
        scor: Number(data.scor)/ 1000000,
        sord: Number(data.sord)/ 1000000,
        total:Number(data.total)/ 100000,
    }
    return (
        <>
            <TotalNav isRank={false } />
            <TotalRankingBoard rank={newData} isRank={false } />
        </>
    )
}