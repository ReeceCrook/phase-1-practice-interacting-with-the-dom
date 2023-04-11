const counter = document.querySelector('#counter')
const pauseButton = document.querySelector('#pause')
const plusButton = document.querySelector('#plus')
const minusButton = document.querySelector('#minus')
const submitButton = document.querySelector('#submit')
const heart = document.querySelector('#heart')
const commentForm = document.querySelector('#comment-form')
const commentInput = document.querySelector('#comment-input')
const commentList = document.querySelector('#list')
let ulLikes = document.querySelector('ul.likes')
let numberTracker = {}

countUp = () => counter.textContent++
countDown = () => counter.textContent--

plusButton.addEventListener('click', countUp)
minusButton.addEventListener('click', countDown)

heart.addEventListener('click', addLike)


const countInterval = setInterval(countUp, 1000)

pauseButton.addEventListener('click', pauseResumeCount)

function addLike(){
    let second = counter.innerText
    numberTracker[second] = numberTracker[second] || 0
    numberTracker[second] += 1
    addHeart()
  }

function addHeart(){
    ulLikes.innerHTML = ''
    for (let key in numberTracker){
        const li = document.createElement('li');
        li.textContent = `You liked ${key} a total of ${numberTracker[key]} times`
        ulLikes.appendChild(li)
    }
}


function pauseResumeCount(){
    if(pauseButton.innerHTML === ' pause '){
        clearInterval(countInterval);
        minusButton.disabled = true
        plusButton.disabled = true
        heart.disabled = true
        submitButton.disabled = true
        pauseButton.textContent = ' resume ';
    }
    else(setInterval(countUp, 1000),
        minusButton.disabled = false,
        plusButton.disabled = false,
        heart.disabled = false,
        submitButton.disabled = false,
        pauseButton.textContent = ' pause '
    )
}

commentForm.addEventListener('submit', function(e){
    e.preventDefault()
    const comment = e.target.querySelector('input').value
    const li = document.createElement('li')
    li.textContent = comment
    commentList.append(li)
})
