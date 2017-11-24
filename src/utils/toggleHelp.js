export default function toggleHelp(event) {
  event.preventDefault();
  const helpPanel = document.getElementById('help-panel');
  const helpHeader = helpPanel.children[0].children[0];
  const helpText = helpPanel.children[1];

  let helpTextClasses = helpText.className.split(" ");
  let helpHeaderClasses = helpHeader.className.split(" ");
  let textClassIndex = helpTextClasses.indexOf('in');
  if (textClassIndex === -1) {
    helpTextClasses.push('in');
    helpHeaderClasses.splice(helpHeaderClasses.indexOf('collapsed'));
    helpHeaderClasses.push('none');
  } else {
    helpTextClasses.splice(textClassIndex);
    helpHeaderClasses.splice(helpHeaderClasses.indexOf('none'));
    helpHeaderClasses.push('collapsed');
  }

  helpText.className = helpTextClasses.join(" ");
  helpHeader.className = helpHeaderClasses.join(" ");
}
