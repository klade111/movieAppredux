import React, { Component } from 'react';
import {Rate} from 'antd'
import { connect } from 'react-redux';
import {editItem,deleteItem} from './action'
import './card.css'
import EditModal from './editmodal'


class Card extends Component {
    
    render() {
        console.log("id:",this.props.id)
        return (
        <div className='card'>
            <div>{this.props.name}</div>
            <img className='img' src={this.props.img} alt=''/>
            <div> <Rate value={this.props.rate}/></div>
            <EditModal id={this.props.id} name={this.props.name} img={this.props.img} rate={this.props.rate} index={this.props.index} />
            <button onClick={()=>this.props.deleteItem(this.props.id)}>DELETE</button>
        </div>
        );
    }
}
function mapStateToProps(state) {
    return {newData:state.myData}

    ;
}

export default connect(mapStateToProps,{editItem,deleteItem})(Card);