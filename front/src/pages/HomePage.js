import React, { useEffect, useState } from 'react';
import api from '../services/api';

function HomePage() {
  const [data, setData] = useState(null);

  useEffect(()=> {
    const fetchData = async ()=>{
      try {
        const response = await api.get('/api/products');
        setData(response.data);
      } catch(error){
        console.error('error al buscar datos:' ,error);
      }
    };
    fetchData();
  }, []);
  
  return (
  <div>
    <h1>Welcome to the Inventory Management System</h1>
    {data && <pre>{JSON.stringify(data, null, 2)}</pre>}
  </div>
  );
}

export default HomePage;