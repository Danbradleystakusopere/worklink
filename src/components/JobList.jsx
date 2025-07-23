import { useState } from "react";
import "./JobList.css";

function JobList({ jobs, onDeleteJob, onEditJob }) {
  const [editingJobId, setEditingJobId] = useState(null);
  const [editedData, setEditedData] = useState({
    title: "",
    description: "",
    category: "",
  });

  function handleEditClick(job) {
    setEditingJobId(job.id);
    setEditedData({
      title: job.title,
      description: job.description,
      category: job.category,
    });
  }

  function handleSaveClick(id) {
    const updatedJob = { id, ...editedData };
    onEditJob(updatedJob);
    setEditingJobId(null);
  }

  return (
    <div className="job-list">
      <h2>Available Jobs</h2>
      {jobs.map((job) => (
        <div className="job-card" key={job.id}>
          {editingJobId === job.id ? (
            <>
              <input
                value={editedData.title}
                onChange={(e) =>
                  setEditedData({ ...editedData, title: e.target.value })
                }
              />
              <textarea
                value={editedData.description}
                onChange={(e) =>
                  setEditedData({ ...editedData, description: e.target.value })
                }
              />
              <input
                value={editedData.category}
                onChange={(e) =>
                  setEditedData({ ...editedData, category: e.target.value })
                }
              />
              <button onClick={() => handleSaveClick(job.id)}>Save</button>
              <button onClick={() => setEditingJobId(null)}>Cancel</button>
            </>
          ) : (
            <>
              <h3>{job.title}</h3>
              <p>{job.description}</p>
              <small>Category: {job.category}</small>
              <br />
              <button onClick={() => handleEditClick(job)}>Edit</button>
              <button onClick={() => onDeleteJob(job.id)}>Delete</button>
            </>
          )}
        </div>
      ))}
    </div>
  );
}

export default JobList;
