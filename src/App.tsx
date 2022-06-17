import React, { useState } from 'react';
import { User } from './interfaces/interfaces';
import UserList from './components/UserList';
import GlobalStyle from './styles/GlobaStyle';
import * as C from './styles/styled';

function App() {
const [users,setUsers]=useState<User[]>([]);
const [id,setId]=useState<number>(0);
const [email,setEmail]=useState<string>("");
const [nome,setNome]=useState<string>("");

const addUser=():void=>{
  setId(id+1);
  const newUser={id:id,nome:nome,email:email};
  setUsers([...users,newUser]);
}

  return (
    <div>
      <GlobalStyle/>
      <C.Container>
        <h1>Crud react-typescript</h1>
        <input placeholder="digite o seu nome" type="text" value={nome} onChange={(event)=>{setNome(event.target.value)}}/>
        <input type="text" placeholder="digite o seu gmail" value={email} onChange={(event)=>{setEmail(event.target.value)}}/>
        <C.AddButton onClick={addUser}>add</C.AddButton>
        <table>
          <tr><th>nome</th><th>email</th><th>acção</th></tr>
          {users && users.map((user,id)=>(<UserList key={id} user={user}/>))}
        </table>
        </C.Container>
    </div>
  );
}

export default App;
