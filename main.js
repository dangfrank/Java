$(document).ready(function() {
    
    // Input form to table

    $( "#myForm" ).submit(function( event ) {
       
        // Create serial of the table
        var i = 0;
        $("tbody tr").each(function(){
            i++
            $(this).children().eq(0).text(i);
        })
        // Set the value
        var name = $("#name").val();
        var math = $("#math").val();
        var physical = $("#physical").val();
        var chemistry = $("#chemistry").val();
        var average = "?";
        var edit = "<input type='button' value='delete' id='del' class='btn btn-danger'>";
        
        // Reset form
        $("#name").val("");
        $("#math").val("");
        $("#physical").val("");
        $("#chemistry").val("");
        // Create new row
        var newRow = "<tr><td class='serial'>" + ++i + "</td><td>" + name + "</td><td>" + math + "</td><td>" + physical + "</td><td>" + chemistry + "</td><td>" + average + "</td><td>" + edit + "</td></tr>";
        // Apeend new row to tbody
        $("table tbody").append(newRow);
        
        return false;
        
    })
  
    // Calculate the average point
    $("#calc").click(function(){
        $("tbody tr").each(function(){
            var math = $(this).find("td:eq(2)").text();
            var physical = $(this).find("td:eq(3)").text();
            var chemistry = $(this).find("td:eq(4)").text();
            var average = ((parseFloat(math) + parseFloat(physical) + parseFloat(chemistry)) / 3).toFixed(1);

            $(this).find("td:eq(5)").text(average);
            
        })
    })
    
    // Find the excellent point
    $("#excellent").click(function(){
        $("tbody tr").each(function(){
            var x = $(this).find("td:eq(5)").text();
            if (x >=8) {
                $(this).find("td:eq(5)").css("background-color", "red");
            }
        })
    })

    // Search 
    $("#mySearch").on("keyup", function() {
        var value = $(this).val().toLowerCase();
        $("tbody tr").filter(function() {
          $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
      });

  
    // Delete selected Row
    $(document).on('click', '#del', function(e){
        e.preventDefault();
        var row = $(this).parent().parent();
        
        row.remove();

         // Reset the serial of table
        function serial(){
        $('.serial').each(function(k,v){
            $(this).text(k+1);
        }) 
    }
    serial();
    })
    
});





