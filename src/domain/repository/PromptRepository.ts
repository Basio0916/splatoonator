import Prompt from "../Prompt";

interface PromptRepository {
  findAll(): Prompt[];
}

export default PromptRepository;
