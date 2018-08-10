// Change YOUR_API_KEY_HERE to your apiKey
const url =
  "https://newsapi.org/v2/top-headlines?country=us&apiKey=0a3285f6d6f44b14be81661ab3897218";

export async function getNews() {
  let result = await fetch(url).then(response => response.json());
  return result.articles;
}