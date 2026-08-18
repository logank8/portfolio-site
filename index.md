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
      <div>
      Mar. - May 2026
      </div>
      <div>
      Debugged input handling
      Designed gameplay loop and difficulty progression
      Smooth level transitions
      Designed UI (?) and pause menu
      Audio system
      Built and deployed for user testing
      Interactive tutorial screen
      Adding environmental stuff
      </div>
    </a>
  <a href="./unity-particles" :class="$style.card">
      <div :class="$style.cardTitle">
      Virtual Map
      </div>
      <div>
      Nov. 2025 - Feb. 2026
      </div>
      <div>
      Technologies used
      </div>
      <div>
      Reviewed and revised 150+ pages of documentation
      Designed and developed an admin website to handle user play experiences 
      Designed new database
      UI for accessibility
      Map & goal-setting system
      QA and general debugging
      </div>
    </a>
    <a href="./eviction-game" :class="$style.card">
      <div :class="$style.cardTitle">
      HeartQuest
      </div>
      <div>
      Technologies used
      </div>
      <div>
      May - Sept. 2025
      </div>
      <div>
      Debugged input handling & movement
      Fixed player animation errors
      Redesigned dialogue system
      Added interaction to environment
      Quest system
      NPC movement
      Tutorial level design
      Minigames related to different parts of the heart
      Smoothing camera movement in gameplay + cutscenes
      Building & deploying for user testing
      Audio system for ui and environmental sound design
      Redesigned admin portal backend and frontend for play session analytics
      </div>
    </a>
    <a href="./304-project" :class="$style.card">
      <div :class="$style.cardTitle">
      Eviction of the Damned
      </div>
      <div>
      Sept. - Dec. 2024
      </div>
      <div>
      Github link: https://github.com/logank8/2d-video-game
      </div>
      <div>
      Designed and developed a 2D dungeon crawler game with 4 other developers using an Entity-Component System in C++.
      Wrote 2D shaders in OpenGL.
      Added Boids swarm simulation
      Scene management
      Fine-tuned collision detection for obstacles and interactable objects.
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
    height: 150px;
    margin-left: 1%;
    margin: 10px;
}

  .card:hover {
      box-shadow: 1px 2px 5px 1px #000000;
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
    flex-wrap: wrap;
    justify-content: center;
}
</style>
