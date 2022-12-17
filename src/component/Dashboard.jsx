import React, { useEffect } from "react";
// import {getPosts,posts} from "../util/api.util"
import useHttp from "../hook/useApi"


export const Dashboard=()=>{
    // const data=useApi(getPosts)
    // const postApi=useApi(
    // //     posts({
    // //     title: 'foo',
    // //     body: 'bar',
    // //     userId: 1,
    // // })
    // )
    const {sendRequest} = useHttp()

    const abcd=async()=>{

        let response= await sendRequest({
            url:"https://jsonplaceholder.typicode.com/posts",
            method:"POST",
            body:{
                id: 1,
                title: '...',
                body: '...',
                userId: 1
              }
        })
        console.log(response)
        return response

    }


    useEffect(()=>{
        abcd()
    },[])


    return(
        <div>
            <p>Dashboard</p>
        </div>
    )
}
