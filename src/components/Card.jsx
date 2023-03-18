import React from 'react'

function Card() {
  return (
    <div>
       <div className="card mt-3" style={{"width": "18rem" , "maxHeight" :"360px"}}>
  <img className="card-img-top" src="..." alt="Card image cap"/>
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <div className='container w-100'> 
     <select className=' h-100 m-2 bg-success'>
        {
          Array.from(Array(6) , (e,i)=>{
            return(
              <option key={i+1} value={i+10}> {i} </option>
            )
          })
        }
     </select>
     <select className='h-100 m-2 bg-success'>
      <option value={"half"}>half</option>
      <option value={"full"}>full</option>
      </select>
      <div className='d-inline'>Total price</div>
    </div>
  </div>
</div>
    </div>
  )
}

export default Card
