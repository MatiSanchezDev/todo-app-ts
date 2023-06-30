export interface Todo {
  id: string
  title: string
  completed: boolean
}

export type TodoId = Pick<Todo, 'id'>
export type TodoTitle = Pick<Todo, 'title'>
export type TodoComplete = Pick<Todo, 'completed'>
export type TodoFinish = Pick<Todo, 'id' | 'completed'>

export type FilterValue = typeof TODO_FILTERS[keyof typeof TODO_FILTERS]

export type ListOfTodo = Todo[]
