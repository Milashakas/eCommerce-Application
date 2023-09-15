import gitHub from "../assets/images/github-mark.svg";
import milana from "../assets/images/milana.jpg";
import pavel from "../assets/images/Pavel.jpg";
import kate from "../assets/images/Kate.jpg";
import rsschool from "../assets/images/rsschoolLogo.png";

const aboutUsPage = () => {
  const code = `
    <section class="test-section-page">
    <div class="test-section-page-back"></div>
    <h2 class="test-section-page-h2">About Us</h2>
    </section>

<section class="ourProjectWork">
<div class="ourProjectWorkWrapper">
<p class="ourProjectWorkTitle">THE INTRODUCTION</p>
<p class="ourProjectWorkIntro">
We are a team who have a different view and different experience, but we found common language and made a good project. During our project we had a lot of calls
for discuss what we should to do and separate our tasks. Pavel is the most experienced, and he decided to concentrate on working with
commercetools, he was reviewing our code and giving us advice on how to write it well. Kate worked with forms and validation, she also allows our application to look more
beautiful. Milana worked with appearance of main, catalog page and she also create routing.
</p>
</div>
</section>

    <section class="aboutUsSection">
    <div class="aboutUsWrapper">

    <div class="aboutUsrofile kate">
    <div class="photoNamewrapper">
    <div class="profilePhotoWripper">
<img class="profilePhoto " src="${kate}">
</div>
<div class="desName">Ekaterina Shepelenko</div>
</div>
<p>Role: <span>Frontend Developer</span></p>
<p>Location:<span>Krakow, Poland</span></p>
<p>Education:<span>I graduated from Belarus State Economic University and was studying there economics, management in tourism and 2 foreign languages.
 In march 2023 I’ve successfully finished Pre-RSSchool so called 0 stage and now I am currently attending the RSSchool frontend course"
 </span></p>
<p>Experience:<span>I’ve spent 6 eventful years in the travel industry. At first,
 I was working in a travel agency being responsible for 5 visa departments and after that I’ve spent
  a few years working as a travel specialist in an IT company developing my skills in the business trips organization process.
   It was an unforgettable experience! Then I started working as an internal mobility specialist in Krakow helping employees to relocate to another preferable destination.
   </span></p>
<p>English level: <span>B2</span></p>
<p>Future plans after RsSchool second stage:<span>
Finish the current RSSchool frontend course successfully.</br>
Apply for the next stage 3 (react or angular) and finish it also successfully.</br>
Start looking for a Junior Frontend position in a good company in Poland.</br>
</span></p>
<a data-link="git" href="https://github.com/kate-shepel"><img src="${gitHub}"></a>
</div>
    <div class="aboutUsrofile pavel">
    <div class="photoNamewrapper">
    <div class="profilePhotoWripper">
    <img src="${pavel}" class="profilePhoto">
    </div>
    <div class="desName">Pavel Fursevich</div>
    </div>
<p>Role: <span>Frontend Developer</span></p>
<p>Location:<span>Minsk, Belarus</span></p>
<p>Education:<span>
IT Academy, Minsk :</br>
   Preparatory course "Basics of web technologies" -  07.10.2020 — 04.11.2020</br>
   The training course "Development of websites using HTML and CSS" with a small JavaScript module - 02.12.2020 — 08.02.2021</br>
   The training course "Development of web applications in JavaScript" - 05.05.2021 — 18.08.2021</br>
Udemy:</br>
    React Front To Back by Brad Traversy</br>
YouTube:</br>
    React JS Full Course for Beginners by Dave Gray</br>
    React Redux Full Course for Beginners | Redux Toolkit Complete Tutorial by Dave Gray</br>
</span></p>
<p>Experience:<span> I have made several pet-projects which you can get acquainted with on my github.</span></p>
<p>English level: <span>B2</span></p>
<p>Future plans after RssSchool second stage:<span>
I would like to finish current RSSchool frontend course. After that I'm going to begin the next RSS course which is related to React library.
But despite I wrote above I understand that I have to have much more knowledge so I will learn as much as needed.
</span></p>
<a data-link="git" href="https://github.com/Milashakas"><img src="${gitHub}"></a>
    </div>
    <div class="aboutUsrofile milana">
    <div class="photoNamewrapper">
    <div class="profilePhotoWripper">
    <img src="${milana}" class="profilePhoto">
    </div>
<div class="desName">Milana Kasumava</div>
</div>
<p>Role: <span>Frontend Developer</span></p>
<p>Location: <span>Poland, Lodz</span></p>
<p>Education: <span>
Belarusian Trade and Economics University of Consumer Cooperatives.</br>
Courses for beginners in HTML Academy.</br>
Rsschool stage 0.</span></p></br>
<p>Experience: <span>Manager-logistician , 5 years</span></p>
<p>English level: <span>B2</span></p>
<p>Future plans after RssSchool second stage:
<span>
After second stage i'm going to join to Angular course, fill some my weak sides in knowledges.
And then i have a plan to find a job as Junior or Intern Frontend Developer in Poland or in Belarus.
</span>
</p>
<a data-link="git" href="https://github.com/pauluswhite"><img src="${gitHub}"></a>
    </div>
    </div>
    </section>
    <section class="logoSection">
    <a data-link="git" href="https://rs.school/"><img src="${rsschool}"></a>
    </section>
    `;
  return code;
};
export default aboutUsPage;
