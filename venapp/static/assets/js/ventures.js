
document.querySelector('.toggle').addEventListener('click', function() {
    document.querySelector('.navbar').classList.toggle('active');
});

document.querySelector('.close').addEventListener('click', function() {
    document.querySelector('.navbar').classList.remove('active');
});


function updateResumeName() {
    const resumeInput = document.getElementById('resume');
    const resumeName = document.getElementById('resume-name');
    if (resumeInput.files.length > 0) {
        resumeName.textContent = resumeInput.files[0].name;
    } else {
        resumeName.textContent = 'No file chosen';
    }
}