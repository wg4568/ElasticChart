var response_data = [
  {
    name: 'Datapoint 1',
    y: 56.33,
  },
  {
    name: 'Datapoint 2',
    y: 24.03,
  }
]

$(document).ready(function() {
  $('#container').highcharts({
    chart: {
      type: 'column'
    },
    title: {
      text: 'Title Here'
    },
    subtitle: {
      text: 'Subtitle here'
    },
    xAxis: {
      type: 'category'
    },
    yAxis: {
      title: {
        text: 'Some data'
      }

    },
    legend: {enabled: false},

    series: [{
      name: 'Data',
      colorByPoint: true,
      data: response_data,
    }],
  })
})