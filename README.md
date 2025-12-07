<div align="center">

  <h1>🌤️ European Weather Forecast Website</h1>
  
  <p>
    <b>A professional 7-day weather forecasting tool designed for travel agencies to enhance user engagement.</b>
  </p>

  <p>
    <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="HTML5" />
    <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="CSS3" />
    <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript" />
    <img src="https://img.shields.io/badge/API-7Timer-green?style=for-the-badge" alt="7Timer API" />
  </p>
  
  <h4>
    <a href="#">View Live Demo</a>
    <span> · </span>
    <a href="#how-to-use">Documentation</a>
    <span> · </span>
    <a href="https://github.com/sahilbhutto/Euro-Weather/issues">Report Bug</a>
  </h4>
</div>

<br />

---

##  About The Project

This project is a **7-day European weather forecast web application** designed for a travel agency context. 

**The Goal:**
To help website visitors plan their trips effectively by providing real-time weather forecasts for major European cities. By implementing this feature, the travel agency aims to:
* Keep visitors engaged on the website for longer periods.
* Increase potential travel bookings and sales.
* Enhance the overall user experience (UX).

The application is built using the **7Timer API**, which provides reliable weather data without requiring an API key, making it lightweight and easy to deploy.

---

##  Technologies Used

* **HTML5** – Semantic markup for structure and accessibility.
* **CSS3** – Modern styling with gradients, shadows, flexbox, and responsive media queries.
* **JavaScript (ES6+)** – Async/Await for API integration, data processing, and dynamic DOM rendering.
* **7Timer API** – Free external weather data source.
* **Git & GitHub** – Version control and project hosting.

---

##  Features

* **City Selection:** Users can select major European cities from a streamlined dropdown menu.
* **7-Day Forecast:** Displays daily weather including date, temperature, wind speed, and general condition.
* **Weather Icons:** Visual representation of weather conditions (sunny, cloudy, rain, etc.) for quick scanning.
* **Responsive Design:** Works seamlessly on desktop, tablet, and mobile devices.
* **Interactive UI:** Modern cards with hover effects and polished visual hierarchy.

---

## Approach & Thought Process

### The Solution
I created a dynamic Single Page Application (SPA). The project fetches weather data using the 7Timer API and dynamically displays it in a card-based layout. 

### Key Steps:
1.  **UI/UX Design:** Sketched a layout focusing on usability. Applied modern UI principles including gradient backgrounds, rounded cards with shadows, and hover animations.
2.  **API Integration:** Used JavaScript `fetch()` to send requests and handle responses from the 7Timer API.
3.  **Data Parsing:** Processed the raw JSON data to extract specific metrics (Temperature, Wind Speed, Weather Condition).
4.  **Dynamic Rendering:** Used DOM manipulation to inject HTML for the 7-day forecast automatically based on the selected city.
5.  **Responsiveness:** Implemented a CSS Grid/Flexbox layout to ensure the forecast looks good on all screen sizes.

---

##  Project Structure

```bash
EuroWeather/
├─ index.html       # Main HTML page
├─ css/master.css        # Styling
├─ js/main.js        # Logic for API requests
├─ images/           # Weather Icons
├─ city_coordinates.csv/ # Cities coordinates
└─ README.md        # Project documentation

```

## How to Use

Since this project is optimized into a single file, running it is very simple:

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/sahilbhutto/EuroWeather.git
    ```

2.  **Navigate to the project directory:**
    ```bash
    cd EuroWeather
    ```

3.  **Launch the EuroWeather Website:**
    * Simply double-click `index.html` to open it in your web browser.
    * Select a city from the dropdown then `click on Get Forecast button` to view the forecast immediately.


---
##  Author

<div align="center">
  
  <img src="https://github.com/sahilbhutto.png" alt="Profile Picture" width="120" height="120" style="border-radius: 50%; box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);" />

  <h3 style="margin-top: 10px;">Sahil Ali Bhutto</h3>
  
  <p>
     <b>Computer Science Student</b> |  <b>Aspiring Frontend Developer</b>
  </p>
  
  <p>
    I build accessible, pixel-perfect, and performant web applications. <br />
    Currently exploring the world of <b>Artificial Intelligence</b> and <b>Open Source</b>.
  </p>

  <p>
    <a href="https://github.com/sahilbhutto">
      <img src="https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white" alt="GitHub" />
    </a>
    <a href="https://linkedin.com/in/sahilbhutto">
      <img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn" />
    </a>
    <a href="mailto:sahil.bhutto.dev@gmail.com">
      <img src="https://img.shields.io/badge/Email-D14836?style=for-the-badge&logo=gmail&logoColor=white" alt="Email" />
    </a>
  </p>
  
  <br />
  <i>Made by Sahil Ali Bhutto for European travelers</i>

</div>