$(document).ready(function() { 
  let pagestate = 1;
  let state = true;
  $.ajax({
    url: 'https://run.mocky.io/v3/9d5f33ec-0d2f-4743-aac9-5aef32f7badf',
    method: 'GET',
    dataType: 'json',
    success: function(response){
      for(recordsIndex = 0; recordsIndex < response.length; recordsIndex ++){

        if(state === true){
          $("tbody").append(
            `<tr>
                <td>${response[recordsIndex].id}</td>
                <td>${response[recordsIndex].first_name}</td>
                <td>${response[recordsIndex].last_name}</td>
                <td>${response[recordsIndex].email}</td>
                <td>${response[recordsIndex].gender}</td>
                <td>${response[recordsIndex].ip_address}</td>
                <td>${response[recordsIndex].login_at}</td>
                <td>${response[recordsIndex].description}</td>
          </tr>`);
        }
      }

    },
    error: function(error) {
      console.log(error)
      console.log('錯誤')
    }
  })

  $('.countybutton').click(function () {
    let btnValue = $(this).val()
    if(btnValue){

    }
  })
});

function myFunction() {
  var input, filter, tbody, trs, a, column, row, txtValue;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  tbody = document.getElementById("TTbody");
  trs = tbody.getElementsByTagName("tr");
  for (column = 0; column < trs.length; column++) {
    for(row = 0; row < 8; row++){
      let ttt = false;
      a = trs[column].getElementsByTagName("td")[row];
      txtValue = a.textContent || a.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        ttt = true;
      }
      
      if(ttt === true){
        trs[column].style.display = "";
        break;
      }
      
      if(ttt === false && row === 7){
        trs[column].style.display = "none";
        break;
      }
    }
  }
}



