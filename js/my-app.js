// Initialize your app
var myApp = new Framework7({
    modalTitle: 'My App',
 
    // If it is webapp, we can enable hash navigation:
    pushState: true,
    material: true,
    // Hide and show indicator during ajax requests
    onAjaxStart: function (xhr) {
        myApp.showIndicator();
    },
    onAjaxComplete: function (xhr) {
        myApp.hideIndicator();
    }
});

// Export selectors engine
var $$ = Dom7;

// Add view
var mainView = myApp.addView('.view-main', {
   domCache: true,
});

$$(document).on('pageInit',function(e){
  // Do something here when the page laod and initialize	
 var page =e.detail.page;

 if(page.name=='about'){
	 var count =page.query.count;
	 var listHtml ='<ul>';
	 for(var i=0;i<count;i++){
		listHtml+='<li>'+i+'</li>'; 
	 }
	 listHtml+='</ul>';
	 $$(page.container).find('.page-content').append(listHtml);
 }
 if(page.name=='products'){
	alert('Helow Product'); 
 }
 
 /*=== Hotel Search Box page ====*/  
if(page.name=='search-hotels'){
	var weekday = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
	var monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun","Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  
    var today =new Date();
	
	var calendarRange = myApp.calendar({
    input: '#calendar-range',
    dateFormat: 'M dd yyyy',
    rangePicker: true,
	direction: 'vertical',
	minDate: today,
	rangesClasses:'',
	onChange: function (p, values, displayValues){
		var start =values[0];
		var end =values[1];
		
		var sMonth =start.getMonth() < 12 ? start.getMonth() + 1 : 1;
		var eMonth =end.getMonth() < 12 ? start.getMonth() + 1 : 1;
		
		var startDate = sMonth+'/'+start.getDate()+'/'+start.getFullYear(); 
		var endDate =eMonth+'/'+end.getDate()+'/'+end.getFullYear();
		var startDate_txt = weekday[start.getDay()]+', '+start.getDate()+' '+monthNames[start.getMonth()]+' '+start.getFullYear().toString().substr(-2);
		var endDate_txt = weekday[end.getDay()]+', '+end.getDate()+' '+monthNames[end.getMonth()]+' '+end.getFullYear().toString().substr(-2);
		
		$$('#startDate').val(startDate);
		$$('#endDate').val(endDate);
		$$('#startDate_txt').html(startDate_txt);
		$$('#endDate_txt').html(endDate_txt);
	    }
    });
	
  /*=== Auto suggetion ===*/
  var autocompleteDropdownAjax = myApp.autocomplete({
	opener: $$('#autocomplete-standalone-popup'),
    openIn: 'popup',
	backOnSelect: true,
    preloader: true, 
    valueProperty: 'fullname', 
    textProperty: 'fullname', 
    limit: 20, 
    dropdownPlaceholderText: 'Try "JavaScript"',
    expandInput: true, 
    source: function (autocomplete, query, render) {
        var results = [];
        if (query.length === 0) {
            render(results);
            return;
        }
        autocomplete.showPreloader();
        $$.ajax({
            url: 'http://yasen.hotellook.com/autocomplete',
            method: 'GET',
            dataType: 'json',
            data: {
                term: query,
				action: "Location_Fetch",
				lang: 'en',
				limit: 5
            },
            success: function (data) {
				var myData =data.cities; 
                for (var i = 0; i < myData.length; i++) {
                   if (myData[i].fullname.toLowerCase().indexOf(query.toLowerCase()) >= 0) results.push(myData[i]);
                }
                autocomplete.hidePreloader();
                render(results);
            }
        });
    },
	onChange: function (autocomplete, value) { 
	 var dataObj =value[0];
	 $$('#destination').val(dataObj.latinFullName);	
     $$('#selectedDest').html(dataObj.latinFullName);	 	 
     $$('#latitude').val(dataObj.location.lat);
     $$('#longitude').val(dataObj.location.lon);

	}
   });	
   
  $$('.findHotelResults').on('click', function(e){
	   e.preventDefault();	
	   var formData = myApp.formToData('#searchHotel_frm');
	   myApp.formStoreData('HotelRequestData',formData);
	   var adts  = document.getElementsByName('adults[]');
	   var chds  = document.getElementsByName('childs[]');
	 
	   var adultsArr= new  Array;
	   var childsArr= new  Array;
	   var childAgeArr= new  Array;
	   for (var i = 0; i <adts.length; i++) {
		  var adt=adts[i].value;
		  adultsArr.push(adt);
		}
	   for (var i = 0; i <chds.length; i++) {
		  var chd=chds[i].value;
		  childsArr.push(chd);
		}
		childsArr=0;
	  
		$$('.childAgeCls select').each(function(){ 
		   var relKey =$$(this).attr('relKey');
		   childAgeArr.push([relKey, $$(this).val()]); 
		});
		
	   var url ='search-results.html?destination='+$$('#destination').val()+'&latitude='+$$('#latitude').val()+'&longitude='+$$('#longitude').val()+'&checkIn='+$$('#startDate').val()+'&checkOut='+$$('#endDate').val()+'&Cri_currency=USD&Cri_language=en_US&hotelType=1&rooms='+$$('#number_of_rooms').val()+'&adults='+adultsArr+'&childs='+childsArr+'&childAge=';
	   mainView.router.loadPage(url);
   })   	
 } 
 /*=== Search Result page ====*/
 if(page.name=='search-results')
 {
   var destination =page.query.destination;
   var latitude =page.query.latitude;	 
   var longitude =page.query.longitude;	 
   var checkIn =page.query.checkIn;
   var checkOut =page.query.checkOut;
   var Cri_currency =page.query.Cri_currency;
   var Cri_language =page.query.Cri_language;
   var checkOut =page.query.checkOut;
   var rooms =page.query.rooms;
   var adults = page.query.adults;
   var childs = page.query.childs;
   var childAge = page.query.childAge;
   
   if( (destination!='') && (latitude!='') && (longitude!=''))
   {
	 myApp.showIndicator();
	 var param ={actionType:'findSearchKey',lat:latitude,lon:longitude, checkIn:checkIn,checkOut:checkOut, rooms:rooms,adults:adults,childs:childs,childAge:childAge};
	 
	 $$.get('http://twc5.com/demo/MobAppRequest/update_rates.php',param, function (response,status) {
		 var myData =JSON.parse(response);
		 var search_Session_Id =myData.search_session;
		 var exist =myData.exist;
		 $$('#search_Session_Id').val(search_Session_Id);
		 if(exist=='Yes'){
			Searched_Hotels(); 
		 }
		 else{
			Upldate_Rates(); 
		 }
	  });
	  
	  function Upldate_Rates(){ 
	     var search_Session_Id = $$('#search_Session_Id').val();
		 
		 var param ={actionType:'Upldate_Rates',search_Session_Id:search_Session_Id,lat:latitude,lon:longitude, checkIn:checkIn,checkOut:checkOut, rooms:rooms,adults:adults,childs:childs,childAge:childAge};
		 $$.get('http://twc5.com/demo/MobAppRequest/update_rates.php',param, function (response,status) {
			 myApp.hideIndicator(); 
			 if(status==200){
			   var myData =JSON.parse(response);
			   myApp.formStoreData('HotelLists',myData.HotelListResponse.HotelList.HotelSummary);
			   var getHotelLists = myApp.formGetData('HotelLists'); 
			   listHotelResults(getHotelLists);
			   Upldate_Rates_All();
			 } 
		 });
	 }
    
    function Upldate_Rates_All(){
		var search_Session_Id = $$('#search_Session_Id').val();
	    var param ={actionType:'Upldate_Rates_All',search_Session_Id:search_Session_Id,lat:latitude,lon:longitude, checkIn:checkIn,checkOut:checkOut, rooms:rooms,adults:adults,childs:childs,childAge:childAge};
		 $$.get('http://twc5.com/demo/MobAppRequest/update_rates.php',param, function (response,status) {
		 if(status==200){
		   	 $$('#totalrecords').val(response);
			 $$('#counthotel').html(response);
		 } 
	    });
     }
	  
	 function Searched_Hotels(){
	  var search_Session_Id = $$('#search_Session_Id').val();
      var sortField =$$('#sortField').val(sortField);
      var sortby = $$('#sortby').val(sortby);  	  
	  
	   var param ={actionType:'Searched_Hotels',search_Session_Id:search_Session_Id,lat:latitude,lon:longitude, checkIn:checkIn,checkOut:checkOut, rooms:rooms,adults:adults,childs:childs,childAge:childAge,page:1,orderby_fild:sortField,orderby_val:sortby};
	   $$.get('http://twc5.com/demo/MobAppRequest/update_rates.php',param, function (response,status) {
		 if(status==200){
		   var myData =JSON.parse(response);
		   var totalrecords =myData.totalrecords;
		   alert(totalrecords);
		   var getHotelLists=myData.result;
		    $$('#totalrecords').val(totalrecords);
			$$('#counthotel').html(totalrecords);
		   listHotelResults(getHotelLists);	  
		 } 
	    });
	  } 
	  
   }//end condition
   
   function listHotelResults(getHotelLists,page=0){
     if(getHotelLists.length>0){
		 var html=''; 
		for (var i = 0; i < getHotelLists.length; i++) {
		 html+='<li><div class="card">'+
			   '<div class="card-content">'+
			      '<div class="list-block media-list">'+
				    '<ul>'+
					'<a href="detailsPage.html?destination='+destination+'&hotel_id='+getHotelLists[i].hotelId+'&checkIn='+checkIn+'&checkOut='+checkOut+'&Cri_currency='+Cri_currency+'&Cri_language='+Cri_language+'&rooms='+rooms+'&adults='+adults+'&childs='+childs+'&childAge='+childAge+'" >'+
					'<li class="item-content">'+
					 '<div class="item-media ResultsPagehover">'+
						'<div class="ResultsPageMaxWidth" style="background: url(//images.trvl-media.com/'+ getHotelLists[i].thumbNailUrl +') no-repeat center;">'+
								'<i class="material-icons Resultsfavorite">favorite</i>'+
							'</div>'+
						    '</div>'+
						  '<div class="item-inner">'+
							'<div class="item-title-row">'+
							 '<div class="item-title ResultsTetelHotel">' + getHotelLists[i].name +'</div>'+
							'</div>'+
							'<div class="item-subtitle ResultsTetelHotell">' + getHotelLists[i].address1 +'</div>'+
							'<div class="item-subtitle ResultsTetelstar_rate"><i class="material-icons"></i>' + getHotelLists[i].hotelRating +'</div>'+
							'<div class="item-subtitle ResultsTetelReviews">'+
								'<div><img src="'+getHotelLists[i].tripAdvisorRatingUrl+'"></div> <div class="sre4pde40">'+getHotelLists[i].tripAdvisorRating+'</div> '+getHotelLists[i].tripAdvisorReviewCount+' Reviews</div>'+
						 '</div>'+
						  '<div class="item-innerPrices">'+
							  '<div class="itemTitel12">$' + getHotelLists[i].highRate +'</div>'+
							  '<div class="itemTitel24price">$' + getHotelLists[i].lowRate +'</div>'+
							 '<div class="itemTitel2Night">for 2 Nights</div>'+
							 '<div class="itemTitel6room">6rooms left</div>'+
						  '</div>'+
						'</li>'+
						'</a>'+
					'</ul>'+
					'</div>'+
				 '</div>'+
					'<div class="card-footer CardFooterMateriall">'+
					 '<a href="#" class=""><i class="material-icons">check</i>Free Cancellation</a>'+
					 '<a href="#" class=""><i class="material-icons">check</i>Free Wi-Fi</a>'+
					 '<a href="#" class=""><i class="material-icons material-iconsclear">clear</i>Free breakfast</a>'+
					'</div>'+
					 '<div class="card-footer CardFooterMaterial">'+
					 '<a href="#" class="FooterMaterialDeal">DEAL</a>'+
					  '<a href="#" class="FootFlatOff">Flat 30% off. Earn 15% in eWallte. Code HOTEL17</a>'+
					  '<a href="#" class="fooAddMore">+1More</a>'+
					'</div>'+
				'</div></li>';	
		}
		if(page>1){
		 $$('#hotelResults ul').append(html);	
		}
		else{
	     $$('#hotelResults ul').html(html);
		}		 
	 } 	 
   }
   
   
   
 }

});
/*
$$(document).on('pageInit','.page[data-page="about"]',function(e){
	// Do something here when the page laod and initialize
	alert('Do something crazy');
});
*/

myApp.onPageInit('about',function(e){
 // get to database online,retrive the details from the user id
 
 
});
