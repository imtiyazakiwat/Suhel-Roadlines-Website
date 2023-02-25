// Define a function to generate the HTML code for the navbar
function generateNavbar() {
    return `
    <nav class="navbar navbar-expand-lg navbar-light bg-black shadow-sm">
    <div class="container">
      <a class="navbar-brand d-flex align-items-center" href="#">
        <img
          src="img/srllogo.png"
          alt="Suhelroadlines Logo"
          class="rounded-circle"
          style="width: 50px; height: 50px"
        />
        <span class="ml-2 text-white">Suhelroadlines</span>
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item active">
            <a class="nav-link text-white" href="/index.html">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link text-white" href="/services.html">Services</a>
          </li>
          <li class="nav-item">
            <a class="nav-link text-white" href="/aboutus.html">About Us</a>
          </li>
          <li class="nav-item">
            <a class="nav-link text-white" href="/contactus.html"
              >Contact Us</a
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
    `;
  }
  