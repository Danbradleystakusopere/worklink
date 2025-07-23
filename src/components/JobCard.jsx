import "./JobCard.css";

function JobCard({ job, onDeleteJob, onEditClick }) {
  return (
    <div className="job-card">
      <h3>{job.title}</h3>
      <p>{job.description}</p>
      <small>Category: {job.category}</small>
      <br />
      <button onClick={() => onEditClick(job)}>Edit</button>
      <button onClick={() => onDeleteJob(job.id)}>Delete</button>
    </div>
  );
}

export default JobCard;
