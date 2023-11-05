import React,{useState,useEffect} from 'react'
function UseEffect(){
    const [time,setTime]=useState('');
    const tick=()=>{
        let hrs=new Date().getHours();
        let mins=new Date().getMinutes();
        let secs=new Date().getSeconds();
        let ftime=`${hrs>12?hrs-12:hrs}:${mins}:${secs}`;
        if(hrs<12){
            ftime=ftime+'AM';
        }
        else{
            ftime=ftime+'PM';
        }
      setTime(ftime);
    }
useEffect(()=>{
   const t= setInterval(tick,1000);
    return()=>{
        clearTimeout(t);
    }
},[]);
return(
    <div>
        <h1>{time}</h1>
    </div>
)
}
export default UseEffect;
