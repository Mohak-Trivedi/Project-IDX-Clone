import { promisify } from "node:util";
import child_process from "node:child_process";
import fs from "fs/promises";
import uuid4 from "uuid4";
import { REACT_PROJECT_COMMAND } from "../../config/serverConfig.js";

const execPromisified = promisify(child_process.exec);

export const createProjectController = async (req, res) => {
  // Create a unique id for each project and create a new folder with this id as
  // the folder name.
  const projectId = uuid4();
  console.log("New project id is: ", projectId);

  await fs.mkdir(`./projects/${projectId}`);

  // In the created project folder, create a vite react project
  const response = await execPromisified(REACT_PROJECT_COMMAND, {
    cwd: `./projects/${projectId}`,
  });

  return res.json({
    message: "Project created",
    data: projectId,
  });
};
