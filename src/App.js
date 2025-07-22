import { useState, useEffect } from "react";
import JobForm from "./components/JobForm";

function App() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/jobs")
      .then((res) => res.json())
      .then((data) => setJobs(data));
  }, []);

  function handleAddJob(newJob) {
    setJobs((prevJobs) => [...prevJobs, newJob]);
  }

  return (
    <div className="App">
      <h1>WorkLink - Remote Jobs Board</h1>
      <JobForm onAddJob={handleAddJob} />
      <ul>
        {jobs.map((job) => (
          <li key={job.id}>
            <h3>{job.title}</h3>
            <p>{job.description}</p>
            <small>{job.category}</small>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
