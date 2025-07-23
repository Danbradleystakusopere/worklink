import React from "react";
import "./JobDetails.css"; // Optional, for styling

function JobDetails({ job }) {
  if (!job) return null;

  return (
    <div className="job-details">
      <h2>Job Details</h2>
      <h3>{job.title}</h3>
      <p><strong>Description:</strong> {job.description}</p>
      <p><strong>Category:</strong> {job.category}</p>
    </div>
  );
}

export default JobDetails;
