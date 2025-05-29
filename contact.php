<?php include "header.php"; ?>

<!-- Bread-Crumb style two -->
<!-- rts breadcrumba area start -->
<div class="rts-bread-crumb-area ptb--150 ptb_sm--100 bg-breadcrumb bg_image">
    <div class="container">
        <div class="row">
            <div class="col-lg-12">
                <!-- bread crumb inner wrapper -->
                <div class="breadcrumb-inner text-center">
                    <h1 class="title">Contact Us</h1>
                    <div class="meta">
                        <a href="#" class="prev">Home /</a>
                        <a href="#" class="next">Contact Us</a>
                    </div>
                </div>
                <!-- bread crumb inner wrapper end -->
            </div>
        </div>
    </div>
</div>
<!-- rts breadcrumba area end -->
<!-- Bread-Crumb style two End -->

<!-- rts contact area start -->
<div class="rts-contact-area-m rts-section-gap">
    <div class="container">
        <div class="row g-24">
            <!-- single contact area -->
            <div class="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12">
                <div class="single-contact-one-inner">
                    <div class="thumbnail">
                        <img src="assets/images/contact/01.jpg" alt="">
                    </div>
                    <div class="content">
                        <div class="icone">
                            <img src="assets/images/contact/shape/01.svg" alt="">
                        </div>
                        <div class="info">
                            <span>Call Us 24/7</span>
                            <a href="tel:+260966870070">
                                <h5>(+260) 966-870-070</h5>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <!-- single contact area end -->
            <!-- single contact area -->
            <div class="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12">
                <div class="single-contact-one-inner">
                    <div class="thumbnail">
                        <img src="assets/images/contact/02.jpg" alt="">
                    </div>
                    <div class="content">
                        <div class="icone">
                            <img src="assets/images/contact/shape/02.svg" alt="">
                        </div>
                        <div class="info">
                            <span>Make A Quote</span>
                            <a href="mailto:someone@example.com">
                                <h5>info@makhulu.com</h5>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <!-- single contact area end -->
            <!-- single contact area -->
            <div class="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12">
                <div class="single-contact-one-inner">
                    <div class="thumbnail">
                        <img src="assets/images/contact/03.jpg" alt="">
                    </div>
                    <div class="content">
                        <div class="icone">
                            <img src="assets/images/contact/shape/03.svg" alt="">
                        </div>
                        <div class="info">
                            <span>Service Station</span>
                            <a href="#">
                                <h5>No. 11 Off Katima Mulilo Road, New Olympia Park.</h5>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <!-- single contact area end -->
        </div>
    </div>
</div>
<!-- rts contact area end -->


<!-- contact form area strt -->
<div class="rts-contact-page-form-area rts-section-gapBottom">
    <div class="container">
        <div class="row">
            <div class="mian-wrapper-form">
                <div class="title-mid-wrapper-home-two" data-sal="slide-up" data-sal-delay="150" data-sal-duration="800">
                    <span class="pre">Get In Touch</span>
                    <h2 class="title">Needs Help? Let’s Get in Touch</h2>
                </div>
                <div id="form-messages"></div>
                <form id="contact-form" class="contact-form-contact" action="https://reactheme.com/products/html/elevate/mailer.php" method="post">
                    <div class="name-email">
                        <input type="text" name="name" placeholder="Your Name" required="">
                        <input type="email" name="email" placeholder="Email Address" required="">
                    </div>
                    <input type="text" name="subject" placeholder="Your Subject">
                    <textarea placeholder="Type Your Message" name="message"></textarea>
                    <button type="submit" class="rts-btn btn-primary">Send Message</button>
                </form>
            </div>
        </div>
    </div>
</div>
<!-- contact form area end -->

<?php include "footer.php"; ?>
