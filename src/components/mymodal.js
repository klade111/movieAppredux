import React from 'react'
import { Modal, Button ,Input } from 'antd';
import {addItem} from './action'
import { connect } from 'react-redux';


class MyModal extends React.Component {
  state = { visible: false, name:'', img:'', rate:0 };

  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  handleOk = e => {
    console.log(e);
    this.props.addItem({name:this.state.name ,img:this.state.img, rate:this.state.rate})
    this.setState({
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
        <Button type="primary" onClick={this.showModal}>
          Open Modal
        </Button>
        <Modal
          title="Basic Modal"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          <Input value={this.state.name} onChange={v=>this.setState({name:v.target.value})}/>
          <Input value={this.state.img} onChange={v=>this.setState({img:v.target.value})}/>
          <Input value={this.state.rate} onChange={v=>this.setState({rate:v.target.value})}/>
         
        </Modal>
      </div>
    );
  }
}




export default connect(null, {addItem}) (MyModal)