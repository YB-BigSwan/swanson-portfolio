function ProjectCard(ProjectImage, AltText, ProjectDescription) {
  return (
    <>
      <div className="card-container">
        <img src={ProjectImage} alt={AltText} className="project-image" />
        <p className="project-description">{ProjectDescription}</p>
      </div>
    </>
  );
}

export default ProjectCard;
