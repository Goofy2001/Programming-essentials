let namen = ['Amin', 'Sofie', 'Samantha', 'Karel', 'Mehdi','Joris','Nuria']

function Search(naam) {
    for (let i = 0; i <= namen.length; i++) {
        if (namen[i] == naam) {
            console.log(i)
        }
    }
}

Search('Mehdi')