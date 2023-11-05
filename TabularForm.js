import React,{Component} from 'react';
class TabularForm extends Component{
    constructor(props){
        super(props);
            this.state={
                sdata:[
                    {sid:101,sname:'isha',saddress:'Guntur'},
                    {sid:102,sname:'priya',saddress:'vizag'},
                ]   
        }
    };
    render(){
        const {sdata}=this.state;
        return(
            <table>
                <thead>
                    <tr>
                        <th>sid</th>
                        <th>sname</th>
                        <th>saddress</th>
                    </tr>
                </thead>
                <tbody>
                    {sdata.map((item)=>(
                        <tr key={item.sid}>
                            <td>{item.sid}</td>
                            <td>{item.sname}</td>
                            <td>{item.saddress}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        )
    }
}
export default TabularForm;