
import styles from "./root.module.css"
import { useState } from "react";
import { useQuery } from "react-query";
import TotalNav from "../../component/totalnav";
import TotalRankingBoard from "../../component/totalRanking";

import query from "../../query/query";

export default function Root() {
  console.log("root")
  const [ranks,setRanks] = useState()
  const { isLoading, isError, data, error } = useQuery("total", query.total, {
    refetchOnWindowFocus: true, // react-query는 사용자가 사용하는 윈도우가 다른 곳을 갔다가 다시 화면으로 돌아오면 이 함수를 재실행합니다. 그 재실행 여부 옵션 입니다.
    retry: 1, // 실패시 재호출 몇번 할지
    onSuccess: data => {
      // 성공시 호출
      
      const newData = data.data.map((value,index) => {
        return {
          address: value.address,
          rank:index + 1,
          uatr: Number(value.uatr)/1000000 ,
          uhar: Number(value.uhar)/1000000,
          ucor: Number(value.ucor)/1000000,
          uord: Number(value.uord)/1000000,
          scor: Number(value.scor)/1000000,
          sord: Number(value.sord)/1000000,
          total:Number(value.total)/1000000
        }
      })
      
      newData.sort((a,b)=> b.total.total - a.total.total  )
      
      setRanks(newData)
    },
    onError: e => {
      // 실패시 호출 (401, 404 같은 error가 아니라 정말 api 호출이 실패한 경우만 호출됩니다.)
      // 강제로 에러 발생시키려면 api단에서 throw Error 날립니다. (참조: https://react-query.tanstack.com/guides/query-functions#usage-with-fetch-and-other-clients-that-do-not-throw-by-default)
      console.log(e.message);
    }
  });

  if (isLoading) {
    return <span>Loading...</span>;
  }

  if (isError) {
    return <div>Error:{error.message}</div>
  }
  
    return (
        <>
        <TotalNav isRank={true}/>
        <ul className={styles.container}>
          {
            Array.isArray(ranks) ? ranks.map(rank => {
              return (
                <TotalRankingBoard rank={rank} isRank={true}  />
              )
            }):""
          }
          
            </ul>
        </>
    )
}