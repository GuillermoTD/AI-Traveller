
import {
    GoogleGenAI,
  } from '@google/genai';
  
  async function AIModel(prompt:string) {
    const ai = new GoogleGenAI({
      apiKey: 'AIzaSyBVLx-1jfM9Pjh35se2VZatNjDDHdAPwSs',
    });
    const config = {
      thinkingConfig: {
        thinkingBudget: -1,
      },
      responseMimeType: 'text/plain',
    };
    const model = 'gemini-2.5-pro';
    const contents = [
      {
        role: 'user',
        parts: [
          {
            text: prompt,
          },
        ],
      },
    ];
  
    const response = await ai.models.generateContentStream({
      model,
      config,
      contents,
    });
    let fileIndex = 0;
    for await (const chunk of response) {
      console.log(chunk.text);
    }

    console.log( response)
  }
  
  export default AIModel;
  