import React from 'react'
import '../../App.css';
import Navbar from '../Navbar/Navbar';
import contactusimage from "./contactus.jpeg"
import contactusimage1 from "./contactus_background.jpeg"

const Contactus = () => {
    const sliderData = [
        {
            id: 1,
            title: "Contact Us",
            image: contactusimage,

        }
        // },
        // {
        //     id: 2,
        //     title: "A Luxury Stay",
        //     image: contactusimage1,

        // },
        // Add more slides as needed
    ];
    return (
        <>

            <div className="super_container">
                {/* <div class="menu trans_400 d-flex flex-column align-items-end justify-content-start">
		<div class="menu_close"><i class="fa fa-times" aria-hidden="true"></i></div>
		<div class="menu_content">
			<nav class="menu_nav text-right">
				<ul>
					<li><a href="index.html">Home</a></li>
					<li><a href="about.html">About us</a></li>
					<li><a href="#">Rooms</a></li>
					<li><a href="blog.html">Blog</a></li>
					<li><a href="contact.html">Contact</a></li>
				</ul>
			</nav>
		</div>
		<div class="menu_extra">
			<div class="menu_book text-right"><a href="#">Book online</a></div>
			<div class="menu_phone d-flex flex-row align-items-center justify-content-center">
				<img src="images/phone-2.png" alt=""/>
				<span>0183-12345678</span>
			</div>
		</div>
	</div> */}

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
                                                            {/* <form action="#" className="booking_form">
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
                          </form> */}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>


                    </div>
                </div>

                {/* <div class="home">
		<div class="background_image" style={{backgroundImage:`url(${contactusimage})`}}></div>
		<div class="home_container">
			<div class="container">
				<div class="row">
					<div class="col">
						<div class="home_content text-center">
							<div class="home_title">Contact</div>
							<div class="booking_form_container">
								<form action="#" class="booking_form" id="booking_form">
									<div class="d-flex flex-xl-row flex-column align-items-start justify-content-start">
										<div class="booking_input_container d-flex flex-row align-items-start justify-content-start flex-wrap">
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
	</div> */}
                <div class="contact">
                    <div class="container">
                        <div class="row mt-4">
                            <div class="contact_title text-center"><h2>Get in touch</h2></div>
                            <div class="col-md-6 d-flex justify-content-center">
                                <div class="contact_list">


                                    <ul>
                                        <li><h3>Address</h3></li>
                                        <li><p>Main Str, no 253, New York, NY</p></li>
                                        <li><p>+546 990221 123</p></li>
                                        <li><p>music@contact.com</p></li>
                                    </ul>
                                </div>
                                <div class="contact_map">



                                    <div class="map">
                                        <div id="google_map" class="google_map">
                                            <div class="map_container">
                                                <div id="map"></div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div class="col-md-6">
                            <div class="form-floating mb-3">
                                    <input type="text" class="form-control" id="floatingInput" placeholder="Name" />
                                    <label for="floatingInput">Enter Your Name</label>
                                </div>
                                <div class="form-floating mb-3">
                                    <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" />
                                    <label for="floatingInput">Enter Your Email address</label>
                                </div>
                                <div class="form-floating mb-3">
                                    <input type="text" class="form-control" id="floatingPassword" placeholder="Contact Number" />
                                    <label for="floatingPassword">Enter Your Phone Number</label>
                                </div>
                                <div class="form-floating mb-3">
                                    <textarea type="text" class="form-control" id="floatingPassword" placeholder="Contact Number" />
                                    <label for="floatingPassword">Remark</label>
                                </div>
                                <div className='text-center'>

                                <button type="button" class="btn btn-secondary rounded">Submit</button>
                                </div>
                            </div>

                           

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contactus