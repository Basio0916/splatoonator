import Prompt from "../../../domain/Prompt";
import PromptRepository from "../../../domain/repository/PromptRepository";
import prompts from "../../../../resource/data/Prompts.json";

class JsonPromptRepository implements PromptRepository {
  findAll(): Prompt[] {
    return prompts.map((prompt) => ({
      prompts: [prompt.prompt1, prompt.prompt2, prompt.prompt3],
      isNumeric: prompt.isNumeric === "TRUE",
      isComparable: prompt.isComparable === "TRUE",
      unit: prompt.unit,
      questionName: prompt.questionName,
    }));
  }
}

export default JsonPromptRepository;
