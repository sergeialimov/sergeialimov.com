import React from 'react';

import './tribute-page.css';

const TributePage = () => {
  return (
    <div id="main">
      <div id="title">
        <h1>Dr. Norman Borlaug</h1>
        <p>The man who saved a billion lives</p>
      </div>
      <div id="img-div">
        <img id="image" src='https://c2.staticflickr.com/4/3689/10613180113_fdf7bcd316_b.jpg' />
        <p id="img-caption">Dr. Norman Borlaug, second from left, trains biologists in Mexico on how to increase wheat yields - part of his life-long war on hunger.</p>
      </div>
      <div id="tribute-info">
        <h2>Here's a time line of Dr. Borlaug's life:</h2>
        <ul id="bio-list">
          <li><strong>1914</strong> - Born in Cresco, Iowa</li>
          <li><strong>1933</strong> - Leaves his family's farm to attend the University of Minnesota, thanks to a Depression era program known as the "National Youth Administration"</li>
          <li><strong>1935</strong> - Has to stop school and save up more money. Works in the Civilian Conservation Corps, helping starving Americans. "I saw how food changed them", he said. "All of this left scars on me."</li>
          <li><strong>1937</strong> - Finishes university and takes a job in the US Forestry Service</li>
          <li><strong>1938</strong> - Marries wife of 69 years Margret Gibson. Gets laid off due to budget cuts. Inspired by Elvin Charles Stakman, he returns to school study under Stakman, who teaches him about breeding pest-resistent plants.</li>
          <li><strong>1941</strong> - Tries to enroll in the military after the Pearl Harbor attack, but is rejected. Instead, the military asked his lab to work on waterproof glue, DDT to control malaria, disenfectants, and other applied science.</li>
          <li><strong>1942</strong> - Receives a Ph.D. in Genetics and Plant Pathology</li>
          <li><strong>1944</strong> - Rejects a 100% salary increase from Dupont, leaves behind his pregnant wife, and flies to Mexico to head a new plant pathology program. Over the next 16 years, his team breeds 6,000 different strains of disease resistent wheat - including different varieties for each major climate on Earth.
          </li>
          <li><strong>1945</strong> - Discovers a way to grown wheat twice each season, doubling wheat yields</li>
          <li><strong>1953</strong> - crosses a short, sturdy dwarf breed of wheat with a high-yeidling American breed, creating a strain that responds well to fertalizer. It goes on to provide 95% of Mexico's wheat.
          </li>
          <li><strong>1962</strong> - Visits Delhi and brings his high-yielding strains of wheat to the Indian subcontinent in time to help mitigate mass starvation due to a rapidly expanding population
          </li>
          <li><strong>1970</strong> - receives the Nobel Peace Prize</li>
          <li><strong>1983</strong> - helps seven African countries dramatically increase their maize and sorghum yields</li>
          <li><strong>1984</strong> - becomes a distinguished professor at Texas A&M University</li>
          <li><strong>2005</strong> - states "we will have to double the world food supply by 2050." Argues that genetically modified crops are the only way we can meet the demand, as we run out of arable land. Says that GM crops are not inherently dangerous because "we've been genetically modifying plants and animals for a long time. Long before we called it science, people were selecting the best breeds."</li>
          <li><strong>2009</strong> - dies at the age of 95.</li>
        </ul>
      </div>
      <div id="quote">
        <p>
          <i>"Borlaug's life and achievement are testimony to the far-reaching contribution that one man's towering intellect, persistence and scientific vision can make to human peace and progress."
        </i></p>
        <p><i>-- Indian Prime Minister Manmohan Singh</i></p>
      </div>
      <div id="additional-div">
        <p id="additional">
          <strong>If you have time, you should read more about this incredible human being on his 
            <a
              id="tribute-link"
              href="https://en.wikipedia.org/wiki/Norman_Borlaug"
              target="_blank"
              alt=""
            >
              Wikipedia entry
            </a>
            .
          </strong>
        </p>
      </div>
    </div>
  );
};

export default TributePage;