let disp = document.getElementById('container')

for( let i in countries){
    disp.innerHTML += 
    `<div class="card">
    <img src="https:${countries[i].file_url}">
    <h1>${countries[i].name}</h1>
    <a href="https://wikipedia.org${countries[i].url}" target="_blank">About this country</a>
    </div>` 
}