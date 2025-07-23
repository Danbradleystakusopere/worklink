import { useState, useEffect } from "react";
import JobForm from "./components/JobForm";
import JobList from "./components/JobList";
import JobDetails from "./components/JobDetails"; // 👈 make sure this exists

function App() {
  const [jobs, setJobs] = useState([]);
  const [selectedJob, setSelectedJob] = useState(null); // 👈 new state

  useEffect(() => {
    fetch("http://localhost:3001/jobs")
      .then((res) => res.json())
      .then((data) => setJobs(data));
  }, []);

  function handleAddJob(newJob) {
    setJobs((prevJobs) => [...prevJobs, newJob]);
  }

  function handleDeleteJob(id) {
    fetch(`http://localhost:3001/jobs/${id}`, {
      method: "DELETE",
    }).then(() => {
      setJobs((prevJobs) => prevJobs.filter((job) => job.id !== id));
    });
  }

  function handleEditJob(updatedJob) {
    fetch(`http://localhost:3001/jobs/${updatedJob.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedJob),
    })
      .then((res) => res.json())
      .then((data) => {
        setJobs((prevJobs) =>
          prevJobs.map((job) => (job.id === data.id ? data : job))
        );
      });
  }

  function handleViewJob(job) {
    setSelectedJob(job);
  }

  return (
    <div className="App">
      <h1>WorkLink - Remote Jobs Board</h1>
      <JobForm onAddJob={handleAddJob} />
      <JobList
        jobs={jobs}
        onDeleteJob={handleDeleteJob}
        onEditJob={handleEditJob}
        onViewClick={handleViewJob} // ✅ pass this to fix the error
      />
      {selectedJob && (
        <JobDetails job={selectedJob} />
      )}
    </div>
  );
}

export default App;
