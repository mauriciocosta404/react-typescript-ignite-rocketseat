import React,{useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import RepositoryList from './components/RepositoyList'

interface User{

}

function App() {
  const [nome,setNome]=useState<string>();

 
  return (
    <>
      <RepositoryList/>
    </>
  );
}

export default App;
