import React from 'react';

// const iconPath = './../../../camera-icon.png';

const Main = () => {
  return (
    <main>
      <h1 id="title">Handcrafted, home-made masterpieces</h1>
      <div class="get-started">
        <form action="https://www.freecodecamp.com/email-submit" id="form" for="submit">
          <div>
            <input type="email" id="email"  name="email" placeholder="Enter your email address"></input>
          </div>
          <div>
            <input type="submit" name="email" id="submit" value="GET STARTED" />
          </div>
        </form>
      </div>

      <div id="feature" name="features">
        <div class="feature">
          <div class="icon">
            {/* <img src="./../../camera-icon.png" width="50" /> */}
          </div>
          <div class="feature-text-part">
            <p class="feature-header">Premium Materials</p>
            <p class="feature-text">Our trombones use the shiniest brass which is sourced locally. This will increase the longevity of your purchase.</p>
          </div>
        </div>
        <div class="feature">
          <div class="icon">
            {/* <img src={iconPath} width="50" /> */}
          </div>
          <div class="feature-text-part">
            <p class="feature-header">Fast Shipping</p>
            <p class="feature-text">We make sure you recieve your trombone as soon as we have finished making it. We also provide free returns if you are not satisfied.</p>
          </div>
        </div>
        <div class="feature">
          <div class="icon">
            {/* <img src={iconPath} width="50" /> */}
          </div>
          <div class="feature-text-part">
            <p class="feature-header">Quality Assurance</p>
            <p class="feature-text">For every purchase you make, we will ensure there are no damages or faults and we will check and test the pitch of your instrument.</p>
          </div>
        </div>
      </div>
      <div id="how-it-works">
        <iframe id="video" width="560" height="315" src="https://www.youtube.com/embed/y8Yv4pnO7qc" frameborder="0" allowfullscreen></iframe>
      </div>
      <div id="pricing">
        <div class="price-block">
          <div class="price-header">TENOR TROMBONE</div>
          <p class="price">$600</p>
          {/* <p class="description">Lorem ipsum.<br>Lorem ipsum.<br>Lorem ipsum dolor.<br>Lorem ipsum. */}
          <div class="select-wrap">
            <input class="select" type="submit" name="select" id="select-tenor" value="SELECT" />
          </div>
        </div>
        <div class="price-block">
          <div class="price-header">BASS TROMBONE</div>
          <p class="price">$900</p>
          {/* <p class="description">Lorem ipsum.<br>Lorem ipsum.<br>Lorem ipsum dolor.<br>Lorem ipsum. */}
          <div class="select-wrap">
            <input class="select" type="submit" name="select" id="select-bass" value="SELECT" />
          </div>
        </div>
        <div class="price-block">
          <div class="price-header">VALVE TROMBONE</div>
          <p class="price">$1200</p>
          {/* <p class="description">Lorem ipsum.<br>Lorem ipsum.<br>Lorem ipsum dolor.<br>Lorem ipsum. */}
          <div class="select-wrap">
            <input class="select" type="submit" name="select" id="select-valve" value="SELECT" />
          </div>
        </div>
      </div>
    </main>
  )
}

export default Main;