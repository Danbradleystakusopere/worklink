import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import JobForm from "./components/JobForm";
import JobList from "./components/JobList";
import JobDetails from "./components/JobDetails";
import ProposalForm from "./components/ProposalForm";

function App() {
  const [jobs, setJobs] = useState([]);
  const [selectedJob, setSelectedJob] = useState(null);

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
      headers: { "Content-Type": "application/json" },
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

  function handleCloseDetails() {
    setSelectedJob(null);
  }

  return (
    <Router>
      <div className="App">
        <NavBar />
        <h1>WorkLink - Remote Jobs Board</h1>

        <Routes>
          <Route
            path="/"
            element={
              <>
                <JobForm onAddJob={handleAddJob} />
                <JobList
                  jobs={jobs}
                  onDeleteJob={handleDeleteJob}
                  onEditJob={handleEditJob}
                  onViewClick={handleViewJob}
                />
                {selectedJob && (
                  <JobDetails job={selectedJob} onClose={handleCloseDetails} />
                )}
              </>
            }
          />
          <Route path="/proposals" element={<ProposalForm />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
