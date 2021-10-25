import { Box } from "@chakra-ui/react"
import { useSelector } from "react-redux"
import { getTodos } from "../Redux/selector";
import Todo from "./Todo";



const TodoList = () => {
    const {todos, visibilityFilter} = useSelector(state => state);
    const filterTodos = getTodos(todos, visibilityFilter)

    return (
        <Box my={3}>
            {filterTodos.length ? filterTodos.map(todo => (
                <Todo key={`todo-${todo.id}`} todo={todo} />
            )) : <Box textAlign="center" my={4}>
            No Todos
        </Box>}
            
        </Box>
    )
}

export default TodoList
