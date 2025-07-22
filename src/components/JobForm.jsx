import { useState } from "react";

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
    <form onSubmit={handleSubmit}>
      <h2>Post a New Job</h2>
      <input
        type="text"
        placeholder="Job Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <br />
      <textarea
        placeholder="Job Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      ></textarea>
      <br />
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
      <br />
      <button type="submit">Post Job</button>
    </form>
  );
}

export default JobForm;
