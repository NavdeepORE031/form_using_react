import './App.css';
import Header from './components/Header';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack  from '@mui/material/Stack';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import { useState } from 'react';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';


function App() {
  const [name, setName] = useState(" ");
  const [email, setEmail] = useState(" ");
  const [data, setData] = useState([]);

  const addData = () => {
    setData([...data, { name, email }]);
    setName("");
    setEmail("");
  };

  // Fixed remove function: do not mutate state directly, use setData
  const removeItem = (index) => {
    console.log("index of delete-----", index);
    let arr = data;
    arr.splice(index,1)
    setData([...arr])
  };

  return (
    <div className="App">
      <Header />
      <div className="form">
        <Stack direction="row" spacing={2}>
          <TextField 
            value={name}
            onChange={(event) => setName(event.target.value)}
            id="outlined-basic"
            label="Name"
            variant="outlined" 
          />

          <TextField 
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            id="outlined-basic" 
            label="Email" 
            variant="outlined" 
          />

          <Button onClick={addData} variant="contained" color="success">
            <AddOutlinedIcon />
          </Button>
        </Stack>
      </div>

      <div className="data">
        <div className="data_val">
          <h4>Name</h4>
          <h4>Email</h4>
          <h4>Remove</h4>
        </div>
        {
          data.map((element, index) => {
            return (
              <div key={index} className="data_val">
                <h4>{element.name}</h4>
                <h4>{element.email}</h4>
                <Stack>
                  <Button onClick={() => removeItem(index)} variant="contained" color="error">
                    <DeleteOutlineOutlinedIcon />
                  </Button>
                </Stack>
              </div>
            )
          })
        }
      </div>
    </div>
  );
}

export default App;
