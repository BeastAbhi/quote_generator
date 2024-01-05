import React, { useEffect, useState } from "react";
import data from '../quotes.json'
function Quote(props) {
    const [quote, setQuote] = useState([])
    const handleClick = () =>{
        props.changeColour()
        let num = Math.floor(Math.random() * data.quotes.length)
        setQuote([data.quotes[num].quote, data.quotes[num].author])
    }
    useEffect(() => {
    handleClick()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    
  return (
    <div>
      <div className="card text-center"style={{backgroundColor:"rgba(252, 252, 252, 0)",boxShadow:"rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",border:"none"}}>
        <div className="card-body">
          <h5 className="card-title">{quote[0]}</h5>
          <p className="card-text">
            - by {quote[1]}
          </p>
          <button type="button" className="btn btn-dark" onClick={handleClick}>Next Quote</button>
        </div>
      </div>
    </div>
  );
}

export default Quote;
