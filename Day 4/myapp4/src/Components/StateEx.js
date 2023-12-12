import React from 'react'
import { useState } from 'react'

// Counter App : Used to increment / decrement a number

// const StateX=()=>{
//     const[data, setData]=useState(0);
//     const inc=()=>{
//         setData(data+1);
//     }
//     const dec=()=>{
//         setData(data-1);
//     }
//     return(
//         <>
//         <button onClick={inc}>
//             Increase
//         </button>
//         <p>{data}</p>
//         <button onClick={dec}>
//             Decrease
//         </button>
//         </>
//     )
// }

//Set Visible : 
const StateEx=()=>{
const [visible,setVisible]=useState(true);
const toggle=()=>{
    setVisible(!visible)
}
setTimeout(()=>{
    setVisible(true)
},5000)
return(
    <>
       { visible ? (
    <button onClick={toggle}>Welcome</button>
        ):(
            <button onClick={toggle}>Good Bye</button>
        )
}
    </>
)
}
export default StateEx;