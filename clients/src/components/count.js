import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import { counter } from '@fortawesome/fontawesome-svg-core';

const App = () => {
  const [rowCount, setRowCount] = useState(0);

  useEffect(() => {
    Axios.get('http://127.0.0.1:3001/api/rowCount')
      .then((response) => {
        setRowCount(response.data.rowCount);
      })
      .catch((error) => {
        console.error('Error fetching row count:', error);
      });
  }, []);

  return (
    <div>
      {rowCount}
    </div>
  );
};

export default App;
