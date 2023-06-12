import logo from "./logo.svg";
import { useEffect, useState } from "react";

import "./App.css";


function App() {
  const [concrete, setConcrete] = useState();
  const concreteChange = (event) => {
    setConcrete(event.target.value);
  };
  const [concretes, setConcretes] = useState([]);
  const concreteSubmit = (event) => {
    event.preventDefault();
    setConcretes((currentArray) => [concrete, ...currentArray]);
    setConcrete("");
  };
  const concretesParsed = concretes.map((item) => parseFloat(item));
  const concreteSum = concretesParsed.reduce((a, b) => a + b, 0);

  const [asphalt, setAsphalt] = useState();
  const asphaltChange = (event) => {
    setAsphalt(event.target.value);
  };
  const [asphalts, setAsphalts] = useState([]);
  const asphaltSubmit = (event) => {
    event.preventDefault();
    setAsphalts((currentArray) => [asphalt, ...currentArray]);
    setAsphalt("");
  };
  const asphaltsParsed = asphalts.map((item) => parseFloat(item));
  const asphaltSum = asphaltsParsed.reduce((a, b) => a + b, 0);
  const onClick = ()=> {return(setAsphalts([]), setConcretes([])  )}
  return (
    <div style={{
	width: 350, 
	height: 350,
	paddingTop: 20,
	marginTop: 20, 
	marginLeft:'auto', 
	marginRight:'auto', 
	display:'flex', 
	flexDirection:'Column', 
	justifyContents:'center',
	alignItems:'center',

	border:'4px solid #fad985',
	borderRadius: 15,
    }}>
      <h1 style={{marginBottom: 0, borderBottom:'1px solid black'}}>건설폐기물 계산기</h1>
      <hr />
      <div id="container">
        <div style={{marginBottom: 30, textAlign:'center',}}>
            <h2>폐콘크리트 : ({concreteSum})</h2>
            <h2>폐아스콘 : ({asphaltSum})</h2>
        </div>
        <form onSubmit={concreteSubmit}>
          <input
            onChange={concreteChange}
            value={concrete}
            type="number"
            placeholder="폐콘크리트"
	step="0.01"
	required
          />
        </form>
        <form onSubmit={asphaltSubmit}>
          <input
            onChange={asphaltChange}
            value={asphalt}
            type="number"
	step="0.01"
            placeholder="폐아스콘"
	required
          />
        </form>
      </div>
      <button onClick={onClick}><a href="#">RESET</a></button>
    </div>
  );
}

export default App;
