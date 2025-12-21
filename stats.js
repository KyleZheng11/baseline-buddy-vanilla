const form = document.getElementById('form')

form.addEventListener('submit', (e) => {
    e.preventDefault();
    //gets matchhistory div
    const matchHistory = document.getElementById('match-history')
    
    //create bracket element to store match stats
    var matchStats = document.createElement("div")
    var opponent_name_input = document.createElement('input')
    var opponent_score_input = document.createElement('input')
    var your_score_input = document.createElement('input')

    opponent_name_input.type = "text"
    opponent_name_input.name = 'Opponent Name'
    opponent_name_input.placeholder = "Enter Name"
    
    opponent_score_input.type = "text"
    opponent_score_input.name = 'Opponent Score'
    opponent_score_input.placeholder = "Enter Score"

    your_score_input.type = "text"
    your_score_input.name = 'Your Score'
    your_score_input.placeholder = "Enter Score"

    matchStats.appendChild(opponent_name_input)
    matchStats.appendChild(opponent_score_input)
    matchStats.appendChild(your_score_input)
    matchStats.classList.add('match')  

    matchHistory.appendChild(matchStats)
})