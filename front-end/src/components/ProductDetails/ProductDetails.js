import React from "react";

const ProductDetails = () => {
  const [product, setProduct] = useState({
    brand: "",
  });
  const API = process.env.REACT_APP_API_URL;

  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const productData = await axios.get(API + "/products/" + id);
      console.log(productData.data);
      setSnack(productData.data);
    };
    fetchData();
  }, []);

  const {brand} = product;
  return <div>
      
      ProductDetails


  </div>;
};

export default ProductDetails;
