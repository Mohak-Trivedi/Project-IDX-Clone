import fs from "fs/promises";
import uuid4 from "uuid4";
import { REACT_PROJECT_COMMAND } from "../config/serverConfig.js";
import { execPromisified } from "../utils/execUtility.js";
import path from "path";
import directoryTree from "directory-tree";

export const createProjectService = async () => {
  // Create a unique id for each project and create a new folder with this id as
  // the folder name.
  const projectId = uuid4();
  console.log("New project id is: ", projectId);

  await fs.mkdir(`./projects/${projectId}`);

  // In the created project folder, create a vite react project
  const response = await execPromisified(REACT_PROJECT_COMMAND, {
    cwd: `./projects/${projectId}`,
  });

  return projectId;
};

export const getProjectTreeService = async (projectId) => {
  const projectPath = path.resolve(`./projects/${projectId}`);

  const tree = directoryTree(projectPath);

  return tree;
};
