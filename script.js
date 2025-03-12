document.getElementById('search-button').addEventListener('click', function () {
  const query = document.getElementById('search-input').value;
  if (query) {
    window.location.href = `https://www.google.com/search?q=${encodeURIComponent(query)}`;
  }
});

document.getElementById('search-input').addEventListener('keypress', function (event) {
  if (event.key === 'Enter') {
    const query = document.getElementById('search-input').value;
    if (query) {
      window.location.href = `https://www.google.com/search?q=${encodeURIComponent(query)}`;
    }
  }
});

// Function to add images to favorite links
function addFavoriteImages() {
  const favorites = document.querySelectorAll('.favorites a');
  favorites.forEach(favorite => {
    const url = new URL(favorite.href);
    const img = document.createElement('img');
    img.src = `https://www.google.com/s2/favicons?domain=${url.hostname}`;
    favorite.prepend(img);
  });
}

// Call the function to add images
addFavoriteImages();
