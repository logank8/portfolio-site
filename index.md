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
<a :class="$style.card">
      <div :class="$style.cardTitle">
        Factory Frenzy
      </div>
      <div :class="$style.cardSubtitle">
        <div>
          <i>Technologies used: Unity, C#</i>
        </div>
        <div>
          Mar. - May 2026
        </div>
      </div>
      <div :class="$style.cardDetails">
        <figure>
          <video controls loop width="550" autoplay muted :class="$style.cardImg">
            <source src="./media/factory/factory_highlights.mp4" type="video/mp4">
          </video>
        </figure>
        <div :class="$style.projectInfo">
          <div>
            <li>Designed the gameplay loop and the difficulty progression, which involved rotating objects, speed changes, lane changes, and object complexity changes.</li>
            <li>Created smooth level transitions to avoid breaking gameplay immersion.</li>
            <li>Developed audio system for individually adjustable SFX and music additions.</li>
            <li>Built and deployed the game for user testing on mobile phones.</li>
            <li>Created an interactive tutorial screen that explained different game elements.</li>
            <li>Designing additional environmental features to make game scenes feel more alive and engaging.</li>
            <li>Debugged input handling code.</li>
            <li>Designed UI as well as pause menu.</li>
          </div>
        </div>
      </div>
    </a>
  <a :class="$style.card">
      <div :class="$style.cardTitle">
        Virtual Map
      </div>
      <div :class="$style.cardSubtitle">
        <div>
          <i>Technologies used: Unity, C#, React, TypeScript, HTML, CSS, Supabase</i>
        </div>
        <div>
            Nov. 2025 - Feb. 2026
          </div>
      </div>
      <div :class="$style.cardDetails">
        <figure></figure>
        <div>
          <div :class="$style.projectInfo">
            <li>Created a map system to give players the ability to choose a destination and connect the guiding navigation system between rooms.</li>
            <li>Designed and developed an admin website to handle user play experiences.</li>
            <li>Designed a new database for tracking user sessions to connect between Unity and the admin website.</li>
            <li>Designed and added additional UI for more accessible player interactions with in-game objects.</li>
            <li>QA and general debugging.</li>
            <li>Reviewed and revised 150+ pages of documentation.</li>
          </div>
        </div>
      </div>
    </a>
    <a :class="$style.card">
      <div :class="$style.cardTitle">
        HeartQuest
      </div>
      <div :class="$style.cardSubtitle">
        <div>
          <i>Technologies used: Unity, C#, React.js, PostgreSQL, Docker, Google Cloud SQL</i>
        </div>
        <div>
          May - Sept. 2025
        </div>
      </div>
      <div :class="$style.cardDetails">
        <figure>
          <video controls loop width="450" autoplay muted :class="$style.cardImg">
            <source src="./media/heartq/heartquest_highlights.mp4" type="video/mp4">
          </video>
        </figure>
        <div :class="$style.projectInfo">
          <div>
            <li>Designed and developed 4 new medically-themed minigames related to encourage active learning about different parts of the heart and the issues it can have.</li>
            <li>Added new environmental interactions and puzzles to encourage player exploration and problem-solving skills.</li>
            <li>Developed an audio system that could accommodate for spatial environmental sounds as well as music and SFX with individually adjustable volumes.</li>
            <li>Redesigned dialogue system for smoother user progression.</li>
            <li>Designed and developed a quest system to remind users of goals and show progression based on location, interaction, or minigame completion.</li>
            <li>Added unique idle and active movements for NPCs to create the feeling of an active factory with many different workers.</li>
            <li>Designed a tutorial level to guide players through the different locations of the heart.</li>
            <li>Used Unity ShaderGraph to design new interactive shaders and debug previously created ones.</li>
            <li>Built & deployed game for user testing and debugging on mobile devices.</li>
            <li>Redesigned camera system to ensure smooth camera movement in gameplay + cutscenes.</li>
            <li>Debugged input handling & movement system.</li>
            <li>Fixed character animation errors in Unity.</li>
            <li>Redesigned admin website frontend for play session analytics viewing.</li>
            <li>Added authentication system to admin website to ensure security.</li>
            <li>Reconnected admin database to Cloud SQL storage for reconfiguration.</li>
          </div>
        </div>
      </div>
    </a>
    <a :class="$style.card">
      <div :class="$style.cardTitle">
      Eviction of the Damned
      </div>
      <div :class="$style.cardSubtitle">
        <div>
          <i>Technologies used: C++, OpenGL</i>
        </div>
        <div>
            Sept. - Dec. 2024
        </div>
        <a href="https://github.com/logank8/2d-video-game">Github link</a>
      </div>
      <div :class="$style.cardDetails">
        <figure>
          <video controls loop width="450" autoplay muted :class="$style.cardImg">
            <source src="./media/eviction_game/eviction_highlights.mp4" type="video/mp4">
          </video>
        </figure>
        <div :class="$style.projectInfo">
          <div>
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
    /* background-color:rgb(238, 242, 245, 0.4); */
    background-color: #c8c2e1bd;
    display: grid;
    text-decoration: none !important;
    width: 100%;
    margin-left: 1%;
    margin: 10px;
    padding: 15px;
    padding-left: 20px;
    
}

  .card:hover {
      box-shadow: 1px 2px 5px 1px #000000;
      transition: 0.2s;
  }

  .cardTitle {
      font-size: 28px;
      font-weight: bold;
      text-align: left;
      line-height: 35px;
      opacity: 1.0;
      text-decoration: none;
      color:black;
  }

  .cardSubtitle {
    color: black;

  }

  .cardDetails {
    font-size: 17px;
    display: flex;
    flex-direction: row;
    color:black;
  }

  .projectInfo {
    font-size: 14px;
    line-height: 15px;
    margin-left: 25px;
  }

  .cardImg {
    margin-top: 15px;
    margin-bottom: 10px;
  }

  .projectDisplay {
    margin-top: 10px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}
</style>
