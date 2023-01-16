/**
 * These words are buzzwords that should be highlighted
 */
const buzzwords = [
  "JavaScript",
  "TypeScript",
  "React",
  "React.js",
  "PHP",
  "Next.js",
  "Node.js",
  "Express.js",
  "Express",
  "Node",
  "HTML",
  "CSS",
  "Sass",
  "Tailwind CSS",
  "TailwindCSS",
  "Python",
  "MongoDB",
  "PostgreSQL",
  "MySQL",
  "SQL",
  "NoSQL",
  "Selenium",
  "Mocha",
  "Chai",
  "ESLint",
  "Linux",
  "Docker",
  "AWS",
  "Git",
  "Adobe XD",
  "Adobe Photoshop",
  "Adobe Illustrator",
  "Figma",
  "WordPress",
  "Directus",
  "Directus CMS",
  "SanityCMS",
  "SQL/NoSQL",
  "REST/GraphQL",
  "Node/Express.js",
  "EJS",
];

// Add tags that should be searched for buzzwords
const paragraphs = document.querySelectorAll("p");
const lis = document.querySelectorAll("li");
const divs = document.querySelectorAll("div");
const tags = [...paragraphs, ...lis, ...divs];

for (const word of buzzwords) {
  const regex = new RegExp(`(\\s|^)(${word})([.,/()"']?)(\\s|$)`, 'g');
  for (const element of tags) {
    element.innerHTML = element.innerHTML.replace(regex, (match, p1, p2, p3, p4) => `${p1}<span class="buzzword">${p2}</span>${p3}${p4}`);
  }
}