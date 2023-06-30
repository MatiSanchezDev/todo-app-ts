import { useState } from 'react'
import { Todos } from './components/Todos'
import { type TodoTitle, type FilterValue, type TodoFinish, type TodoId } from './types'
import { TODO_FILTERS } from './consts'
import { Footer } from './components/Footer'
import { Header } from './components/Header'

const mockTodo = [
  {
    id: '1',
    title: 'Terminar curso de TypeScript de Midu',
    completed: false
  },
  {
    id: '2',
    title: 'Empezar clon de Twitter para portafolio',
    completed: false
  },
  {
    id: '3',
    title: 'Buscar un Portafolio web que me guste',
    completed: false
  },
  {
    id: '4',
    title: 'Configurar bien mi LinkedIn',
    completed: false
  },
  {
    id: '5',
    title: 'Configurar bien mi Github',
    completed: false
  },
  {
    id: '6',
    title: 'Jugar lolcito de premio',
    completed: true
  }
]

export const App = (): JSX.Element => {
  const [todos, setTodos] = useState(mockTodo)
  const [filterSelected, setFilterSelected] = useState<FilterValue>(TODO_FILTERS.ALL)

  const handleRemove = ({ id }: TodoId): void => {
    const newTodos = todos.filter(todo => todo.id !== id)
    setTodos(newTodos)
  }

  const handlCompleted = ({ id, completed }: TodoFinish): void => {
    const newTodo = todos.map(todo => {
      if (todo.id === id) {
        return {
          ...todo, completed
        }
      }
      return todo
    })

    setTodos(newTodo)
  }

  const handleFilterChange = (filter: FilterValue): void => {
    setFilterSelected(filter)
  }

  const activeCount = todos.filter(todo => !todo.completed).length
  const completedCount = todos.length - activeCount
  const filteredTodos = todos.filter(todo => {
    if (filterSelected === TODO_FILTERS.ACTIVE) return !todo.completed
    if (filterSelected === TODO_FILTERS.COMPLETED) return todo.completed
    return todo
  })

  const handleRemoveAllCompleted = (): void => {
    const newTodos = todos.filter(todo => !todo.completed)
    setTodos(newTodos)
  }

  const onAddTodo = ({ title }: TodoTitle): void => {
    const newTodo = {
      id: crypto.randomUUID(),
      title,
      completed: false
    }
    const newTodos = [...todos, newTodo]
    setTodos(newTodos)
  }

  return (
    <div className='todoapp'>
      <Header onAddTodo={onAddTodo}/>
      <Todos handlCompleted={handlCompleted} handleRemove={handleRemove} todos={filteredTodos} />
      <Footer
      activeCount={activeCount}
      completedCount={completedCount}
      filterSelected={filterSelected}
      onClearCompleted={handleRemoveAllCompleted}
      handleFilterChange={handleFilterChange} />
    </div>
  )
}
