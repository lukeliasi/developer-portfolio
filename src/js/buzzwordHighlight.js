/**
 * These words are buzzwords that should be highlighted
 */
const buzzwords = [
  "Adobe Illustrator",
  "Adobe Photoshop",
  "Adobe XD",
  "Astro",
  "AWS",
  "S3",
  "Chai",
  "CSS",
  "Directus CMS",
  "Directus",
  "Docker",
  "EJS",
  "ESLint",
  "Express.js",
  "Express",
  "Figma",
  "Git",
  "HTML",
  "JavaScript",
  "Linux",
  "Mocha",
  "MongoDB",
  "MySQL",
  "Next.js",
  "Node.js",
  "Node",
  "Node/Express.js",
  "NoSQL",
  "PHP",
  "PostgreSQL",
  "Python",
  "React.js",
  "React",
  "Redis",
  "REST/GraphQL",
  "Ruby on Rails",
  "SanityCMS",
  "Sass",
  "Selenium",
  "SQL",
  "SQL/NoSQL",
  "Tailwind CSS",
  "TailwindCSS",
  "TypeScript",
  "WordPress",
];

// Add tags that should be searched for buzzwords
const paragraphs = document.querySelectorAll("p");
const lis = document.querySelectorAll("li");
const tags = [...paragraphs, ...lis];

for (const word of buzzwords) {
  const regex = new RegExp(`(\\s|^)(${word})([.,/()"']?)(\\s|$)`, 'g');
  for (const element of tags) {
    element.innerHTML = element.innerHTML.replace(regex, (match, p1, p2, p3, p4) => `${p1}<span class="buzzword">${p2}</span>${p3}${p4}`);
  }
}