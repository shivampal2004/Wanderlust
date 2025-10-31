mapboxgl.accessToken = mapToken;
const map = new mapboxgl.Map({
    container: 'map',
    center: listing.geometry.coordinates,
    zoom: 12
});


const el = document.createElement('div');
el.innerHTML = '<i class="fa-solid fa-compass"></i>';

const popup = new mapboxgl.Popup({
    offset: 20,
    closeButton: false
})
.setHTML(
    `<h4>${listing.title}</h4><p>Exact Location provided after booking</p>`
);

const marker = new mapboxgl.Marker({ element: el })
    .setLngLat(listing.geometry.coordinates)
    .addTo(map);

el.addEventListener('mouseenter', () => {
    popup.setLngLat(listing.geometry.coordinates).addTo(map);
});

el.addEventListener('mouseleave', () => {
    popup.remove();
});