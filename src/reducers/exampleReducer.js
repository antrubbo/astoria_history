const initialState = {
    message: "Hello World!"
}

function exampleReducer(state, action){
    if(action.type === "printState"){
        return{
            state
        }
    }
}

export default exampleReducer