<h1 :class="$style.header">Eviction of the Damned: 2D Video Game</h1>




Project Summary
 - 

I worked with a team of 4 other developers over 4 months to create a 2D dungeon crawler video game in C++ and OpenGL with an ECS structure. 
We participated in 4 different cross-play user testing sessions throughout development and implemented feedback as needed.
In addition to playing a large role in the project management and debugging, I was responsible for the graphics programming, scene management, 
BOIDS algorithm implementation for the swarm enemy, tilemap implementation, 2D asset uploads and audio.

Github link: https://github.com/logank8/2d-video-game


Skills Showcased
-
 
<li>Entity-Component System in C++</li>

<li>Shaders in OpenGL</li>

<li>Particle systems</li>

<li>Render system troubleshooting</li>

<li>Game scene management</li>

<li>Project management</li>

<li>User testing and feedback review</li>

Highlights
-



<h4 :class="$style.highlighthead">Particle system</h4>

I added a smoke effect using a particle system that went created an emitter after an enemy dies.



To add this into an ECS, I kept each particle as simple structs stored in the ParticleEmitter component of the Smoke entity created. I mainly used <a href="https://www.lri.fr/perso/~mbl/ENS/IG2/devoir2/files/docs/particles.pdf">this article</a> by Jeff Lander to guide me, especially on adding things like variance and randomness in direction. 

In Lander's article the pools of particles are implemented using a linked list, which I believe would be possible to implement within our ECS, so I may look into this as a way to reduce unnecessarily redundant storage on large amounts of particles.

<h4 :class="$style.highlighthead">Lighting model</h4>

I implemented a Phong lighting model into the game using OpenGL and created all functions that darkened and lightened the screen through the shader. 



This included a slow darken when the player dies, as well as a randomly occurring light flicker effect to add ambience.

<h4 :class="$style.highlighthead">Boids swarm simulation</h4>

I used a boids flocking algorithm to create a swarm enemy that chased the player and could be individually killed.


<h4 :class="$style.highlighthead">Scene management</h4>

I handled all transitions between splash screens, menus, cutscenes, and gameplay. I also designed the main menu "elevator" display, which allows the player to access any levels that they have "unlocked" by playing previously.




<h4 :class="$style.highlighthead">2D Physics System</h4>

The physics system was a collaborative effort across the entire team. However, I am most proud of my work on the AABB collisions and radius-based proximity detection for interactable objects such as health buffs, NPCs, and doors.

<style module>
.header {
  padding-left: 10%
}

.highlighthead {
  text-decoration: underline
}

.figcaption {
  font-size: 12px !important;
}

.media {
  border: 5px solid rgb(38, 27, 27);
  border-radius: 3px;
}

</style>
