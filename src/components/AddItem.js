import axios from 'axios'
import React, { Component } from 'react'

 class AddItem extends Component {
    constructor(props){
        super(props);
        this.state={
            url:process.env.REACT_APP_SERVER_URL,
            listData:[],
            showData:false
        }
    }

    addToFav=async()=>{
      const  reqBody={
            name:this.props.name,
            img:this.props.img,
            level:this.props.level
        }
        axios.post(`${this.state.url}/fav`,reqBody).then(res=>{
            this.setState({
                listData:res.data,
                showData:true
            })
        })
    }
    render() {
        return (
            <>

            <button onClick={()=>{this.addToFav()}}>add to fav</button>
                
            </>
        )
    }
}

export default AddItem
