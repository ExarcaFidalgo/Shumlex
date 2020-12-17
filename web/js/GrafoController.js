const $ = require('jquery');
const cyto = require('cytoscape');
let dagre = require('cytoscape-dagre');
const panzoom = require('cytoscape-panzoom');
let svg = require('cytoscape-svg');
cyto.use( dagre );
cyto.use( svg );
panzoom( cyto );

const shumlex = require('shumlex');

let cy = null;


/**
 * Crea un grafo mediante Cytoscape en el <div> "grafo"
 * @param data  Datos del grafo
 */
function generarGrafo(data) {
    cy = cyto({

        container: document.getElementById('grafo'), // Contenedor

        elements: shumlex.crearGrafo(data),

        style: style,

        layout: {
            name: 'dagre',
            nodeSep: 60,
            edgeSep: 40,
            rankSep: 80
        }

    });
    cy.panzoom( defaults );
	$("#dwnsvg-btn").attr("download", `shumlex-graph.svg`);
}

function grafoASVG() {
	var svgContent = cy.svg({scale: 1, full: true});
	let bs = btoa(svgContent);
	$("#dwnsvg-btn").attr("href", `data:image/svg+xml;base64,${bs}`);
	window.location.href = `data:image/svg+xml;base64,${bs}`;
}

let style = [ //Hoja de estilo para el grafo
    {
        selector: 'node',
        style: {
            'background-color': 'purple',
            'background-opacity': '0.1',
            'label': 'data(name)',
            'text-valign': 'center',
            'font-family': 'CaslonAntique'
        }
    },

    {
        selector: 'edge',
        style: {
            'width': 3,
            'line-color': '#ccc',
            'target-arrow-color': '#ccc',
            'target-arrow-shape': 'triangle',
            'curve-style': 'bezier',
            'label': 'data(name)',
            'font-family': 'CaslonAntique'
        }
    }
];

let defaults = {
    zoomFactor: 0.05, // zoom factor per zoom tick
    zoomDelay: 45, // how many ms between zoom ticks
    minZoom: 0.1, // min zoom level
    maxZoom: 10, // max zoom level
    fitPadding: 50, // padding when fitting
    panSpeed: 10, // how many ms in between pan ticks
    panDistance: 10, // max pan distance per tick
    panDragAreaSize: 75, // the length of the pan drag box in which the vector for panning is calculated (bigger = finer control of pan speed and direction)
    panMinPercentSpeed: 0.25, // the slowest speed we can pan by (as a percent of panSpeed)
    panInactiveArea: 8, // radius of inactive area in pan drag box
    panIndicatorMinOpacity: 0.5, // min opacity of pan indicator (the draggable nib); scales from this to 1.0
    zoomOnly: false, // a minimal version of the ui only with zooming (useful on systems with bad mousewheel resolution)
    fitSelector: undefined, // selector of elements to fit
    animateOnFit: function(){ // whether to animate on fit
        return false;
    },
    fitAnimationDuration: 1000, // duration of animation on fit

    // icon class names
    sliderHandleIcon: 'fa fa-minus',
    zoomInIcon: 'fa fa-plus',
    zoomOutIcon: 'fa fa-minus',
    resetIcon: 'fa fa-expand'
};
module.exports = {
    generarGrafo,
	grafoASVG
}