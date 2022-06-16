import styled  from 'styled-components';

export const RepositoryListSection=styled.section`
    margin: 40px;

    h1{
        margin-bottom: 8px;
    }
    ul{
        list-style-type: none;
    }
    li{
        & + li{
            margin-top: 20px;
        }
        
        p{
            font-size: 14px;
            color:#444;
            margin-top: 8px;
        }

        a{
            display: inline-block;
            margin-top: 16px;
            text-decoration: none;
            color:#8257e6;
        }
    }
`;