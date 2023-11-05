import React,{useState,useEffect} from 'react';
const Fetch=()=>{
    const [data,setData]=useState([]);
    const getData=()=>{
        fetch("http://jsonplaceholder.typicode.com/posts").then((response)=>response.json())
        .then((result)=>setData(result))
        .catch((err)=>console.log('err'));
    }
    useEffect(()=>{
        getData();
    },[])
    return(
        <div>
            <table border="1" cellPadding="10px" align="center">
                <tr>
                    <th>sno</th>
                    <th>sname</th>
                </tr>
                {data.map(d=>(
                    <tr key={d.id}>
                        <td>{d.id}</td>
                        <td>{d.title}</td>
                    </tr>
                ))} 
            </table>
        </div>
    )
    
}
export default Fetch;
