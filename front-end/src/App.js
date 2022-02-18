import axios from "axios";
import { useState, useEffect } from "react";
const API = process.env.REACT_APP_API_URL;

function App() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios
      .get(`${API}/products`)
      .then(
        (response) => {
          setProducts(response.data.payload);
        },
        (error) => console.log("get", error)
      )
      .catch((c) => console.warn("catch", c));
  }, []);
 console.log(products)
  return (
    <div>
      Front End!
    </div>
  );
}

export default App;
