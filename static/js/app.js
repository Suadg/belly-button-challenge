// Build the metadata panel
function buildMetadata(sample) {
  d3.json("https://static.bc-edx.com/data/dl-1-2/m14/lms/starter/samples.json").then((data) => {

    // get the metadata field
    let metData = data.metadata;

    // Filter the metadata for the object with the desired sample number
    let filtData = metData.filter(item=> item.id == sample);

    // Use d3 to select the panel with id of `#sample-metadata`
    let demoInfoPanel = d3.select('#sample-metadata');


    // Use `.html("") to clear any existing metadata
    demoInfoPanel.html('');

    // Inside a loop, you will need to use d3 to append new
    // tags for each key-value in the filtered metadata.
    for (let k in filtData[0]){
      demoInfoPanel.append('p').text(`${k}: ${filtData[0][k]}`);
  
      }
  });
}

// function to build both charts
function buildCharts(sample) {
  d3.json("https://static.bc-edx.com/data/dl-1-2/m14/lms/starter/samples.json").then((data) => {

    // Get the samples field
    let samples = data.samples;

    // Filter the samples for the object with the desired sample number
let filtSamples = samples.filter(item => item.id == sample)

    // Get the otu_ids, otu_labels, and sample_values
    let otuId = filtSamples[0].otu_ids;
    let otuLabels = filtSamples[0].otu_labels
    let sampleVal = filtSamples[0].sample_values


    // Build a Bubble Chart

    let trace = {
      x: otuId,
      y: sampleVal,
      text: otuLabels,
      mode: 'markers',
      marker: {size: sampleVal, color: otuId},
      type: "scatter",
     
    };
    let plotData = [trace];

    let layout = {
      title: 'Bacteria Cultures Per Sample',
      showlegend: false,
      height: 500,
      width: 1500
    }

    // Render the Bubble Chart
    Plotly.newPlot("bubble", plotData, layout);


    // For the Bar Chart, map the otu_ids to a list of strings for your yticks
    let ticks = otuId.map(item => `OTU ${item}`);
    let yticks = ticks.slice(0,10).reverse()

    // Build a Bar Chart
    // Don't forget to slice and reverse the input data appropriately
    let topTenVal = sampleVal.slice(0,10).reverse();
    let topTenOtu = otuId.slice(0,10).reverse();
    let topTenLabels = otuLabels.slice(0, 10).reverse();


    // Render the Bar Chart
   let trace2 = {
  type: 'bar',
  x: topTenVal,
  y: yticks,
  orientation: 'h',
  text: topTenLabels
    };

    let data2 = [trace2]

    let layout2 = {
      title: 'Top 10 Bacteria Cultures Found',
      showlegend: false,
      height: 500,
      width: 1000
    }
    
    Plotly.newPlot("bar", data2, layout2)

  });
}


// Function to run on page load
function init() {
  d3.json("https://static.bc-edx.com/data/dl-1-2/m14/lms/starter/samples.json").then((data) => {

    // Get the names field
    let nameField = data.names;

    // Use d3 to select the dropdown with id of `#selDataset`
    let selectData = d3.select('#selDataset');

    // Use the list of sample names to populate the select options
    // Hint: Inside a loop, you will need to use d3 to append a new
    // option for each sample name.
    for (let names of nameField){
      selectData.append('option').text(names) 
    };

    // Get the first sample from the list
    let firstSample = nameField[0];


    // Build charts and metadata panel with the first sample
    buildMetadata(firstSample);
    buildCharts(firstSample);
  });
}

// Function for event listener
function optionChanged(newSample) {
  // Build charts and metadata panel each time a new sample is selected
  let dropDownMenu = d3.select('#selDataset');
  let selectedSample = dropDownMenu.property("value");
  buildMetadata(selectedSample);
  buildCharts(selectedSample);
}

// Initialize the dashboard
init();
