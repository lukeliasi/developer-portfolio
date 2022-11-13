const formTextarea = ({ label, name, required, rows = 6 }) => {
  return (`
    <label class="w-full dark:text-white text-black">
      ${label}
      <textarea rows="${rows}" ${required ? "required" : ""} class="bg-silver-900/10 w-full p-1.5 dark:text-silver-200 text-silver-800 border-silver-800 focus:ring-silver-600" id="${name}" name="${name}" type="text"></textarea>
    </label>
  `);
}

module.exports = { formTextarea };