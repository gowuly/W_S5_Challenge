

async function sprintChallenge5() { // Note the async keyword so you can use `await` inside sprintChallenge5
  // 👇 WORK ONLY BELOW THIS LINE 👇
  // 👇 WORK ONLY BELOW THIS LINE 👇
  // 👇 WORK ONLY BELOW THIS LINE 👇

  // 👇 ==================== TASK 1 START ==================== 👇

  // 🧠 Use Axios to GET learners and mentors.
  // ❗ Use the variables `mentors` and `learners` to store the data.
  // ❗ Use the await keyword when using axios.

      let mentors = [] // fix this
      let learners = [] // fix this

      //fetch data from an endpoint
      const fetchData = async (endpoint) => {
      try {
        const response = await axios.get(endpoint);
        return response.data;

      } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
      }
    };

 

      // Use Promise.all to handle both requests concurrently
      await Promise.all([fetchData('http://localhost:3003/api/learners'), 
        fetchData('http://localhost:3003/api/mentors')])
      .then(([learnersData, mentorsData]) => {
        // update the value of learners and mentors
        learners = learnersData;
        mentors = mentorsData;

        console.log(learners); //expected learners array logged to the console
        console.log(mentors);  //expected mentors array logged to the console
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  // 👆 ==================== TASK 1 END ====================== 👆

  // 👇 ==================== TASK 2 START ==================== 👇

  // 🧠 Combine learners and mentors.
  // ❗ At this point the learner objects only have the mentors' IDs.
  // ❗ Fix the `learners` array so that each learner ends up with this exact structure:
  // {
  //   id: 6,
  //   fullName: "Bob Johnson",
  //   email: "bob.johnson@example.com",
  //   mentors: [
  //     "Bill Gates",
  //     "Grace Hopper"
  //   ]`
  // }

    // combine data from two endpoints
    const combineData = (learners, mentors) => {
      console.log(mentors)

      return learners.map(learner => {
        if (!learner.mentors) {
          return learner; 
        }
         //map over mentors a property of lerners object and changing the mentors ids array to mentor names array
        let mentorsNames = learner.mentors
          .map(mentorId => {
            const mentor = mentors.find(item => item.id === mentorId);
            return mentor ? `${mentor.firstName} ${mentor.lastName}` : null;
          })
          .filter(mentor => mentor); // Filter out any null values
          mentors = mentorsNames;
          console.log(mentors) // this log out empty array...because mentors is a local variable in this function
          
          return {
          fullName: learner.fullName,
          id: learner.id,
          email: learner.email,
          mentors: mentorsNames
        };
      });
    }
  let combinedData = combineData(learners, mentors);
  console.log(combinedData)



   

      // 👆 ==================== TASK 2 END ====================== 👆

      const cardsContainer = document.querySelector('.cards')
      const info = document.querySelector('.info')
      info.textContent = 'No learner is selected'


  // 👇 ==================== TASK 3 START ==================== 👇

  for (let learner of learners) { // looping over each learner object

    // 🧠 Flesh out the elements that describe each learner
    // ❗ Give the elements below their (initial) classes, textContent and proper nesting.
    // ❗ Do not change the variable names, as the code that follows depends on those names.
    // ❗ Also, loop over the mentors inside the learner object, creating an <li> element for each mentor.
    // ❗ Fill each <li> with a mentor name, and append it to the <ul> mentorList.
    // ❗ Inspect the mock site closely to understand what the initial texts and classes look like!

    const card = document.createElement('div')
    const heading = document.createElement('h3')
    const email = document.createElement('div')
    const mentorsHeading = document.createElement('h4')
    const mentorsList = document.createElement('ul')


   //add classlists to elements created
  card.classList.add('card');
  
  

  //heading.classList.add('card-heading');

 
  email.classList.add('card-email');

  
  mentorsHeading.classList.add('mentors-heading', 'closed');

  
  mentorsList.classList.add('mentors-list');
  //mentorsList.style.display = 'block'

    

  heading.textContent = learner.fullName;
  email.textContent = learner.email;
  mentorsHeading.textContent = 'Mentors';

 // Loop over the mentors and create an <li> element for each
  learner.mentors.forEach(mentorId => {

    //find method looks for the mentor object in mentor array that has matching id
  const mentor = mentors.find(m => m.id === mentorId);

  if (mentor) {

    // create a full <li> element with the mentor's full name
    const mentorItem = document.createElement('li');
    mentorItem.textContent = `${mentor.firstName} ${mentor.lastName}`;

    mentorsList.appendChild(mentorItem);

  }
});

  card.appendChild(heading);
  card.appendChild(email);
  card.appendChild(mentorsHeading);
  card.appendChild(mentorsList);
  

  // append card to cardsContainer
  cardsContainer.appendChild(card);


    

    // 👆 ==================== TASK 3 END ====================== 👆

    // 👆 WORK ONLY ABOVE THIS LINE 👆
    // 👆 WORK ONLY ABOVE THIS LINE 👆
    // 👆 WORK ONLY ABOVE THIS LINE 👆

    card.appendChild(mentorsList)
   // card.dataset.fullName = learner.fullName
    cardsContainer.appendChild(card)

    card.addEventListener('click', evt => {
      console.log('card clicked')
      const mentorsHeading = card.querySelector('h4')
      // critical booleans
      const didClickTheMentors = evt.target === mentorsHeading
        
      console.log("Did click mentors: ", didClickTheMentors);

      const isCardSelected = card.classList.contains('selected')
      // do a reset of all learner names, selected statuses, info message
      document.querySelectorAll('.card').forEach(crd => {
        crd.classList.remove('selected')
        crd.querySelector('h3').textContent = crd.dataset.fullName
      })
      info.textContent = 'No learner is selected'
      // conditional logic
      if (!didClickTheMentors) {
        // easy case, no mentor involvement
        if (!isCardSelected) {
          // selecting the card:
          card.classList.add('selected');
          heading.textContent = `${learner.fullName}, ID ${learner.id}`
          info.textContent = `The selected learner is ${learner.fullName}`
        }
      } else {
        // clicked on mentors, we toggle and select no matter what
        card.classList.add('selected')
        if (mentorsHeading.classList.contains('open')) {
          mentorsHeading.classList.replace('open', 'closed')
        } else {
          mentorsHeading.classList.replace('closed', 'open')
        }
        if (!isCardSelected) {
          // if card was not selected adjust texts
          heading.textContent =  `${learner.fullName}, ID ${learner.id}`
          info.textContent = `The selected learner is ${learner.fullName}`
        }
      }
    })
 

  const footer = document.querySelector('footer')
  const currentYear = new Date().getFullYear()
  footer.textContent = `© BLOOM INSTITUTE OF TECHNOLOGY ${currentYear}`
}

}
// ❗ DO NOT CHANGE THIS CODE. WORK ONLY INSIDE TASKS 1, 2, 3
if (typeof module !== 'undefined' && module.exports) module.exports = { sprintChallenge5 }
else sprintChallenge5()
