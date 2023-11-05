import React,{useState} from 'react';
function BmiCal(){
    const [name,setName]=useState('');
    const [height,setHeight]=useState(0);
    const [weight,setWeight]=useState(0);
    const BMI=()=>{

        var heights=(height/100*height/100);
        var bmi=weight/heights;
        if(bmi<16){
            window.alert("hi"+name+"u are underWeight");}
        else if(bmi>16){
            window.alert("hi"+name+"you are overweight");
        }
    }
    const submitMe=(e)=>{
        e.preventDefault();
        BMI();
    };
    const nameHandler=(e)=>{
        setName(e.target.value);
    };
    const heightHandler=(e)=>{
        setHeight(e.target.value);
    };
    const weightHandler=(e)=>{
       setWeight(e.target.value);
    };
   return(
    <div>
        <h1>BMI cal</h1>
         <form onSubmit={submitMe}>
            <label>enter your name</label>
            <input type="text" name="name" value={name} onChange={nameHandler}/>
            <br></br>
            <label>enter your height</label>
            <input type="text" value={height} onChange={heightHandler}/>
            <br></br>
            <label>enter your weight</label>
            <input type="text" value={weight} onChange={weightHandler}/>
            <br></br>
            <input type="submit" value="submit"/>
        </form>
    </div>
   )
}
export default BmiCal;