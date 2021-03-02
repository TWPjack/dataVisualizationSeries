$(document).ready(function() { 
$('.countybutton').click(function () {
  $("#displayTable tr:gt(0)").remove();
  let btnValue = $(this).val()
  $.ajax({
    url: 'https://data.epa.gov.tw/api/v1/aqx_p_432?limit=1000&api_key=9be7b239-557b-4c10-9775-78cadfc555e9&format=json',
    method: 'GET',
    dataType: 'json',
    success: function(response){
      for(recordsIndex = 0; recordsIndex < response.records.length; recordsIndex ++){
        if(btnValue === response.records[recordsIndex].County){
          $("#displayTable").append(
            `<tr>
                <td>${response.records[recordsIndex].SiteName}</td>
                <td>${response.records[recordsIndex].AQI}</td>
                <td>${response.records[recordsIndex].Status}</td>
                <td>${response.records[recordsIndex].O3}</td>
                <td>${response.records[recordsIndex].PM10}</td>
                <td>${response.records[recordsIndex].CO}</td>
                <td>${response.records[recordsIndex].SO2}</td>
                <td>${response.records[recordsIndex].NO2}</td>
          </tr>`);
        }
      }
    },
    error: function(error) {
      console.log(error)
      console.log('錯誤')
    }
  })
})
});
// $(document).ready(function() { 
//   $("#select1 dd").click(function() { 
//   $(this).addClass("selected").siblings().removeClass("selected"); 
//   if ($(this).hasClass("select-all")) { 
//   $("#selectA").remove(); 
//   } else { 
//   var copyThisA = $(this).clone(); 
//   if ($("#selectA").length > 0) { 
//   $("#selectA a").html($(this).text()); 
//   } else { 
//   $(".select-result dl").append(copyThisA.attr("id", "selectA")); 
//   } 
//   } 
//   }); 
//   $("#select2 dd").click(function() { 
//   $(this).addClass("selected").siblings().removeClass("selected"); 
//   if ($(this).hasClass("select-all")) { 
//   $("#selectB").remove(); 
//   } else { 
//   var copyThisB = $(this).clone(); 
//   if ($("#selectB").length > 0) { 
//   $("#selectB a").html($(this).text()); 
//   } else { 
//   $(".select-result dl").append(copyThisB.attr("id", "selectB")); 
//   } 
//   } 
//   }); 
//   $("#selectA").live("click", 
//   function() { 
//   $(this).remove(); 
//   $("#select1 .select-all").addClass("selected").siblings().removeClass("selected"); 
//   }); 
//   $("#selectB").live("click", 
//   function() { 
//   $(this).remove(); 
//   $("#select2 .select-all").addClass("selected").siblings().removeClass("selected"); 
//   }); 
//   $(".select dd").live("click", 
//   function() { 
//   if ($(".select-result dd").length > 1) { 
//   $(".select-no").hide(); 
//   } else { 
//   $(".select-no").show(); 
//   } 
//   }); 
//   });



