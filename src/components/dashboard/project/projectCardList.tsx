import { projectCardType } from "@/types";
import ProjectsCard from "./projectsCard";
const ProjectsCardList = ({
  projectData,
}: {
  projectData: projectCardType[];
}) => {
  if (!projectData.length) return <div>No project data available</div>;
  return (
    <div>
      <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {projectData.map((data, index) => (
          <ProjectsCard key={index} appData={data} />
        ))}
      </div>
    </div>
  );
};

export default ProjectsCardList;
