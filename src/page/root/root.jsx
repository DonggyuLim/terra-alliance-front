
import styles from "./root.module.css"
import { useState } from "react";
import { useQuery } from "react-query";
import TotalNav from "../../component/totalnav";
import TotalRankingBoard from "../../component/totalRanking";

import query from "../../query/query";
import Select from "react-select";
import { bech32 } from "bech32";
import { Bech32Address } from "@keplr-wallet/cosmos";

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
          sord: Number(value.sord) / 1000000,
          shar:Number(value.shar)/ 1000000,
          satr:Number(value.satr)/ 1000000,
          total:Number(value.total)/1000000
        }
      })
      
      newData.sort((a,b)=> b.total.total - a.total.total  )
      console.log(newData)
      setRanks(newData)
    },
    onError: e => {
      // 실패시 호출 (401, 404 같은 error가 아니라 정말 api 호출이 실패한 경우만 호출됩니다.)
      // 강제로 에러 발생시키려면 api단에서 throw Error 날립니다. (참조: https://react-query.tanstack.com/guides/query-functions#usage-with-fetch-and-other-clients-that-do-not-throw-by-default)
      console.log(e.message);
    }
  });

  // if (isLoading) {
  //   return <span>Loading...</span>;
  // }

  if (isError) {
    return <div>Error:{error.message}</div>
  }
  const option = [
    { value: 'atreides', label: 'atreides' },
    { value: 'harkonnen', label: 'harkonnen' },
    { value: 'corrino', label: 'corrino' },
    { value: 'ordos', label: 'ordos' },
  ]
  const handleSelect = (chain) => {
    const value = chain.value
    
    const bech32Config = Bech32Address.defaultBech32Config(value)
    console.log(bech32Config)
    
    const newRanks = ranks.map(rank => {
      
      // console.log(newAddress)
      // if (typeof chain == String) {
      //   return {address:newAddress,...rank}
      // }
      const decode = bech32.decode(rank.address)
      
      const address = bech32.encode(bech32Config.bech32PrefixAccAddr, decode.words)
      return {
        ...rank,
        address:address,
      }
    })
    
    // console.log(newRanks)
    setRanks(newRanks)
  }

  const customStyles = {
    option: (defaultStyles, state) => ({
      ...defaultStyles,
      width:200,
      color: state.isSelected ? "#212529" : "#fff",
      backgroundColor: state.isSelected ? "#a0a0a0" : "#212529",
      
    }),

    control: (defaultStyles) => ({
      ...defaultStyles,
      width:200,
      backgroundColor: "#9999",
      padding: "10px",
      border: "none",
      
      boxShadow: "none",
      
    }),
    menu: (defaultStyles) => ({
      ...defaultStyles,
      width: 200,
      
    }),
    container: (defaultStyles) => ({
      ...defaultStyles,
      marginBottom:20
    })
   };

    return (
      <>
        <div className={styles.change}>Change Chain Address</div>
        <Select
          options={option}
          onChange={handleSelect}
          defaultValue={option[0]}
          styles={customStyles}
          placeholder={"Choose Chain"}
        >
          
          </Select>
        <TotalNav isRank={true} />
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