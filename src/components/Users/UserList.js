import React from "react";
import Classes from "./UserList.module.css";
import Card from "../UI/Card"
/*for another return after loop do not forger () 
*/
const UserList =(props)=>{
return(
    <Card className={Classes.users}>
            <ul>
                
                {props.users.map((user)=>(
                 <li key={user.id}>
                    {user.name}   {user.age}
                    </li>
                ))}
                
            </ul>
    </Card>
)
}
export default UserList;