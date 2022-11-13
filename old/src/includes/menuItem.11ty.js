const menuItem = ({ text, link, active }) => {
  const activeStyles = active ? "underline underline-offset-4 dark:decoration-mint-500 decoration-blue-500" : "";
  const textStyles = `sm:text-base text-3xl font-ibm-plex-mono dark:text-silver-100 text-blue-700 dark:hover:text-mint hover:text-blue-500`;
  return `<li><a class="${textStyles} ${activeStyles}" href="${link}">${text}</a></li>`;
}

module.exports = { menuItem };
