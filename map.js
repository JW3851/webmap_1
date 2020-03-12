'use strict'        // let the browser know we're serious

// debug statement letting us know the file is loaded
console.log('Loaded map.js')

// your mapbox token
mapboxgl.accessToken = 'pk.eyJ1IjoianczODUxIiwiYSI6ImNrN29qcWU2MTBhNWkzZXFxNnQ0OThka2sifQ.tDkhsqVfmARI4pSB5G3CZw'
let map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v10',
    center: [-73.96024, 40.80877],
    zoom: 1
})
