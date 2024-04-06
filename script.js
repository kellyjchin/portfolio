'use strict'

let projectsNodeList = document.querySelectorAll('.project-tile');
projectsNodeList.forEach( project => {
    let projectDialog = project.parentElement.querySelector('dialog');
    console.log(projectDialog);
    project.addEventListener('click', event => {
        event.preventDefault();
        projectDialog.showModal();
    })
})