import React from 'react';

const BirthdayCake = (props) => {

     return (
    <div className='row'>
    { props.Data.map( (ele) => {
        return (
        <div key={ele.id}  style={{margin: "30px"}}>
                 <img src={`http://127.0.0.1:8000/${ele.imgUrl}`}></img>
      
                    
                 
                 
                <span>{ele.name}</span> <br/>
                <span>{ele.price}</span> <br></br>
        </div>
        )
        }
    )}
    </div>
  );
};

export default BirthdayCake;
