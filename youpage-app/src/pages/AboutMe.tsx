import React from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import './landingpage.css'; // Reuse landing page styles for consistency

const AboutMe: React.FC = () => (
  <>
    <NavBar />
    <main id='about-main'> 
        <h1>About Me</h1>
        <p>This is the about me section of my youpage where you can learn a little more about me outside of what I do for work</p>
        <h2>Goals</h2>
        <h3>Feel good,be good,look good,do good, and live good.</h3>
        <p>Ever since I was little I always Looked up too fictional characters like Batman and 
        Ironman.I wanted to be just like them I wanted to be smart and strong and successful in life
        and as i grew older I realized that being like them wasnt too far fetched, So I set out to be those 
        things and while my journey isnt exactly straightforward Im never going to give up on myself 
        and my goals.
        </p>
        <h3>Family</h3>
        <p>
          Another one of my goals is to be able to take care of my family as i grew up ive 
        watched my mom struggle and my dad do thins that wasnt exactly legal all to take care of me and put 
        me through school and give me and education and i want to be able to thank them by retiring them so that
        theyll never have to work again.
        </p>
        <h3>Wealth</h3>
        <p>
          I believe that true wealth is not just about money, but about having the freedom to live life on your own terms.
          I want to create a life where I can pursue my passions, travel the world, and make a positive impact on others.
          Financial independence is a key part of that vision, and I'm committed to making it a reality.
        </p>
        <h2>Passion</h2>
        <h3>Creativity</h3>
        <p>
          my passion is to create something meaningful in this world I believe that
          gods greatest gift to humanity is creativity and I want to use my creative
          abilities to make a positive impact on the world.Through expanding technology
          new opportunities for innovation and creativity appear every day and i love to
          program and create new things that can help people in their daily lives.
        </p>
        <h2>Hobbies</h2>
        <h3>Video Games</h3>
        <p>
          Growing up playing video games was my way to escape the world when life got to 
          hard. It was a way for me to decompress and relax and laugh with my friends, and i 
          still play video games to this day.
        </p>
        <h3>Reading</h3>
        <p>
          Reading is probably at the forefront of my growth as much as i consider
          it a tool i also consider it a hobby. I love to open a book and see something
          completely new and learn from it. I love to read superhero comics because they
          teach me powerful life lessons,I love to read the bible because it teaches
          me how to live a life that is pleasing God.I love to read self help books because
          they teach me how to be a better person and improve myself in life.
        </p>
        <h3>Movies</h3>
        <p>
          Ive always enjoyed watching a good movie when i had the time. Movies 
          are a great way to chill and relax and its also a great way for me 
          to spend time with my family and friends. My favorite genre is action and
          my favorite movies are probably the batman trilogy and the john wick series.
          when its not an action move I really like a good comedy but most of the time 
          the ones i watch are a mix of action and comedy so i cant say i exactly love 
          comedy but i do enjoy a good joke.
        </p>

    </main>
    <Footer />
  </>
);

export default AboutMe;
