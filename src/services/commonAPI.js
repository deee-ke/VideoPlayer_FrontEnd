import axios from "axios"



export const commonAPI = async(httpMethod,url,reqBody)=>{
    let reqConfig = {

        method: httpMethod,
        url, //if both words are same on both left and right sides when defining it can be written like this
        data: reqBody,
        Headers:{
            "Content-Type":"application/json"
        }

    }
    return await axios(reqConfig).then((result)=>{
        return result
    }).catch((err)=>{
        return err
    })
}

