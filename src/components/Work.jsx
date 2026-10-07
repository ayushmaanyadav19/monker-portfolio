import projects from "../data/projects";

function Work() {
  return (
    <section className="work" id="work">
      <div className="section-heading">
        <p className="eyebrow">SELECTED WORK</p>
        <h2>Things I've edited.</h2>
      </div>

      <div className="work-grid">
        {projects.map((project) => (
          <article
            key={project.id}
            className={
              project.featured ? "project project-featured" : "project"
            }
          >
            <div className="video-wrapper">
              <video
                src={project.video}
                controls
                playsInline
                preload="metadata"
              />
            </div>

            <div className="project-info">
              <h3>{project.title}</h3>

              <p>{project.description}</p>

              <div className="tags">
                {project.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Work;