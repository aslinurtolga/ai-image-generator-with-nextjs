export async function GET(request: Request) {
  // Coonect to our Microsoft Azure Function endpoint
  const response = await fetch(
    "http://localhost:7071/api/getChatGPTSuggestion",
    {
      cache: "no-store",
      // istek yanıtı önbelleklenmez
    }
  );
  const textData = await response.text();

  return new Response(JSON.stringify(textData.trim()), {
    // trim: baştaki ve sondaki boşluk karakterleri siler
    status: 200,
  });
}
