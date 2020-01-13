import { ADD_ITEM ,EDIT_ITEM,DELETE_ITEM,SEARCH_ITEM } from "./actiontypes"




const initState = {myData :[{
    id:1,
    name: 'Star Wars',
    img: 'https://media.melty.fr/pmedia-4011986-ajust_700/rendez-vous-le-18-decembre-pour-star-wars.jpg',
    rate: 3,
    discreption:'Dans “Star Wars 9”, on en apprend également davantage sur la connexion plus que mentale qui lie Rey et Kylo Ren. Les deux protagonistes formeraient une “dyade de la force”, selon Palpatine. Une dyade, ou un ensemble de deux éléments qui partagent les mêmes caractéristiques.'
  }, {
    id:2,
    name: 'robin des bois',
    img: 'http://www.ecran-et-toile.com/uploads/5/5/8/7/55875205/published/unnamed-9_1.jpg?1543160102',
    rate: 2,
    discreption:'Robin des Bois  est un personnage fictif, héros légendaire et archétypal du Moyen Âge anglais. ... Selon la légende, telle qu elle est répandue aujourd hui, Robin des Bois était un brigand au grand cœur qui vivait caché dans la forêt de Sherwood et de Barnsdale .'
  }, {
    id:3,
    name: 'joker',
    img: 'https://images-na.ssl-images-amazon.com/images/I/71wbalyU7tL._AC_SY679_.jpg',
    rate: 3,
    discreption:'Physique. Sa peau est blanche et ses cheveux sont verts. ... Dans la série animée Batman, le Joker a une apparence assez différente des adaptations précédentes, avec des yeux rouges et des cheveux longs.'
    

  }]}


   const Reducer = ( state = initState, action)=>{
    switch (action.type){
     case ADD_ITEM:
       return{...state, myData:[...state.myData, action.payload]}
     case EDIT_ITEM:
      const da=state.myData
      const id=action.payload.id     
       const findIndex=da.findIndex(el=>el.id===id)
       da.splice(findIndex,1,{...action.payload})
            return{...state,myData:[...da]}
      case DELETE_ITEM:
              const newData=state.myData
              const to= newData.filter(e => e.id !== action.payload)
              return{ ...state,
                myData:to }
       case SEARCH_ITEM :
           return{...state,
            myData:state.myData.name.includes(action.payload)}     

    default: return state  
  }}

  export default Reducer