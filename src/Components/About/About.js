import React from 'react'
import hero_image1 from '../img/bedroom_1.jpeg';
import milestone from '../img/about-1.jpg';
import loader from '../img/loaders.jpeg';
import about_1 from '../img/about_5.png'
import about_2 from '../img/about_6.png'

const About = () => {

    const sliderData = [
        {
          id: 1,
          title: "About Us",
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
        }
         
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

	<div class="about">
		<div class="container">
			<div class="row">
				
			
				<div class="col-lg-8">
					<div class="about_content">
						<div class="about_title"><h2>Da Chimney Restaurant & Bar / 10 years of excellence</h2></div>
						<div class="about_text">
							<p>Da Chimney Restaurant & Bar, Jabi, is a charming spot tucked away in the heart of Abuja. Offering a unique combination of delicious food and a tranquil environment, this place is a favorite among locals and tourists alike.Visitors rave about the relaxing atmosphere, perfect for unwinding with friends and family. The staff at Da Chimney are known for their excellent customer service, ensuring an enjoyable experience for all guests. The food is always of high-quality, with the Rogan Josh being a notable favorite for its mouth-watering flavors. </p>
						</div>
                        <div class="about_text">
                        <p>
                        Da Chimney is located in the shining city of Abuja.
We serve the finest Indian cuisine in Abuja made from authentic spices by chefs from many countries!We invite you to come and have a dining experience.Share your experience with us and let know how we can serve you better
</p>
</div>
					</div>
				</div>

				
				<div class="col-lg-4">
					<div class="about_images d-flex flex-row align-items-center justify-content-between flex-wrap">
						<img src={about_1} alt=""/>
						<img src={about_2} alt=""/>
						{/* <img src="images/about_3.png" alt=""/> */}
					</div>
				</div>
			</div>
		</div>
	</div>
    <div class="split_section_right container_custom">
		<div class="container">
			<div class="row row-xl-eq-height">
				
				<div class="col-xl-6 order-xl-1 order-2">
					<div class="split_section_image">
						<div class="background_image" style={{backgroundImage:`url(${milestone})`}}></div>
					</div>
				</div>

				<div class="col-xl-6 order-xl-2 order-1">
					<div class="split_section_right_content">
						<div class="split_section_title"><h1>Event Management</h1></div>
						<div class="split_section_text">
							<p>Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Suspendisse nec faucibus velit. Quisque eleifend orci ipsum, a bibendum lacus suscipit sit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Suspendisse nec faucibus velit. Quisque eleifend orci ipsum, a bibendum lacus suscipit sit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Suspendisse nec faucibus velit. Quisque eleifend orci.</p>
						</div>

					
						<div class="milestones_container d-flex flex-row align-items-start justify-content-start flex-wrap">
								
						
							<div class="milestone d-flex flex-row align-items-start justify-content-start">
								<div class="milestone_content">
									<div class="milestone_counter" data-end-value="45">0</div>
									<div class="milestone_title">Rooms available</div>
								</div>
							</div>

							
							<div class="milestone d-flex flex-row align-items-start justify-content-start">
								<div class="milestone_content">
									<div class="milestone_counter" data-end-value="21" data-sign-after="K">0</div>
									<div class="milestone_title">Tourists this year</div>
								</div>
							</div>

							
							<div class="milestone d-flex flex-row align-items-start justify-content-start">
								<div class="milestone_content">
									<div class="milestone_counter" data-end-value="2">0</div>
									<div class="milestone_title">Swimming pools</div>
								</div>
							</div>

						</div>
					</div>
				</div>

			</div>
		</div>
	</div>

	

	<div class="split_section_left container_custom">
		<div class="container">
			<div class="row">
				<div class="col-xl-6">
					<div class="split_section_left_content">
						<div class="split_section_title"><h1>In House Party Management</h1></div>
						<div class="split_section_text">
							<p>Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Suspendisse nec faucibus velit. Quisque eleifend orci ipsum, a bibendum lacus suscipit sit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Suspendisse nec faucibus velit. Quisque eleifend orci ipsum, a bibendum lacus suscipit sit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Suspendisse nec faucibus velit. Quisque eleifend orci.</p>
						</div>

					
						<div class="loaders_container d-flex flex-row align-items-start justify-content-start flex-wrap">
							
					
							<div class="loader_container text-center">
								<div class="loader text-center" data-perc="0.9">
									<div class="loader_content">
										<div class="loader_title">Good Services</div>
									</div>
								</div>
							</div>

							
							<div class="loader_container text-center">
								<div class="loader text-center" data-perc="0.8">
									<div class="loader_content">
										<div class="loader_title">Tourists</div>
									</div>
								</div>
							</div>

						
							<div class="loader_container text-center">
								<div class="loader text-center" data-perc="1.0">
									<div class="loader_content">
										<div class="loader_title">Satisfaction</div>
									</div>
								</div>
							</div>

						</div>
					</div>
				</div>

				
				<div class="col-xl-6">
					<div class="split_section_image split_section_left_image">
						<div class="background_image" style={{backgroundImage:`url(${loader}`}}></div>
					</div>
				</div>

			</div>
		</div>
	</div>
    </>
  )
}

export default About