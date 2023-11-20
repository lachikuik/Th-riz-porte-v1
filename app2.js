const jsonData = JSON.parse(`
[   
    {
        "name": "Lachikuik",
        "userId":"lachikuik",
        "join": 2019,
        "role": "support",
        "picks":[{
                "name":"Stukov",
                "portrait":"./img/Heroes/stukov.png",
                "winrate":55.56,
                "pick":9,
                "ban":10
            },
            {
                "name":"Luisaile",
                "portrait":"./img/Heroes/luisaille.png",
                "winrate":33.33,
                "pick":3,
                "ban":7
            },
            {
                "name":"Ragnaros",
                "portrait":"./img/Heroes/ragnaros.png",
                "winrate":100,
                "pick":2,
                "ban":0
            },
            {
                "name":"Anduin",
                "portrait":"./img/Heroes/anduin.png",
                "winrate":0,
                "pick":3,
                "ban":3
            },
            {
                "name":"Malfurion",
                "portrait":"./img/Heroes/malfurion.png",
                "winrate":100,
                "pick":2,
                "ban":0
            },
            {
                "name":"Rehgar",
                "portrait":"./img/Heroes/rehgar.png",
                "winrate":0,
                "pick":1,
                "ban":1
            },
            {
                "name":"Blanchetête",
                "portrait":"./img/Heroes/blanchetete.png",
                "winrate":100,
                "pick":1,
                "ban":0
            },
            {
                "name":"Ana",
                "portrait":"./img/Heroes/ana.png",
                "winrate":0,
                "pick":1,
                "ban":0
            },
            {
                "name":"Tyrande",
                "portrait":"./img/Heroes/tyrande.png",
                "winrate":50,
                "pick":2,
                "ban":0
            }
        ]
    },
    {
        "name": "Tarul",
        "userId":"tarul",
        "join": 2019,
        "role": "Tank",
        "picks":[{
                "name":"Anubarak",
                "portrait":"./img/Heroes/anubarak.png",
                "winrate":60,
                "pick":10,
                "ban":7
            },
            {
                "name":"Muradin",
                "portrait":"./img/Heroes/muradin.png",
                "winrate":37.5,
                "pick":8,
                "ban":2
            },
            {
                "name":"Johanna",
                "portrait":"./img/Heroes/johanna.png",
                "winrate":50,
                "pick":4,
                "ban":9
            },
            {
                "name":"ETC",
                "portrait":"./img/Heroes/ETC.png",
                "winrate":33.33,
                "pick":3,
                "ban":0
            },
            {
                "name":"Varian",
                "portrait":"./img/Heroes/varian.png",
                "winrate":0,
                "pick":1,
                "ban":4
            }
        ]    
    },
    {
        "name": "Arco",
        "userId":"arco",
        "join": 2021,
        "role": "Carry",
        "picks":[{
                "name":"Falstad",
                "portrait":"./img/Heroes/falstad.png",
                "winrate":55.56,
                "pick":9,
                "ban":9
            },
            {
                "name":"Maiev",
                "portrait":"./img/Heroes/maiev.png",
                "winrate":71.43,
                "pick":7,
                "ban":13
            },
            {
                "name":"Medivh",
                "portrait":"./img/Heroes/medivh.png",
                "winrate":33.33,
                "pick":3,
                "ban":3
            },
            {
                "name":"Grisetête",
                "portrait":"./img/Heroes/grisetete.png",
                "winrate":33.33,
                "pick":3,
                "ban":3
            },
            {
                "name":"Cassia",
                "portrait":"./img/Heroes/cassia.png",
                "winrate":0,
                "pick":3,
                "ban":0
            },
            {
                "name":"Qhira",
                "portrait":"./img/Heroes/qhira.png",
                "winrate":0,
                "pick":1,
                "ban":0
            },
            {
                "name":"Hanzo",
                "portrait":"./img/Heroes/hanzo.png",
                "winrate":0,
                "pick":1,
                "ban":1
            }
        ]   
    },
    {
        "name": "Zef klop",
        "userId":"zefklop",
        "join": 2022,
        "role": "Solo lane",
        "picks":[{
                "name":"Hogger",
                "portrait":"./img/Heroes/hogger.png",
                "winrate":53.8,
                "pick":14,
                "ban":2
            },
            {
                "name":"Samuro",
                "portrait":"./img/Heroes/samuro.png",
                "winrate":55.56,
                "pick":9,
                "ban":16
            },
            {
                "name":"Luisaile",
                "portrait":"./img/Heroes/luisaille.png",
                "winrate":66.67,
                "pick":3,
                "ban":8
            }
        ]
    },
    {
        "name": "Juvia",
        "userId":"juvia",
        "join": 2022,
        "role": "Carry",
        "picks":[{
                "name":"Orphéa",
                "portrait":"./img/Heroes/orphea.png",
                "winrate":42.86,
                "pick":14,
                "ban":1
            },
            {
                "name":"Li-ming",
                "portrait":"./img/Heroes/li-ming.png",
                "winrate":50,
                "pick":8,
                "ban":1
            },
            {
                "name":"jaina",
                "portrait":"./img/Heroes/jaina.png",
                "winrate":50,
                "pick":2,
                "ban":0
            },
            {
                "name":"Lunara",
                "portrait":"./img/Heroes/lunara.png",
                "winrate":100,
                "pick":1,
                "ban":0
            }
        ]
    },
    {
        "name": "W-whyte",
        "userId":"whyte",
        "join": 2022,
        "role": "Tank",
        "picks":[{
                "name":"ETC",
                "portrait":"./img/Heroes/ETC.png",
                "winrate":null,
                "pick":0,
                "ban":0
            },
            {
                "name":"Anubarak",
                "portrait":"./img/Heroes/anubarak.png",
                "winrate":null,
                "pick":0,
                "ban":0
            }
        ]
    }
]    
`)

const queryString = window.location.search;

const urlParams = new URLSearchParams(queryString);
const userId = urlParams.get('userid');

const user = jsonData.find(function(user) {

    if (user.userId == userId) {
        return true;
    }
    else {
        return false;
    }
});

const divnom = document.getElementById("name");
divnom.textContent = user.name;

function renderTableHeroes(picks) {
    let html=  `<thead>
                    <tr>
                        <th>heroes</th>
                        <th></th>
                        <th>winrate</th>
                        <th>pick</th>
                        <th>ban</th>
                    </tr>
                </thead>`    
    picks.forEach(function(pick){
        html +=`<tr>
                <td><img src="${pick.portrait}"></td>
                <td>${pick.name}</td>
                <td>${pick.winrate}</td>
                <td>${pick.pick}</td>
                <td>${pick.ban}</td>
          </tr>`;
    });
    return html ;
}

const html = renderTableHeroes(user.picks);
const tableHeroes = document.getElementById("heroes");
tableHeroes.innerHTML = html;