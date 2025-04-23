
<h1 :class="$style.header">Unity Particle System Lighting</h1>





Project Summary
-

I created a mobile app with interactive lights and firework effects using Unity. The app creates a stream of lights wherever the user touches, and then creates a firework effect if the user lets go while moving their finger quickly. 

Where I'd like to take this project in the future:
<li>Variations of fireworks</li>
<li>Adding haptic feedback</li>
<li>Accelerometer for shaking detection alongside speed detection</li>
<li>More objects in the scene affected by the lights</li>

Skills showcased
-

<li>Unity development</li>

<li>Particle systems</li>

<li>Unity touch input management</li>


Highlights
-

<h4>Particle systems</h4>

I used Unity particle systems for the lights as well as the firework effects. Each touch generates a light of random, unique color (as in, there will never be two lights of the same color on the screen).

 <figure>
   <video controls loop width="500" autoplay muted :class="$style.media">
     <source src="./media/particles/triple_lights.MOV" type="video/mp4">
   </video>
   <figcaption :class="$style.figcaption">Moving around 3 lights with 3 individual touches.</figcaption>
 </figure>

 
 <figure>
   <video controls loop width="500" autoplay muted :class="$style.media">
     <source src="./media/particles/single_firework.mov" type="video/mp4">
   </video>
   <figcaption :class="$style.figcaption">Setting off a firework.</figcaption>
 </figure>
 

  <figure>
   <video controls loop width="500" autoplay muted :class="$style.media">
     <source src="./media/particles/double_fireworks.MOV" type="video/mp4">
   </video>
   <figcaption :class="$style.figcaption">Setting off two fireworks at once.</figcaption>
 </figure>

<h4>Individual touch input speed detection</h4>

The Unity touch API can process up to 5 finger inputs at once. The app is able to detect the speed of each touch and decide based on threshold whether or not to create a firework. 

<figure>
   <video controls loop width="500" autoplay muted :class="$style.media">
     <source src="./media/particles/twofingerlights.mov" type="video/mp4">
   </video>
   <figcaption :class="$style.figcaption">Moving lights around on the screen.</figcaption>
 </figure>

 <figure>
   <video controls loop width="500" autoplay muted :class="$style.media">
     <source src="./media/particles/secondinteraction.mov" type="video/mp4">
   </video>
   <figcaption :class="$style.figcaption">Setting off fireworks on the screen.</figcaption>
 </figure>

<style module>
.header {
  padding-left: 12%
}
</style>



<!---
<style module>
.card-button {
    border-radius: 10px;
    width: 50%;
    height: 50px;
    align-self: bottom;
    margin-bottom: 10%;
    background-color: #3d3d66;
    color: white;
    cursor: grab;
}
</style>

<style module>
.card-button:hover {
    transition: 0.3s;
    background-color: white;
    color: black;
    border-color: #3d3d66;
}
</style>

-->
