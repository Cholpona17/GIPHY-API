const API = 'https://api.giphy.com/v1/gifs/search?'
const key = 'api_key=Rk632foJadVMnVgo7Z5J8Tnh0rLLojG8'
const limit = '&limit='
const params = '&q='
const form = document.querySelector('.gif_search')
const btn = document.querySelector('#search')
btn.classList.add('style_btn')
const input = document.querySelector('#inp')
input.classList.add('style_input')
const output = document.querySelector('.output')
output.classList.add('style_output')
const select = document.querySelector('#count')
select.classList.add('style_select')

const searchGiphy = async () => {
    let url = API + key + limit + select.value + params + input.value
    const request = await fetch(url)
    const response = await request.json()
    renderGiphy(response.data);
    input.value = ''
}
const renderGiphy = (data) => {
    output.innerHTML = ''
    data.forEach(giff => {
        const div = document.createElement('div')
        div.classList.add('style_div')
        const title = document.createElement('h4')
        title.textContent = giff.title
        const img = document.createElement('iframe')
        img.src = giff.embed_url
        div.append(title, img)
        output.append(div)
    });
}
form.addEventListener('submit', (event) => {
    event.preventDefault()
    searchGiphy()
})