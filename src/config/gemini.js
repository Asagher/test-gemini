// const apiKey="AIzaSyDRkSx0hMv2V82Pv8gvbK0dCA41KJ72Z9s"
const {
    GoogleGenerativeAI,
    HarmCategory,
    HarmBlockThreshold,
  } = require("@google/generative-ai");
  
  const apiKey ="AIzaSyDRkSx0hMv2V82Pv8gvbK0dCA41KJ72Z9s" ;
  const genAI = new GoogleGenerativeAI(apiKey);
  
  const model = genAI.getGenerativeModel({
    model: "gemini-1.5-flash",
  });
  
  const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 40,
    maxOutputTokens: 8192,
    responseMimeType: "text/plain",
  };
  
  async function run(prompt) {
    const chatSession = model.startChat({
      generationConfig,
      history: [
      ],
    });
  
    const result = await chatSession.sendMessage(prompt);
    console.log(result.response.text());
    return result.response.text()
  }
  
  export default run;