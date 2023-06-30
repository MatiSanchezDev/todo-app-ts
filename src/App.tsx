import { useState } from 'react'
import { Todos } from './components/Todos'

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
  }
]

export const App = (): JSX.Element => {
  const [todos] = useState(mockTodo)

  return (
    <div className='todoapp'>
      <Todos todos={todos} />
    </div>
  )
}
