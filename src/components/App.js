import React, { useState, useEffect } from "react";
import Loading from "./Loading";
import Tours from "./Tours";
import "regenerator-runtime/runtime";


 const url =  "https://api.allorigins.win/raw?url=https://course-api.com/react-tours-project";

;

function App() {
  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState([]);

  const fetchTours = async () => {
    setLoading(true);
    try {
      const response = await fetch(url);
      const data = await response.json();
      setTours(data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    fetchTours();
  }, []);

  const removeTour = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  };

  if (loading) {
    return <Loading />;
  }

  if (tours.length === 0) {
    return (
      <main style={{ textAlign: "center", marginTop: "50px" }}>
        <h2>No Tours Left</h2>
        <button onClick={fetchTours} className="refresh-btn">
          Refresh
        </button>
      </main>
    );
  }

  return (
    <main>
      <h1 style={{ textAlign: "center" }}>Our Tours</h1>
      <Tours tours={tours} removeTour={removeTour} />
    </main>
  );
}

export default App;