import CardForm from './CardForm';
import classes from './TaskForm.module.css'


export const TaskForm = () => {
    return (
        <div className={classes.taskFormStyle}>
            <CardForm/>
        </div>
    )
}