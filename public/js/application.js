// $( document ).ready(function() {

// function FormCollect(){}

// FormCollect.prototype.initialize = function(){
//   var formInput = document.getElementsByClassName("form-horizontal")[0];
//     formInput.addEventListener( "submit", this.parseData.bind( this ), false );
//   },

// FormCollect.prototype.parseData = function( event ){
//   event.preventDefault();
//   var emailT = event.target.elements.email.value
//   var passwordT = event.target.elements.password.value

//   var ajaxRequest = $.ajax({
//     url: '/sessions',
//     type: 'POST',
//     data: {email: emailT, password: passwordT}
//   })
//    ajaxRequest.success(function(data){
//     console.log(data)
//     debugger


//   })



// }

// var FormCollect = new FormCollect;
// FormCollect.initialize();


// });


//   // var selectedArtist = document.getElementById( 'artistFormInput' );
//   //     selectedArtist.addEventListener( 'submit', this.callback.bind( this ), false );