const searchItem = document.getElementById("search-item")
const searchBtn = document.getElementById("search-btn")
const questions = document.getElementById("question")
const url = "https://opentdb.com/api.php?amount=10&category=9&difficulty=easy&type=multiple"

fetch(url)
    .then(response => response.json())
    .then(data => getData(data.results));



// const searchQuiz = () =>{
//     fetch(url)
//     .then(response => response.json())
//     .then(data => getData(data.results));

//     console.log("clicked");
// }
// searchBtn.addEventListener("click", searchQuiz)
// searchItem.addEventListener("keypress", function (event) {
//     console.log(event);
//     if (event.key == 'Enter') {
//         searchQuiz();
//     }
// })


const getData = (quiz) => {
    for (let i = 0; i < quiz.length; i++) {
        const element = quiz[i];
        // console.log(element);

        //show Question
        const getQuiz = document.createElement("h4")
        getQuiz.innerHTML = `
        Q-${i}: ${element.question}
        `
        question.appendChild(getQuiz);


        //show Options
        const getQuizOptions = element.incorrect_answers;
        const randomOptions =Math.floor(Math.random() * 4);
        getQuizOptions.splice(randomOptions, 0, element.correct_answer);
        // console.log(getQuizOptions);

        const optionDiv = document.createElement("div");
        optionDiv.innerHTML = `
        <ul class="list-group">
                <ol>
                    <input id="quiz-options${i}1" name:"option ${i}" type="checkbox" value="">
                    <label for="quiz-options${i}1">${getQuizOptions [0]}</label>
                </ol>
                <ol>
                    <input id="quiz-options${i}2" name:"option ${i}" type="checkbox" value="">
                    <label for="quiz-options${i}2">${getQuizOptions [1]}</label>
                </ol>
                <ol>
                    <input id="quiz-options${i}3" name:"option ${i}" type="checkbox" value="">
                    <label for="quiz-options${i}3">${getQuizOptions [2]}</label>
                </ol>
                <ol>
                    <input id="quiz-options${i}4" name:"option ${i}" type="checkbox" value="">
                    <label for="quiz-options${i}4">${getQuizOptions [3]}</label>
                </ol>
        </ul>

        `
        question.appendChild(optionDiv);
    }

}



// Correct Option: ${element.correct_answer}
// Incorrect Option: ${element.results[0].incorrect_answers}




// for (let i = 0; i < data.length; i++) {
//     const element = data[i];

//     //Show question
//     const h4 = document.createElement('h4');
//     h4.innerText = "Question " + i + ": " + element.question;
//     question.appendChild(h4);

//     const arr = [0, 1, 2]
//     arr.splice(2, 0, 9)
//     console.log(arr[0]);

//     //Show option
//     const optionSelector = element.incorrect_answers;
//     const randomNum = Math.floor(Math.random() * 4);
//     optionSelect