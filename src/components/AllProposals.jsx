
import { useEffect, useState } from "react";
import "./ProposalList.css";

function AllProposals() {
  const [proposals, setProposals] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/proposals")
      .then((res) => res.json())
      .then((data) => setProposals(data));
  }, []);

  function handleDeleteProposal(id) {
    fetch(`http://localhost:3001/proposals/${id}`, {
      method: "DELETE",
    }).then(() => {
      setProposals((prev) => prev.filter((p) => p.id !== id));
    });
  }

  return (
    <div className="proposal-list">
      <h2>All Submitted Proposals</h2>
      {proposals.length === 0 ? (
        <p>No proposals found.</p>
      ) : (
        <ul>
          {proposals.map((proposal) => (
            <li key={proposal.id}>
              <strong>{proposal.name}</strong> ({proposal.jobId}):{" "}
              {proposal.message}
              <button
                onClick={() => handleDeleteProposal(proposal.id)}
                style={{ marginLeft: "10px", color: "red" }}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default AllProposals;
