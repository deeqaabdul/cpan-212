document.getElementById('singleFileForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const formData = new FormData(this);
    
    fetch('/save/single', {
        method: 'POST',
        body: formData
    })
    .then(response => response.text())
    .then(data => alert(data))
    .catch(error => console.error('Error:', error));
});

document.getElementById('multipleFileForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const formData = new FormData(this);
    
    fetch('/save/multiple', {
        method: 'POST',
        body: formData
    })
    .then(response => response.text())
    .then(data => alert(data))
    .catch(error => console.error('Error:', error));
});

document.getElementById('fetchFileButton').addEventListener('click', function () {
    fetch('/fetch/single')
    .then(response => response.blob())
    .then(blob => {
        const url = URL.createObjectURL(blob);
        const fileResponse = document.getElementById('fileResponse');
        fileResponse.innerHTML = `<a href="${url}" target="_blank">Download Random File</a>`;
    })
    .catch(error => console.error('Error:', error));
});