import React, { useState } from 'react'
import { Link } from "react-router-dom"
import { deleteUser, getUser ,setUser} from '../Services/Api'
import { useEffect } from 'react'
function Users() {
  const [user, setUser] = useState([])

  const fetchData = async () => {
    try {
      const res = await getUser()
      setUser(res.data)
    }
    catch (e) {
      console.log(e)
    }
  }
  const handleDelete=(id)=>{
    try{
        const res = await deleteUser(id)
        if(res.status==200){
            alert('deleted')
        }
    }
    fetchData()
  }

    catch(e){
        console.log(e);
    }
  }
  const handleEdit=(id)=>{
    navigate
  }
  console.log(user)
  useEffect(() => {
    fetchData()
  }, [])
  return (
    <div>
      <div>
        <h2>User Table</h2>
        <table>
          <thead>
            <tr>
              <th>UserName</th>
              <th>Password</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {user.map((user) => (
              <tr key={user.id}>
                <td>{user.username}</td>
                <td>{user.password}</td>
                <td>
                  <Link to='/add'>
                    <button className='edit-btn' onClick={()=>handleEdit(user.id)}>Edit</button>
                  </Link>
                </td>
                <td>
                  <Link to='/edit'>
                    <button className='del-btn' onClick={()=>handleDelete(user.id)}>Delete</button>
                  </Link>
                </td>
              </tr>
            ))
            }
          </tbody>
        </table>
        <button
      </div>
    </div>
  )
}

export default Users