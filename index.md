---
# https://vitepress.dev/reference/default-theme-home-page
layout: home
hero:
  name: "Logan Keener"
  text: "Software Engineer"
  tagline: "Open to work in game development & more."
  image: '.'
  actions:
    - theme: brand
      text: About me
      link: /about
---
<h1>Projects</h1>

<div :class="$style.projectDisplay">
<a href="./unity-particles" :class="$style.card">
      <div :class="$style.cardTitle">
        Factory Frenzy
      </div>
      <div :class="$style.cardDetails">
        <figure>
        </figure>
        <div>
          <div>
            Mar. - May 2026
          </div>
          <div>
            Unity, C#
          </div>
          <div>
            <li>Debugged input handling</li>
            <li>Designed gameplay loop and difficulty progression</li>
            <li>Smooth level transitions</li>
            <li>Designed UI and pause menu</li>
            <li>Audio system</li>
            <li>Built and deployed for user testing</li>
            <li>Interactive tutorial screen</li>
            <li>Designing additional environmental features</li>
          </div>
        </div>
      </div>
    </a>
  <a href="./unity-particles" :class="$style.card">
      <div :class="$style.cardTitle">
        Virtual Map
      </div>
      <div :class="$style.cardDetails">
        <figure></figure>
        <div>
          <div>
            Nov. 2025 - Feb. 2026
          </div>
          <div>
            Unity, C#, React.js (typescript?), CSS, SQL
          </div>
          <div>
            <li>Map & goal-setting system</li>
            <li>QA and general debugging</li>
            <li>Designed and developed an admin website to handle user play experiences </li>
            <li>Designed new database</li>
            <li>UI for accessibility</li>
            <li>Reviewed and revised 150+ pages of documentation</li>
          </div>
        </div>
      </div>
    </a>
    <a href="./eviction-game" :class="$style.card">
      <div :class="$style.cardTitle">
        HeartQuest
      </div>
      <div :class="$style.cardDetails">
        <figure></figure>
        <div>
          <div>
            May - Sept. 2025
          </div>
          <div>
            Unity, C#, (website code stuff)
          </div>
          <div>
            <li>Debugged input handling & movement</li>
            <li>Fixed player animation errors</li>
            <li>Redesigned dialogue system</li>
            <li>Added interaction to environment</li>
            <li>Quest system</li>
            <li>NPC movement</li>
            <li>Tutorial level design</li>
            <li>Minigames related to different parts of the heart</li>
            <li>Smoothing camera movement in gameplay + cutscenes</li>
            <li>Building & deploying for user testing</li>
            <li>Audio system for ui and environmental sound design</li>
            <li>Redesigned admin portal backend and frontend for play session analytics</li>
          </div>
        </div>
      </div>
    </a>
    <a href="./304-project" :class="$style.card">
      <div :class="$style.cardTitle">
      Eviction of the Damned
      </div>
      <div :class="$style.cardDetails">
        <figure></figure>
        <div>
          <div>
            Sept. - Dec. 2024
          </div>
          <div>
            C++, OpenGL
          </div>
          <div>
            Github link: https://github.com/logank8/2d-video-game
            <li>Designed and developed a 2D dungeon crawler game with 4 other developers using an Entity-Component System in C++.</li>
            <li>Wrote 2D shaders in OpenGL.</li>
            <li>Added Boids swarm simulation</li>
            <li>Scene management</li>
            <li>Fine-tuned collision detection for obstacles and interactable objects.</li>
          </div>
        </div>
      </div>
    </a>
</div>


<br/>

<h1>Work Experience</h1>

<img src="./media/work_experience.png">


Roles (most recent to least recent):

<li>Game Developer - BC Childrens Hospital Digital Lab</li>
<li>Teaching Assistant - UBC CPSC 317 (Introduction to Computer Networking)</li>
<li>Digital Literacy Volunteer - A.R.T. & Justice Initiative</li>
<li>Community Engagement Assistant - Big Sisters BC Lower Mainland</li>
<li>Student Researcher - UBC Undergraduate Research Experience Program</li>


<style module>
  .card {
    box-shadow: 0 1px 4px 0 #000000;
    border-radius: 25px;
    background-color:rgb(238, 242, 245, 0.4);
    display: grid;
    text-decoration: none !important;
    width: 100%;
    margin-left: 1%;
    margin: 10px;
    padding: 15px;
    color:black;
}

  .card:hover {
      box-shadow: 1px 2px 5px 1px #000000;
      transition: 0.2s;
  }

  .cardTitle {
      font-size: 28px;
      text-align: left;
      line-height: 35px;
      opacity: 1.0;
      text-decoration: none;
  }

  .cardDetails {
    display: flex;
    flex-direction: row;
  }

  .projectDisplay {
    margin-top: 10px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}
</style>
