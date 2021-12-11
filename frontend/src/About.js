import React from "react";
import "./About.css";
export default function About() {
  return (
    <div class="container">
      <div class="wrapper">
        <div class="hr">
          <hr />
          <h2>Our Mission</h2>
          <hr />
        </div>

        <p class="mission-txt">"To Organize street vending service"</p>
      </div>

      <div class="wrapper">
        <h2>About</h2>
        <div>
          <img
            src="https://vidyasheela.com/web-contents/website-components/About-Us-Pages/responsive-about-us-page-html/teaching.png"
            alt="img"
          />
          <p>
            Street Vendors face many problems as they are vulnerable population,
            who are neither protected by government, NGOs, labour union nor by
            any labour law. They are deprived by the laws made by government in
            respect of labour union. Some of them can't afford the buildings to
            put their stalls. The basic problems of street vendors is insecurity
            and uncertainity as their profession is considered illegal, but
            according to government of India assesment done in 2004 shows around
            2.5% of local poor urban population survive by working in this
            occupation. If government provide license to street vendors, they
            can be protected by harassment and eviction by local authorities and
            police.The government of Singapore has taken necesssary measurements
            to provide facility to the street hawkers. But not necessarily every
            country could not developed in similar way. So, what should be done
            to stop this?
          </p>

          <h2>What can we do for you?</h2>
          <p>
            We provide the facility to move their equipments to certain location
            which is provided and located by us. The crowded place will be
            chosen so that they can increase their income. And also we help them
            to direct to the government provided schemes. It is just a step to
            help the most common and most underrated sector in our economy where
            everyday is a battlefield to them{" "}
          </p>
        </div>
      </div>

      <div class="wrapper">
        <h2>Our Team</h2>
        <div class="faculties">
          <div class="unit">
            <img src="" alt="" />
            <p>Athreya V Shet</p>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus
              unde aliquid laborum voluptatum distinctio nobis?'
            </p>
          </div>
          <div class="unit">
            <img
              src="https://vidyasheela.com/web-contents/website-components/About-Us-Pages/responsive-about-us-page-html/Principal.jpg"
              alt=""
            />
            <p>Chinmay B S</p>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus
              unde aliquid laborum voluptatum distinctio nobis?'
            </p>
          </div>
          <div class="unit">
            <img
              src="https://vidyasheela.com/web-contents/website-components/About-Us-Pages/responsive-about-us-page-html/vice-principal.jpg"
              alt=""
            />
            <p>Lawn Sethi, Vice Principal</p>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus
              unde aliquid laborum voluptatum distinctio nobis?'
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
