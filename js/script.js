$(document).ready(function() {
  
  $('.add-item').on('click', function () {
        var toDoItem = prompt("Type in your To Do Item");
        if(toDoItem !== null) {
            console.log("add this to list", toDoItem);
            var toAppend = '<div class="row items"><div class="col-xs-2"> <label><input type="radio" class="delete"></label> </div> <div class="col-xs-8 text-left">\
                <h2>' + toDoItem + '</h2> </div> <div class="col-xs-2"> <i class="fa fa-chevron-right"></i> </div> </div>';
            $('.todo-list').append(toAppend);
        } else {
            console.log("no value");
        }
  });
  $('.todo-list').on('click','.delete',function() {
    $(this).closest('.row').remove();
   
});
  
});


