import React from 'react'
import hero_image1 from '../img/homedelivery2.jpeg';
import hero_image2 from '../img/landing_page_2.jpeg';

const homedelivery = () => {
    const sliderData = [
        {
          id: 1,
          title: "Food Delivery",
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
                        {/* <div className="home_title">{slide.title}</div> */}
                        <div className="booking_form_container">
                          <form action="#" className="booking_form">
                            <div className="d-flex flex-xl-row flex-column align-items-start justify-content-start">
                              <div className="booking_input_container d-flex flex-lg-row flex-column align-items-start justify-content-start">
                                {/* {slide.inputs.map((input, index) => (
                                  <div key={index}>
                                    <input
                                      type={input.type}
                                      className={input.className}
                                      placeholder={input.placeholder}
                                      required={input.required}
                                    />
                                  </div>
                                ))} */}
                              </div>
                              <div>
                                {/* <button className="booking_button trans_200">
                                  {slide.buttonText}
                                </button> */}
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
    <div class="container">
        <div className='row'>
            <div className='col-md-6'>

  <form>
    <div class="form-floating mb-3">
      <input type="text" class="form-control" id="floatingName" placeholder="Full Name" required/>
      <label for="floatingName">Full Name</label>
    </div>

    <div class="form-floating mb-3">
      <input type="text" class="form-control" id="floatingAddress" placeholder="Delivery Address" required/>
      <label for="floatingAddress">Delivery Address</label>
    </div>

    <div class="form-floating mb-3">
      <input type="text" class="form-control" id="floatingPhone" placeholder="Phone Number" required/>
      <label for="floatingPhone">Phone Number</label>
    </div>

    <div class="form-floating mb-3">
      <input type="email" class="form-control" id="floatingEmail" placeholder="name@example.com" required/>
      <label for="floatingEmail">Email Address</label>
    </div>

    <div class="form-floating mb-3">
      <select class="form-control" id="floatingFoodItem" required>
        <option value="" selected>Select Food Item</option>
        <option value="pizza">Pizza</option>
        <option value="burger">Burger</option>
        <option value="pasta">Pasta</option>
        <option value="sushi">Sushi</option>
      </select>
      <label for="floatingFoodItem">Food Item</label>
    </div>

    <div class="form-floating mb-3">
      <input type="number" class="form-control" id="floatingQuantity" placeholder="Quantity" min="1" required/>
      <label for="floatingQuantity">Quantity</label>
    </div>

    <div class="form-floating mb-3">
      <textarea class="form-control" placeholder="Additional Instructions" id="floatingInstructions" style={{height: "100px"}}></textarea>
      <label for="floatingInstructions">Additional Instructions</label>
    </div>

    <button type="submit" class="btn btn-primary">Place Order</button>
  </form>
  </div>
        </div>

</div>

    </>
  )
}

export default homedelivery