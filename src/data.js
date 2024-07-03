const data = [
  {
    id: 1,
    category: "HTML",
    question: "What does the `<abbr>` tag in HTML represent?",
    options: [
      "A short form or abbreviation",
      "A hyperlink",
      "A table cell",
      "An image",
    ],
    correctAnswer: 0,
  },
  {
    id: 2,
    category: "HTML",
    question:
      "Which attribute specifies an alternate text for an image in HTML?",
    options: ["alt", "src", "title", "href"],
    correctAnswer: 0,
  },
  {
    id: 3,
    category: "HTML",
    question: "What does the `<article>` tag define in HTML?",
    options: [
      "A self piece of content",
      "A table",
      "A section of a webpage",
      "A form",
    ],
    correctAnswer: 0,
  },
  {
    id: 4,
    category: "HTML",
    question: "Which tag is used to define a header in HTML5?",
    options: ["<header>", "<head>", "<headering>", "<h1>"],
    correctAnswer: 0,
  },
  {
    id: 5,
    category: "HTML",
    question: "What is the correct HTML element for inserting a line break?",
    options: ["<break>", "<br>", "<lb>", "<line>"],
    correctAnswer: 1,
  },
  {
    id: 6,
    category: "CSS",
    question:
      "Which CSS property is used to change the text color of an element?",
    options: ["color", "font-color", "text-color", "bg-color"],
    correctAnswer: 0,
  },
  {
    id: 7,
    category: "CSS",
    question: "How do you select an element with the id 'header' in CSS?",
    options: ["#header", ".header", "header", "id-header"],
    correctAnswer: 0,
  },
  {
    id: 8,
    category: "CSS",
    question:
      "Which property is used to set the background color of an element in CSS?",
    options: ["background-color", "bg-color", "color", "background"],
    correctAnswer: 0,
  },
  {
    id: 9,
    category: "CSS",
    question: "Which CSS property controls the font size of text?",
    options: ["font-size", "text-size", "font", "size"],
    correctAnswer: 0,
  },
  {
    id: 10,
    category: "CSS",
    question: "What does the `z-index` property in CSS control?",
    options: [
      "Position element on the z-axis",
      "Size of an element",
      "Element color",
      "Element opacity",
    ],
    correctAnswer: 0,
  },
  {
    id: 11,
    category: "Javascript",
    question: "How do you declare a variable in Javascript using `let`?",
    options: ["let x = 10;", "var x = 10;", "x = 10;", "const x = 10;"],
    correctAnswer: 0,
  },
  {
    id: 12,
    category: "Javascript",
    question:
      "Which method can be used to find the length of a string in Javascript?",
    options: ["length()", "size()", "getLength()", "strLength()"],
    correctAnswer: 0,
  },
  {
    id: 13,
    category: "Javascript",
    question: "What is the correct way to write a function in Javascript?",
    options: [
      "function myFunction()",
      "function:myFunction()",
      "function = myFunction()",
      "function myFunction[]",
    ],
    correctAnswer: 0,
  },
  {
    id: 14,
    category: "Javascript",
    question:
      "Which operator is used to compare two values in Javascript for equality?",
    options: ["==", "===", "equals", "!="],
    correctAnswer: 1,
  },
  {
    id: 15,
    category: "Javascript",
    question: "How do you create an array in Javascript?",
    options: [
      "let arr = [];",
      "let arr = {};",
      "let arr = ();",
      "let arr = []()",
    ],
    correctAnswer: 0,
  },
  {
    id: 16,
    category: "Accessibility",
    question:
      "What is the minimum WCAG 2.1 Level AA color contrast ratio for large text?",
    options: ["4.5 : 1", "3 : 1", "3.5 : 1", "7 : 1"],
    correctAnswer: 3,
  },
  {
    id: 17,
    category: "Accessibility",
    question:
      "Which HTML attribute is essential for providing text alternatives for images?",
    options: ["src", "alt", "title", "aria-label"],
    correctAnswer: 1,
  },
  {
    id: 18,
    category: "Accessibility",
    question: "What does the `aria-live` attribute indicate?",
    options: [
      "The region is always visible",
      "It is dynamically updated",
      "The region is hidden",
      "The region is not interactive",
    ],
    correctAnswer: 1,
  },
  {
    id: 19,
    category: "Accessibility",
    question: "What is the purpose of the `tabindex` attribute?",
    options: [
      "Sets the tab order of an element",
      "Defines the size of an element",
      "Specifies the color of text",
      "Marks an element as interactive",
    ],
    correctAnswer: 0,
  },
  {
    id: 20,
    category: "Accessibility",
    question:
      "Which attribute should be used to ensure that a form input field is accessible to screen readers?",
    options: ["name", "aria-labelledby", "id", "required"],
    correctAnswer: 1,
  },
];

export default data;
