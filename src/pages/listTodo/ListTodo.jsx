import React,{useState,useEffect} from "react";
import './ListTodo.css';
import { useNavigate } from "react-router-dom";
const ListTodo = ()=> {

    const navigate = useNavigate();
    const[todo,setTodo] = useState('');
    const[userTodo,setUserTodo] = useState([]);
    const[todoEdit,setTodoEdit] = useState(null);
    
    useEffect(() => {
        if(userTodo.length){
            localStorage.setItem('todoList',JSON.stringify(userTodo));
        }

    },[userTodo]);

    useEffect(() => {
        const tempTodo = localStorage.getItem('todoList');
        if(tempTodo){
            setUserTodo(JSON.parse(tempTodo));
        }
    },[]);

    const addItem = () => {
        if(todoEdit === null){
            if(!todo){
                alert('Please Enter A Todo First!');
            }
            else{
                const allTodoData = {id:new Date().toTimeString(), name:todo,};
                setUserTodo([allTodoData,...userTodo]);
                setTodo("");
            }  
        }
        else{
            userTodo[todoEdit] = {
                ...userTodo[todoEdit],
                name:todo,
            }
            setUserTodo([
                ...userTodo
            ])
            setTodoEdit(null);
            setTodo('');
        }
    }
    return(
        <div className="todoContainer">
            <h1>My Todos</h1>
        <form onSubmit={(e)=>{
            e.preventDefault();
        }}>
            <div className="addTodo">
                <label htmlFor="todo">Enter Your Todo</label>
                <input value={todo} onChange={(e)=>{setTodo(e.target.value)}} type="text" name="todo" id="todo" />
            </div>
        
            <button onClick={addItem}>{todoEdit !== null ?'Edit' : 'Add'}</button>
        </form>
        
        <div className="todoList">
            {userTodo.map( (i,index) => {
                return(
                    <div key={index} className="todoListCard">
                        <div style={{flexDirection:'column',display:'flex'}}>
                            <span>{i.name}</span>   
                            <span>{i.id}</span>  
                        </div>
                        <div>
                            <button 
                                className="btnn"
                                onClick={()=>{
                                    setTodoEdit(index);
                                    setTodo(i.name);
                                }}
                            >
                                Edit
                            </button>
                            <button className="btnn"
                                    onClick={()=> {navigate(`/child-todo/${index}`);}}
                            >
                                Child
                            </button>
                            <button 
                                className="btnn" 
                                onClick={()=>{
                                    const tempData = userTodo;
                                    tempData.splice(index,1);
                                    setUserTodo([...tempData]);
                                }}
                            >
                                Delete
                            </button>
                        </div>
                    </div>
                );
            }

            )}
        </div>
        </div>
    );
}

export default ListTodo;