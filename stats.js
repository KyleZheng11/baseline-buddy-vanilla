const form = document.getElementById('form')

form.addEventListener('submit', (e) => {
    e.preventDefault();
    //gets matchhistory div
    const matchHistory = document.getElementById('match-history')
    
    //create bracket element to store match stats
    var matchStats = document.createElement("div")
    var opponent_name_input = document.createElement('input')
    var score_input = document.createElement('input')
    var date_input = document.createElement('input')
    var notes_input = document.createElement('input')

    opponent_name_input.type = 'text'
    opponent_name_input.id = 'opponent_name'
    opponent_name_input.name = 'Opponent Name'
    opponent_name_input.placeholder = 'Enter Name'
    
    score_input.type = 'text'
    score_input.id = 'score'
    score_input.name = 'Score'
    score_input.placeholder = 'Enter Score'

    date_input.type = "text"
    date_input.id = 'date'
    date_input.name = 'Date'
    date_input.placeholder = 'Enter Date'

    notes_input.type = "text"
    notes_input.id = 'notes'
    notes_input.name = 'Notes'
    notes_input.placeholder = 'Enter Notes About the Match'
   
    matchStats.appendChild(opponent_name_input)
    matchStats.appendChild(score_input)
    matchStats.appendChild(date_input)
    matchStats.appendChild(notes_input)
    matchStats.classList.add('match')  


    matchHistory.appendChild(matchStats)
})