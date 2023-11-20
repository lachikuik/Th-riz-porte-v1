const jsonData = JSON.parse(`
[   
    {
        "tournoisId":"HLS18",
        "nom":"Heroes lounge season 18",
        "matches":[{
            "team":"grodbuss bo3 2/0",
            "matchId":"grodbuss",
            "games":[{
                "map":"Santuaires Infernaux",
                "result":"victoire",
                "bansvs":"Maiev,Medivh,Samuro",
                "bans":"Johanna,Luisaile,Chacal",
                "picksvs":"Blaze,Sylvanas,Zeratul,Diablo,Anduin",
                "picks":"Falstad,Stukov,Lardeur,jaina,Anubarak"
            },
            {
                "map":"Champs de l'éternité",
                "result":"victoire",
                "bansvs":"Johanna,Maiev,Stukov",
                "bans":"Chacal,Luisaile,Arco",
                "picksvs":"Zul'jin,Jaina,D va,Muradin,Anduin",
                "picks":"Li-Ming,Anubarak,Samuro,Greymane,Blanchetête"
            }]
        },
        {                 
            "team":"MK Robotics B bo3 2/1",
            "matchId":"MkRoboticsB",
            "games":[{
                "map":"Comté du Dragon",
                "result":"victoire",
                "bansvs":"Luisaile,Stukov,Anduin",
                "bans":"Chacal,Dehaka,Chromie",
                "picksvs":"Asmodan,Lunara,Deckard,Johanna,Rexxar",
                "picks":"Falstad,Anubarak,Li-ming,Samuro,Malfurion"
            },
            {
                "map":"Sanctuaires Infernaux",
                "result":"défaite",
                "bansvs":"Stukov,Falstad,Anubarak",
                "bans":"Chacal,Asmodan,Luisaile",
                "picksvs":"Qhira,Malfurion,Gazleu,Orphéa,Johanna",
                "picks":"Anduin,Johanna,Malfurion,Samuro,Medivh"
            },
            {
                "map":"Jardin de la Terreur",
                "result":"victoire",
                "bansvs":"Stukov,Falstad,Samuro",
                "bans":"Chacal,Gazleu,Johanna",
                "picksvs":"Impérius,Anduin,Mei,Dehaka,Jaina",
                "picks":"Luisaile,Orphéa,Anubarak,Lardeur,Maiev"
            }]      
        }]
    }    
]
`)
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const tournoisId = urlParams.get('tournoisid');
const teamId = urlParams.get('teamid');


const tournois = jsonData.find(function(t) {
    if (t.tournoisId == tournoisId) {
        return true;
    }
    else {
        return false;
    }
});

const match = tournois.matches.find(function(m){
    if (m.matchId == teamId) {
        return true;
    }
    else {
        return false;
    }
});

const divmatch = document.getElementById("team");
divmatch.textContent = match.team;

function renderTablematch(games) {
    let html=  `<thead>
                    <tr>
                        <th>result</th>
                        <th>map</th>
                        <th>bansvs</th>
                        <th>ban</th>
                        <th>picksvs</th>
                        <th>picks</th>
                    </tr>
                </thead>`    
    games.forEach(function(game){
        html +=`<tr>
                    <td>${game.result}</td>
                    <td>${game.map}</td>
                    <td>${game.bansvs}</td>
                    <td>${game.bans}</td>
                    <td>${game.picksvs}</td>
                    <td>${game.picks}</td>                
                </tr>`;
    });
    return html ;
}
const html = renderTablematch(match.games);
const tableMatch = document.getElementById("games");
tableMatch.innerHTML = html;