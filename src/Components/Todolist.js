// import React from 'react'
// import { useState } from 'react'
// import axios from 'axios'
// const Todolist = () => {
//   const [todo, setTodo] = useState('')  //guru
//   const [todoArray, setTodoArray] = useState([])


//   const addtodo = () => {
//     const newtodoObj = {
//       title: todo, //guru
//       complted: false
//     }
//     axios.post('http://localhost:3001/posts', newtodoObj)
//       .then(() => {
//         alert('data posted')
//       })
//       .catch(() => {
//         alert('data not posted')
//       })
//   }

//   return (
//     <div>
//       <label htmlFor="Todo">Todo : </label>
//       <input type="text" value={todo} onChange={(e) => setTodo(e.target.value)} /> <br />

//       <button onClick={addtodo}>Add Todo</button>
      
//     </div>
//   )
// }
// export default Todolist
// import React from 'react'
// import { useState } from 'react'
// import axios from 'axios'
// const Todolist = () => {
//   const [todo, setTodo] = useState('')  //guru
//   const [todoArray, setTodoArray] = useState([])


//   const addtodo = () => {
//     const newtodoObj = {
//       title: todo, //guru
//       complted: false
//     }
//     axios.post('http://localhost:3001/posts', newtodoObj)
//       .then(() => {
//         alert('data posted')
//       })
//       .catch(() => {
//         alert('data not posted')
//       })
//   }

//   return (
//     <div>
//       <label htmlFor="Todo">Todo : </label>
//       <input type="text" value={todo} onChange={(e) => setTodo(e.target.value)} /> <br />

//       <button onClick={addtodo}>Add Todo</button>
      
//     </div>
//   )
// }


// export default Todolist

// //           noValidate
//           autoComplete="off"
//         >
//           <TextField id="outlined-basic" label="Todo" variant="outlined" value={todo} onChange={(e) => setTodo(e.target.value)} />
//         </Box>
//         <Button variant="outlined" onClick={addTodo}>Add Todo</Button>

//       </div>

//     </div>
//   )
// }

//export default ToDoList

// import React, { useState } from 'react';
// import Box from '@mui/material/Box';
// import TextField from '@mui/material/TextField';
// import Button from '@mui/material/Button';
// import axios from 'axios';

// const ToDoList = () => {
//   const [todoTitle, setTodoTitle] = useState('');
//   const [imageUrl, setImageUrl] = useState('');
//   const [todoArray, setTodoArray] = useState([]);

//   const getTodo = () => {
//     axios
//       .get('http://localhost:3001/posts')
//       .then((response) => {
//         setTodoArray(response.data);
//       })
//       .catch(() => {
//         alert('Cannot display todos.');
//       });
//   };

  // const addTodo = function () {
  //   const newTodoObj = {
  //     title: todoTitle,
  //     imageUrl: imageUrl,
  //     completed: false,
  //   };

  //   axios
  //     .post('http://localhost:3001/posts', newTodoObj)
  //     .then(() => {
  //       getTodo();
  //       setTodoTitle('');
  //       setImageUrl('');
  //     })
  //     .catch(() => {
  //       alert('Todo not posted.');
  //     });
  // };

  // return (
//     <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', flexDirection: 'column' }}>
//       <div>
//         <Box
//           component="form"
//           sx={{
//             '& > :not(style)': { m: 1, width: '25ch' },
//           }}
//           noValidate
//           autoComplete="off"
//         >
//           <TextField id="outlined-basic" label="Todo Title" variant="outlined" value={todoTitle} onChange={(e) => setTodoTitle(e.target.value)} />
//           <TextField id="outlined-basic" label="Image URL" variant="outlined" value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} />
//         </Box>
//         <Button variant="outlined" onClick={addTodo}>
//           Add Todo
//         </Button>
//       </div>
//       <div>
//         <ol>
//           {todoArray.map((todoItem) => (
//             <li key={todoItem.id}>
//               <div>
//                 <p>{todoItem.title}</p>
//                 {todoItem.imageUrl && <img src={todoItem.imageUrl} alt="Todo" style={{ maxWidth: '100px', maxHeight: '100px' }} />}
//               </div>
//             </li>
//           ))}
//         </ol>
//       </div>
//     </div>
//   );
// };

// export default ToDoList;
import React, { useEffect, useState } from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import axios from 'axios';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
const ToDoList = () => {

  const [todo, setTodo] = useState('')
  const [todoArray, setTodoArray] = useState([])

  useEffect(() => {
    getTodo();
  }, [])

  const getTodo = () => {
    axios.get('  http://localhost:3001/posts')
      .then((response) => {
        setTodoArray(response.data)
      })
      .catch(() => {
        alert('cannot display')
      })
  }

  const addTodo = function () {
    const newTodoObj = {
      title: todo,
      completed: false
    }
    axios.post('  http://localhost:3001/posts', newTodoObj)
      .then(() => {
        getTodo();
        setTodo('')
      })
      .catch(() => {
        alert('not posted')
      })
  }
  const updateTodo = (id, passingData) => {
    axios.put(`  http://localhost:3001/posts/${id}`, passingData)
      .then(() => {
        getTodo();
      })
  }
  const deleteTodo = (id) => {
    axios.delete(`http://localhost:3001/posts/${id}`)
      .then(() => {
        getTodo();
      })
      .catch(() => {
        alert('not deleted')
      })

  }
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', flexDirection: 'column' }}>
      <div>
        <Box
          component="form"
          sx={{
            '& > :not(style)': { m: 1, width: '25ch' },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField id="outlined-basic" label="Todo" variant="outlined" value={todo} onChange={(e) => setTodo(e.target.value)} />
        </Box>
        <Button variant="outlined" onClick={addTodo}>Add Todo</Button>

      </div>
      <div>
        <ol>
          {/* guru */}
          {todoArray.map((todoItem) => (
            <li key={todoItem.id} style={{ padding: '20px' }}>{todoItem.title}


              <span style={{ padding: '200px' }} onClick={() => {
                const newdata = prompt('enter:')
                if (newdata !== null) {
                  const passingData = {
                    title: newdata
                  }
                  updateTodo(todoItem.id, passingData)
                }
              }}>
                <EditIcon />
              </span>
              <span style={{ pading: '10px' }} onClick={() => deleteTodo(todoItem.id)}>
                <DeleteIcon />
              </span>
            </li>
          ))}
        </ol>
      </div>
    </div >
  )
}

export default ToDoList
