import React from 'react';
import '../App.css';

const ResultPage = ({ result }) => {
  console.log(result.result,"==================>result")
  return (
    <div className="result-page">
      <h2 className="center-text">Result</h2>
      {result.success ? (<>
      
        <div className='capture-flex'>
        <div className="success">
            
          <p>Capture successful! by <strong >{result.result[0].name}</strong></p>
          <img src={result.result[0].image} alt={result.result[0].name} className="cop-image" />
          
        </div>
        <div className="success">
            
          <p>Capture location <strong >{result.result[2].name}</strong></p>
          <img style={{ height: '20.5vh' }} src={result.result[2].image} alt={result.result[2].name} className="cop-image" />
          
        </div>
        <div className="success">
            
          <p>vehicle used to capture <strong >{result.result[1].kind}</strong></p>
          <img src={result.result[1].image} alt={result.result[1].name} className="cop-image" />
          
        </div>
        </div>
        <div className="fugitive-image">
         <p> <strong>Fugitive</strong></p>
          <img style={{ width: '100%' }} src="https://i.ibb.co/4T9jX0s/8.jpg" alt="Fugitive" />
        </div>
        </>
      ) : (
        <p className="failure">Capture failed. The fugitive remains at large.</p>
      )}
    </div>
  );
}

export default ResultPage;
