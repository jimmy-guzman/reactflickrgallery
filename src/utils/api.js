import apiKey from "./config";

// fetches data using async and fetch and returs photos array
export async function fetchResults(tag) {
  const encodedURI = window.encodeURI(
    `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${tag}&per_page=24&format=json&nojsoncallback=1`
  );
  const response = await fetch(encodedURI).catch(error => {
    console.log("Error fetching and parsing data", error);
  });

  const results = await response.json();
  return results.photos.photo;
}
