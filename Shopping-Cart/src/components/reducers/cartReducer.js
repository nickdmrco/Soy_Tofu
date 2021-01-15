// import Item1 from '../../images/item1.jpg'
// import Item2 from '../../images/item2.jpg'
// import Item3 from '../../images/item3.jpg'
// import Item4 from '../../images/item4.jpg'
// import Item5 from '../../images/item5.jpg'
// import Item6 from '../../images/item6.jpg'
import { ADD_TO_CART,REMOVE_ITEM,SUB_QUANTITY,ADD_QUANTITY,ADD_DELIVERY } from '../actions/action-types/cart-actions'


const initState = {
    items: 
        [{
            "_id": {
                "$oid": "5ffc9a9aeb39382b6ce8b733"
            },
            "name": "Beef + Seafood",
            "description": "beef, shrimp, clam, baby octopus",
            "price": 12.5,
            "category": {
                "tofu": {
                    "spice": [
                        0,
                        1,
                        2,
                        3,
                        4
                    ]
                }
            },
            "image": null
        }, {
                "_id": {
                    "$oid": "5ffc9af8eb39382b6ce8b734"
                },
                "name": "Mushroom",
                "description": "cremini, enoki, king trumpet mushrooms",
                "price": 12.5,
                "category": {
                    "tofu": {
                        "spice": [
                            0,
                            1,
                            2,
                            3,
                            4
                        ]
                    }
                },
                "image": null
            }, {
                "_id": {
                    "$oid": "5ffc9b18eb39382b6ce8b735"
                },
                "name": "Seafood",
                "description": "shrimp, clam, baby octopus",
                "price": 12.5,
                "category": {
                    "tofu": {
                        "spice": [
                            0,
                            1,
                            2,
                            3,
                            4
                        ]
                    }
                },
                "image": null
            }, {
                "_id": {
                    "$oid": "5ffc9b88eb39382b6ce8b736"
                },
                "name": "Oyster",
                "description": null,
                "price": 12.5,
                "category": {
                    "tofu": {
                        "spice": [
                            0,
                            1,
                            2,
                            3,
                            4
                        ]
                    }
                },
                "image": null
            }, {
                "_id": {
                    "$oid": "5ffc9b9feb39382b6ce8b737"
                },
                "name": "Clam",
                "description": null,
                "price": 12.5,
                "category": {
                    "tofu": {
                        "spice": [
                            0,
                            1,
                            2,
                            3,
                            4
                        ]
                    }
                },
                "image": null
            }, {
                "_id": {
                    "$oid": "5ffc9bafeb39382b6ce8b738"
                },
                "name": "Kimchi",
                "description": null,
                "price": 12.5,
                "category": {
                    "tofu": {
                        "spice": [
                            0,
                            1,
                            2,
                            3,
                            4
                        ]
                    }
                },
                "image": null
            }, {
                "_id": {
                    "$oid": "5ffc9bb6eb39382b6ce8b739"
                },
                "name": "Beef",
                "description": null,
                "price": 12.5,
                "category": {
                    "tofu": {
                        "spice": [
                            0,
                            1,
                            2,
                            3,
                            4
                        ]
                    }
                },
                "image": null
            }, {
                "_id": {
                    "$oid": "5ffc9bd0eb39382b6ce8b73a"
                },
                "name": "Pork",
                "description": null,
                "price": 12.5,
                "category": {
                    "tofu": {
                        "spice": [
                            0,
                            1,
                            2,
                            3,
                            4
                        ]
                    }
                },
                "image": null
            }, {
                "_id": {
                    "$oid": "5ffc9bddeb39382b6ce8b73b"
                },
                "name": "Beef Small Intestine",
                "description": null,
                "price": 12.5,
                "category": {
                    "tofu": {
                        "spice": [
                            0,
                            1,
                            2,
                            3,
                            4
                        ]
                    }
                },
                "image": null
            }, {
                "_id": {
                    "$oid": "5ffc9beceb39382b6ce8b73c"
                },
                "name": "Dumpling",
                "description": null,
                "price": 12.5,
                "category": {
                    "tofu": {
                        "spice": [
                            0,
                            1,
                            2,
                            3,
                            4
                        ]
                    }
                },
                "image": null
            }, {
                "_id": {
                    "$oid": "5ffc9bf9eb39382b6ce8b73d"
                },
                "name": "Baby Octopus",
                "description": null,
                "price": 12.5,
                "category": {
                    "tofu": {
                        "spice": [
                            0,
                            1,
                            2,
                            3,
                            4
                        ]
                    }
                },
                "image": null
            }, {
                "_id": {
                    "$oid": "5ffc9f93eb39382b6ce8b73e"
                },
                "name": "Vegeterian Tofu",
                "description": "vegeterian broth w/ brocolli, squash, mushrooms, and carrots",
                "price": 12.5,
                "category": {
                    "tofu": {
                        "spice": [
                            0,
                            1,
                            2,
                            3,
                            4
                        ]
                    }
                },
                "image": null
            }, {
                "_id": {
                    "$oid": "5ffc9faaeb39382b6ce8b73f"
                },
                "name": "Ham and Cheese",
                "description": null,
                "price": 12.5,
                "category": {
                    "tofu": {
                        "spice": [
                            0,
                            1,
                            2,
                            3,
                            4
                        ]
                    }
                },
                "image": null
            }, {
                "_id": {
                    "$oid": "5ffc9fc0eb39382b6ce8b740"
                },
                "name": "Plain Tofu",
                "description": "Only Tofu",
                "price": 12.5,
                "category": {
                    "tofu": {
                        "spice": [
                            0,
                            1,
                            2,
                            3,
                            4
                        ]
                    }
                },
                "image": null
            }, {
                "_id": {
                    "$oid": "5ffca0cfeb39382b6ce8b741"
                },
                "name": "BBQ Short Ribs + Tofu",
                "description": null,
                "price": 27,
                "category": {
                    "tofu combo": {
                        "tofu": [
                            "beef + seafood",
                            "mushroom",
                            "seafood",
                            "oyster",
                            "clam",
                            "kimchi",
                            "beef",
                            "pork",
                            "beef small intestine",
                            "dumpling",
                            "baby octopus",
                            "vegeterian tofu",
                            "ham and cheese",
                            "plain tofu"
                        ],
                        "spice": [
                            0,
                            1,
                            2,
                            3,
                            4
                        ]
                    }
                },
                "image": null
            }, {
                "_id": {
                    "$oid": "5ffca1d1eb39382b6ce8b742"
                },
                "name": "BBQ Beef + Tofu",
                "description": null,
                "price": 25,
                "category": {
                    "tofu combo": {
                        "tofu": [
                            "beef + seafood",
                            "mushroom",
                            "seafood",
                            "oyster",
                            "clam",
                            "kimchi",
                            "beef",
                            "pork",
                            "beef small intestine",
                            "dumpling",
                            "baby octopus",
                            "vegeterian tofu",
                            "ham and cheese",
                            "plain tofu"
                        ],
                        "spice": [
                            0,
                            1,
                            2,
                            3,
                            4
                        ]
                    }
                },
                "image": null
            }, {
                "_id": {
                    "$oid": "5ffca1f9eb39382b6ce8b743"
                },
                "name": "Grilled Chicken + Tofu",
                "description": null,
                "price": 24,
                "category": {
                    "tofu combo": {
                        "tofu": [
                            "beef + seafood",
                            "mushroom",
                            "seafood",
                            "oyster",
                            "clam",
                            "kimchi",
                            "beef",
                            "pork",
                            "beef small intestine",
                            "dumpling",
                            "baby octopus",
                            "vegeterian tofu",
                            "ham and cheese",
                            "plain tofu"
                        ],
                        "spice": [
                            0,
                            1,
                            2,
                            3,
                            4
                        ]
                    }
                },
                "image": null
            }, {
                "_id": {
                    "$oid": "5ffca25deb39382b6ce8b744"
                },
                "name": "Spicy BBQ Pork + Tofu",
                "description": null,
                "price": 24,
                "category": {
                    "tofu combo": {
                        "tofu": [
                            "beef + seafood",
                            "mushroom",
                            "seafood",
                            "oyster",
                            "clam",
                            "kimchi",
                            "beef",
                            "pork",
                            "beef small intestine",
                            "dumpling",
                            "baby octopus",
                            "vegeterian tofu",
                            "ham and cheese",
                            "plain tofu"
                        ],
                        "spice": [
                            0,
                            1,
                            2,
                            3,
                            4
                        ]
                    }
                },
                "image": null
            }, {
                "_id": {
                    "$oid": "5ffca58ceb39382b6ce8b745"
                },
                "name": "BBQ Short Ribs",
                "description": "grilled kalbi over diced onions",
                "price": 28,
                "category": {
                    "bbq entree": {}
                },
                "image": null
            }, {
                "_id": {
                    "$oid": "5ffca5aaeb39382b6ce8b746"
                },
                "name": "BBQ Beef Bulgogi",
                "description": "grilled bulgogi over diced onions",
                "price": 26,
                "category": {
                    "bbq entree": {}
                },
                "image": null
            }, {
                "_id": {
                    "$oid": "5ffca5c8eb39382b6ce8b747"
                },
                "name": "Spicy BBQ Pork",
                "description": "grilled spicy pork over diced onions",
                "price": 25,
                "category": {
                    "bbq entree": {}
                },
                "image": null
            }, {
                "_id": {
                    "$oid": "5ffca5e2eb39382b6ce8b748"
                },
                "name": "Grilled Chicken",
                "description": "grilled chicken over diced onions",
                "price": 25,
                "category": {
                    "bbq entree": {}
                },
                "image": null
            }, {
                "_id": {
                    "$oid": "5ffca601eb39382b6ce8b749"
                },
                "name": "Pork Cutlet",
                "description": null,
                "price": 13,
                "category": {
                    "cutlets": {}
                },
                "image": null
            }, {
                "_id": {
                    "$oid": "5ffca67feb39382b6ce8b74a"
                },
                "name": "Pizza Pork Cutlet",
                "description": "vegetables with mozzarella cheese over a breaded pork cutlet",
                "price": 15,
                "category": {
                    "cutlets": {}
                },
                "image": null
            }, {
                "_id": {
                    "$oid": "5ffca88ceb39382b6ce8b74b"
                },
                "name": "Hot Stone Pot Beef Bibimbap",
                "description": "beef, assorted vegetables, egg over rice in a stone pot",
                "price": 14,
                "category": {
                    "bibimbap": {}
                },
                "image": null
            }, {
                "_id": {
                    "$oid": "5ffca9faeb39382b6ce8b74c"
                },
                "name": "Hot Stone Pot Chicken Bibimbap",
                "description": "chicken, assorted vegetables, egg over rice in a stone pot",
                "price": 15,
                "category": {
                    "bibimbap": {}
                },
                "image": null
            }, {
                "_id": {
                    "$oid": "5ffcab86eb39382b6ce8b74d"
                },
                "name": "Hot Stone Pot Tofu Bibimbap",
                "description": "tofu, assorted vegetables, egg over rice in a stone pot",
                "price": 15,
                "category": {
                    "bibimbap": {}
                },
                "image": null
            }, {
                "_id": {
                    "$oid": "5ffcabbeeb39382b6ce8b74e"
                },
                "name": "Cold Bibimbap",
                "description": "beef, assorted vegetables, egg over rice",
                "price": 13,
                "category": {
                    "bibimbap": {}
                },
                "image": null
            }, {
                "_id": {
                    "$oid": "5ffcabe6eb39382b6ce8b74f"
                },
                "name": "Kimchi Fried Rice with Bulgogi",
                "description": null,
                "price": 12,
                "category": {
                    "bibimbap": {}
                },
                "image": null
            }, {
                "_id": {
                    "$oid": "5ffcabfceb39382b6ce8b750"
                },
                "name": "Kimchi Fried Rice with Grilled Chicken",
                "description": null,
                "price": 12,
                "category": {
                    "bibimbap": {}
                },
                "image": null
            }, {
                "_id": {
                    "$oid": "5ffcac05eb39382b6ce8b751"
                },
                "name": "Kimchi Fried Rice with Spicy Pork",
                "description": null,
                "price": 12,
                "category": {
                    "bibimbap": {}
                },
                "image": null
            }, {
                "_id": {
                    "$oid": "5ffcac40eb39382b6ce8b752"
                },
                "name": "Boiled Beef Stew",
                "description": null,
                "price": 16,
                "category": {
                    "stew": {}
                },
                "image": null
            }, {
                "_id": {
                    "$oid": "5ffcacb9eb39382b6ce8b753"
                },
                "name": "Handmade Noodle with Seafood",
                "description": "Korean knife-cut flour-based noodle in a crab soup base w/squash, clam, shrimp, crab, mussel, and baby octopus",
                "price": 13,
                "category": {
                    "noodles": {}
                },
                "image": null
            }, {
                "_id": {
                    "$oid": "5ffcacf6eb39382b6ce8b754"
                },
                "name": "BBQ Beef Noodle",
                "description": "spicy broth w/ beef bulgogi",
                "price": 12,
                "category": {
                    "noodles": {}
                },
                "image": null
            }, {
                "_id": {
                    "$oid": "5ffcad20eb39382b6ce8b755"
                },
                "name": "Spicy Pork Noodle",
                "description": "spicy broth w/ spicy pork",
                "price": 12,
                "category": {
                    "noodles": {}
                },
                "image": null
            }, {
                "_id": {
                    "$oid": "5ffcad38eb39382b6ce8b756"
                },
                "name": "Chicken Noodle",
                "description": "spicy broth w/ grilled chicken",
                "price": 12,
                "category": {
                    "noodles": {}
                },
                "image": null
            }, {
                "_id": {
                    "$oid": "5ffcad7deb39382b6ce8b757"
                },
                "name": "Seafood Noodle",
                "description": "spicy broth w/ clam, shrimp, crab, mussel, and octopus",
                "price": 12,
                "category": {
                    "noodles": {}
                },
                "image": null
            }, {
                "_id": {
                    "$oid": "5ffcadbfeb39382b6ce8b758"
                },
                "name": "Vegetable Noodle",
                "description": "vegetarian broth w/ brocolli, mushroom, and carrots",
                "price": 12,
                "category": {
                    "noodles": {}
                },
                "image": null
            }, {
                "_id": {
                    "$oid": "5ffcbd29eb39382b6ce8b759"
                },
                "name": "Cold Noodle",
                "description": "buckwheat noodle in a sweet & sour broth w/ cucumber, egg, and radish",
                "price": 13,
                "category": {
                    "noodles": {}
                },
                "image": null
            }, {
                "_id": {
                    "$oid": "5ffcbd54eb39382b6ce8b75a"
                },
                "name": "Spicy Cold Noodle",
                "description": "buckwheat noodle in a spicy sweet and sour broth w/ cucumber, egg, and radish",
                "price": 13,
                "category": {
                    "noodles": {}
                },
                "image": null
            }, {
                "_id": {
                    "$oid": "5ffcbd84eb39382b6ce8b75b"
                },
                "name": "Cold Noodle or Spicy Cold Noodle + Galbi",
                "description": null,
                "price": 27,
                "category": {
                    "noodles combo": {
                        "spice": [
                            "0",
                            "1"
                        ]
                    }
                },
                "image": null
            }, {
                "_id": {
                    "$oid": "5ffcbd96eb39382b6ce8b75c"
                },
                "name": "Cold Noodle or Spicy Cold Noodle + Bulgogi",
                "description": null,
                "price": 25,
                "category": {
                    "noodles combo": {
                        "spice": [
                            "0",
                            "1"
                        ]
                    }
                },
                "image": null
            }, {
                "_id": {
                    "$oid": "5ffcbda6eb39382b6ce8b75d"
                },
                "name": "Cold Noodle or Spicy Cold Noodle + Grilled Chicken",
                "description": null,
                "price": 24,
                "category": {
                    "noodles combo": {
                        "spice": [
                            "0",
                            "1"
                        ]
                    }
                },
                "image": null
            }, {
                "_id": {
                    "$oid": "5ffcbdbceb39382b6ce8b75e"
                },
                "name": "Cold Noodle or Spicy Cold Noodle + Spicy BBQ Pork",
                "description": null,
                "price": 25,
                "category": {
                    "noodles combo": {
                        "spice": [
                            "0",
                            "1"
                        ]
                    }
                },
                "image": null
            }, {
                "_id": {
                    "$oid": "5ffcbe0eeb39382b6ce8b75f"
                },
                "name": "Seafood Pancake",
                "description": null,
                "price": 20,
                "category": {
                    "house specialty": {}
                },
                "image": null
            }, {
                "_id": {
                    "$oid": "5ffcbe86eb39382b6ce8b760"
                },
                "name": "Kimchi Pancake",
                "description": null,
                "price": 15,
                "category": {
                    "house specialty": {}
                },
                "image": null
            }, {
                "_id": {
                    "$oid": "5ffcbe96eb39382b6ce8b761"
                },
                "name": "Vegetable Pancake",
                "description": null,
                "price": 15,
                "category": {
                    "house specialty": {}
                },
                "image": null
            }, {
                "_id": {
                    "$oid": "5ffcc005eb39382b6ce8b762"
                },
                "name": "Steamed Dumpling",
                "description": null,
                "price": 12,
                "category": {
                    "house specialty": {}
                },
                "image": null
            }, {
                "_id": {
                    "$oid": "5ffcc01feb39382b6ce8b763"
                },
                "name": "Fried Dumpling",
                "description": null,
                "price": 12,
                "category": {
                    "house specialty": {}
                },
                "image": null
            }, {
                "_id": {
                    "$oid": "5ffcc02beb39382b6ce8b764"
                },
                "name": "Tofu Salad",
                "description": null,
                "price": 12,
                "category": {
                    "house specialty": {}
                },
                "image": null
            }, {
                "_id": {
                    "$oid": "5ffdf5423de185250c13f595"
                },
                "name": "Beef Ribs Stew",
                "description": null,
                "price": 14,
                "category": {
                    "stew": {}
                },
                "image": null
            }, {
                "_id": {
                    "$oid": "5ffdf58a3de185250c13f596"
                },
                "name": "Budae Stew",
                "description": null,
                "price": 13,
                "category": {
                    "stew": {}
                },
                "image": null
            }],
    // [
    //     {id:1,title:'Winter body', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price:110,img:Item1},
    //     {id:2,title:'Adidas', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price:80,img: Item2},
    //     {id:3,title:'Vans', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",price:120,img: Item3},
    //     {id:4,title:'White', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price:260,img:Item4},
    //     {id:5,title:'Cropped-sho', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price:160,img: Item5},
    //     {id:6,title:'Blues', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",price:90,img: Item6}
    // ],
    addedItems:[],
    total: 0

}
const cartReducer= (state = initState,action)=>{
   
    //INSIDE HOME COMPONENT
    if(action.type === ADD_TO_CART){
          let addedItem = state.items.find(item=> item.id === action.id)
          //check if the action id exists in the addedItems
         let existed_item= state.addedItems.find(item=> action.id === item.id)
         if(existed_item)
         {
            addedItem.quantity += 1 
             return{
                ...state,
                 total: state.total + addedItem.price 
                  }
        }
         else{
            addedItem.quantity = 1;
            //calculating the total
            let newTotal = state.total + addedItem.price 
            
            return{
                ...state,
                addedItems: [...state.addedItems, addedItem],
                total : newTotal
            }
            
        }
    }
    if(action.type === REMOVE_ITEM){
        let itemToRemove= state.addedItems.find(item=> action.id === item.id)
        let new_items = state.addedItems.filter(item=> action.id !== item.id)
        
        //calculating the total
        let newTotal = state.total - (itemToRemove.price * itemToRemove.quantity )
        console.log(itemToRemove)
        return{
            ...state,
            addedItems: new_items,
            total: newTotal
        }
    }
    //INSIDE CART COMPONENT
    if(action.type=== ADD_QUANTITY){
        let addedItem = state.items.find(item=> item.id === action.id)
          addedItem.quantity += 1 
          let newTotal = state.total + addedItem.price
          return{
              ...state,
              total: newTotal
          }
    }
    if(action.type=== SUB_QUANTITY){  
        let addedItem = state.items.find(item=> item.id === action.id) 
        //if the qt == 0 then it should be removed
        if(addedItem.quantity === 1){
            let new_items = state.addedItems.filter(item=>item.id !== action.id)
            let newTotal = state.total - addedItem.price
            return{
                ...state,
                addedItems: new_items,
                total: newTotal
            }
        }
        else {
            addedItem.quantity -= 1
            let newTotal = state.total - addedItem.price
            return{
                ...state,
                total: newTotal
            }
        }
        
    }

    if(action.type=== ADD_DELIVERY){
          return{
              ...state,
              total: state.total + 5
          }
    }

    if(action.type=== 'SUB_DELIVERY'){
        return{
            ...state,
            total: state.total - 5
        }
  }
    
  else{
    return state
    }
    
}

export default cartReducer
