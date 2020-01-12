import {ADD_ITEM ,EDIT_ITEM,DELETE_ITEM,SEARCH_ITEM}from './actiontypes'


export const addItem = payload=>{
    return { type:ADD_ITEM, payload}}



export const editItem = (val)=>{
    return { type:EDIT_ITEM, payload:val}
} 


export const deleteItem = (id)=>{
    return{ type:DELETE_ITEM , payload: id}
}

export const searchItem =(val)=>{
    return{type: SEARCH_ITEM, payload:val}
}