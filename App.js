import bookimage  from './bookimage.png';
import light  from './light-bulb.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router,Routes, Route,Link ,useParams} from 'react-router-dom';
//import {NavBar} from './component/Navbar'
import React, { useState, useEffect } from "react";
import { Card ,Button,Modal,Form} from 'react-bootstrap'
import './App.css';



function App() {

  const [todos, setTodos] = useState([]);
  
  const [todo, setTodo] = useState("");
  const [price, setPrice] = useState("");
  const [page, setPage] = useState("");
  const [image, setImage] = useState("");
  const [todoEditing, setTodoEditing] = useState(null);
  const [editingText, setEditingText] = useState("");

  // useEffect(() => {
  //   localStorage.setItem("todos", JSON.stringify(todos));
  // }, [todos]);

  function handleSubmit(e) {
    e.preventDefault();
    if (todo === "" ||price ==="") {
      alert("plaase complete the fields ")
      return;
    }
    const newTodo = {
      id: new Date().getTime(),
      text: todo,
      price:price,
      page:page,
      image:image,
     // completed: false,
    };
    setTodos([...todos, newTodo]);
    setTodo("");
    setPrice("");
    setPage("");
    setImage("");
  }

  function deleteTodo(id) {
    let updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  }

  

  function submitEdits(id) {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.text = editingText;
      }
      return todo;
    });
    setTodos(updatedTodos);
    setTodoEditing(null);
    setEditingText("");
  }  

  // function Example() {
  //   const [show, setShow] = useState(false);
  
  //   const handleClose = () => setShow(false);
  //   const handleShow = () => setShow(true);
  return (
    <>
 <Router>
      

        {/* <GoBack/> */}
        <Routes>
      
      {/* <Route path="/Product/:id" element={<ProductScreen />} /> */}
    
        </Routes>

     </Router>




   
   <div className='header'>
     <div className='icons' id='icons' >
     <img  className='icon' src={light}></img>
     </div>
    <img className='Header-imge' src={bookimage}></img>
    <h1 className='title'>Find the book you are looking for easier to read
    </h1>
    <p className='p'>Hi everyone let us share our knowledge! </p>
    </div>

    {/* Add block *****************************************************/}

{/* 
      <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="name@example.com"
                autoFocus
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Example textarea</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
   */}

    <div id="add-list">
      <h1 className='add'>Add a new book!</h1>
      <form onSubmit={handleSubmit}>
        <div>
        <label>Book Name: </label>
        <input
          type="text"
          onChange={(e) => setTodo(e.target.value)}
          value={todo}
        />
          </div>
          <div>
<label>Book price: </label>
        <input
          type="text"
          onChange={(e) => setPrice(e.target.value)}
          value={price}
        />
     </div>
     <div >
<label>Number of pages: </label>
        <input
          type="text"
          onChange={(e) => setPage(e.target.value)}
          value={page}
        />
        </div>
        <div>
        <label>image link: </label>
        <input
          type="text"
          onChange={(e) => setImage(e.target.value)}
          value={image}
        />
       </div>

        <button className='add-button' type="submit">Add </button>
      </form> 
    </div>
<div className='box'>
    <div className='books'>
      {todos.map((todo) => (
        <div key={todo.id} className="todo">
          <div className="todo-text">
            {todo.id === todoEditing ? (
              <input
                type="text"
                key={todo.id}
                defaultValue={todo.text}
                onChange={(e) => {
                  setEditingText(e.target.value);
                }}
              />
            ) : ( 
              <div className='book-info'>
        <Link to ={`/book/${todo.id}`}>
        <Card.Img src={todo.image} variant='top'/>
        </Link>
{/* 
                <img src={todo.image}></img>  */}
 <Link to={`/book/${todo.id}`}>
        <Card.Title as='div'>
            <strong>{todo.text}</strong>
        </Card.Title>
    </Link>

              {/* {todo.text} <br></br> */}
              price:{todo.price}<br></br> 
              number of pages:{todo.page}</div>
              
             
            )}
          </div>
          <div className="todo-actions">
            {/* {todo.id === todoEditing ? (
              <button onClick={() => submitEdits(todo.id)}>Submit Edits</button>
            ) : (
              <button
                onClick={() => {
                  setTodoEditing(todo.id);
                  setEditingText(todo.text);
                }}
              >
                Edit
              </button>
            )} */}

            <button className='delete' onClick={() => deleteTodo(todo.id)}>Delete</button>
          </div>
        </div>
      ))}
      </div>
      </div>
    </>



  );
// }
}







export default App ;
