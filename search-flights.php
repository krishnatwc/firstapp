<div class="page search-flightspage" data-page="search-flights">
        <div class="navbar">
            <div class="navbar-inner">
                <div class="left"><a href="#" class="link back with-animation"><i class="material-icons">keyboard_arrow_left</i> 
				</a>
					
					
					</div>
                   <div class="center font-size-14">Flight Search</div>
            </div>
        </div>
    
        <div class="page-content">
		<div class="flightRound">
		 <a href="#" class="tripType active" rel="oneway"><i class="material-icons">trending_flat</i>ONE-WAY</a>
		 <a href="#" class="tripType" rel="round"><i class="material-icons">swap_horiz</i>ROUND TRIP</a>
		</div>
			
       <form class="BoxPageForm" name="searchFlight_frm" id="searchFlight_frm">
        <input type="hidden" name="one_way" id="one_way" value="true">
        <input type="hidden" name="flight_from" id="flight_from" value="Delhi, India"> 		
        <input type="hidden" name="flight_locationId" id="flight_locationId" value="DEL">
     
        <input type="hidden" name="flight_to" id="flight_to" value="Goa, India"> 	 
        <input type="hidden" name="flight_to_locationId" id="flight_to_locationId" value="GOI">		
		<div class="content-block paddingNOne">
				<div class="HotelDiVBox">
					<div class="HotelDiVBoxLeft">
						<i class="material-icons">flight_takeoff</i>
					</div>
					<div class="HotelDiVBoxRight">
						<a href="#" id="autocomplete-standalone-popup">
						<p class="item-title Pseitel">From</p>
						<p class="item-after PseitelDes" id="selectedDest">Delhi,India</p>
						</a>
					</div>
				</div>
				
				<div class="HotelDiVBox">
					<div class="HotelDiVBoxLeft">
						<i class="material-icons">flight_land</i>
					</div>
					<div class="HotelDiVBoxRight">
						<a href="#" id="autocomplete-standalone-popup-to">
						<p class="item-title Pseitel">To</p>
						<p class="item-after PseitelDes"  id="selectedToDest">Goa,India</p>
						</a>
					</div>
				</div>
				<div class="HotelDiVBox Dateposition">
					<div class="HotelDiVBoxLeft">
						<i class="fa fa-calendar" aria-hidden="true"></i>
					</div>
					<div class="HotelDiVBoxRight">
						<input type="hidden" name="startDate" id="startDate" value="">
						<input type="hidden" name="endDate" id="endDate" value="">
						<a href="#" class="col-33 startDatecss calendarDatein" id="adivahacalendar">
                        <div class="BoxPageLoc">Departure Date</div>
						<div class="BoxPagebold" id="startDate_txt">Wed, <span class="Date_txt">28</span> Feb</div>
                    </a>
					<a href="#" class="col-33 endDatecss calendarDateout disabledClass" id="">
                     <div class="BoxPageLoc">Return Date</div>
                     <div class="BoxPagebold" id="endDate_txt">Thu, <span class="Date_txt">29</span> Feb</div>
                    </a>
					<input type="text" name="appCalendar" id="appCalendar" value="" style="opacity: 0;">
					</div>
				</div>
			    <div class="HotelDiVBox ">
					<div class="HotelDiVBoxLeft">
						<i class="material-icons">group</i>
					</div>
					<div class="HotelDiVBoxRight">
						<a href="#" data-popup=".aautocomplete-standalone-popup" class="open-popup">
						<p class="item-title Pseitel">Passengers</p>
						<p class="item-after PseitelDes"  id="selectedPassengers">1 Passengers</p>
						</a>
					</div>
				</div>
				<div class="HotelDiVBox HotelDiVBox-last HotelDiVBox-last-flight">
					<div class="HotelDiVBoxLeft">
						<i class="material-icons">card_travel</i>
					</div>
					<div class="HotelDiVBoxRight">
					<p class="item-title Pseitel">
					  <span><input type="radio" name="result" checked="checked" value="Economy">Economy </span>
					  <span><input type="radio" name="result" value="Business">Business</span>
					 </p>
					</div>
				</div>
			 
			 
			 <div class="btnHotelrel"><a href="javascript:void(0)" class="findFlightResults ">SEARCH FLIGHTS</a></div>
		<!-- Two popup use code -->
	  <div class="popup aautocomplete-standalone-popup">
		 <div class="navbar">
           <div class="navbar-inner">
             <div class="left"><a href="" class="link close-popup"><i class="material-icons">arrow_back</i> 
			   <span class="BoxPageNavbarTitle" id="roomGuestTxt">1 Passenger </span></a></div>
            </div>
         </div>
         <div class="page-content-not-use">
		  <div id="roomspacksDetails"> <!-- Start Room List -->
		  <div class="card ks-facebook-card roomListcls">
		    <input type="hidden" name="adults" id="adults" value="1">
		    <input type="hidden" name="childs" id="childs" value="0">
			<input type="hidden" name="infants" id="infants" value="0">
			<div class="card-footer no-border"><a href="#" class="link rooming">&nbsp;</a></div>
				<div class="card-content"> 
				 <div class="content-block"> 
					<div class="roomPagePadding"> 
						<div class="row margin_br">
							<div class="col-60"> 
								<div class="roomPageTitle">Adults</div>
								<div class="roomPageTitleBottom">Above 12 yrs</div>
							</div>
							<div class="col-40">
								<div class="row roomPagePaddingBottom">
									<div class="col-33">
										<a href="#" class="link left pack_circle managePassenger" mType="adults" aType="remove"><i class="material-icons">remove</i></a>
									</div>
									<div class="col-33">
										<a href="#" class="link center" id="countAdults">1</a> 
									</div>
									<div class="col-33">
										<a href="#" class="link right pack_circle managePassenger" mType="adults" aType="add"><i class="material-icons">add</i></a>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="roomPagePadding"> 
						<div class="row">
							<div class="col-60 marginbr"> 
								<div class="roomPageTitle">Children</div>
								<div class="roomPageTitleBottom">1-12 yrs</div>
							</div>
							<div class="col-40">
								<div class="row roomPagePaddingBottom">
									<div class="col-33">
										<a href="#" class="link left pack_circle managePassenger" mType="childs" aType="remove"><i class="material-icons">remove</i></a>
									</div>
									<div class="col-33">
										<a href="#" class="link center" id="countChilds">0</a> 
									</div>
									<div class="col-33">
										<a href="#" class="link right pack_circle managePassenger" mType="childs" aType="add"><i class="material-icons">add</i></a>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="roomPagePadding"> 
						<div class="row">
							<div class="col-60 marginbr"> 
								<div class="roomPageTitle">Infants</div>
								<div class="roomPageTitleBottom">Below 2 years</div>
							</div>
							<div class="col-40">
								<div class="row roomPagePaddingBottom">
									<div class="col-33">
										<a href="#" class="link left pack_circle managePassenger" mType="infants" aType="remove"><i class="material-icons">remove</i></a>
									</div>
									<div class="col-33">
										<a href="#" class="link center" id="countInfants">0</a> 
									</div>
									<div class="col-33">
										<a href="#" class="link right pack_circle managePassenger" mType="infants" aType="add"><i class="material-icons">add</i></a>
									</div>
								</div>
							</div>
						</div>
					</div>
					
				</div>
			</div>
		</div>
	  </div><!-- End Room List-->	
	   <a href="#" class="close-popup"><div class="btn_DoneRooms">Done</div></a>
    </div>
	
   </div><!-- end Two popup use code -->
  </div> <!-- end content block -->
  </form>
  
 </div>
</div>
