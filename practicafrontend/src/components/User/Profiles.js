
import React, { useContext, useEffect,useState } from "react"
import UserContext from "../../context/UserContext"
const Profiles = () => {
  const [ User, setUser ] = useState({'user':{'name':'Admin','id':1,'email':"email"}})
  const {getUsers,selectedUser} = useContext(UserContext)
  
  useEffect(()=>{
   
    getUsers(setUser)
   
   
   
    

  },[])

return (

  
    <div> 
      <h2>Name: {selectedUser==null?User.user.name:selectedUser.user.name}</h2>
      <h3>Id: {selectedUser==null?User.user.id:selectedUser.user.id}</h3>
      <h3>Email: {selectedUser==null?User.user.email:selectedUser.user.email}</h3>
    </div>
  )
}
  export default Profiles