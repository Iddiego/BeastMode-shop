import {useState} from 'react'

const TaskFilter = () => {

    const [task, setTask] = useState ([
        {id:1, title:"Tarea 1", completed: false},
        {id:2, title:"Tarea 2", completed:true},
        {id:3, title:"Tarea 3", completed:false}
    ])

    const [filter, setFilter] = useState("all")

    const handleFilterChange = (event) =>{
        setFilter(event.target.value)
    }

    const handleTaskChange = (taksId) =>{
        setTask((prevTask) => {
            prevTask.map((task) => {
                task.id === taksId ? {...task, completed: !taks.completed} : task
            })
        })
    }

const filteredTask = task.filter ((task)=>{
    if (filter === "all") return true
    if (filter === "completed") return task.completed
    if(filter === "uncompleted") return !task.completed
    return false
})

  return (

    <div>
        <h1>Lista de tareas</h1>
        <div>
            <label>Filtrar por estado</label>
            
            <select value={filter} onChange={handleFilterChange}>
                <option value="all">Todas</option>
                <option value="completed">Completadas</option>
                <option value="uncompleted">No Completadas</option>
            </select>
        </div>
        <div>
            {
                filteredTask.map((t) =>(
                    <div key={t.id}>
                    <input type='checkbox' checked={t.completed}
                    onChange={()=> handleTaskChange(t.id)}
                    />
                    <span>{t.title}</span>
                    </div>
                    
                ))

            }
        </div>
    </div>
  )
}

export default TaskFilter