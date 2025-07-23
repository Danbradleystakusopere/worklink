import { useEffect, useState } from "react";
import "./ProposalList.css";

function ProposalList({ jobId }) {
  const [proposals, setProposals] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:3001/proposals?jobId=${jobId}`)
      .then((res) => res.json())
      .then((data) => setProposals(data));
  }, [jobId]);

  // 🧹 Delete function
  function handleDeleteProposal(id) {
    fetch(`http://localhost:3001/proposals/${id}`, {
      method: "DELETE",
    }).then(() => {
      // remove from UI
      setProposals((prev) => prev.filter((p) => p.id !== id));
    });
  }

  return (
    <div className="proposal-list">
      <h3>Submitted Proposals</h3>
      {proposals.length === 0 ? (
        <p>No proposals yet.</p>
      ) : (
        <ul>
          {proposals.map((proposal) => (
            <li key={proposal.id}>
              <strong>{proposal.name}:</strong> {proposal.message}
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

export default ProposalList;
