const container = document.querySelector('#projects');

container.addEventListener('click', (event) => {
    const project = event.target.closest('.project-tile');
    if (!project) return;

    event.preventDefault();

    const dialog = project.parentElement.querySelector('dialog');
    if (dialog) {
        dialog.showModal();
    }
});

container.addEventListener('click', (event) => {
    if (!event.target.classList.contains('close-btn')) return;

    const dialog = event.target.closest('dialog');
    if (dialog) {
        dialog.close();
    }
});