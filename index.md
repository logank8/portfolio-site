---
# https://vitepress.dev/reference/default-theme-home-page
layout: home
hero:
  name: "Logan Keener"
  text: "Software engineer"
  tagline: "Open to work in web development, graphics programming, & more."
  actions:
    - theme: brand
      text: About me
      link: /about

---
<h1>Projects</h1>

[Open world environment in Unity Engine](/open-world-render.md)


<div :class="$style.card">
  <div :class="$style.cardTitle">
  Real-Time Rendering in Unity Engine
  </div>
</div>

<div :class="$style.card">
  <div :class="$style.cardTitle">
  2D Video Game in C++ and OpenGL
  </div>
</div>

<div :class="$style.card">
  <div :class="$style.cardTitle">
  Social Media Admin Interface
  </div>
</div>


[2D Video Game in C++ and OpenGL](/eviction-game.md)

[Social Media Admin SQL Database](/304-project.md)

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
    width: 36%;
    border-radius: 25px;
    background-color:rgb(238, 242, 245, 0.4);
    display: grid;
    grid-column: 1;
    grid-row: 2;
    margin-bottom: 10%;
    height: 250px;
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
      height: 120px;
      margin-top: 10%;
      line-height: 35px;
      color:rgb(53, 53, 55);
  }
</style>