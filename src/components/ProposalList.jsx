import { useEffect, useState } from "react";
import "./ProposalList.css";

function ProposalList({ jobId }) {
  const [proposals, setProposals] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:3001/proposals?jobId=${jobId}`)
      .then((res) => res.json())
      .then((data) => setProposals(data));
  }, [jobId]);

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
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default ProposalList;
