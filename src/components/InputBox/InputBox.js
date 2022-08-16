import React, { useState } from 'react';
import "./inputbox.scss";

function InputBox({addTodo}) {
  const [inputVal, setInputVal] = useState("");
  const handleSubmit = (e) =>{
    e.preventDefault();
    addTodo({
        id: new Date().valueOf(),
        task: inputVal,
        status: "active"
    })
    setInputVal("");
  }
  return (
    <>
      <form onSubmit={handleSubmit} style={{width: "100%"}}>
        <input className='user-input-box' type="text" value={inputVal} onChange={e => setInputVal(e.target.value)} />
      </form>
    </>
  )
}

export default InputBox