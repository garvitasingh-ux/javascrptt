class QAItem {
  constructor(question, answer) {
    this.question = question;
    this.answer = answer;
  }

  // Create HTML element
  render() {
    const container = document.createElement('div');
    container.classList.add('faq-item');

    const questionEl = document.createElement('div');
    questionEl.classList.add('question');

    const text = document.createElement('span');
    text.innerText = this.question;

    const icon = document.createElement('span');
    icon.innerText = '+';
    icon.classList.add('icon');

    questionEl.appendChild(text);
    questionEl.appendChild(icon);

    const answerEl = document.createElement('div');
    answerEl.classList.add('answer');
    answerEl.innerText = this.answer;

    // Event Listener
    questionEl.addEventListener('click', () => {
      container.classList.toggle('active');
      icon.innerText = container.classList.contains('active') ? '-' : '+';
    });

    container.appendChild(questionEl);
    container.appendChild(answerEl);

    return container;
  }
}

// Data Array
const faqData = [
  new QAItem("What is JavaScript?", "JavaScript is a programming language used to create dynamic web content."),
  new QAItem("What is OOP?", "Object-Oriented Programming is a programming paradigm based on objects and classes."),
  new QAItem("What is HTML?", "HTML is the standard markup language used to create web pages.")
];

// Render FAQ
const faqContainer = document.getElementById('faq-container');
faqData.forEach(item => {
  faqContainer.appendChild(item.render());
});
