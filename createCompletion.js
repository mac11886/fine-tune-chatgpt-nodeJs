/* createCompletion.js */
import { openai } from "./api.js";

async function createCompletion() {
  try {
    const response = await openai.createCompletion({
      model: "davinci:ft-personal-2023-05-09-10-54-05",
      prompt: "Lens Protocol",
      max_tokens: 200,
    });
    if (response.data) {
      console.log("choices: ", response.data.choices);
    }
  } catch (err) {
    console.log("err: ", err);
  }
}

createCompletion();
