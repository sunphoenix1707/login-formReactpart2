import React from 'react';
import { useState } from 'react';
function App() {
    const [fullName,setFullName]  = useState( {
          fname : '',
          lname : '',
    });

    function inputEvent(event) {
        console.log(event.target.value);
        const value= event.target.value;
        const name=event.target.name;
        setFullName((preValue) => {
            //this function can also access lname and fname
            if(name=== 'fName') {
                //then i just need to set value
             return {   fname: value,
                        lname: preValue.lname ,
             };
            } else if(name=== 'lName') {
                //then i just need to set value
             return {   fname: preValue.fname,
                        lname: value,
             };
            }
        });

    };
    function onSubmit(event) {
        event.preventDefault();
        alert('form Submitted');
    }

return(
<>

<div className="main_div">
    <form onSubmit={onSubmit}>
        <div> 
    <h1>Hello {fullName.fname} {fullName.lname} </h1>
    <input type='text' 
    placeholder='Enter your Name'
    name='fName'
     onChange={inputEvent}
     value={fullName.fname}
    />
    <br/>
    <input 
    type="text"
    placeholder="Enter Your Last Name"
    name='lName'
    onChange={inputEvent}
    value= {fullName.lname}
    />
    <button type='submit' >Submit Me</button>
    </div>
    </form>

</div>
</>
);
}
export default App;