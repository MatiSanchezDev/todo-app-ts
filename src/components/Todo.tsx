import { type TodoFinish, type TodoId, type Todo as TodoType } from '../types'

interface Props extends TodoType {
  handleRemove: ({ id }: TodoId) => void
  handlCompleted: ({ id, completed }: TodoFinish) => void
}

export const Todo: React.FC<Props> = ({ id, title, completed, handleRemove, handlCompleted }) => {
  return (
    <div className="view">
      <input
      type="checkbox"
      className="toggle"
      checked={completed}
      onChange={(event) => {
        handlCompleted({ id, completed: event.target.checked })
      }}
       />
       <label>{title}</label>
       <button className='destroy' onClick={() => { handleRemove({ id }) }} />
    </div>
  )
}
