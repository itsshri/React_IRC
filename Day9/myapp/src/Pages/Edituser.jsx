import React, { useEffect } from 'react';
import { getUserId } from '../Services/Api';

const Edituser=()=>{
    const{id}=useParams()
    const fetchUser=async()=>{
    const navigate=useNavigate()
    const [data,setData]=useState({
        username:'',
        password:''
    })
    fetchUser()
        try{
            const res=await getUserId(id)
            setData(res.data)
        }
        catch(e){
            console.log(e)
        }
    }
    const.handleSubmit=(e)=>{
        e.preventDefault();
        try{
            const res2=await Edituser(id,data)
            console.log(res2.status)
            if(res2.status==0)
            {
                alert("user updated");
                navigate("/");
            }
        }
    }
    useEffect(()=>{
        fetchUser()
    },[])

    console.log(data)
    return(
        <>
        <form>
            <input type='text' id='username' placeholder='username'/>
            <input type='password' id='password' placeholder='password'/>
            <button type='submit' className='submit-btn'>Add</button>
        </form>
        </>
    )
}

export default Edituser;