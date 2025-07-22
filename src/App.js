import { useState, useEffect } from "react";
import JobForm from "./components/JobForm";
import JobList from "./components/JobList";

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
      <JobList jobs={jobs} /> {/* ✅ This fixes the warning */}
    </div>
  );
}

export default App;
