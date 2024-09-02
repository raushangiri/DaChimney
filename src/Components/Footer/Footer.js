import React from 'react'

const Footer = () => {
  return (
    <>
    <footer class="footer">
		<div class="footer_content">
			<div class="container">
				<div class="row">
					<div class="col">
						<div class="footer_logo_container text-center">
							<div class="footer_logo">
								<a href="#"></a>
								<div>DaChimney</div>
								<div>since 2013</div>
							</div>
						</div>
					</div>
				</div>
				<div class="row footer_row">
					
					<div class="col-lg-4">
						<div class="footer_title">Our Address</div>
						<div class="footer_list">
							<ul>
                              
								<li>2 Aminu Kano Crescent,</li>
								<li>Opp KFC,</li>
								<li>Wuse 2, Abuja</li>
							</ul>
						</div>
					</div>

					<div class="col-lg-4">
						<div class="footer_title">Reservations</div>
						<div class="footer_list">
							<ul>
								<li>Tel: 345 5667 889</li>
								<li>Fax; 6783 4567 889</li>
								<li>reservations@hotelriver.com</li>
							</ul>
						</div>
					</div>

					<div class="col-lg-4">
						<div class="footer_title">Newsletter</div>
						<div class="newsletter_container">
							<form action="#" class="newsletter_form" id="newsletter_form">
								<input type="email" class="newsletter_input" placeholder="Your email address" required="required"/>
								<button class="newsletter_button">Subscribe</button>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="copyright">
Copyright &copy;<script>document.write(new Date().getFullYear());</script> All rights reserved | This template is made with <i class="fa fa-heart-o" aria-hidden="true"></i> by <a href="https://colorlib.com" target="_blank">Colorlib</a>
</div>
	</footer>
    </>
  )
}

export default Footer