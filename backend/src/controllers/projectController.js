import { promisify } from "node:util";
import child_process from "node:child_process";

const execPromisified = promisify(child_process.exec);

export const createProjectController = async (req, res) => {
  const { stdout, stderr } = await execPromisified("ls");
  console.log("stdout:", stdout);
  console.error("stderr:", stderr);

  return res.json({
    message: "Project created",
  });
};
