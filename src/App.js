import React from 'react';
import { Todo } from './components/Todo';
import { Button } from './components/Button';
import './App.css';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { add, complete, remove } from './slices';

const App = () => {

  const [text, setText] = useState("");

  // useSelector pour récupérer des éléments du state global
  const todos = useSelector(state => state.data.todos);

  // Initialisation du useDispatch pour pouvoir envoyer le résultat d'une action à notre reducer
  const dispatch = useDispatch();

  const addTodo = () => {
      // Faire appel à notre action add stockée et exportée dans slices/index.js
      dispatch(add(text))

      setText("");
    };
    
  const renderTodos = () => {
    const ListToDos = todos.map((item, index) => {
      return (
        <Todo
          key={item.id}
          item={item}
          checkboxAction={() => dispatch(complete(index))}
          buttonAction={() => dispatch(remove(index))}
        />
      );

    });
    return (
      <div className="todos">
        <h2>Mes tâches</h2>
        {ListToDos}
      </div >
    )

  }
  return (
    <div className="App">
      <header>
        <span role="img" aria-label="">🧠</span>
        <h1>Taskinator</h1>
        <span role="img" aria-label="">🤖</span>
      </header>
      <div className="container">
        <div className="form-group">
          <input
            type="text"
            className="todo-input"
            onChange={(e) => setText(e.target.value)}
            value={text}
          />
          <Button
            className="btn"
            action={() => addTodo()}
          >
            Ajouter une tâche
          </Button>
        </div>
        {renderTodos()}

      </div>
    </div>
  );

}

export default App;