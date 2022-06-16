
interface repositoryItemProps{
    repository:{ 
        name:string;
        description:string;
        link:string;
    }
}

const RepositoryItem=(pros:repositoryItemProps)=>{
    return(

        <>
            <li>

                <strong>{pros.repository.name ?? 'default'}</strong>
                <p>{pros.repository.description ?? 'bem podre'}</p>

                <a href="">{pros.repository.link ?? 'free.facebook.com'}</a>
            </li>
        </>
    )
}

export default RepositoryItem;