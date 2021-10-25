import React, { useState } from 'react'
import { Button } from '@chakra-ui/button';
import { FormControl } from '@chakra-ui/form-control';
import { Input } from '@chakra-ui/input';
import { Flex } from '@chakra-ui/layout';
import { useDispatch } from 'react-redux';
import { addTodo } from '../Redux/actions';


const AddTodo = () => {
    const dispatch = useDispatch()
    const [value, setValue] = useState("")
    
    const handleInput = e => {  
        setValue(e.target.value)
    }

    const handleSubmit = e => {
        e.preventDefault();
        dispatch(addTodo(value))
        setValue("");
    }
    return (
        <form onSubmit={handleSubmit}>
            <Flex>
            <FormControl>
                <Input onChange={handleInput} autoFocus type="text" value={value} placeholder="type..." borderTopRightRadius={0} borderBottomRightRadius={0} />
            </FormControl>
            <Button colorScheme="teal" type="submit" disabled={!value} borderTopLeftRadius={0} borderBottomLeftRadius={0} >Add Todo</Button>
            </Flex>
        </form>
    )
}

export default AddTodo;
