import { useEffect, useState } from 'react';
import Papa from 'papaparse';
import Header from './components/Header';
import Summary from './components/Summary';
import Charts from './components/Charts';
import './App.css';

function App() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    Papa.parse(`${process.env.PUBLIC_URL}/Electric_Vehicle_Population_Data.csv`, {
      download: true,
      header: true,
      complete: (result) => {
        const validData = result.data.filter(row => row.Make && row.Model);
        console.log('Parsed Data:', validData);
        setData(validData); 
        setIsLoading(false); 
      },
      error: (error) => console.error('Error parsing CSV:', error), 
    });
  }, []);

  return (
    <div className="App">
      {isLoading ? (
        <p>Loading data...</p>
      ) : (
        <>
          <Header />
          <Summary data={data} />
          <Charts data={data} />
        </>
      )}
    </div>
  );
}

export default App;
