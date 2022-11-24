function drawRankChart(rankMonth, rankData, id_name, max_val){
  var label = rankMonth
  var data = rankData
  var align_number = 'start'  

  var ctx = document.getElementById(id_name).getContext('2d');
  var myChart = new Chart(ctx, {
    type: 'line',
    plugins:[ChartDataLabels],    
    data:{
      labels: label,
      datasets:[{
        data: data,        
        borderColor: "#0c4ea2",
        borderWidth: 1,
        backgroundColor: "#0c4ea2",
      }],
    },
    options: {      
      responsive: true,      
      maintainAspectRatio: false,
      scales:{
        y:{
          display: false,          
          suggestedMax: max_val,
          //suggestedMin: min_val,
          //ticks:{            
          //  stepSize: 0.1,
          //}
        }
      },
      animation: {            
        y:{
          from: 200
        }
      },
      plugins: {
        legend: {
          display: false,
        },
        title: {
          display: false,          
        },
        datalabels: {
          display: true,          
          color: 'black',
          align: 'top',
          anchor: 'start',
          padding: 4,
          textAlign: 'center',          
          font: {            
            size: 11,
          },              
        }
      }
    },
});
}

function drawDealChart(rankMonth, rankData, id_name, max_val, avg10){
  var label = rankMonth
  var data = rankData
  var align_number = 'start'  

  var ctx = document.getElementById(id_name).getContext('2d');
  var myChart = new Chart(ctx, {    
    plugins:[ChartDataLabels],    
    data:{
      labels: label,
      datasets:[{
        type: 'line',
        data: data,        
        borderColor: "#0c4ea2",
        borderWidth: 1,
        backgroundColor: "#0c4ea2",
        datalabels: {
          display: true,          
          color: 'black',
          align: 'top',
          anchor: 'start',
          padding: 4,
          textAlign: 'center',          
          font: {            
            size: 11,
          },              
        }
      },
      {
        type: 'line',
        data: avg10,        
        borderColor: "#0c4ea2",
        borderWidth: 1,
        pointRadius: 0,
        borderDash: [5, 3],
        backgroundColor: "#0c4ea2",
        datalabels: {
          display: false
        }
      }
    ],
    },
    options: {      
      responsive: true,      
      maintainAspectRatio: false,
      scales:{
        y:{
          display: false,          
          suggestedMax: max_val,
          //suggestedMin: min_val,
          //ticks:{            
          //  stepSize: 0.1,
          //}
        }
      },
      animation: {            
        y:{
          from: 200
        }
      },
      plugins: {
        legend: {
          display: false,
        },
        title: {
          display: false,          
        },        
      }
    },
});
}

function drawRentChart(rankMonth, rankData, id_name, avg10){
  var label = rankMonth
  var data = rankData
  var align_number = 'start'  

  var ctx = document.getElementById(id_name).getContext('2d');
  var myChart = new Chart(ctx, {        
    plugins:[ChartDataLabels],
    data:{
      labels: label,      
      datasets:[{        
        type: 'bar',
        data: data,        
        borderColor: "#0c4ea2",        
        backgroundColor: 'rgba(0, 94, 184, 0.3)', 
        order:0,
        datalabels: {
          display: true,
          color: 'black',
          align: 'top',
          anchor: 'start',
          padding: 4,
          textAlign: 'center',          
          font: {
            weight: 'bold',
            size: 11,
          },              
        },
      },
      {
        type: 'line',
        data: avg10,        
        borderColor: "#0c4ea2",
        fill: false,
        borderWidth: 1,
        pointRadius: 0,
        borderDash: [5, 3],
        order:1,
        datalabels: {
          display: false
        }
      }
    ],
    },
    options: {      
      responsive: true,      
      maintainAspectRatio: false,
      scales:{
        y:{
          display: false,
          suggestedMax: 95,
          suggestedMin: 0,
          ticks:{            
            stepSize: 20,
          }
        }
      },
      animation: {            
        y:{
          from: 100
        }
      },
      plugins: {
        legend: {
          display: false,
        },
        title: {
          display: false,          
        }        
      }
    },
});
}

function drawSupplyChart(rankMonth, rankData, rankData2, id_name, avg10){
  var label = rankMonth
  var data = rankData
  var data2 = rankData2
  var align_number = 'start'  

  var ctx = document.getElementById(id_name).getContext('2d');
  var myChart = new Chart(ctx, {        
    plugins:[ChartDataLabels],
    data:{
      labels: label,      
      datasets:[{        
        type: 'bar',
        label: '입주',
        data: data,        
        borderColor: "rgba(0, 94, 184, 0.5)",
        borderWidth: 1,
        backgroundColor: ['rgba(0, 94, 184, 0.5)', 'rgba(0, 94, 184, 0.5)', 'rgba(0, 94, 184, 0.15)', 'rgba(0, 94, 184, 0.15)', 'rgba(0, 94, 184, 0.15)', 'rgba(0, 94, 184, 0.15)'],
        datalabels: {
          display: true,
          color: 'black',
          align: 'center',
          anchor: 'center',          
          textAlign: 'center',          
          font: {
            weight: 'bold',
            size: 11,
          },              
        },
      },
      {        
        type: 'bar',
        label: '분양',
        data: data2,        
        borderColor: "rgba(46, 204, 35, 0.5)",
        borderWidth: 1,       
        backgroundColor: ['rgba(46, 204, 35, 0.5)', 'rgba(46, 204, 35, 0.5)', 'rgba(46, 204, 35, 0.15)', 'rgba(46, 204, 35, 0.15)', 'rgba(46, 204, 35, 0.15)', 'rgba(46, 204, 35, 0.15)'],
        datalabels: {
          display: true,
          color: 'black',
          align: 'center',
          anchor: 'end',          
          textAlign: 'center',          
          padding: 4,
          font: {
            weight: 'bold',
            size: 11,
          },              
        },
      },
      {
        type: 'line',
        data: avg10,
        label: '적정',      
        borderColor: "#0c4ea2",
        fill: false,
        borderWidth: 1,
        pointRadius: 0,
        borderDash: [5, 3],
        order:1,
        datalabels: {
          display: false
        }
      }
    ],
    },
    options: {      
      responsive: true,      
      maintainAspectRatio: false,
      scales:{
        y:{
          display: false,
          stacked: true,
          //suggestedMax: 95,
          //suggestedMin: 0,          
        },
        x:{
          stacked: true
        }
      },
      animation: {            
        y:{
          from: 100
        }
      },
      plugins: {
        legend: {
          display: true,
        },
        title: {
          display: false,          
        }        
      }
    },
});
}

function drawNonSalesChart(rankMonth, rankData, id_name){
  var label = rankMonth
  var data = rankData
  var align_number = 'start'  

  var ctx = document.getElementById(id_name).getContext('2d');
  var myChart = new Chart(ctx, {        
    plugins:[ChartDataLabels],
    data:{
      labels: label,      
      datasets:[{        
        type: 'bar',
        data: data,        
        borderColor: "#0c4ea2",        
        backgroundColor: 'rgba(0, 94, 184, 0.3)',        
        order:0,
        datalabels: {
          display: true,
          color: 'black',
          align: 'top',
          anchor: 'start',
          padding: 4,
          textAlign: 'center',          
          font: {
            weight: 'bold',
            size: 11,
          },              
        },
      }],
    },
    options: {      
      responsive: true,      
      maintainAspectRatio: false,
      scales:{
        y:{
          display: false,          
          //suggestedMax: 95,
          //suggestedMin: 0,          
        }
      },
      animation: {            
        y:{
          from: 100
        }
      },
      plugins: {
        legend: {
          display: false,
        },
        title: {
          display: false,          
        }        
      }
    },
});
}