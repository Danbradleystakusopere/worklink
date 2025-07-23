import React from "react";
import "./JobDetails.css";
import ProposalForm from "./ProposalForm";
import ProposalList from "./ProposalList";

function JobDetails({ job, onClose }) {
  if (!job) return null;

  return (
    <div className="job-details">
      <button className="close-button" onClick={onClose}>Close</button>
      <h2>Job Details</h2>
      <h3>{job.title}</h3>
      <p><strong>Description:</strong> {job.description}</p>
      <p><strong>Category:</strong> {job.category}</p>

      <ProposalForm jobId={job.id} />
      <ProposalList jobId={job.id} />
    </div>
  );
}

export default JobDetails;
