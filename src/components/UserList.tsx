import React from 'react';
import{ User} from '../interfaces/interfaces';
import * as C from '../styles/styled';
interface UserProps{
    user:User;
}

const UserList=({user}:UserProps)=>{
    return(<tr><td>{user?.nome}</td><td>{user?.email}</td><C.DeleteButton>delete</C.DeleteButton><C.UpdateButton>update</C.UpdateButton></tr>)
}

export default UserList;