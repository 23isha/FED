import React,{Component} from 'react';
class DigitalClock extends Component{
    constructor(props){
        super(props);
        this.state={
            time:""
        }
    };
    componentDidMount=()=>{
        this.tick();
    };
    tick=()=>{
        const hrs=new Date().getHours();
        const mins=new Date().getMinutes();
        const secs=new Date().getSeconds();
        const updateTime=`${hrs}:${mins}:${secs}`;
        this.setState({time:updateTime});
    }
    componentDidUpdate=(prevProps,prevState)=>{
        if(this.state.time!==prevState.time){
            this.interval=setInterval(()=>{
                this.tick();
            },1000);
        }
    }
    componentWillUnmount=()=>{
        
        clearInterval(this.interval);
    }
    render(){
        return(<div>
            <h1>Digital Clock</h1>
            <h1>{this.state.time}</h1>
        </div>)
    }
}
export default DigitalClock;