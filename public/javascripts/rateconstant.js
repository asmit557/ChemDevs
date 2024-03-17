

  //   document.getElementById('export-pdf').addEventListener('click', function() {
  //   const doc = new jsPDF();
  
  //   doc.setFontSize(18);
  //   doc.text(20, 20, 'Rate Constant Calculator Data');
  
  //   doc.setFontSize(14);
  //   doc.text(20, 30, 'Input Data:');
  //   doc.text(20, 70, 'Graph:');
  
  //   doc.setFontSize(12);
  //   doc.text(30, 40, 'Initial Concentration: ' + document.getElementById('initial-concentration').value);
  //   doc.text(30, 50, 'Time: ' + document.getElementById('time').value);
  //   doc.text(30, 60, 'Concentration at Time t: ' + document.getElementById('concentration').value);
  //   doc.text(30, 80, 'Reaction Order: ' + document.getElementById('reaction-order').value);
  
  //   const canvas = document.getElementById('graph');
  //   const imgData = canvas.toDataURL('image/png');
  //   doc.addImage(imgData, 'PNG', 20, 90, 150, 100);
  
  //   doc.save('rate_constant_data.pdf');
  // });
  
  function resetForm() {
    window.location.reload();
  }
  
  function calculateRateConstant() {
    // Get input values
    const initialConcentrationInput = document.getElementById('initial-concentration');
    const timeInput = document.getElementById('time');
    const concentrationInput = document.getElementById('concentration');
    const reactionOrderSelect = document.getElementById('reaction-order');
  
    const initialConcentration = parseFloat(initialConcentrationInput.value);
    const time = parseFloat(timeInput.value);
    const concentration = parseFloat(concentrationInput.value);
    const reactionOrder = parseInt(reactionOrderSelect.value);
  
    // Error handling
    if (isNaN(initialConcentration) || isNaN(time) || isNaN(concentration)) {
      alert('Please enter valid numerical values for all input fields.');
      return;
    }
  
    // Perform rate constant calculation based on reaction order
    let rateConstant;
    if (reactionOrder === 1) {
      rateConstant = -Math.log(concentration / initialConcentration) / time;
    } else if (reactionOrder === 2) {
      rateConstant = (concentration - initialConcentration) / (initialConcentration * time);
    } else if (reactionOrder === 0) {
      rateConstant = concentration / time;
    } else {
      alert('Please select a valid reaction order.');
      return;
    }
  
    // Update graph with new data and rate constant
    updateGraph(initialConcentration, time, concentration, rateConstant, reactionOrder);
  }
  
  
    
  function updateGraph(initialConcentration, time, concentration, rateConstant, reactionOrder) {
    // Calculate concentration at time t based on reaction order
    const concentrations = [];
    for (let t = 0; t <= time; t++) {
      let newConcentration;
      if (reactionOrder === 1) {
        newConcentration = initialConcentration * Math.exp(-rateConstant * t);
      } else if (reactionOrder === 2) {
        newConcentration = initialConcentration / (1 + rateConstant * initialConcentration * t);
      } else if (reactionOrder === 0) {
        newConcentration = initialConcentration - rateConstant * t;
        if (newConcentration < 0) newConcentration = 0; // Ensure concentration doesn't go negative for zero-order
      }
      concentrations.push(newConcentration);
    }
  
    // Plot concentration vs. time graph using Chart.js
    const ctx = document.getElementById('graph').getContext('2d');
    const graphData = {
      labels: Array.from({ length: time + 1 }, (_, i) => i), // Time points
      datasets: [{
        label: 'Concentration vs. Time',
        data: concentrations, // Concentration data
        borderColor: 'blue',
        borderWidth: 1
      }]
    };
    const graphOptions = {
      scales: {
        x: {
          type: 'linear',
          position: 'bottom',
          title: {
            display: true,
            text: 'Time (s)',
            color: 'black' // Adjust color for light mode
          }
        },
        y: {
          type: 'linear',
          position: 'left',
          title: {
            display: true,
            text: 'Concentration (mol/L)',
            color: 'black' // Adjust color for light mode
          }
        }
      },
      elements: {
        line: {
          tension: 0.5 // Adjust tension for smoother curve (value between 0 and 1)
        }
      }
    };
  
    
    const graph = new Chart(ctx, {
      type: 'line',
      data: graphData,
      options: graphOptions
    });
  
    // Display rate constant
    const rateConstantElement = document.getElementById('rate-constant');
    rateConstantElement.textContent = `Rate Constant: ${rateConstant}`;
  }