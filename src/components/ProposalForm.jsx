import { useState } from "react";
import "./ProposalForm.css";

function ProposalForm({ jobId, onProposalSubmit }) {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    const newProposal = {
      jobId,
      name,
      message,
    };

    fetch("http://localhost:3001/proposals", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newProposal),
    })
      .then((res) => res.json())
      .then((data) => {
        onProposalSubmit(data);
        setName("");
        setMessage("");
      });
  }

  return (
    <form className="proposal-form" onSubmit={handleSubmit}>
      <h3>Submit a Proposal</h3>
      <input
        type="text"
        placeholder="Your Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <br />
      <textarea
        placeholder="Your Message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        required
      />
      <br />
      <button type="submit">Send Proposal</button>
    </form>
  );
}

export default ProposalForm;
