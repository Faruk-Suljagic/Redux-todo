import { useEffect, useState } from 'react'
import { Checkbox } from '@chakra-ui/checkbox'
import { Box, Text } from '@chakra-ui/layout'
import { useDispatch } from 'react-redux'
import {toggleTodo, deleteTodo} from '../Redux/actions'



const Todo = ({todo}) => {
    const dispatch = useDispatch()
    const [checked, setChecked] = useState(false)
    const handleChecked = () => dispatch(toggleTodo(todo.id));
    const handleClick = () => dispatch(deleteTodo(todo.id))

    useEffect(() => {
        setChecked(todo.completed)
    }, [todo])
    return (
        <Box  mb={1} style={{display: 'flex', justifyContent: 'space-between', flexDirection: 'row', background: 'var(--chakra-colors-teal-500)'}} bgColor="lightCoral" p={2}>
            <Checkbox onChange={handleChecked} colorScheme='lightCoral' isChecked={checked}>
                <Text as={todo.completed && "del"}>{todo.content}</Text>
            </Checkbox>
            <button onClick={handleClick} style={{padding: '2px 10px', backgroundColor: '#000',color: '#fff' ,borderRadius: '4px' ,cursor: 'pointer'}}><i className="fas fa-dumpster"></i></button>
        </Box>
    )
}

export default Todo
