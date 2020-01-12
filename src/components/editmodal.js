import React from 'react'
import { Modal, Button ,Input} from 'antd';
import { connect } from 'react-redux';
import {editItem} from './action'

class EditModal extends React.Component {
  state = { visible: false  ,editedtitel:'',name:this.props.name, id:this.props.id ,img:this.props.img, rate:this.props.rate}

  showModal = (index) => {
      console.log(index)
    this.setState({
    
      visible: true,
    });
  };

  handleOk = e => {
    console.log(e);
    this.props.editItem({id:this.state.id,name:this.state.name ,img:this.state.img, rate:this.state.rate})
    this.setState({
      // editedtitel:this.state.name,
     
      visible: false,
    });
  };

  handleCancel = e => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };

  render() {
    return (
      <div>
        <Button type="primary" onClick={()=>this.showModal(this.props.index)}>
          edit
        </Button>
        <Modal
          title="Basic Modal"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          <Input value={this.state.name} onChange={(e)=>this.setState({name:e.target.value})} />
          <Input value={this.state.img} onChange={(e)=>this.setState({img:e.target.value})} />
          <Input value={this.state.rate} onChange={(e)=>this.setState({rate:e.target.value})} />
         
        </Modal>
      </div>
    );
  }
}
const mapStateToProps = state =>{
    return{newData:state.myData}
}

export default connect(mapStateToProps,{editItem})(EditModal)