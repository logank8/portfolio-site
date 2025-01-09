---
# https://vitepress.dev/reference/default-theme-home-page
layout: home
hero:
  name: "Logan Keener"
  text: "Software engineer"
  tagline: "Open to work in software development, graphics programming, & more."
  image: '.'
  actions:
    - theme: brand
      text: About me
      link: /about
---
<h1>Projects</h1>

<div :class="$style.projectDisplay">
  <a href="/open-world-render" :class="$style.card">
      <div :class="$style.cardTitle">
      Real-Time Rendering in Unity Engine
      </div>
    </a>
    <a href="/eviction-game" :class="$style.card">
      <div :class="$style.cardTitle">
      2D Video Game in C++ and OpenGL
      </div>
    </a>
    <a href="/304-project" :class="$style.card">
      <div :class="$style.cardTitle">
      Social Media Admin Interface
      </div>
      <!--<a href="/304-project" :class="$style.cardText">See More</a>-->
    </a>

</div>


<br/>

<h1>Work Experience</h1>

<li>Teaching Assistant - UBC CPSC 317 Introduction to Computer Networking</li>
<li>Teaching Assistant - Kumon</li>
<li>Digital Literacy Volunteer - A.R.T. & Justice Initiative</li>
<li>Junior Program Officer - Canadian Food Inspection Agency</li>
<li>Community Engagement Assistant - Big Sisters BC Lower Mainland</li>
<li>Student Researcher - UBC Undergraduate Research Experience Program</li>

<br/>

<h1>Skills</h1>

<!-- put this in a flex display with two columns -->

Languages: C++, C#, GLSL, HTML, CSS, JavaScript, SQL

Frameworks: React.js, OpenGL, Node.js, JUnit

Tools: Git, VSCode, IntelliJ, WordPress, GDB, LLDB

<style module>
  .card {
    box-shadow: 0 1px 4px 0 #000000;
    border-radius: 25px;
    background-color:rgb(238, 242, 245, 0.4);
    display: grid;
    text-decoration: none !important;
    width: 400px;
    height: 150px;
    margin-left: 1%;
}

  .card:hover {
      box-shadow: 1px 2px 5px 1px #000000;
      font-weight: bold;
      transition: 0.2s;
  }

  .cardTitle {
      font-size: 30px;
      text-align: center;
      margin-inline: 10%;
      margin-top: 10%;
      line-height: 35px;
      color:black;
      opacity: 1.0;
      text-decoration: none;
  }

  .projectDisplay {
    margin-top: 10px;
    display: flex;
    flex-direction: row;
    justify-content: center;
}
</style>