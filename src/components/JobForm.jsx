import { useState } from "react";
import "./JobForm.css"; // Import your CSS file


function JobForm({ onAddJob }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    const newJob = { title, description, category };

    fetch("http://localhost:3001/jobs", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newJob),
    })
      .then((res) => res.json())
      .then((data) => {
        onAddJob(data);
        setTitle("");
        setDescription("");
        setCategory("");
      });
  }

  return (
    <div className="job-form">
      <h2>Post a New Job</h2>
      <form onSubmit={handleSubmit}>
        <label>Job Title</label>
        <input
          type="text"
          placeholder="Enter job title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />

        <label>Job Description</label>
        <textarea
          placeholder="Enter job description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        ></textarea>

        <label>Category</label>
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          required
        >
          <option value="">Select Category</option>
          <option value="Web Development">Web Development</option>
          <option value="Design">Design</option>
          <option value="Writing">Writing</option>
          <option value="Marketing">Marketing</option>
        </select>

        <button type="submit">Post Job</button>
      </form>
    </div>
  );
}

export default JobForm;
