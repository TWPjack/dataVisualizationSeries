$(document).ready(function() { 

  $.ajax({
    url: 'https://run.mocky.io/v3/a34c5fe1-6025-4c9d-8402-5c777b685476',
    method: 'GET',
    dataType: 'json',
    success: function(response){
      for(Index = 0; Index < response.data.length; Index ++){
        chart.data.datasets[0].data.push(response.data[Index][1]);
      }
      chart.update();
    },
    error: function(error) {
      console.log(error)
      console.log('錯誤')
    }
  });

  $.ajax({
    url: 'https://run.mocky.io/v3/b6b3ee44-03f2-4d3d-84e1-1f2e68be6f7e',
    method: 'GET',
    dataType: 'json',
    success: function(response){
      for(Index = 0; Index < response.data.length; Index ++){
        chart.data.datasets[1].data.push(response.data[Index][1]);
      }
      chart.update();
    },
    error: function(error) {
      console.log(error)
      console.log('錯誤')
    }
  });

  $.ajax({
    url: 'https://run.mocky.io/v3/8e7a5232-2974-4621-a818-0985e623169e',
    method: 'GET',
    dataType: 'json',
    success: function(response){
      for(Index = 0; Index < response.data.length; Index ++){
        chart.data.datasets[2].data.push(response.data[Index][1]);
      }
      chart.update();
    },
    error: function(error) {
      console.log(error)
      console.log('錯誤')
    }
  });
  
  $.ajax({
    url: 'https://run.mocky.io/v3/9ef80280-6c04-4d01-ae55-e3846ba758de',
    method: 'GET',
    dataType: 'json',
    success: function(response){
      for(Index = 0; Index < response.data.length; Index ++){
        chart.data.datasets[3].data.push(response.data[Index][1]);
      }
      chart.update();
    },
    error: function(error) {
      console.log(error)
      console.log('錯誤')
    }
  });
  $.ajax({
    url: 'https://run.mocky.io/v3/7826ab76-0be2-4103-8377-9a2669942868?mocky-delay=1500ms',
    method: 'GET',
    dataType: 'json',
    success: function(response){
      for(index = 0; index < 4 ; index++){
        chart.data.datasets[4].data.push(0);
      }
      for(Index = 0; Index < response.data.length; Index ++){
        chart.data.datasets[4].data.push(response.data[Index][1]);
      }
      chart.update();

    },
    error: function(error) {
      console.log(error)
      console.log('錯誤')
    }
  });

  function changedata () {
    chart.data.datasets[0].data = firstData;
    chart.update();
  }

  var ctx = document.getElementById('myChart');
  var chart = new Chart(ctx, {

    type: "bar",
    data: {
      labels: ["2020-01-01", "2020-01-02", "2020-01-03", "2020-01-04", "2020-01-05", "2020-01-06", "2020-01-07", "2020-01-08", "2020-01-09", "2020-01-10", "2020-01-11"],
      datasets: [
        {
          yAxisID: 'A',
          label: "資料一",
          type: "bar",
          backgroundColor: "rgba(255, 36, 0, 0.2)",
          borderColor: "rgba(255, 36, 0, 1)",
          borderWidth: 1,
          data: []
          // data: [235, 212, 523, 421, 130, 421, 305]
        },
        {
          yAxisID: 'A',
          label: "資料二",
          type: "bar",
          backgroundColor: "rgba(255, 110, 0, 0.2)",
          borderColor: "rgba(255, 110, 0, 1)",
          borderWidth: 1,
          data: []
          // data: [135, 288, 315, 523, 125, 623, 332]
        },
        {
          yAxisID: 'A',
          label: "資料三",
          type: "bar",
          backgroundColor: "rgba(255, 180, 0, 0.2)",
          borderColor: "rgba(255, 180, 0, 1)",
          borderWidth: 1  ,
          data: []
          // data: [25, 78, 35, 24, 126, 12, 77]
        },
        {
          yAxisID: 'B',
          label: "資料四",
          type: "bar",
          backgroundColor: "rgba(	100, 149, 237, 0.2)",
          borderColor: "rgba(	100, 149, 237, 1)",
          borderWidth: 1  ,
          data: []
          // data: [ 0, 1, 2, 3, 4, 5, 6]
        },
        {
          yAxisID: 'B',
          label: "資料五",
          type: "bar",
          backgroundColor: "rgba(65, 105, 225, 0.2)",
          borderColor: "rgba(65, 105, 225, 1)",
          borderWidth: 1  ,
          data: []
          // data: [ 0, 0, 0, 0, 9, 8, 7, 6, 5, 4, 3]
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        yAxes: [{
          display: true,
          id: 'A',
          type: 'linear',
          position: 'left',
          ticks: {
            beginAtZero: true,
          }
        }, 
        {
          display: true,
          id: 'B',
          type: 'linear',
          position: 'right',
          ticks: {
            beginAtZero: true,
          }
        }]
      }
    }
  });


});
