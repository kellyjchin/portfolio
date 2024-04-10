'use strict'

let projectsNodeList = document.querySelectorAll('.project-tile');
projectsNodeList.forEach( project => {
    let projectDialog = project.parentElement.querySelector('dialog');
    let dialogXBtn = projectDialog.querySelector('.close-btn');
    project.addEventListener('click', event => {
        event.preventDefault();
        projectDialog.showModal();
    })

    dialogXBtn.addEventListener('click', event => {
        projectDialog.close();
    })
})