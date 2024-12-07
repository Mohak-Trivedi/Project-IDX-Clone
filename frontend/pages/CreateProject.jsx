import { useCreateProject } from "../hooks/apis/mutations/useCreateProject";
import { Button, Row, Col, Flex } from "antd";

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
    <Row>
      <Col span={24}>
        <Flex justify="center">
          <Button type="primary" onClick={handleCreateProject}>
            Create Playground
          </Button>
        </Flex>
      </Col>
    </Row>
  );
};
