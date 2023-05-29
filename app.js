//DOM Elements
const article = document.querySelector('article');
const generator = {
    select: document.querySelector('select'),
    button: document.querySelector('#generate-button'),
    form: document.querySelector('form'),
    reset: document.querySelector('#reset')
}

//Facts objects

const facts = {
    1: {
        category: 'Procrastination',
        number: 1,
        value: 'Procrastination stems from fear of the product, not the process. Focus on just doing, not finishing your task. '
    },
    2: {
        category: 'Habits',
        number: 2,
        value: 'Habits consist of cue, routine, reward and belief. You only need to change your reaction to the cue and the fight against procrastination will become much easier to win! '
    },
    3: {
        category: 'Habits',
        number: 3,
        value: 'Plan your day the night before. By doing that, they’ll occupy only one slot of your working memory, summarized by “check the list!” while three slots remain free to give you new and inspiring ideas.'
    },
    4: {
        category: 'Learning',
        number: 4,
        value: 'There are two modes of thinking: focus mode and diffuse mode. The first one consists of step-by-step problem solving, the second is looser and more intuitive big-picture thinking.'
    },
    5: {
        category: 'Habits',
        number: 5,
        value: 'Eat your frogs first! place the most challenging tasks at the beginning of your to-do list for a day.'
    },
    6: {
        category: 'Learning',
        number: 6,
        value: 'Short-term memory is like an inefficient blackboard with blurry text on it. Long-term memory resembles a large storage-house filled with different types of information that need to be recalled to remain accessible.'
    },
    7: {
        category: 'Habits',
        number: 7,
        value: 'Interleaving is including different sorts of problems in your study plans. Thanks to the practice, a new, interdisciplinary chunks can be created. It also boosts your creativity.'
    },
    8: {
        category: 'Habits',
        number: 8,
        value: 'You only need to change your reaction to the procrastination cue if you want to get rid of the nasty habit. Willpower is a valuable resource - save it for more challenging problems!'
    },
    9: {
        category: 'Learning',
        number: 9,
        value: 'Spaced recalling is an effective way of remembering. After you finish your learning session pause and recall what you’ve been learning. Do the same just before sleeping. And after you wake up the next day. Gradually make the intervals between repetitions longer.'
    },
    10: {
        category: 'Learning',
        number: 10,
        value: 'Remember, you’re MUCH more productive if you work on a problem for a short amount of time each they than those who binge learn the night before a test.'
    },
    11: {
        category: 'Procrastination',
        number: 11,
        value: 'Mental contrasting – juxtaposing a particularly dull image of your present reality with a bright future in which you reached your goal might also serve as a tool in a fight against procrastination.'
    },
    12: {
        category: 'Learning',
        number: 12,
        value: 'Getting enough sleep is important for diffuse mode to function properly. When you sleep, metabolic toxins are cleansed from your brain that can also influence your ability of focusing on things. So in a way, sleep is crucial to keep both of your modes of thinking in a healthy balance.'
    },
    13: {
        category: 'Learning',
        number: 13,
        value: 'If you study only in one location, you might become nervous while trying to recall the material elsewhere. Differentiating your study spots helps you avoid choking when you enter the exam room! '
    },
    14: {
        category: 'Learning',
        number: 14,
        value:'Memory palace is a powerful technique that helps you learn effectively by visualizing the concepts in a familiar place.'
    },
    15: {
        category: 'Procrastination',
        number: 15,
        value: 'Pomodoro technique – an anti-procrastination tool that helps you kill the habit with 25 minutes timers (or more, you don’t have to do it exactly the same way each time you repeat your Pomodoro!) and rewarding yourself after the time’s up.'
    },
    16: {
        category: 'Learning',
        number: 16,
        value: 'Muscle memory is real and can help you enhance your learning! So, make notes! Write down the most important concepts from your study material and recall.'
    },
    17: {
        category: 'Learning',
        number: 17,
        value: 'You’ll remember even more if you try to recall the material after physical exercises!'
    },
    18: {
        category: 'Habits',
        number: 18,
        value: 'Perseverance is the virtue of the less brilliant - Santiago Ramón y Cajal, precursor of neurobiology.'
    },
    19: {
        category: 'Learning',
        number: 19,
        value: 'If you truly want to learn something – you can do it! You don’t need to be a genius with an innate talent for the scientific field you’re trying to grasp. If you don’t give up, you’ll eventually start making progress and once you’re good at something, you’ll find it more and more enjoyable.'
    },
    20: {
        category: 'Learning',
        number: 20,
        value: 'Finding a well-organized study group is a great way to hold yourself and other members of the group accountable. Furthermore, there’s a chance that if one person doesn’t know a solution to a problem, someone else will share their solution influencing not only the person who couldn’t solve the problem, but also your way of approaching the problem. If you find a different solution, you can always compare your ideas with the friend later!'
    }
}

//That was probably the least needed thing ever, but at least I practiced creating object literals.


//Functions
//Basically, things work, but I need to find a way to access facts[i] objects

const createDiv = (num) => {
    let selectValue = generator.select.value;
    const newDiv = document.createElement('div');
    const newP = document.createElement('p');
    const newH2 = document.createElement('h2');
    newH2.textContent = selectValue;
    newP.textContent = facts[num].value;
    article.appendChild(newDiv);
    newDiv.appendChild(newH2);
    newDiv.appendChild(newP);
    newDiv.style.textAlign = 'center'
    reset.addEventListener('click', (ev) => {
        ev.preventDefault();
        newDiv.parentNode.removeChild(newDiv);
    })
}


generator.form.addEventListener('submit', (e) => {
    e.preventDefault();
    let numOfFact = Math.floor(Math.random() * 20) +1;
    createDiv(numOfFact);
})