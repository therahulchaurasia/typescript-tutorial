import React, { useRef } from 'react'
import "./styles.css"

interface Props {
    todo: string,
    setTodo: React.Dispatch<React.SetStateAction<string>>
    handleAdd: (e: React.FormEvent) => void;
}
// You can define the props in the same way as below
// Or you can define it in another way
// i.e. const InputField:React.FC<Props> = ({todo,setTodo}) => {}
const InputField = ({ todo, setTodo, handleAdd }: Props) => {
    const inputRef = useRef<HTMLInputElement>(null)
    return (
        <form className='input' onSubmit={(e) => {
            handleAdd(e);
            inputRef.current?.blur()
        }}>
            <input type="input" placeholder='Enter a task' className='input__box' value={todo} onChange={(e) => setTodo(e.target.value)} ref={inputRef} />
            <button type='submit' className='input__submit'>Go</button>
        </form>
    )
}

export default InputField