import { useEffect, useState } from 'react';
import * as C from '../styles/styles';
import RepositoryItem from './RepositoryItem';

interface Repository{
    name:string;
    description:string;
    link:string;
}

const RepositoryList=()=>{

    const [repositories,setRepositories]=useState<Repository[]>([]);

    useEffect(()=>{
        fetch('https://api.github.com/orgs/rocketseat/repos')
        .then((response)=>response?.json())
        .then((data)=>setRepositories(data))
    },[]);

    /*const repository=[
        {nome:"mauricio",description:"o melhor repositorio", link:"https:www.github.menezescosta"},
        {nome:"Luzia",description:"o repositoriio mais podre", link:"https:www.github.luziacosta"},
        {nome:"Victor",description:"o repositorio normal", link:"https:www.github.victorcosta"},
        {teste:"testar o operador ?? e o || no componente repositoryItem"}
    ]*/

    return(
        <C.RepositoryListSection>
            <h1>Lista de repositorios</h1>

            <ul>
                {
                repositories.map((repository,id)=>
                    (<RepositoryItem key={id}
                        repository={repository}/>))}
            </ul>
        </C.RepositoryListSection>
    );
}
export default RepositoryList;