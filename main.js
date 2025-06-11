const form = document.getElementById('searchForm');
const input = document.getElementById('searchInput');
const gifContainer = document.getElementById('gifContainer');
const apiKey = 'eukz2Hka3GKV23KTA1lebDbHftyVPkO3';

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const query = input.value.trim();
  if (!query) return;

  const url = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${query}&limit=10&rating=g`;
  const response = await fetch(url);
  const data = await response.json();

  gifContainer.innerHTML = '';
  data.data.forEach(gif => {
    const img = document.createElement('img');
    img.src = gif.images.fixed_height.url;
    gifContainer.appendChild(img);
  });
});