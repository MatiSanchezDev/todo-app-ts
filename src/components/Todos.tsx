import { type ListOfTodo } from '../types'
import { Todo } from './Todo'

interface props {
  todos: ListOfTodo
}

export const Todos: React.FC<props> = ({ todos }) => {
  return (
    <ul className='todo-list'>
      {todos.map(todo => (
        <li
        key={todo.id}
        className={`${todo.completed ? 'completed' : ''}`}
        >
          <Todo
          key={todo.id}
          id={todo.id}
          title={todo.title}
          completed={todo.completed}
          />
        </li>
      ))}
    </ul>
  )
}
