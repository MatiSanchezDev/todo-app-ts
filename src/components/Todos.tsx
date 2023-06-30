import { type TodoId, type ListOfTodo, type TodoFinish } from '../types'
import { Todo } from './Todo'

interface props {
  todos: ListOfTodo
  handleRemove: ({ id }: TodoId) => void
  handlCompleted: ({ id, completed }: TodoFinish) => void
}

export const Todos: React.FC<props> = ({ todos, handleRemove, handlCompleted }) => {
  return (
    <ul className='todo-list'>
      {todos.map(todo => (
        <li
        key={todo.id}
        className={`${todo.completed ? 'completed' : ''}`}
        >
          <Todo
          handlCompleted={handlCompleted}
          key={todo.id}
          id={todo.id}
          title={todo.title}
          completed={todo.completed}
          handleRemove={handleRemove}
          />
        </li>
      ))}
    </ul>
  )
}
