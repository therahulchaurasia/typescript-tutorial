import React from 'react'
import Todo from '../model'
import { BiEdit } from 'react-icons/bi'
import { AiOutlineDelete } from 'react-icons/ai'
import { HiOutlineCheck } from 'react-icons/hi'

type Props = {
    todo: Todo,
    todos: Todo[],
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}

const SingleTodo = ({ todo, todos, setTodos }: Props) => {
    return (
        <form className='todos__single'>
            <span className="todos__single--text">
                {
                    todo.todo
                }
                <div>
                    <span className='icon'>
                        <BiEdit />
                    </span>
                    <span className='icon'>
                        <AiOutlineDelete />
                    </span>
                    <span className='icon'>
                        <HiOutlineCheck />
                    </span>
                </div>
            </span>
        </form>
    )
}

export default SingleTodo