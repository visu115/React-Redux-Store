const initialstate = {
    age: 0 
}

const reducer = (state = initialstate, action) => {

    const copystate = { ...state }


    switch(action.type) {
        case "increaseAge":
            copystate.age += 1;
            break;

        case "decreaseAge":
            copystate.age -= 1;
            break;
        
        default:
            break
    }
    return copystate;
};

export default reducer;