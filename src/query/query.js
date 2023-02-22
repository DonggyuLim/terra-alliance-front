import axios from "axios"
import config from "../config"

const query = {
    total: async () => {
        const data = await axios.get(config.endpoint)
        return data
    },
    uatr: async () => {
        const data = await axios.get(config.endpoint + "/uatr")
        return data
    },
    ucor: async () => {
        const data = await axios.get(config.endpoint + "/ucor")
        return data
    },
    uhar: async () => {
        const data = await axios.get(config.endpoint + "/uhar")
        return data
    },
    uord: async () => {
        const data = await axios.get(config.endpoint + "/uord")
        return data
    },
    scor: async () => {
        const data = await axios.get(config.endpoint + "/scor")
        return data
    },
    sord: async () => {
        const data = await axios.get(config.endpoint + "/sord")
        return data
    },
    accountReward: async ({queryKey}) => {
        const address = queryKey[0]
        const data = await axios.get(config.endpoint + `/account/${address}`)
        console.log(data)
        return data
    }

}
export default query