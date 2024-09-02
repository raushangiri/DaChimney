import React from 'react'
import gallery_1 from '../img/gallary_1.jpeg';
import gallery_2 from '../img/gallary_2.jpeg';
import gallery_3 from '../img/gallary_3.jpeg';
import gallery_4 from '../img/gallary_4.jpeg';
import gallery_5 from '../img/gallary_5.jpeg';
import gallery_6 from '../img/gallary_6.jpeg';
import gallery_7 from '../img/gallary_7.jpeg';
import gallery_8 from '../img/gallary_8.jpeg';
import gallery_9 from '../img/gallary_9.jpeg';

import gallery_10 from '../img/galary_10.jpeg';
import gallery_11 from '../img/galary_11.jpeg';
import gallery_12 from '../img/galary_12.jpeg';
import gallery_13 from '../img/bar.jpeg';
import gallery_14 from '../img/bar_1.jpeg';
import gallery_15 from '../img/bar_2.jpeg';
import gallery_16 from '../img/bar_3.jpeg';
import hero_image1 from '../img/landing_page_1.jpeg';
import hero_image2 from '../img/landing_page_2.jpeg';
const Galleryfile = () => {

    const galleryData = [
		{ id: 1, imageUrl: gallery_1 },
		{ id: 2, imageUrl: gallery_2 },
		{ id: 3, imageUrl: gallery_3 },
		{ id: 4, imageUrl: gallery_4 },
		{ id: 5, imageUrl: gallery_5 },
		{ id: 6, imageUrl: gallery_6 },
		{ id: 7, imageUrl: gallery_7 },
		{ id: 8, imageUrl: gallery_8 },
		{ id: 9, imageUrl: gallery_9 },
		{ id: 10, imageUrl: gallery_10 },
		{ id: 11, imageUrl: gallery_11 },
		{ id: 12, imageUrl: gallery_12 },
		{ id: 13, imageUrl: gallery_13 },
		{ id: 14, imageUrl: gallery_14 },
		{ id: 15, imageUrl: gallery_15 },
		{ id: 16, imageUrl: gallery_16 },
		
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
    
  

<div className="home">
      <div className="home_slider_container">
        <div className="owl-carousel owl-theme home_slider">
          {sliderData.map((slide) => (
            <div className="slide" key={slide.id}>
              <div
                className="background_image"
                style={{ backgroundImage: `url(${slide.image})` }}
              ></div>
              <div className="home_container">
                <div className="container">
                  <div className="row">
                    <div className="col">
                      <div className="home_content text-center">
                        <div className="home_title">{slide.title}</div>
                        <div className="booking_form_container">
                          <form action="#" className="booking_form">
                            <div className="d-flex flex-xl-row flex-column align-items-start justify-content-start">
                              <div className="booking_input_container d-flex flex-lg-row flex-column align-items-start justify-content-start">
                                {slide.inputs.map((input, index) => (
                                  <div key={index}>
                                    <input
                                      type={input.type}
                                      className={input.className}
                                      placeholder={input.placeholder}
                                      required={input.required}
                                    />
                                  </div>
                                ))}
                              </div>
                              <div>
                                <button className="booking_button trans_200">
                                  {slide.buttonText}
                                </button>
                              </div>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Home Slider Dots */}
        <div className="home_slider_dots_container">
          <div className="home_slider_dots">
            <ul
              id="home_slider_custom_dots"
              className="home_slider_custom_dots d-flex flex-row align-items-start justify-content-start"
            >
              {sliderData.map((_, index) => (
                <li
                  className={`home_slider_custom_dot ${index === 0 ? 'active' : ''}`}
                  key={index}
                >
                  {/* {`0${index + 1}.`} */}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
	<div className="gallery">
    <div className='row'>
		

      {galleryData.map((item) => (
        <div className='col-md-3 mt-2'>
		<div className="gallery_item" key={item.id}>
          <div className="background_image" style={{ backgroundImage: `url(${item.imageUrl})` }}></div>
          <a className="colorbox" href={item.imageUrl}></a>
        </div>
		</div>
      ))}
  		
	</div>

</div> 
	{/* <div class="gallery">
		<div class="gallery_slider_container">
			<div class="owl-carousel owl-theme gallery_slider">
				
				
				<div class="gallery_item">
					<div class="background_image" style={{ backgroundImage:`url(${gallery_1})`}}></div>
					<a class="colorbox" href={gallery_1}></a>
				</div>

			
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

			</div>
		</div>
	</div> */}
    </>
  )
}

export default Galleryfile