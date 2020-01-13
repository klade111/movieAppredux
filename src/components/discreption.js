import React, { Component } from 'react'
import { connect } from 'react-redux';


 class Discreption extends Component {
    render() {
        const findrow=this.props.newData.filter(d=> d.id==this.props.match.params.id)
        console.log(this.props.newData,findrow)
        return (
            <div>
    {findrow.filter(el=>el.id==this.props.match.params.id).map(((el, i)=><div>{el.discreption}</div>))} 
            </div>
        )
    }
}
function mapStateToProps(state) {
    return {newData:state.myData}

    ;
}


export default connect(mapStateToProps,null) (Discreption)
