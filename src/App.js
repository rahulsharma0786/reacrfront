import axios from "axios"

import { useState } from "react"
const App=()=>{
const[input,setInput]=useState({})


const Handleinput=(e)=>{
const name=e.target.name
const value=e.target.value

setInput(values=>({...values,[name]:value}))

}




const inputsave=()=>{
axios.post("https://constback.onrender.com/save",input).then(()=>{
    console.log("data save")
})
}

    return(
        <>
        
<div id="record">
<h1 style={{color:"red",paddingTop:"20px"}}>Student Records</h1>    
<label>RollNo</label>
<input type="text" name="rollno" value={input.rollno}  onChange={Handleinput} placeholder="Eneter RollNo"></input>
<label>Name</label>
<input type="text" name="name" value={input.name}  onChange={Handleinput} placeholder="Eneter Name"></input>
<label>City</label>
<input type="text" name="city" value={input.city} onChange={Handleinput} placeholder="Eneter City"></input>
<label>Fess</label>
<input type="text" name="fess" value={input.fess} onChange={Handleinput} placeholder="Eneter Fess"></input>


<button onClick={inputsave}>Submit</button>

</div>
  

        </>
    )
    
    }
    
    export default App


// import { useState } from "react"
// import axios from "axios"
// import Photocomp from "./Photocomp"
// import Photo from "./photography.jpg"
// import Like from "./like.png"
// const App=()=>{
// const [count,setCount]=useState(0)

// const add=()=>{
//     setCount(count+1)
//     axios.post("http://localhost:4000/save",count).then(()=>{
        
//     })
    
// }

//  return(
//         <>
    
//     <input type="number">{count}</input>
//     <img src={Like} style={{height:"50px", width:"50px"}} onClick={add}  />

        
//         </>
//     )
// }

// export default App