async function loadNavbar() {
  const navbarHTML = `
<div class="container-fluid position-absolute">
      <nav class="navbar navbar-expand-lg navbar-dark">
        <a href="/index.html">Rajan Jangra</a>
         
        <div class="collapse navbar-collapse" id="navbarNav">
          <div class="main-nav d-lg-flex gap-4 ms-auto">
     
          </div>
          <div class="nav d-lg-flex align-items-center gap-4">
            <div class="nav-links d-none d-lg-flex mt-2">
              <a class="me-3 px-3" href="mailto:rajanixd@gmail.com">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-mail"
                >
                  <rect width="20" height="16" x="2" y="4" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
              </a>
              <a class="px-3" target="_blank" href="https://www.linkedin.com/in/rajanjangra">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-linkedin"
                >
                  <path
                    d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"
                  />
                  <rect width="4" height="12" x="2" y="9" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </nav>
    </div>
    `;

  // Create a container for the navbar
  const navbarContainer = document.createElement("div");
  navbarContainer.innerHTML = navbarHTML;

  // Insert the navbar at the beginning of the body
  document.body.insertAdjacentElement("afterbegin", navbarContainer);
}

// Call loadNavbar when the DOM is fully loaded
document.addEventListener("DOMContentLoaded", loadNavbar);
