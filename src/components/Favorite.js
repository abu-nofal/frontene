import axios from 'axios'
import React, { Component } from 'react'
import Update from './Update';

 class Favorite extends Component {

    constructor(props){
        super(props);
        this.state={
            url:process.env.REACT_APP_SERVER_URL,
            listData:[],
            showData:false
        }
    }

    componentDidMount=async()=>{
        axios.get(`${this.state.url}/fav`).then(res=>{
            this.setState({
                listData:res.data,
                showData:true
            })
        })
    }

    deletItem=async(item)=>{
        const id =item._id ;
        axios.delete(`${this.state.url}/fav/${id}`).then(res=>{
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
                <button onClick={()=>{this.deletItem(item)}}>delete</button>
                <Update name={item.name}
                       img={item.img}
                       level={item.level}
                       id={item._id}/>
                </div>
                
                </>)
            })}
            </>
        )
    }
}

export default Favorite
