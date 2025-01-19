<h1>About Me</h1>

I am a student at University of British Columbia, pursuing my Bachelor's degree in Computer Science with a minor in Mathematics. I will be graduating in <b>May 2025</b>! I am looking for full-time work anywhere in Canada starting after my graduation.

I have experience in designing and building websites in a variety of development environments. I mainly work with either WordPress or React.js + HTML + CSS. I also have a strong interest in game development, especially game graphics, and have been working to learn more about optimizing rendering within a game engine. I believe in detailed and accessible code documentation and an iterative work flow to ensure highest quality. 
I am always open to new professional endeavours and new opportunities to learn!



::: details Full list of skills

<!-- put this in a flex display with two columns maybe ? -->

Languages: C++, C#, GLSL, HTML, CSS, JavaScript, SQL

Frameworks: React.js, OpenGL, Node.js, JUnit

Tools: Git, VSCode, IntelliJ, WordPress, GDB, LLDB

:::


::: tip NOTE:
This website contains the highlights of my experience and what I consider to be the most relevant. If you are interested in a fuller list of everything I am familiar with or you want more information on my past work, you can see my resume at the Overleaf link below.


:::

<a href="https://www.overleaf.com/read/bpcwdxhvktsq#fd438b" :class="$style.resumeBtn">Download My Resume</a>



If you have any opportunities, questions, or simple comments - feel free to contact me!

<!-- put contact stuff here-->

<div :class="$style.contactDisplay">
    <a href="github.com/logank8">
        <img src="./media/icons/github.png" :class="$style.contactIcon">
    </a>
    <a href="mailto:lokeener@student.ubc.ca">
        <img src="./media/icons/email.png" :class="$style.contactIcon">
    </a>
    <a href="https://www.linkedin.com/in/logan-keener-5a5794206/">
        <img src="./media/icons/linkedin.png" :class="$style.contactIcon">
    </a>
</div>


<style module>
    .resumeBtn {
        background-color:#496dd7;
        padding: 15px 40px;
        border-radius: 10px;
        font-size: 16px;
        color: white !important;
        text-decoration: none !important;
        cursor: grab;
        transition: 0.5s;
    }

    .resumeBtn:hover {
        transition: 0.5s;
        background-color:rgb(64, 95, 190);
        color: white;
        border-color: #3d3d66;
    }

    .contactIcon {
        width: 50px;
        margin-right: 50px;
        transition: 0.2s;
    }

    .contactIcon:hover {
        transition: 0.2s;
        width: 60px;
    }

    .contactDisplay {
        display: flex;
        flex-direction: row;
        justify-content: center;
    }
</style>
