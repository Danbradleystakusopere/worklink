
import { useEffect, useState } from "react";
import "./JobList.css";


function JobList() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/jobs")
      .then((res) => res.json())
      .then((data) => setJobs(data));
  }, []);

  return (
    <div className="job-list">
      <h2>Available Jobs</h2>
      {jobs.map((job) => (
        <div className="job-card" key={job.id}>
          <h3>{job.title}</h3>
          <p>{job.description}</p>
          <small>Category: {job.category}</small>
        </div>
      ))}
    </div>
  );
}

export default JobList;
