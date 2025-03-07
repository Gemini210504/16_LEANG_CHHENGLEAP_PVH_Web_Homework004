import "./App.css";
import SidebarComponent from "./components/SidebarComponent";
import TopNavbarComponent from "./components/TopNavbarComponent";
import DashboardComponent from "./components/DashboardComponent";
import LearningMaterialsComponent from "./components/LearningMaterialsComponent";
import AssignmentsComponent from "./components/AssignmentsComponent";
import AddNewProjectComponent from "./components/AddNewProjectComponent";
import CardComponent from "./components/CardComponent";
import { useState } from "react";

// Homework have done

function App() {
 
  const [searched, setSearch] = useState(""); 
  const [projects, setProjects] = useState([]);

  const handlerSearchProject = (searchProject) => {
    setSearch(searchProject.toLowerCase());
    console.log("Project has been search : ", searchProject);
  };
 const searchedProject = projects.filter((project) =>
    project.projectName.toLowerCase().includes(searched)
  );


  const handleAddNewProject = (newProject) => {
    setProjects((prevProjects) => [...prevProjects, newProject]);
    console.log("New Project Added:", newProject);
  };


  return (
    <div className="grid grid-cols-10 grid-rows-[60px_1fr] min-h-screen w-full bg-[#F5F7F8]">
      <aside className="col-span-2 row-span-2">
        <SidebarComponent />
      </aside>

      <header className="col-span-8 p-4">
        <TopNavbarComponent handlerSearchProject={handlerSearchProject} />
      </header>

      <div className="col-span-8 flex gap-4 p-4">
        <main className="w-3/4 flex flex-col gap-4 p-4 ">
          <DashboardComponent />
          <div className="flex justify-between gap-4">
            <AssignmentsComponent className="flex-1" />
            <AddNewProjectComponent handleAddNewProject={handleAddNewProject} />
          </div>
          <div className="grid grid-cols-3 gap-5 overflow-auto h-[55vh]">
            {searchedProject.map((project, index) => (
              <CardComponent key={index} project={project} />
            ))}
          </div>
        </main>

        <aside className="w-1/4 py-4">
          <LearningMaterialsComponent />
        </aside>
      </div>
    </div>
  );
}

export default App;
