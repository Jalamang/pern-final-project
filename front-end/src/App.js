import axios from "axios";
import { useState, useEffect } from "react";
const API = process.env.REACT_APP_API_URL;


function App() {
  const [days, setDays] = useState([]);
  useEffect(() => {
    axios
      .get(`${API}/test`)
      .then(
        (response) => {
          setDays(response.data);
        },
        (error) => console.log("get", error)
      )
      .catch((c) => console.warn("catch", c));
  }, []);
  console.log(days);
  return (
    <div>
      Front End!
      {/* <ul>
        {days.map((day) => (
          <li key={day.name}>{day.name}</li>
        ))}
      </ul> */}
    </div>
  );
}

export default App;
