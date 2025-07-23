import React, { useState } from "react";
import "./JobDetails.css";
import ProposalForm from "./ProposalForm";
import ProposalList from "./ProposalList";

function JobDetails({ job, onClose }) {
  const [toast, setToast] = useState(""); 

  if (!job) return null;

  function handleProposalSubmit(newProposal) {
    console.log("Proposal submitted:", newProposal);
    setToast("✅ Proposal sent!");
    setTimeout(() => setToast(""), 3000); 
  }

  return (
    <div className="job-details">
      <button className="close-button" onClick={onClose}>Close</button>
      <h2>Job Details</h2>
      <h3>{job.title}</h3>
      <p><strong>Description:</strong> {job.description}</p>
      <p><strong>Category:</strong> {job.category}</p>

      {toast && <div className="toast">{toast}</div>} {}
      
      <ProposalForm jobId={job.id} onProposalSubmit={handleProposalSubmit} />
      <ProposalList jobId={job.id} />
    </div>
  );
}

export default JobDetails;
