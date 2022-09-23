import { useState } from 'react';
import './App.css';
import getData from './getData';


function App() {
  const [ID, setID] = useState()
  const [data,setData] = useState([])
  const results = () => getData(ID).then(res => setData(res))

const handleChange = (e) => {
 setID(e.target.value)
}

  return (
    <div className="App">
      <input onChange={handleChange} type="number" placeholder="Bir Numara Giriniz" value={ID} />
      <button onClick={() => results()}>Getir</button>
      <div> User : {data?.user !== null ? JSON.stringify( data.user) : ""}

      </div>
      <div> Post : {data?.post !== null ? JSON.stringify(data.post) : ""}

</div>
    </div>
  );
}

export default App;






