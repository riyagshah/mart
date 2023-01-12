
import React, { useEffect, useState } from 'react'
import './Body.css'
import  axios from 'axios'
const Classes = () => {

    const [first, setfirst] = useState([])
    useEffect(() => {

      
        axios.get("http://localhost:8080/data").then((r)=>setfirst(r.data))

      
    
    }, [])

  return (
  <>
  <div className='appp'>
  <div className='purplebox'>
<img className='imageset' src="\Capture.PNG" alt="" />
</div>
<div className='main'>
  <div className='filter'>
    <div className='white1'>
    <h2 className='hfilter'>Filters</h2>

    </div>
  <div>
  <p className='filname'>Sort By</p>
    <div className='divn'>
    <p className='filnext'>Latest</p>
    <p className='filnext'>Price :Low to High</p>
    <p className='filnext'>Price :High to Low</p>
    <p className='filnext'>Rating:Low to High</p>
    <p className='filnext'>Rating:High to low</p>
    </div>

  </div>

  <div className='radioo'>
    <p className='filname'>Category</p>
    <input type="radio" />
    <label className='' >Garden</label>
    <input type="radio" />

    <label className=''>Garden</label>
  </div>
  </div>
<div className='container'>
 {
    first.map((ele)=>{
   
        return(
            <div key={ele.ID} className="cont2">
           <img className="img1" src={ele.ImageUrl} alt="Image" />
            <h5 className='name'>Easy Gardening</h5>
            <p className='des'>FlowerShop 230</p>
            <p className='star'><span>&#11088;</span><span>&#11088;</span>
            <span>&#11088;</span>

</p>
            <p className='mrp'>M.R.P </p>
            <p className='strike'>Rs.272.00</p>
            <p className='original'>Rs. 200.00</p>
           
            <button className='add'>Add</button>
      
       
               </div>
        )
        
       
    })
  }
 </div>

<div className='lastbox'>
<div className='lastfirst'>
<p className='name'>Shops Nearby</p>
<img className ='bag' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLNvIBkyNNlTSk9JLRyity9C1BD3DOa05YqQ&usqp=CAU" alt="" />
<div>
<p className='flower' >Flowership</p>
<p className='ghi' >Deyali Ashram</p>
<p  className='ghi'>Marg b-3</p> 
</div>

</div>


</div>
</div>

  </div>

  </>
  )
}

export default Classes