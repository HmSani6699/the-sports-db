const lodeData = () => {
    fetch('https://www.thesportsdb.com/api/v1/json/2/eventsseason.php?id=4328&s=2014-2015')
        .then(res => res.json())
        .then(data => displayData(data.events))
}

const displayData = useres => {
    const inputFilth = document.getElementById('input-filth');
    const inputValue = inputFilth.value;
    useres.forEach(user => {
        console.log(user)
    })
    // const player = document.getElementById('player');
    // player.innerHTML = `
    // <img src="${user.strFanart1}" alt="" srcset="">
    // <img src="${user.strFanart2}" alt="" srcset="">
    // <img src="${user.strFanart3}" alt="" srcset="">
    // <img src="${user.strFanart4}" alt="" srcset="">
    // <h4>${user.idPlayer}</h4>
    // `
}