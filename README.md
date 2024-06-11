# belly-button-challenge


<img style="display: block;-webkit-user-select: none;margin: auto;background-color: hsl(0, 0%, 90%);" src="https://user-images.githubusercontent.com/74038190/215283043-76c34df4-b495-46c3-b174-7aca38032b91.gif">


## Background
In this assignment, you will build an interactive dashboard to explore the Belly Button Biodiversity datasetLinks to an external site., which catalogs the microbes that colonize human navels.
The dataset reveals that a small handful of microbial species (also called operational taxonomic units, or OTUs, in the study) were present in more than 70% of people, while the rest were relatively rare.

Click [here](https://suadg.github.io/belly-button-challenge/) to go to Bellybutton profile. 

<img src="https://github.com/Suadg/belly-button-challenge/blob/8f7b85789fba0e0a0a662d09e508156890fd44a2/BellyButton%202024-06-10.png" width="900px">

## Requirements

### 1. Bar Chart 
- Chart initializes without error 

- Chart updates when a new sample is selected 

- Chart uses Top 10 sample values as values 

- Chart uses otu_ids as the labels 

- Chart uses otu_labels as the tooltip 

### 2. Bubble Charts
- Chart initializes without error 

- Chart updates when a new sample is selected 

- Chart uses otu_ids for the x values 

- Chart uses otu_ids for marker colors 

- Chart uses sample_values for the y values 

- Chart uses sample_values for the marker size 

- Chart uses otu_labels for text values 

### 3. Metadata and Deployment
- Metadata initializes without error 

- Metadata updates when a new sample is selected 

- App Successfully Deployed to Github Pages 

## Tools you will need include:
- VS Code: You will use a text editor to create and edit HTML and JavaScript files.

- Web browser: You will use a web browser, such as Chrome, to view, inspect, and debug your visualizations. We will use Chrome in our examples.

- GitHub: As you will deploy your final data visualization on GitHub Pages, you will need your GitHub account.

## Instructions
Complete the following steps:

1. Use the D3 library to read in samples.json from the 
[URL](https://static.bc-edx.com/data/dl-1-2/m14/lms/starter/samples.json).

2. Create a horizontal bar chart with a dropdown menu to display the top 10 OTUs found in that individual.

- Use sample_values as the values for the bar chart.

- Use otu_ids as the labels for the bar chart.

- Use otu_labels as the hovertext for the chart.

3. Create a bubble chart that displays each sample.

- Use otu_ids for the x values.

- Use sample_values for the y values.

- Use sample_values for the marker size.

- Use otu_ids for the marker colors.

- Use otu_labels for the text values.

4. Display the sample's metadata, i.e., an individual's demographic information.

- Loop through each key-value pair from the metadata JSON object and create a text string.

- Append an html tag with that text to the #sample-metadata panel.


## References:
Hulcr, J. et al. (2012) A Jungle in There: Bacteria in Belly Buttons are Highly Diverse, but Predictable. [Retrieved from:](http://robdunnlab.com/projects/belly-button-biodiversity/results-and-data/)Links to an external site.


