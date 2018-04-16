document.addEventListener("DOMContentLoaded", function (event) {
    $.ajax({
        url: 'http://ec2-35-154-91-106.ap-south-1.compute.amazonaws.com:8080/api/campaign/campaign_listing'
        , type: 'GET'
        , success: function (data) {
            console.log(data)
            data.data.forEach(function(campaign){
            $('.campaigncontainer').append(`<li class="pro-item col-md-4 col-sm-6 col-xs-12">
            <div class="product-image-action">
              <img src="imagess/product/263x263/holiday-postcard-2.jpg" alt="Holiday Postcard 2">
              <div class="action">
               <a href="#" data-toggle="tooltip" data-placement="top" class="add-to-wishlist" data-original-title="" title="">
                  <i></i>
                </a>
                <a href="#" data-toggle="tooltip" data-placement="top" title="" class="add-to-wishlist" data-original-title="Donate">
                  <i class="fa fa-heart"></i>
                </a>
                <a href="#" data-toggle="tooltip" data-placement="top" title="" class="quick-view" data-original-title="Quickview">
                  <i class="fa fa-eye"></i>
                   </a><a href="#" data-toggle="tooltip" data-placement="top" class="add-to-wishlist" data-original-title="" title="">
                  <i></i>
                </a>
                
              </div>
            </div>
            <div class="product-info">
              <a href="detail.html" title="product" class="product-name">${campaign.fund_title} </a>
              <div class="price-box">
                <span class="normal-price">${campaign.amount}</span>
              </div>
              <div class="rating-box">  
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star-half-o"></i>
                  <i class="fa fa-star-o"></i>
              </div> 
            </div>
          </li>`)
            })

            
        }
    });
})