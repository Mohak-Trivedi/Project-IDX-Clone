import { useCreateProject } from "../hooks/apis/mutations/useCreateProject";

export const CreateProject = () => {
  const { createProjectMutation, isPending } = useCreateProject();

  async function handleCreateProject() {
    console.log("Going to trigger the API ");

    try {
      await createProjectMutation();
      console.log("Now we should redirect to the editor");
    } catch (error) {
      console.log("Error creating the project", error);
    }
  }

  return (
    <div>
      {isPending && <p>Creating Project...</p>}
      <h1>Create Project</h1>
      <button onClick={handleCreateProject}>Create Project</button>
    </div>
  );
};
