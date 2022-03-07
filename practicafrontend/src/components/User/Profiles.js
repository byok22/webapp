
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
      <h4>Name: {selectedUser==null?User.user.name:selectedUser.user.name}</h4>
      <h5>Id: {selectedUser==null?User.user.id:selectedUser.user.id}</h5>
      <h5>Email: {selectedUser==null?User.user.email:selectedUser.user.email}</h5>
    </div>
  )
}
  export default Profiles