import React from 'react'
import Navbar from '../Navbar/Navbar';
import hero_image1 from '../img/landingpage.jpeg';
import hero_image2 from '../img/landing_page_2.jpeg';
import gallery_1 from '../img/gallary_1.jpeg';
import gallery_2 from '../img/gallary_2.jpeg';
import gallery_3 from '../img/gallary_3.jpeg';
import gallery_4 from '../img/gallary_4.jpeg';
import gallery_5 from '../img/gallary_5.jpeg';
import gallery_6 from '../img/bar.jpeg';
import gallery_7 from '../img/bar_1.jpeg';
import gallery_8 from '../img/bar_2.jpeg';
import gallery_9 from '../img/bar_3.jpeg';
import gallery_10 from '../img/pool_1.jpeg';
import bedroom_1 from '../img/bedroom_1.jpeg';
import bedroom_2 from '../img/room_2.jpeg';
import icon_1 from '../img/icon_1.svg'
import icon_2 from '../img/icon_2.svg'
import icon_3 from '../img/icon_3.svg'
import user_1 from '../img/user_1.jpg'
import user_2 from '../img/user_2.jpg'
import user_3 from '../img/user_3.jpg'
import testimonials from '../img/testimonials.jpg'

const Landingpage = () => {
 
	const galleryData = [
		{ id: 1, imageUrl: gallery_1 },
		{ id: 2, imageUrl: gallery_2 },
		{ id: 3, imageUrl: gallery_5 },
		{ id: 4, imageUrl: gallery_4 },
		{ id: 5, imageUrl: gallery_5 },
		
	  ];


    const sliderData = [
    {
      id: 1,
      title: "Welcome to Dachimney",
      image: hero_image1,
      inputs: [
        {
          type: "text",
          placeholder: "Check in",
          className: "datepicker booking_input booking_input_a booking_in",
          required: true,
        },
        {
          type: "text",
          placeholder: "Check out",
          className: "datepicker booking_input booking_input_a booking_out",
          required: true,
        },
        {
          type: "number",
          placeholder: "Children",
          className: "booking_input booking_input_b",
          required: true,
        },
        {
          type: "number",
          placeholder: "Room",
          className: "booking_input booking_input_b",
          required: true,
        },
      ],
      buttonText: "Book Now",
    },
    {
      id: 2,
      title: "A Luxury Stay",
      image: hero_image2,
      inputs: [
        {
          type: "text",
          placeholder: "Check in",
          className: "datepicker booking_input booking_input_a booking_in",
          required: true,
        },
        {
          type: "text",
          placeholder: "Check out",
          className: "datepicker booking_input booking_input_a booking_out",
          required: true,
        },
        {
          type: "number",
          placeholder: "Children",
          className: "booking_input booking_input_b",
          required: true,
        },
        {
          type: "number",
          placeholder: "Room",
          className: "booking_input booking_input_b",
          required: true,
        },
      ],
      buttonText: "Book Now",
    },
    // Add more slides as needed
  ];

  return (
    <>
    
	<div class="home">
		<div class="home_slider_container">
			<div class="owl-carousel owl-theme home_slider">
				
				
				<div class="slide">
					<div class="background_image" style={{backgroundImage:`url(${hero_image1})`}}></div>
					<div class="home_container">
						<div class="container">
							<div class="row">
								<div class="col">
									<div class="home_content text-center">
										<div class="home_title">A Luxury Stay</div>
										<div class="booking_form_container">
											<form action="#" class="booking_form">
												<div class="d-flex flex-xl-row flex-column align-items-start justify-content-start">
													<div class="booking_input_container d-flex flex-lg-row flex-column align-items-start justify-content-start">
														<div><input type="text" class="datepicker booking_input booking_input_a booking_in" placeholder="Check in" required="required"/></div>
														<div><input type="text" class="datepicker booking_input booking_input_a booking_out" placeholder="Check out" required="required"/></div>
														<div><input type="number" class="booking_input booking_input_b" placeholder="Children" required="required"/></div>
														<div><input type="number" class="booking_input booking_input_b" placeholder="Room" required="required"/></div>
													</div>
													<div><button class="booking_button trans_200">Book Now</button></div>
												</div>
											</form>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div class="slide">
					<div class="background_image" style={{backgroundImage:`url(${hero_image2})`}}></div>
					<div class="home_container">
						<div class="container">
							<div class="row">
								<div class="col">
									<div class="home_content text-center">
										<div class="home_title">A Luxury Stay</div>
										<div class="booking_form_container">
											<form action="#" class="booking_form">
												<div class="d-flex flex-xl-row flex-column align-items-start justify-content-start">
													<div class="booking_input_container d-flex flex-lg-row flex-column align-items-start justify-content-start">
														<div><input type="text" class="datepicker booking_input booking_input_a booking_in" placeholder="Check in" required="required"/></div>
														<div><input type="text" class="datepicker booking_input booking_input_a booking_out" placeholder="Check out" required="required"/></div>
														<div><input type="number" class="booking_input booking_input_b" placeholder="Children" required="required"/></div>
														<div><input type="number" class="booking_input booking_input_b" placeholder="Room" required="required"/></div>
													</div>
													<div><button class="booking_button trans_200">Book Now</button></div>
												</div>
											</form>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

			
				<div class="slide">
					<div class="background_image" style={{backgroundImage:`url(images/index_1.jpg)`}}></div>
					<div class="home_container">
						<div class="container">
							<div class="row">
								<div class="col">
									<div class="home_content text-center">
										<div class="home_title">A Luxury Stay</div>
										<div class="booking_form_container">
											<form action="#" class="booking_form">
												<div class="d-flex flex-xl-row flex-column align-items-start justify-content-start">
													<div class="booking_input_container d-flex flex-lg-row flex-column align-items-start justify-content-start">
														<div><input type="text" class="datepicker booking_input booking_input_a booking_in" placeholder="Check in" required="required"/></div>
														<div><input type="text" class="datepicker booking_input booking_input_a booking_out" placeholder="Check out" required="required"/></div>
														<div><input type="number" class="booking_input booking_input_b" placeholder="Children" required="required"/></div>
														<div><input type="number" class="booking_input booking_input_b" placeholder="Room" required="required"/></div>
													</div>
													<div><button class="booking_button trans_200">Book Now</button></div>
												</div>
											</form>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

			</div>
			
			
			<div class="home_slider_dots_container">
				<div class="home_slider_dots">
					<ul id="home_slider_custom_dots" class="home_slider_custom_dots d-flex flex-row align-items-start justify-content-start">
						<li class="home_slider_custom_dot active">01.</li>
						<li class="home_slider_custom_dot">02.</li>
						<li class="home_slider_custom_dot">03.</li>
					</ul>
				</div>
			</div>
			
		</div>
	</div>
    <div class="features">
		<div class="container">
			<div class="row">
				
			
				<div class="col-lg-4 icon_box_col">
					<div class="icon_box d-flex flex-column align-items-center justify-content-start text-center">
						<div class="icon_box_icon"><img src={icon_1} class="svg" alt="https://www.flaticon.com/authors/monkik"/></div>
						<div class="icon_box_title"><h2>Fabulous Hotel</h2></div>
						<div class="icon_box_text">
							<p>Da Chimney is located in the shining city of Abuja.
							We serve the finest Indian cuisine in Abuja made from authentic spices by chefs from many countries!</p>
						</div>
					</div>
				</div>

				
				<div class="col-lg-4 icon_box_col">
					<div class="icon_box d-flex flex-column align-items-center justify-content-start text-center">
						<div class="icon_box_icon"><img src={icon_2} class="svg" alt="https://www.flaticon.com/authors/monkik"/></div>
						<div class="icon_box_title"><h2>Infinity Pool</h2></div>
						<div class="icon_box_text">
							<p>Our stunning infinity pool is more than just a place to swim—it's an experience. Seamlessly blending with the horizon, the crystal-clear waters of our infinity pool create a mesmerizing illusion where the sky meets the water.</p>
						</div>
					</div>
				</div>

				{/* <!-- Icon Box --> */}
				<div class="col-lg-4 icon_box_col">
					<div class="icon_box d-flex flex-column align-items-center justify-content-start text-center">
						<div class="icon_box_icon"><img src={icon_3} class="svg" alt="https://www.flaticon.com/authors/monkik"/></div>
						<div class="icon_box_title"><h2>Luxury Rooms</h2></div>
						<div class="icon_box_text">
							<p>Whether you’re here for business or leisure, our luxury rooms provide a peaceful haven where you can unwind, recharge, and enjoy the finer things in life. Experience the ultimate in comfort and sophistication with a stay in one of our luxury rooms.</p>
						</div>
					</div>
				</div>

			</div>
		</div>
	</div>
	{/* <div class="testimonials_slider_container">

						
<div class="owl-carousel owl-theme test_slider">
	

	<div  class="test_slider_item text-center"> */}

	<div class="gallery">
	<div class="booking_title text-center"><h2>Da Chimney Gallery</h2></div>
			<div class="testimonials_slider_container">
			<div class="owl-carousel owl-theme test_slider"data-parallax="scroll" data-speed="0.8">
				
				
				{/* <div class="test_slider_item">
					<div class="background_image" style={{ backgroundImage:`url(${gallery_1})`}}></div>
					<a class="colorbox" href={gallery_1}></a>
				</div> */}

			
				<div class="gallery_item">
					<div class="background_image" style={{ backgroundImage:`url(${gallery_2})`}}></div>
					<a class="colorbox" href={gallery_2}></a>
				</div>

				
				<div class="gallery_item">
					<div class="background_image" style={{ backgroundImage:`url(${gallery_3})`}}></div>
					<a class="colorbox" href={gallery_3}></a>
				</div>

				
				<div class="gallery_item">
					<div class="background_image" style={{ backgroundImage:`url(${gallery_4})`}}></div>
					<a class="colorbox" href={gallery_4}></a>
				</div>
				<div class="gallery_item">
					<div class="background_image" style={{ backgroundImage:`url(${gallery_5})`}}></div>
					<a class="colorbox" href={gallery_5}></a>
				</div>
				<div class="gallery_item">
					<div class="background_image" style={{ backgroundImage:`url(${gallery_6})`}}></div>
					<a class="colorbox" href={gallery_6}></a>
				</div>
				<div class="gallery_item">
					<div class="background_image" style={{ backgroundImage:`url(${gallery_7})`}}></div>
					<a class="colorbox" href={gallery_7}></a>
				</div>
				<div class="gallery_item">
					<div class="background_image" style={{ backgroundImage:`url(${gallery_8})`}}></div>
					<a class="colorbox" href={gallery_8}></a>
				</div>
				<div class="gallery_item">
					<div class="background_image" style={{ backgroundImage:`url(${gallery_9})`}}></div>
					<a class="colorbox" href={gallery_9}></a>
				</div>
				<div class="gallery_item">
					<div class="background_image" style={{ backgroundImage:`url(${gallery_10})`}}></div>
					<a class="colorbox" href={gallery_10}></a>
				</div>
			</div>
		</div>
	</div>

	

	<div class="about">
		<div class="container">
			<div class="row">
				
			
				<div class="col-lg-8">
					<div class="about_content">
						<div class="about_title"><h2>Da Chimney Restaurant & Bar / 10 years of excellence</h2></div>
						<div class="about_text">
							<p>Da Chimney Restaurant & Bar, Jabi, is a charming spot tucked away in the heart of Abuja. Offering a unique combination of delicious food and a tranquil environment, this place is a favorite among locals and tourists alike.Visitors rave about the relaxing atmosphere, perfect for unwinding with friends and family. The staff at Da Chimney are known for their excellent customer service, ensuring an enjoyable experience for all guests. The food is always of high-quality, with the Rogan Josh being a notable favorite for its mouth-watering flavors. </p>
						</div>
					</div>
				</div>

				
				<div class="col-lg-4">
					<div class="about_images d-flex flex-row align-items-center justify-content-between flex-wrap">
						<img src="images/about_1.png" alt=""/>
						<img src="images/about_2.png" alt=""/>
						{/* <img src="images/about_3.png" alt=""/> */}
					</div>
				</div>
			</div>
		</div>
	</div>

	

	<div class="testimonials" style={{backgroundImage:`url(${hero_image1})`,backgroundRepeat:"revert-layer"}}>
		<div class="parallax_background parallax-window" data-parallax="scroll" data-image-src={testimonials} data-speed="0.8"></div>
		<div class="testimonials_overlay"></div>
		<div class="container">
			<div class="row">
				<div class="col">
					<div class="testimonials_slider_container">
						<div class="owl-carousel owl-theme test_slider">
							<div  class="test_slider_item text-center">
								<div class="rating rating_5 d-flex flex-row align-items-start justify-content-center"><i></i><i></i><i></i><i></i><i></i></div>
								<div class="testimonial_title"><a href="#">Perfect Stay</a></div>
								<div class="testimonial_text">
									<p>Etiam nec odio vestibulum est mattis effic iturut magna. Pellentesque sit amet tellus blandit. Etiam nec odio vestibulum est mattis effic.</p>
								</div>
								<div class="testimonial_image"><img src={user_1} alt=""/></div>
								<div class="testimonial_author"><a href="#">Samantha Smith</a>, Greece</div>
							</div>

							
							<div  class="test_slider_item text-center">
								<div class="rating rating_5 d-flex flex-row align-items-start justify-content-center"><i></i><i></i><i></i><i></i><i></i></div>
								<div class="testimonial_title"><a href="#">Nice place</a></div>
								<div class="testimonial_text">
									<p>Etiam nec odio vestibulum est mattis effic iturut magna. Pellentesque sit amet tellus blandit. Etiam nec odio vestibulum est mattis effic.</p>
								</div>
								<div class="testimonial_image"><img src={user_2} alt=""/></div>
								<div class="testimonial_author"><a href="#">Michael Doe</a>, Italy</div>
							</div>

							
							<div  class="test_slider_item text-center">
								<div class="rating rating_5 d-flex flex-row align-items-start justify-content-center"><i></i><i></i><i></i><i></i><i></i></div>
								<div class="testimonial_title"><a href="#">We loved it</a></div>
								<div class="testimonial_text">
									<p>Etiam nec odio vestibulum est mattis effic iturut magna. Pellentesque sit amet tellus blandit. Etiam nec odio vestibulum est mattis effic.</p>
								</div>
								<div class="testimonial_image"><img src={user_3} alt=""/></div>
								<div class="testimonial_author"><a href="#">Luis Garcia</a>, Spain</div>
							</div>

						</div>
					</div>
				</div>
			</div>
		</div>
	</div>



	<div class="booking">
		<div class="container">
			<div class="row">
				<div class="col">
					<div class="booking_title text-center"><h2>Book a room</h2></div>
					<div class="booking_text text-center">
						<p>At Dachimney, we are more than just a hotel and restaurant; we are a place where comfort meets elegance, and where every guest is treated with the utmost care. Come and experience the difference at Dachimney Restaurant and Hotel in Wuse 2 – your home away from home.</p>
					</div>

				
					<div class="booking_slider_container">
						<div class="owl-carousel owl-theme booking_slider">
							
							
							<div class="booking_item">
								<div class="background_image" style={{ backgroundImage: `url(${bedroom_1})` }}></div>
								<div class="booking_overlay trans_200"></div>
								<div class="booking_price">$120/Night</div>
								<div class="booking_link"><a href="booking.html">Family Room</a></div>
							</div>

						
							<div class="booking_item">
								<div class="background_image" style={{ backgroundImage: `url(${bedroom_2})` }}></div>
								<div class="booking_overlay trans_200"></div>
								<div class="booking_price">$120/Night</div>
								<div class="booking_link"><a href="booking.html">Deluxe Room</a></div>
							</div>

							
							<div class="booking_item">
								<div class="background_image" style={{ backgroundImage: `url(${bedroom_2})` }}></div>
								<div class="booking_overlay trans_200"></div>
								<div class="booking_price">$120/Night</div>
								<div class="booking_link"><a href="booking.html">Single Room</a></div>
							</div>

						</div>
					</div>
				</div>
			</div>
		</div>
	</div>

    </>
  );
}

export default Landingpage;