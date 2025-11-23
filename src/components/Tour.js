// import React,{useState} from "react";

// function Tour({id, name, info, image,price, removeTour}){
//     const [readMore, setReadMore]=useState(false);

//     return(
//         <article className="single-tour">
//             <img src={image} alt={name}/>

//       <footer>
//         <div className="tour-Info">
//             <h4>{name}</h4>
//             <h4 className="tour-price">${price}</h4>
//         </div>

//      <p>
//         {readMore ? info :`${info.substring(0,200)}...`}
//         <button onClick={()=>setReadMore(!readMore)}
//         style={{color:'blue', border:'none', background:'none'}}>
//             {readMore ? "Show less" : "Read more"}
//         </button>
//      </p>

//      <button className="delete-btn" onClick={()=>removeTour(id)}>
//         Not Interested
//      </button>

//       </footer>

//         </article>
//     )
// }


// export default Tour;



import React, { useState } from "react";

function Tour({ id, name, info, image, price, removeTour }) {
  const [readMore, setReadMore] = useState(false);

  const description = readMore ? info : info.substring(0, 200) + "...";

  return (
    <div className="tour-card">
      <img src={image} alt={name} />

      <div className="tour-info">
        <h2>{name}</h2>
        <h3>₹ {price}</h3>

        <p>
          {description}
          <button
            className="read-btn"
            onClick={() => setReadMore(!readMore)}
          >
            {readMore ? " Show Less" : " Read More"}
          </button>
        </p>

        <button className="remove-btn" onClick={() => removeTour(id)}>
          Not Interested
        </button>
      </div>
    </div>
  );
}

export default Tour;