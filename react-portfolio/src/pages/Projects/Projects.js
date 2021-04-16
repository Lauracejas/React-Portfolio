import React from "react";
import Card from "../../components/Card/Card";
import projects from "../../ContentProject.json"

function Projects() {

    return (
        <div className="Hero">
        <Card
          title={projects[0].title}
          picture={projects[0].picture}
          description={projects[0].description}
          deployUrl={projects[0].deployUrl}
          gitRepoUrl={projects[0].gitRepoUrl}
        />
        <Card
          title={projects[1].title}
          picture={projects[1].picture}
          description={projects[1].description}
          deployUrl={projects[1].deployUrl}
          gitRepoUrl={projects[1].gitRepoUrl}
        />
        <Card
          title={projects[2].title}
          picture={projects[2].picture}
          description={projects[2].description}
          deployUrl={projects[2].deployUrl}
          gitRepoUrl={projects[2].gitRepoUrl}
        />
        <Card
          title={projects[3].title}
          picture={projects[3].picture}
          description={projects[3].description}
          deployUrl={projects[3].deployUrl}
          gitRepoUrl={projects[3].gitRepoUrl}
        />
        <Card
          title={projects[4].title}
          picture={projects[4].picture}
          description={projects[4].description}
          deployUrl={projects[4].deployUrl}
          gitRepoUrl={projects[4].gitRepoUrl}
        />
        <Card
          title={projects[5].title}
          picture={projects[5].picture}
          description={projects[5].description}
          deployUrl={projects[5].deployUrl}
          gitRepoUrl={projects[5].gitRepoUrl}
        />
            
       
      </div>

    )
}

export default Projects;