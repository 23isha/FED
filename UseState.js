import React,{useState} from 'react';
function UseState(){
    const [item,setItem]=useState('');
    const [items,setItems]=useState([]);
    const handAddItem=()=>{
        setItems([...items,item]);
        setItem('');
    };
    const handleDeleteItem=(itemtodelete)=>{
        const fitem=items.filter((it)=>it!==itemtodelete);
        setItems(fitem);
    }
    const tdata=items.map((it,index)=>(
        
            <tr key={index}>
                <td cellPadding="20px">
                    <span>{it}</span>
                </td>
                <td>
                    <button onClick={()=>handleDeleteItem(it)}>del</button>
                </td>
            </tr>
            
    
    ),[]);
    return(
        <div>
        <input 
        type="text" 
        size="20"
        value={item}
        onChange={(e)=>setItem(e.target.value)}/>
        <button onClick={handAddItem}>Add</button>
        <h1>UseContext Demo</h1>
        <table border="1" align="center">{tdata}</table>
        </div>
    );
}
export default UseState;