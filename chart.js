window.onerror = function(message, url, lineNumber) {
  $('#response').html("An error occured, perhaps due to bad data");
  $("#response").removeClass();
  $("#response").addClass("alert alert-warning");
  return true;
};

function update() {
  var search = $('#search').val();
  $.ajax({
    url:search,
    success:function (data) {
      $('#response').html("Success, data loaded");
      $("#response").removeClass();
      $("#response").addClass("alert alert-success");
      updateChart(eval(data), search)
    },
    error:function (xhr, ajaxOptions, thrownError){
    if(xhr.status==404) {
        $("#response").removeClass();
        $("#response").addClass("alert alert-danger");
        $('#response').html("404 error, file not found")
      }
    }
  })
}

function updateChart(data, title) {
  $('#chart').highcharts({
    chart: {
      type: 'column'
    },
    title: {
      text: title
    },
    xAxis: {
      type: 'category'
    },
    legend: {enabled: false},

    series: [{
      name: 'Data',
      colorByPoint: true,
      data: data
    }],
  })
}