import { GoogleGenAI } from '@google/genai';

async function AIModel(prompt: string) {
  const ai = new GoogleGenAI({
    apiKey: 'AIzaSyBVLx-1jfM9Pjh35se2VZatNjDDHdAPwSs',
  });

  // Nota: Verificamos el modelo nuevamente. Si 'gemini-2.5-pro' no es oficial, 
  // es probable que tengas problemas. Usa 'gemini-1.5-pro' si es posible.
  const model = 'gemini-2.5-pro'; 

  try {
    const result = await ai.models.generateContent({
      model,
      contents: [
        {
          role: 'user',
          parts: [{ text: prompt }],
        },
      ],
    });

    // 1. Acceso seguro a 'candidates' y al primer candidato
    // Utilizamos '?.', si candidates es null o undefined, el valor será undefined.
    const firstCandidate = result.candidates?.[0];

    // 2. Verificación y extracción del contenido
    // Si no hay candidatos o el candidato no tiene contenido o partes:
    if (!firstCandidate || !firstCandidate.content?.parts) {
      console.warn("No se recibió contenido válido de Gemini.");
      return undefined;
    }

    // 3. Extraer el texto completo de forma segura
    // Usamos ?. para acceder a las partes, aunque ya verificamos su existencia arriba
    const fullText = firstCandidate.content.parts.map(p => p.text).join('');
    
    // --- Lógica para extraer y parsear JSON ---
    let jsonString = fullText;

    // Intentar encontrar un bloque de código JSON en Markdown (```json...```)
    const jsonMatch = fullText.match(/```json\s*([\s\S]*?)\s*```/);
    
    if (jsonMatch && jsonMatch[1]) {
      jsonString = jsonMatch[1]; 
    }

    // Intentar parsear el JSON
    try {
      const parsedJson = JSON.parse(jsonString);
      console.log("JSON extraído y parseado:", parsedJson);
      return parsedJson; 
    } catch (parseError) {
      console.warn("No se pudo parsear el contenido como JSON válido.");
      console.warn("Contenido recibido:", fullText);
      // Retornar undefined si el parsing falla
      return undefined; 
    }

  } catch (error) {
    console.error("Error al llamar a la API de Gemini:", error);
    // Asegurarse de devolver undefined en caso de cualquier error de la API.
    return undefined; 
  }
}

export default AIModel;