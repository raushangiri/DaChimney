import React from 'react'
import Navbar from '../Navbar/Navbar'
import about_1 from '../img/gallary_4.jpeg'
import about_2 from '../img/gallary_5.jpeg'
import about_3 from '../img/gallary_7.jpeg'
import about_4 from '../img/gallary_9.jpeg'
import menu_1 from '../img/menu-1.jpg'
import menu_2 from '../img/menu-2.jpg'
import menu_3 from '../img/menu-3.jpg'
import menu_4 from '../img/menu-4.jpg'
import menu_5 from '../img/menu-5.jpg'
import menu_6 from '../img/menu-6.jpg'
import menu_7 from '../img/menu-7.jpg'
import menu_8 from '../img/menu-8.jpg'
import team_1 from "../img/team-1.jpg"
import team_2 from "../img/team-2.jpg"
import team_3 from "../img/team-3.jpg"
import team_4 from "../img/team-4.jpg"
import testimonial_1 from "../img/testimonial-1.jpg"
import testimonial_2 from "../img/testimonial-2.jpg"
import testimonial_3 from "../img/testimonial-3.jpg"
import testimonial_4 from "../img/testimonial-4.jpg"
import hero from '../img/hero.png'



const Landing = () => {

    const menuItems = [
        {
            id: "tab-1",
            icon: "fa-coffee",
            smallText: "Popular",
            headerText: "Breakfast",
            active: true,
            items: [
                { src: "img/menu-1.jpg", title: "Avocado Toast", price: "₦1200", description: "Toasted sourdough with mashed avocado, lemon, and chili flakes" },
                { src: "img/menu-2.jpg", title: "Pancakes", price: "₦1000", description: "Fluffy pancakes with maple syrup and butter" },
                { src: "img/menu-3.jpg", title: "Eggs Benedict", price: "₦1400", description: "Poached eggs on English muffins with hollandaise sauce" },
                { src: "img/menu-4.jpg", title: "Smoothie Bowl", price: "₦1100", description: "Mixed berries, granola, and coconut flakes in a smoothie bowl" },
                { src: "img/menu-5.jpg", title: "Breakfast Burrito", price: "₦1300", description: "Eggs, cheese, avocado, and salsa in a tortilla wrap" },
                { src: "img/menu-6.jpg", title: "French Toast", price: "₦1200", description: "Brioche bread soaked in eggs and fried, served with syrup" },
                { src: "img/menu-7.jpg", title: "Omelette", price: "₦1100", description: "Three-egg omelette with your choice of fillings" },
                { src: "img/menu-8.jpg", title: "Bagel with Cream Cheese", price: "₦900", description: "Freshly toasted bagel with cream cheese and smoked salmon" },
            ],
        },
        {
            id: "tab-2",
            icon: "fa-hamburger",
            smallText: "Special",
            headerText: "Lunch",
            active: false,
            items: [
                { src: "img/menu-1.jpg", title: "Grilled Chicken Caesar Salad", price: "₦1500", description: "Romaine lettuce, grilled chicken, croutons, and Caesar dressing" },
                { src: "img/menu-2.jpg", title: "Margherita Pizza", price: "₦1400", description: "Classic pizza with tomato sauce, mozzarella, and basil" },
                { src: "img/menu-3.jpg", title: "Sushi Platter", price: "₦2200", description: "Assorted sushi with soy sauce, wasabi, and pickled ginger" },
                { src: "img/menu-4.jpg", title: "Beef Burger", price: "₦1600", description: "Juicy beef patty with lettuce, tomato, and cheese on a brioche bun" },
                { src: "img/menu-5.jpg", title: "Pasta Carbonara", price: "₦1800", description: "Pasta with creamy sauce, pancetta, and Parmesan cheese" },
                { src: "img/menu-6.jpg", title: "Quinoa Salad", price: "₦1300", description: "Quinoa with mixed greens, avocado, and lemon vinaigrette" },
                { src: "img/menu-7.jpg", title: "Fish Tacos", price: "₦1700", description: "Grilled fish with salsa and lime in soft corn tortillas" },
                { src: "img/menu-8.jpg", title: "Chicken Wrap", price: "₦1400", description: "Grilled chicken, lettuce, tomato, and sauce in a whole wheat wrap" },
            ],
        },
        {
            id: "tab-3",
            icon: "fa-utensils",
            smallText: "Lovely",
            headerText: "Dinner",
            active: false,
            items: [
                { src: "img/menu-1.jpg", title: "Steak with Garlic Butter", price: "₦2800", description: "Grilled steak served with garlic butter and mashed potatoes" },
                { src: "img/menu-2.jpg", title: "Lobster Risotto", price: "₦3200", description: "Creamy risotto with chunks of lobster and Parmesan cheese" },
                { src: "img/menu-3.jpg", title: "Vegetarian Lasagna", price: "₦2000", description: "Layers of pasta with vegetables, tomato sauce, and cheese" },
                { src: "img/menu-4.jpg", title: "Roast Chicken", price: "₦2500", description: "Herb-roasted chicken served with seasonal vegetables" },
                { src: "img/menu-5.jpg", title: "Grilled Salmon", price: "₦2700", description: "Grilled salmon fillet with a lemon butter sauce" },
                { src: "img/menu-6.jpg", title: "Shrimp Scampi", price: "₦2600", description: "Shrimp sautéed in garlic, butter, and white wine sauce" },
                { src: "img/menu-7.jpg", title: "Beef Wellington", price: "₦3500", description: "Tender beef fillet wrapped in puff pastry and baked" },
                { src: "img/menu-8.jpg", title: "Vegetable Stir-Fry", price: "₦1800", description: "Mixed vegetables stir-fried in a savory soy sauce" },
            ],
        },
    ];

    const teamMembers = [
        {
            id: 1,
            imgSrc: team_1,
            name: "John Doe",
            designation: "CEO",
            facebookLink: "#",
            twitterLink: "#",
            instagramLink: "#",
        },
        {
            id: 2,
            imgSrc: team_2,
            name: "Jane Smith",
            designation: "CTO",
            facebookLink: "#",
            twitterLink: "#",
            instagramLink: "#",
        },
        {
            id: 3,
            imgSrc: team_3,
            name: "Mike Johnson",
            designation: "COO",
            facebookLink: "#",
            twitterLink: "#",
            instagramLink: "#",
        },
        {
            id: 4,
            imgSrc: team_4,
            name: "Sara Wilson",
            designation: "CFO",
            facebookLink: "#",
            twitterLink: "#",
            instagramLink: "#",
        },
    ];


    return (
    <>

            <div class="container-fluid py-5 bg-dark hero-header mb-5">
                <div class="container my-5 py-5">
                    <div class="row align-items-center g-5">
                        <div class="col-lg-6 text-center text-lg-start">
                            <h1 class="display-3 text-white animated slideInLeft">Enjoy Our<br />Delicious Meal</h1>
                            <p class="text-white animated slideInLeft mb-4 pb-2">DACHIMNEY serves a variety of culinary wonders from Indian to Nigerian and is the freshest Indian restaurant in Abuja!</p>
                            <a href="" class="btn btn-primary py-sm-3 px-sm-5 me-3 animated slideInLeft">Book A Table</a>
                        </div>
                        <div class="col-lg-6 text-center text-lg-end overflow-hidden">
                            <img class="img-fluid" src={hero} alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <div class="container-xxl py-5">
                <div class="container">
                    <div class="row g-4">
                        <div class="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.1s">
                            <div class="service-item rounded pt-3">
                                <div class="p-4">
                                    <i class="fa fa-3x fa-user-tie text-primary mb-4"></i>
                                    <h5>Master Chefs</h5>
                                    <p>Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.3s">
                            <div class="service-item rounded pt-3">
                                <div class="p-4">
                                    <i class="fa fa-3x fa-utensils text-primary mb-4"></i>
                                    <h5>Quality Food</h5>
                                    <p>Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.5s">
                            <div class="service-item rounded pt-3">
                                <div class="p-4">
                                    <i class="fa fa-3x fa-cart-plus text-primary mb-4"></i>
                                    <h5>Online Order</h5>
                                    <p>Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.7s">
                            <div class="service-item rounded pt-3">
                                <div class="p-4">
                                    <i class="fa fa-3x fa-headset text-primary mb-4"></i>
                                    <h5>24/7 Service</h5>
                                    <p>Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* <!-- About Start --> */}
            <div class="container-xxl py-5">
                <div class="container">
                    <div class="row g-5 align-items-center">
                        <div class="col-lg-6">
                            <div class="row g-3">
                                <div class="col-6 text-start">
                                    <img class="img-fluid rounded w-100 wow zoomIn" data-wow-delay="0.1s" src={about_1} />
                                </div>
                                <div class="col-6 text-start">
                                    <img class="img-fluid rounded w-75 wow zoomIn" data-wow-delay="0.3s" src={about_2} style={{ marginTop: "25%;" }} />
                                </div>
                                <div class="col-6 text-end">
                                    <img class="img-fluid rounded w-75 wow zoomIn" data-wow-delay="0.5s" src={about_3} />
                                </div>
                                <div class="col-6 text-end">
                                    <img class="img-fluid rounded w-100 wow zoomIn" data-wow-delay="0.7s" src={about_4} />
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-6">
                            <h5 class="section-title ff-secondary text-start text-primary fw-normal">About Us</h5>
                            <h1 class="mb-4">Welcome to<i class="fa fa-utensils text-primary">Da Chimney</i></h1>
                            <p class="mb-4">Da Chimney Restaurant & Bar, Jabi, is a charming spot tucked away in the heart of Abuja. Offering a unique combination of delicious food and a tranquil environment, this place is a favorite among locals and tourists alike.</p>
                            <p class="mb-4">Visitors rave about the relaxing atmosphere, perfect for unwinding with friends and family. The staff at Da Chimney are known for their excellent customer service, ensuring an enjoyable experience for all guests. </p>
                            <div class="row g-4 mb-4">
                                <div class="col-sm-6">
                                    <div class="d-flex align-items-center border-start border-5 border-primary px-3">
                                        <h1 class="flex-shrink-0 display-5 text-primary mb-0" data-toggle="counter-up">10</h1>
                                        <div class="ps-4">
                                            <p class="mb-0">Years of</p>
                                            <h6 class="text-uppercase mb-0">Experience</h6>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-sm-6">
                                    <div class="d-flex align-items-center border-start border-5 border-primary px-3">
                                        <h1 class="flex-shrink-0 display-5 text-primary mb-0" data-toggle="counter-up">10</h1>
                                        <div class="ps-4">
                                            <p class="mb-0">Popular</p>
                                            <h6 class="text-uppercase mb-0">Master Chefs</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <a class="btn btn-primary py-3 px-5 mt-2" href="">Read More</a>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- About End -->


        <!-- Menu Start --> */}
            <div class="container-xxl py-5">
                <div class="container">
                    <div class="text-center wow fadeInUp" data-wow-delay="0.1s">
                        <h5 class="section-title ff-secondary text-center text-primary fw-normal">Food Menu</h5>
                        <h1 class="mb-5">Most Popular Items</h1>
                    </div>

                    <div className="tab-class text-center wow fadeInUp" data-wow-delay="0.1s">
                        <ul className="nav nav-pills d-inline-flex justify-content-center border-bottom mb-5">
                            {menuItems.map((menu, index) => (
                                <li className="nav-item" key={index}>
                                    <a
                                        className={`d-flex align-items-center text-start mx-3 ${menu.active ? "ms-0 pb-3 active" : "pb-3"
                                            }`}
                                        data-bs-toggle="pill"
                                        href={`#${menu.id}`}
                                    >
                                        <i className={`fa ${menu.icon} fa-2x text-primary`}></i>
                                        <div className="ps-3">
                                            <small className="text-body">{menu.smallText}</small>
                                            <h6 className="mt-n1 mb-0">{menu.headerText}</h6>
                                        </div>
                                    </a>
                                </li>
                            ))}
                        </ul>

                        <div className="tab-content">
                            {menuItems.map((menu, index) => (
                                <div
                                    key={index}
                                    id={menu.id}
                                    className={`tab-pane fade show p-0 ${menu.active ? "active" : ""}`}
                                >
                                    <div className="row g-4">
                                        {menu.items.map((item, itemIndex) => (
                                            <div className="col-lg-6" key={itemIndex}>
                                                <div className="d-flex align-items-center">
                                                    <img
                                                        className="flex-shrink-0 img-fluid rounded"
                                                        src={item.src}
                                                        alt=""
                                                        style={{ width: "80px" }}
                                                    />
                                                    <div className="w-100 d-flex flex-column text-start ps-4">
                                                        <h5 className="d-flex justify-content-between border-bottom pb-2">
                                                            <span>{item.title}</span>
                                                            <span className="text-primary">{item.price}</span>
                                                        </h5>
                                                        <small className="fst-italic">{item.description}</small>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
            {/* <!-- Menu End -->


        <!-- Reservation Start --> */}
            <div class="container-xxl py-5 px-0 wow fadeInUp" data-wow-delay="0.1s">
                <div class="row g-0">
                    <div class="col-md-6">
                        <div class="video">
                            <button type="button" class="btn-play" data-bs-toggle="modal" data-src="https://www.youtube.com/embed/DWRcNpR6Kdc" data-bs-target="#videoModal">
                                <span></span>
                            </button>
                        </div>
                    </div>
                    <div class="col-md-6 bg-dark d-flex align-items-center">
                        <div class="p-5 wow fadeInUp" data-wow-delay="0.2s">
                            <h5 class="section-title ff-secondary text-start text-primary fw-normal">Reservation</h5>
                            <h1 class="text-white mb-4">Book A Table Online</h1>
                            <form>
                                <div class="row g-3">
                                    <div class="col-md-6">
                                        <div class="form-floating">
                                            <input type="text" class="form-control" id="name" placeholder="Your Name" />
                                            <label for="name">Your Name</label>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-floating">
                                            <input type="email" class="form-control" id="email" placeholder="Your Email" />
                                            <label for="email">Your Email</label>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-floating date" id="date3" data-target-input="nearest">
                                            <input type="text" class="form-control datetimepicker-input" id="datetime" placeholder="Date & Time" data-target="#date3" data-toggle="datetimepicker" />
                                            <label for="datetime">Date & Time</label>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-floating">
                                            <select class="form-select" id="select1">
                                                <option value="1">People 1</option>
                                                <option value="2">People 2</option>
                                                <option value="3">People 3</option>
                                            </select>
                                            <label for="select1">No Of People</label>
                                        </div>
                                    </div>
                                    <div class="col-12">
                                        <div class="form-floating">
                                            <textarea class="form-control" placeholder="Special Request" id="message" style={{ height: "100px" }}></textarea>
                                            <label for="message">Special Request</label>
                                        </div>
                                    </div>
                                    <div class="col-12">
                                        <button class="btn btn-primary w-100 py-3" type="submit">Book Now</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            <div class="modal fade" id="videoModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content rounded-0">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Youtube Video</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            {/* <!-- 16:9 aspect ratio --> */}
                            <div class="ratio ratio-16x9">
                                <iframe class="embed-responsive-item" src="" id="video" allowfullscreen allowscriptaccess="always"
                                    allow="autoplay"></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Reservation Start -->


        <!-- Team Start --> */}
            <div class="container-xxl pt-5 pb-3">
                <div class="container">
                    <div class="text-center wow fadeInUp " data-wow-delay="0.1s">
                        <h5 class="section-title ff-secondary text-center text-primary fw-normal">Team Members</h5>
                        <h1 class="mb-5">Our Master Chefs</h1>
                    </div>
                    <div className="row g-4">
                        {teamMembers.map((member, index) => (
                            <div className={`col-lg-3 col-md-6 wow fadeInUp`} data-wow-delay={`${0.1 + index * 0.2}s`} key={member.id}>
                                <div className="team-item text-center rounded overflow-hidden">
                                    <div className="rounded-circle overflow-hidden m-4">
                                        <img className="img-fluid" src={member.imgSrc} alt={member.name} />
                                    </div>
                                    <h5 className="mb-0">{member.name}</h5>
                                    {/* <small>{member.designation}</small> */}
                                    <div className="d-flex justify-content-center mt-3">
                                        <a className="btn btn-square btn-primary mx-1" href={member.facebookLink}>
                                            <i className="fab fa-facebook-f"></i>
                                        </a>
                                        <a className="btn btn-square btn-primary mx-1" href={member.twitterLink}>
                                            <i className="fab fa-twitter"></i>
                                        </a>
                                        <a className="btn btn-square btn-primary mx-1" href={member.instagramLink}>
                                            <i className="fab fa-instagram"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
            {/* <!-- Team End -->


        <!-- Testimonial Start --> */}
            {/* <div class="testimonials ">

                <div class="testimonials_overlay parallax_background parallax-window text-center" data-parallax="scroll" data-speed="0.8">
                    <div class="text-center wow fadeInUp" data-wow-delay="0.1s">
                        <h5 class="section-title ff-secondary text-center text-primary fw-normal">Customer Review</h5>
                        <h1 class="mb-5">Our Customer Says</h1>
                    </div>
                    <div class="row">

                        <div class="col">
                            <div class="testimonials_slider_container">


                                <div class="owl-carousel owl-theme test_slider">


                                    <div class="test_slider_item text-center">

                                        <div class="rating rating_5 d-flex flex-row align-items-start justify-content-center"><i></i><i></i><i></i><i></i><i></i></div>
                                        <div class="testimonial_title"><a href="#">Perfect Stay</a></div>
                                        <div class="testimonial_text">
                                            <p>Etiam nec odio vestibulum est mattis effic iturut magna. Pellentesque sit amet tellus blandit. Etiam nec odio vestibulum est mattis effic.</p>
                                        </div>
                                        <div class="testimonial_image"><img src="images/user_1.jpg" alt="" /></div>
                                        <div class="testimonial_author"><a href="#">Samantha Smith</a>, Greece</div>
                                    </div>


                                    <div class="test_slider_item text-center">
                                        <div class="rating rating_5 d-flex flex-row align-items-start justify-content-center"><i></i><i></i><i></i><i></i><i></i></div>
                                        <div class="testimonial_title"><a href="#">Nice place</a></div>
                                        <div class="testimonial_text">
                                            <p>Etiam nec odio vestibulum est mattis effic iturut magna. Pellentesque sit amet tellus blandit. Etiam nec odio vestibulum est mattis effic.</p>
                                        </div>
                                        <div class="testimonial_image"><img src="images/user_2.jpg" alt="" /></div>
                                        <div class="testimonial_author"><a href="#">Michael Doe</a>, Italy</div>
                                    </div>


                                    <div class="test_slider_item text-center">
                                        <div class="rating rating_5 d-flex flex-row align-items-start justify-content-center"><i></i><i></i><i></i><i></i><i></i></div>
                                        <div class="testimonial_title"><a href="#">We loved it</a></div>
                                        <div class="testimonial_text">
                                            <p>Etiam nec odio vestibulum est mattis effic iturut magna. Pellentesque sit amet tellus blandit. Etiam nec odio vestibulum est mattis effic.</p>
                                        </div>
                                        <div class="testimonial_image"><img src="images/user_3.jpg" alt="" /></div>
                                        <div class="testimonial_author"><a href="#">Luis Garcia</a>, Spain</div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </div> */}
                
            </>
            )
}

            export default Landing