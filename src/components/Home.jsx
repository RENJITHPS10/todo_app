import React, { useState } from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

function Home() {
    const [input, setInput] = useState('')
    const [todos, setTodos] = useState([])
    const handlepress = (event) => {
        if (event.key === 'Enter' && input) {
            event.preventDefault()
            setTodos([...todos, input])
            setInput('')
        }
    }
    const handleDelete=()=>{
        setTodos([])
    }
    console.log(todos)
    console.log(input)
    return (
        <>
            <div className='flex flex-row justify-center '>
                <div className='basis-11/12 md:basis-1/2  '>
                    <Box
                        component="form"
                        sx={{ '& > :not(style)': { mt: 1, width: '100%', backgroundColor: '#331764' } }}
                        noValidate
                        autoComplete="off"
                    >
                        <TextField id="outlined-basic" label="Create new task" variant="outlined" value={input} onChange={(e) => setInput(e.target.value)} inputProps={{ style: { color: '#787878' } }}
                            InputLabelProps={{
                                style: { color: '#787878' }
                            }}
                            onKeyPress={handlepress}

                        />

                    </Box>




                    <div className='flex justify-between items-center mt-5 '>
                        <h1 className='text-3xl text-violet-400'>All</h1>
                        <button className='bg-slate-900 rounded-md p-3 text-white hover:bg-purple-950' onClick={handleDelete}>DELETE ALL</button>
                    </div>
                    {todos.length>0?
                    (  todos.map(todo=>(
                    <div className='bg-violet-700 rounded-md mt-5 p-2 text-slate-300 ' >
                     
                        <h1 className='text-xl'>{todo}</h1>
                        </div>
                    ))):
                    <div className='bg-violet-700 rounded-md mt-5 p-2 text-slate-300 ' ><h1 className='text-xl'>NO TODO</h1></div>  
                }
                </div>
            </div>
        </>
    )
}

export default Home

/* */