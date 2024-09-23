class MyHeader extends HTMLElement {
   connectedCallback() {
     this.innerHTML = `
                 <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Home-EAPL</title>
    <!-- Bootstrap CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet">
    <!-- Bootstrap Icons -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons/font/bootstrap-icons.css">
    <!-- Custom CSS -->
    <style>
      .navbar {
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
          padding: 0; /* Remove padding */
      }

      .navbar-nav {
          margin: 0; /* Remove margin */
      }

      .navbar-nav .nav-link {
          padding: 0.5rem 1rem; /* Adjust padding as needed */
          transition: color 0.3s;
      }

      .navbar-nav .nav-link:hover {
          color: #0070aa;
      }

      .dropdown-menu {
          padding: 0; /* Remove padding from dropdown */
          margin: 0; /* Remove margin from dropdown */
          position: absolute; /* Set position to absolute */
          left: 0; /* Align dropdown to the left edge */
          transform: translateX(450px)translateY(0px); /* Adjust for overflow */
          min-width: 200px; /* Set a minimum width for the dropdown */
      }

      .dropdown-item {
          padding: 0.25rem 1rem; /* Adjust dropdown item padding */
      }

      /* Media Query for smaller screens */
      @media (max-width: 768px) {
          .dropdown-menu {
              left: 0; /* Align dropdown to the left edge of the navbar */
              transform: none; /* Remove transform for mobile */
          }

          .navbar-nav .nav-link {
              padding: 0.5rem; /* Reduce padding for mobile */
          }
      }
  </style>
</head>
<body>

<nav class=" navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
        <a class="navbar-brand" href="index.html">
            <img src="./images/new_logo.png" alt="EAPL Logo" width="224" height="40" class="d-inline-block align-text-center">
        </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav ms-auto">
                <li class="nav-item">
                    <a class="nav-link" aria-current="page" href="about.html">About Us</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="segment.html">Segment Play</a>
                </li>
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Products & Solutions
                    </a>
                    <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                        <li class="d-flex">
                            <ul class="list-unstyled p-2">
                                <li><a class="dropdown-item" href="Electronic Timer.html">Electronic Timers</a></li>
                                <li><a class="dropdown-item" href="digital-timers.html">Digital Timers</a></li>
                                <li><a class="dropdown-item" href="Programmable Alarm Annunciators.html">Programmable Annunciator</a></li>
                                <li><a class="dropdown-item" href="auxiliary relays.html">Auxiliary Relays</a></li>
                                <li><a class="dropdown-item" href="Digital Time Switches.html">Digital Time Switch</a></li>
                                <li><a class="dropdown-item" href="Electronic Solid state Buzzer.html">Electronic Solid State Buzzer</a></li>
                            </ul>
                            <ul class="list-unstyled p-2">
                                <li><a class="dropdown-item" href="Sequential Timers- S Series.html">Sequential Timers - S Series</a></li>
                                <li><a class="dropdown-item" href="Combination Timers.html">Combination Timers</a></li>
                                <li><a class="dropdown-item" href="ENERGY METER.html">Energy Meter</a></li>
                                <li><a class="dropdown-item" href="Universal Temperature Controller.html">Temperature Controller</a></li>
                                <li><a class="dropdown-item" href="Protection Relays.html">Protection Relays</a></li>
                                <li><a class="dropdown-item" href="Preset Counters.html">Preset Counters</a></li>
                            </ul>
                            <ul class="list-unstyled p-2">
                                <li><a class="dropdown-item" href="Digital Non-Contact Tachometer.html">Tachometer</a></li>
                                <li><a class="dropdown-item" href="Switch Mode Power Supplies.html">Power Supply Module</a></li>
                                <li><a class="dropdown-item" href="Light Switch.html">Light Switch</a></li>
                                <li><a class="dropdown-item" href="Photo Sensing Relay.html">Photo Relay</a></li>
                                <li><a class="dropdown-item" href="PUMP CONTROLLER.html">Pump Controller</a></li>
                                <li><a class="dropdown-item" href="SPPT – Autoswitch.html">SPPT - AutoSwitch</a></li>
                            </ul>
                        </li>
                    </ul>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="blog.html">News & Events</a>
                </li>
                <li class="nav-item">
                    <a href="https://93b608-7d.myshopify.com/" class="btn btn-outline-secondary xeshop" id="xeshop">e-Shop</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="contact.html">Contact</a>
                </li>
            </ul>
        </div>
    </div>
</nav>

<!-- Bootstrap JS (includes Popper.js) -->
<script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.10.2/dist/umd/popper.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.min.js"></script>

</body>
</html>
     `;
   }
 }

 class MyFooter extends HTMLElement {
   connectedCallback() {
     this.innerHTML = `
       <section class="container connect-with-us py-5">
         <div class="button-container connect-with-us">
           <h1 id="future">Let's make the <b>future possible</b></h1><br>
           <a href="contact.html" class="connect-button">Connect with us</a>
         </div>
       </section>
       <footer class="footer">
         <div class="container text-white py-5">
           <div class="row">
             <div class="col-md-2">
               <h5>About us</h5>
               <ul class="list-unstyled">
                 <li>Who we are</li>
                 <li>Vision, Mission & Values</li>
                 <li>Our Story</li>
                 <li>Leadership Team</li>
                 <li>Technology & Innovation</li>
                 <li>Our infrastructure</li>
               </ul>
             </div>
             <div class="col-md-2">
               <h5>Segment Play</h5>
               <ul class="list-unstyled">
                 <li>Buildings</li>
                 <li>Utility</li>
                 <li>Industry</li>
                 <li>Mobility</li>
                 <li>Smart Cities</li>
               </ul>
             </div>
             <div class="col-md-2">
               <h5>Products & Solutions</h5>
               <ul class="list-unstyled">
                 <li>Process Control</li>
                 <li>Machine Control</li>
                 <li>Power Control</li>
                 <li>Sensors</li>
                 <li>Relays</li>
                 <li>Meters</li>
                 <li>Annunciators</li>
                 <li>Power Supplies</li>
               </ul>
             </div>
             <div class="col-md-2">
               <h5>News & Events</h5>
               <ul class="list-unstyled">
                 <li>Events</li>
                 <li>Media</li>
               </ul>
             </div>
             <div class="col-md-2">
               <h5>eShop</h5>
             </div>
             <div class="col-md-2">
               <h5>Contact</h5>
               <ul class="list-unstyled">
                 <li>Downloads</li>
                 <li>Product Spreadsheet</li>
                 <li>Safety Measures</li>
                 <li>Terms and Policy</li>
               </ul>
             </div>
           </div>
           <div class="row mt-4 social-media">
             <div class="col">
               <h5>Connect with Us</h5>
               <ul class="list-inline">
                 <li class="list-inline-item"><a href="https://in.linkedin.com/company/eapl-group---india"><i class="bi bi-linkedin"></i></a></li>
               </ul>
             </div>
           </div>
           <div class="right-align-container container">
             <img src="./images/Kruger Logo.png" alt="association logo" width="260" height="40" class="d-inline-block association">
           </div>
           <hr>
           <p>© ELECTRONIC AUTOMATION PRIVATE LIMITED</p>
         </div>
       </footer>
     `;
   }
 }

 customElements.define('my-header', MyHeader);
 customElements.define('my-footer', MyFooter);