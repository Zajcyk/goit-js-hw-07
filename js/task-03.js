const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const gallery = document.querySelector('ul.gallery'); // Pobranie elementu <ul> o klasie 'gallery'

// Przetworzenie tablicy obiektów w ciąg HTML używając metody map(), 
// która tworzy nowy ciąg dla każdego elementu obrazu w formacie <li><img src="URL" alt="ALT"></li>
// a następnie używając join('') łączymy wszystkie te ciągi w jeden długi ciąg HTML.  
const html = images.map(image =>
  `<li><img src="${image.url}" alt="${image.alt}"></li>`
).join('');

gallery.insertAdjacentHTML('beforeend', html); // Wstawienie stworzonego ciągu HTML do wnętrza elementu <ul> o klasie 'gallery'.
