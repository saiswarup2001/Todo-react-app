import React, { useState } from 'react';
import "../App.css";
import logo from "../images/to-do-list.png";

function TodoList() {

  const [inputData, setInputData] = useState('');
  const [item, setItem] = useState([]);

  const addItem = () => {
    if(!inputData){
      alert("Please fill the data")
    }else{
      setItem([...item, inputData])
      setInputData('')
    }
  }

  const deleteItem = (id) =>{
    // alert(id)
    console.log(id)
    const updatedItem = item.filter((val, index) => {
      return index !== id;
    })

    setItem(updatedItem)
  }

  const DeleteAll = () => {
    setItem([])
  }


  return (
    <section className='todo-list'>
      <header>
        <figure>
          <img src={logo} alt="Todo List Logo" />
          <figcaption>Add your list here</figcaption>
        </figure>
      </header>

      <form className="add-item-form">
        <label>
          <input type="text" placeholder='Write your list...' 
            value={inputData}
            onChange={(e) => setInputData(e.target.value)}
          />
          <i className="fa-solid fa-plus" onClick={addItem}></i>
        </label>
      </form>

      <form className="show-item-form" >
        {
          item.map((element, index) => {
            return(
              <div className="eachItem" key={index}>
                <h3>{element}</h3>
                <i className="fa fa-trash" onClick={() => deleteItem(index)}></i>
              </div>
            )
          })
        }
      </form>

      <form className="btn-item-form">
        <button className='btn btnEffect' onClick={DeleteAll}><span>Remove All</span></button>
      </form>
    </section>
  );
}

export default TodoList;