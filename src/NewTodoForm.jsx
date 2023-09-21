import { useState } from "react"

export function NewTodoForm({ addTodo }) {
  const [newItem, setNewItem] = useState("")


  function handleSubmit(e){
    e.preventDefault()
    if (newItem === "") return

    addTodo(newItem)

    setNewItem(" ")
  }

  return (
  <>
   <h1>Henry's Tasks</h1>
    <form onSubmit={handleSubmit} className="new-item-form">
      <div className="form-row">
        <label htmlFor="item">Add Task</label>
        <input
          value={newItem}
          onChange={e => setNewItem(e.target.value)}
          type="text"
          id="item"
        />
      </div>
      <button className="btn">Add</button>
    </form>
  </>
  )
}
