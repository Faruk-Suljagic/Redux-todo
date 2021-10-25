import * as actions from '../actionTypes'

const initialState = {
    todos: [
        
    ]
}

const todos = (state = initialState, action) => {
    switch(action.type) {
        case actions.ADD_TODO: {
            const {id, content} = action.payload
            return {
                todos: [
                    ...state.todos,
                    {content, completed: false, id}
                ]
            }
        }
        case actions.TOGGLE_TODO: {
            const {id} = action.payload
            const todos = state.todos.map(obj => obj.id === id ? {...obj, completed: !obj.completed} : obj);
            return {todos}
        }
        case actions.DELETE_TODO: {
            const {id} = action.payload
            const todos = state.todos.filter(del => del.id !== id);
            return {todos}
            }
        
        default:  {
            return state; 
        }
        
    }
}

export default todos;