//se eu tivesse vários Habits, dava pra mudar todos somente mudando aqui
import './Habit.css'

//quais propriedades que ele vai receber, que vai ser completed como um numero
interface HabitProps {
    completed: number
}

export function Habit(props: HabitProps) {
    return(
        <div className='habit'>{props.completed}</div>
    )
}