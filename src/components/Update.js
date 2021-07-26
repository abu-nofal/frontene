import axios from "axios";
import React, { Component } from "react";
import { Button,Modal } from "react-bootstrap";

class Update extends Component {
  constructor(props) {
    super(props);
    this.state = {
      url: process.env.REACT_APP_SERVER_URL,
      listData: [],
      show: false,
      name: "",
      img: "",
      level: "",
    };
  }
  inputName=(e)=>{
      this.setState({
          name:e.target.value
      })
}
inputImg=(e)=>{
      this.setState({
          img:e.target.value
      })
}
inputLevel=(e)=>{
      this.setState({
          level:e.target.value
      })
}
  showModel=()=>{
      this.setState({
          show:!this.state.show
      })
  }

  updateItem=(e)=>{
      const reqBody={
          name:this.state.name,
          img:this.state.img,
          level:this.state.level,
      }
      axios.put(`${this.state.url}/fav/${this.props.id}`,reqBody).then(res=>{
          this.setState({
              listData:res.data,
              show:false
          })
      })
  }
  render() {
    return (
      <>
        <Button variant="primary" onClick={()=>{this.showModel()}}>
          update
        </Button>

        <Modal show={this.state.show} onHide={()=>{this.showModel()}}>
          <Modal.Header closeButton>
            <Modal.Title>{this.props.name}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
              <form onSubmit={(e)=>{this.updateItem(e)}}>
                  <input type="text" onChange={(e)=>{this.inputName(e)}} placeholder="name" required/>
                  <br/>
                  <br/>
                  <input type="text" onChange={(e)=>{this.inputImg(e)}} placeholder="img url"/>
                  <br/>
                  <br/>
                  <input type="text" onChange={(e)=>{this.inputLevel(e)}} placeholder="level"/>
                  <br/>
                  <br/>
                  <Button variant="primary" type="submit">
              Save Changes
            </Button>
              </form>
          </Modal.Body>
          <Modal.Footer>
           
            
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}

export default Update;
