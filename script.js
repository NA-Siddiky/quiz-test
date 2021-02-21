const searchItem = document.getElementById("search-item")
const searchBtn = document.getElementById("search-btn")
const url = "https://opentdb.com/api.php?amount=10&category=9&difficulty=easy&type=multiple"

const searchQuiz = () =>{
    fetch(url)
    .then(response => response.json())
    .then(data => console.log(data));
    
}
