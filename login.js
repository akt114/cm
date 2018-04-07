
  
document.addEventListener("DOMContentLoaded", function (event) {
    document.querySelector('#loginpage').addEventListener('click', makeRequest)
});
function makeRequest(e) 
{
    e.preventDefault();
    var formd=$('#login').serialize()
    console.log(formd)
    var url ='http://ec2-35-154-91-106.ap-south-1.compute.amazonaws.com:8080/api/ngo/login'
    
      $.ajax({
              url: url
              , type: 'POST'
              , data:formd
              
              , success: function (response) {
                  console.log(response)
                 if(response.success==true){
                    localStorage.setItem('token',response.token)
                    localStorage.setItem('email',response.data.email)
                    localStorage.setItem('id',response.data._id)

                   // window.location.href="https://www.google.co.in/"
                    console.log(response.token)
                    console.log(response.data.email)
                    console.log(response.data._id)
                 }
                    else{
                        $('#logfail').css('display','block');
                    }
                    
                 
                 
              },
              error: function(e){
                  console.log(e)
                
                $('#regfail').css('display','block');
                             
                console.log('Login Failed')
              }
            });
        }
        
                 
              
        //   }).done(function (response, textStatus, xhr) {
        //       //output(response, xhr.status, 'jQuery response')
        //       if(response.success=='true')
        //       {
        //           window.location.replace="https://www.google.co.in/" 
        //       }
                 // window.location.replace("./login.html"); 
                                
    //           console.log(response)
    //            console.log(testStatus)
    //            console.log(xhr)
    //       })
    //       .fail(function(){
    //           $('#regfail').css('display','block');
                             
    //           console.log('Registration Failed')
    //       })
    //   }



