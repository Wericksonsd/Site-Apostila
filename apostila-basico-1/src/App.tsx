import React from 'react';
import './App.css'



function App() {
  return (
    <>
      <div id='background'>
          <section>
            <header>
              <div> </div>
              <h3>APOSTILA BÁSICO</h3>            
              </header>
            <article id='menubar'>aa</article>
            <main>
              <h2 id='Lets'>Let's build the future together</h2>
              <h3></h3>
              <div className='sumario'>
                <article>S U M Á R I O</article>
                <ol>
                  <li>Verbo To-be</li>
                  <li>Preposições</li>
                  <li>Números</li>
                </ol>
              </div>
              <div id='conteudo'>
                <h1 id='cap1'>CAPÍTULO 1</h1>
                <h2>Verbo To Be</h2>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima, tempore. Praesentium repellat doloribus delectus dolorum <span className='italico'>reprehenderit</span> sapiente et illum, similique sit accusamus <span className='negrito'>libero vel</span> iste ut adipisci explicabo, neque nesciunt?  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores numquam repudiandae aut excepturi voluptas? Non dolorem vel consequatur ducimus perspiciatis! Laudantium ut nulla suscipit quae odit, accusamus qui dolores voluptatem.</div>
                <div className='exercicios'>
            
                </div>
            </main>
          </section>     
        <footer>DESENVOLVIDO POR ABRINDO PORTAS</footer>        
      </div>
      <script>
        window.onscroll = function() {myFunction()};
      
        var navbar = document.querySelector("#menubar");
      
        var sticky = navbar.offsetTop;

        function myFunction() {
          if (window.pageYOffset >= sticky) {
              navbar.classList.add("sticky")
          } else {
              navbar.classList.remove("sticky");
          }
        }
      </script>
    </>
  )
}

export default App
