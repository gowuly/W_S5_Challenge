
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


  async function fetchData() {
    try {
      // Start both requests
      let mentorsPromise = axios.get('http://localhost:3003/api/learners');
      let learnersPromise = axios.get('http://localhost:3003/api/mentors');

      // Wait for both to complete
      let [mentorsResponse, learnersResponse] 
      = await Promise.all([mentorsPromise, learnersPromise]);

      // Extract the data
      mentors = mentorsResponse.data;
      learners = learnersResponse.data;

      console.log(mentors, learners);
    } catch (error) {
      console.error("Error fetching data", error);
    }
  }

  fetchData();



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

  mentors = [
    { id: 1, name: "Bill Gates" },
    { id: 2, name: "Grace Hopper" },
    {
      
      id: 12, name: "Ada Lovelace"
  },
  {
      
    id: 78, name: "Bill Gates"
  },
  {
      
    id: 63, name: "Brendan Eich"
  },
  {
     
    id: 42, name: "Brian Kernighan"
  },
  {
      
    id: 94, name: "Dan Ingalls"
  },
  {
      
    id: 17, name: "Grace Hopper"
  },
  {
      
    id: 7, name : "Guido van Rossum"
  },
  {
     
    id: 83, name: "James Gosling"
  },
  {
      
    id: 51, name: "Linus Torvalds"
  },
  {
      
    id: 67, name: "Margaret Hamilton"
  },
  {
      
    id: 60, name: "Mark Zuckerberg"
  },
  {
     
    id: 25, name: "Martin Fowler"
  },
  {
      
    id: 88,  name: "Mary Shaw"
  },
  {
      
    id: 71, name: "Mitchell Hashimoto"
  },
  {
      
    id: 95, name: "Rasmus Lerdorf"
  },
  {
      
    id: 14, name: "Robert Martin"
  },
  {
      
    id: 32, name: "Sergey Brin"
  },
  {
      
    id: 49, name: "Sheryl Sandberg"
  },
  {
      
    id: 58, name: "Yukihiro Matsumoto"
  }
  
    // ...
  ];

  learners = [
    { id: 6, fullName: "Bob Johnson", 
       email: "bob.johnson@example.com", 
       mentors: [1, 2] },

    {
        id: 52,
        fullName: "Samantha Richards",
        email: "samantha.richards@example.com",
        mentors: [12,83 ]
    },
    {
        id: 84,
        fullName: "Harry Potter",
        email: "harry.potter@example.com",
        mentors: [71,95]
    },
    {
        id: 18,
        fullName: "Gina Smith",
        email: "gina.smith@example.com",
        mentors: [32]
    },
    {
        id: 77,
        fullName: "Max Power",
        email: "max.power@example.com",
        mentors: [51,94]
    },
    {
        id: 68,
        fullName: "Daisy Duke",
        email: "daisy.duke@example.com",
        mentors: [
            58,83,49]
    },
    {
        id: 1,
        fullName: "Jack Sparrow",
        email: "jack.sparrow@example.com",
        mentors: [12,67]
    },
    {
        id: 48,
        fullName: "Homer Simpson",
        email: "homer.simpson@example.com",
        mentors: [42]
    },
    {
        id: 97,
        fullName: "Luna Lovegood",
        email: "luna.lovegood@example.com",
        mentors: [12,17,25,58]
    },
    {
        id: 3,
        fullName: "Joe Bloggs",
        email: "joe.bloggs@example.com",
        mentors: [83]
    },
    {
        id: 35,
        fullName: "Bilbo Baggins",
        email: "bilbo.baggins@example.com",
        mentors: [51,60,95]
    },
    {
        id: 29,
        fullName: "Marge Simpson",
        email: "marge.simpson@example.com",
        mentors: [78,14]
    },
    {
        id: 8,
        fullName: "Peter Parker",
        email: "peter.parker@example.com",
        mentors: [51,83,88]
    },
    {
        id: 57,
        fullName: "Betty Boop",
        email: "betty.boop@example.com",
        mentors: [17,71,42]
    },
    {
        id: 22,
        fullName: "Mickey Mouse",
        email: "mickey.mouse@example.com",
        mentors: [83]
    },
    {
        id: 91,
        fullName: "Daffy Duck",
        email: "daffy.duck@example.com",
        mentors: [63,71]
    }

    // ...
  ];

  // Create a lookup object for the mentors
  let mentorLookup = {};
    mentors.forEach(mentor => {
    mentorLookup[mentor.id] = mentor.name;
  });

  // Update the learners array
  learners = learners.map(learner => {

    // Replace each mentor ID with the mentor's name
    let mentorNames = learner.mentors.map(id => mentorLookup[id]);

    // Return a new object with the updated mentors array
    return { ...learner, mentors: mentorNames };
  });

  console.log(learners);

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

      // Assuming learner object is something like this
// let learner = { name: 'John Doe', email: 'john.doe@example.com', mentors: ['Mentor1', 'Mentor2'] };

      
      
      card.classList.add('card');

      
      heading.classList.add('card-heading');

      
      email.classList.add('card-email');

      
      mentorsHeading.classList.add('mentors-heading', ('closed'), ('open'));

      
      mentorsList.classList.add('mentors-list');
      

      heading.textContent = learner.name;
      email.textContent = learner.email;
      mentorsHeading.textContent = 'Mentors';

          
      // Loop over the mentors and create an <li> element for each
      learner.mentors.forEach(mentor => {
        const mentorItem = document.createElement('li');
        mentorItem.textContent = mentor;
        mentorsList.appendChild(mentorItem);
      });

      card.appendChild(heading);
      card.appendChild(email);
      card.appendChild(mentorsHeading);
      card.appendChild(mentorsList);

      // Assuming cardsContainer is a defined element
      cardsContainer.appendChild(card);
      



    // 👆 ==================== TASK 3 END ====================== 👆

    // 👆 WORK ONLY ABOVE THIS LINE 👆
    // 👆 WORK ONLY ABOVE THIS LINE 👆
    // 👆 WORK ONLY ABOVE THIS LINE 👆
    card.appendChild(mentorsList)
    card.dataset.fullName = learner.fullName
    cardsContainer.appendChild(card)

    card.addEventListener('click', evt => {
      const mentorsHeading = card.querySelector('h4')
      // critical booleans
      const didClickTheMentors = evt.target === mentorsHeading
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
          card.classList.add('selected')
          heading.textContent += `, ID ${learner.id}`
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
          heading.textContent += `, ID ${learner.id}`
          info.textContent = `The selected learner is ${learner.fullName}`
        }
      }
    })
  }

  const footer = document.querySelector('footer')
  const currentYear = new Date().getFullYear()
  footer.textContent = `© BLOOM INSTITUTE OF TECHNOLOGY ${currentYear}`
}

// ❗ DO NOT CHANGE THIS CODE. WORK ONLY INSIDE TASKS 1, 2, 3
if (typeof module !== 'undefined' && module.exports) module.exports = { sprintChallenge5 }
else sprintChallenge5()
