import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Dashboard = () => {
  const [dashboardData, setDashboardData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/dashboard');
      setDashboardData(response.data);
      console.log(response.data);
    } catch (error) {
      console.error('Error fetching data: ', error);
    }
  };

  return (
    <div>
      <h1>Dashboard</h1>
      <ul>
        {dashboardData.map(item => (
          <li key={item._id}>
            Intensity: {item.intensity}, Likelihood: {item.likelihood}, Relevance: {item.relevance}, Year: {item.year}, Country: {item.country}, Topics: {item.topics}, Region: {item.region}, City: {item.city}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dashboard;
