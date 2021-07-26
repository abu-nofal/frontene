import axios from 'axios';
import React, { Component } from 'react'
import AddItem from './AddItem';

class Main extends Component {
    constructor(props){
        super(props);
        this.state={
            url:process.env.REACT_APP_SERVER_URL,
            listData:[],
            showData:false
        }
    }


    componentDidMount=async()=>{
        axios.get(`${this.state.url}/api`).then(res=>{
            this.setState({
                listData:res.data,
                showData:true
            })
        })
    }
    render() {
        return (
            <>

            {this.state.showData&&
            this.state.listData.map((item,indx)=>{
                return (<>
                <div key={indx}>
                <h2>{item.name}</h2>
                <img src={item.img} alt=""/>
                <h2>{item.level}</h2>
                <AddItem name={item.name}
                       img={item.img}
                       level={item.level} />
                </div>
                
                </>)
            })}
                
            </>
        )
    }
}

export default Main
