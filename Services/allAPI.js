import {commonAPI} from '../Services/commonAPI'
import {serverUrl} from '../Services/serverURL'

 export const registerAPI=async(reqBody)=>{
    return await commonAPI('post',`${serverUrl}/api/register`,reqBody,"")
}

export const loginAPI=async(reqBody)=>{
  return await commonAPI('post',`${serverUrl}/api/login`,reqBody,"")
}