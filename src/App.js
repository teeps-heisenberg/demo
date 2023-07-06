import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Login from './pages/login/index';
import ListTodo from './pages/listTodo/index';
import ChildTodo from './pages/childTodoTask';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/child-todo/:index' element={<ChildTodo/>}></Route>
        <Route path='/my-list' element={<ListTodo/>}/>
        <Route path='/' element={<Login/>}>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
