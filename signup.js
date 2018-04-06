<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
  <script>
  document.addEventListener("DOMContentLoaded", function (event) {
      document.querySelector('#register').addEventListener('click', makeRequest)
  });
  function makeRequest() 
  {
      var formd=$('#form').serialize()
      console.log(formd)
      var url ='http://ec2-35-154-91-106.ap-south-1.compute.amazonaws.com:8080/api/ngo/new'
      //var temp=document.querySelector('#form');
      //var form=new FormData(temp);
      
      ajaxJQ(url);
  }
   function ajaxJQ(url) {
            $.ajax({
                url: url
                , type: 'POST'
                , data:formd
                //, success: function (data) {
                   // console.log(data)
                }
            }).done(function (response, textStatus, xhr) {
                //output(response, xhr.status, 'jQuery response')
                if(response.success=='true')
                {
                    window.location.replace="https://www.google.co.in/" 
                }
                   // window.location.replace("./login.html"); 
                                  
                // console.log(response)
                // console.log(testStatus)
                // console.log(xhr)
            })
            .fail(function(){
                $('#regfail').css('display', 'block')
                               
                //console.log('Registration Failed')
            })
        }