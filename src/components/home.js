import React, { Component } from 'react'
import { Input, Rate } from 'antd';
import { connect } from 'react-redux'
import {searchItem} from './action'
import Card from './card'
import MyModal from './mymodal'
import './home.css'






 class Home extends Component {
    render() {
        return (
            <div className='home'>
              <div className='headerHome'>
            <Input  onChange={()=>searchItem()}  style={{width:"500px"}}/>
            <Rate/>
              </div>
              <div className='bodyHome'>
                  {this.props.newData.map((el,i)=> <Card id={el.id} index={i} name={el.name} rate={el.rate} img={el.img}   />)}
              </div>
              <div style={{padding:'20px'}}  className='footerHome'>
              <MyModal />
              </div>
            </div>
            
        )
    }
}

const mapStateToProps = state =>{
    return{newData:state.myData}
}



export default connect(mapStateToProps,{searchItem}) (Home)