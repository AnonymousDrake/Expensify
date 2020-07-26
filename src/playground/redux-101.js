import {createStore} from 'redux';

const store = createStore((state={count : 0}, action)=>{
    switch(action.type){
        case "INCREMENT" : 
            const incrementBy= (action.incrementBy === undefined ? 1 : action.incrementBy)
            return {
                count: state.count + incrementBy
            }
        case "DECREMENT" :
            const decrementBy = (action.decrementBy=== undefined ? 1 : action.decrementBy);
            return {
                count: state.count - decrementBy
            }
        case "RESET" :
            return {
                count: 0
            }
        case "COUNT":
            return{
                count: action.count
            }
        default :
        return{
            count: state.count
        }
    }
});

const unsubscribe = store.subscribe(()=>{
    console.log(store.getState());
});

store.dispatch({
    type: "INCREMENT"
});

store.dispatch({
    type: "RESET"
});

store.dispatch({
    type: "DECREMENT",
    decrementBy: 2
});

store.dispatch({
    type: "COUNT",
    count: 100
})