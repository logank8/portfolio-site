
<h1 :class="$style.header">Unity Shaders in HLSL & ShaderGraph</h1>





Project Summary
-

<h5>NOTE</h5>
This project is currently <b>in progress</b>, but this page provides a summary of my plan + my work so far.

I am working to create a collection of Unity shaders experimenting with creating shaders in HLSL and ShaderGraph for different material types. My current to-do list includes Jell-O, water, glass, and hair.

Skills showcased
-

<li>Unity development</li>

<li>Real-time lighting techniques</li>

<li>ShaderGraph and HLSL</li>

Progress
-

Currently I am working on rendering the Jell-O. I used Beer's law along with raymarching to create a thickness-based opacity value that gives it a semi-translucent look.

Raymarching technically isn't available in ShaderGraph, so I made a custom function in HLSL to step through the rays.

<img src="./media/shaders/beerscube.png" width="300px">


My next step is to add some basic lighting qualities along with light scattering to allow the material to hold light inside. 

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