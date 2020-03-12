'use strict'        // let the browser know we're serious

// debug statement letting us know the file is loaded
console.log('Loaded map.js')

// your mapbox token
mapboxgl.accessToken = 'pk.eyJ1IjoianczODUxIiwiYSI6ImNrN29qcWU2MTBhNWkzZXFxNnQ0OThka2sifQ.tDkhsqVfmARI4pSB5G3CZw'
let map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/brianhouse/cjn0u552b52kr2spdz6yhpqj4',
    center: [-73.96216,40.80779],
    zoom: 16,
    pitch: 45
})
