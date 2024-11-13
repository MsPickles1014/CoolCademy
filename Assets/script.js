// const x = 1
// const cardA = document.getElementById('test') 

// cardA.addEventListener('click', function(event) {
//   $('#modelWindow').modal('show');
//   console.log("test")
// })

// $('#btn').click(function() {
//   $('#modelWindow').modal('show');
// });

var myModal = document.getElementById('myModal')
var myInput = document.getElementById('myInput')

myModal.addEventListener('shown.bs.modal', function () {
  myInput.focus()
})