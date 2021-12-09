function TodoForm({addTodo}){
    const [value, setValue]  = React.useState(''); 

    const handleSubmit = e => {
        e.preventDefault();
        if(!value) return;
        addTodo(value);
        setValue('');
    }

    return (
        <form onSubmit = {handleSubmit}>
        <input
            type = "text" 
            className = "input"
            value = {value}
            placeholder = "Add a to-do and press enter so save it"
            onChange={e => setValue(e.target.value)}
        />
    </form>
    );
}