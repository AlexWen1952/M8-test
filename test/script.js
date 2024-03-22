// Add more elements to these lists. The contents do not have to be real.
const GEOGRAPHY_LIST = [
    {
        country: 'United States',
        capital: 'Washington',
        largestCity: 'New York',
        subdivisionName: 'state',
        subdivisions: [
            {
                name: 'Louisiana',
                capital: 'Baton Rouge',
                largestCity: 'New Orleans',
                area: 134264,
            },
            {
                name: 'California',
                capital: 'Sacramento',
                largestCity: 'Los Angeles',
                area: 423970,
            },
            {
                name: 'Nevada',
                capital: 'Carson City',
                largestCity: 'Las Vegas',
                area: 286382,
            },
        ],
    },
    {
        country: 'Guatemala',
        capital: 'Guatemala City',
        largestCity: 'Guatemala City',
        subdivisionName: 'department',
        subdivisions: [
            {
                name: 'Huehuetenango',
                capital: 'Huehuetenango',
                largestCity: 'Huehuetenango',
                area: 7403,
            },
            {
                name: 'Izabal',
                capital: 'Puerto Barrios',
                largestCity: 'Puerto Barrios',
                area: 9038,
            },
            {
                name: 'El Progreso',
                capital: 'Guastatoya',
                largestCity: 'Guastatoya',
                area: 1922,
            },
        ]    
    }, 
        {
            country: 'China',
            capital: 'Beijing',
            largestCity: 'Shanghai',
            subdivisionName: 'province',
            subdivisions: [
                {
                    name: 'Anhui',
                    capital: 'Hefei',
                    largestCity: 'Hefei',
                    area: 140200,
                },
                {
                    name: 'Fujian',
                    capital: 'FUzhou',
                    largestCity: 'Xiamen',
                    area: 	121400,
                },
                {
                    name: 'Jiangsu',
                    capital: 'Nanjing',
                    largestCity: 'Nanjing',
                    area: 102600,
                },
            ]
        },
        {
            country: 'The United Kingdom',
            capital: 'London',
            largestCity: 'London',
            subdivisionName: 'nation',
            subdivisions: [
                {
                    name: 'England',
                    capital: 'London',
                    largestCity: 'London',
                    area: 132930,
                },
                {
                    name: 'Scotland',
                    capital: 'Edinburgh',
                    largestCity: 'Glasgow',
                    area: 80231,
                },
                {
                    name: 'Wales',
                    capital: 'Cardiff',
                    largestCity: 'Cardiff',
                    area: 21218,
                },
            ]
        }
]
// Your code goes below
console.log("start...");
var cssLink = document.createElement("link");
cssLink.rel = "stylesheet";
cssLink.href = "style.css";

document.head.appendChild(cssLink);

document.addEventListener('DOMContentLoaded', function() {

    var mainElement = document.getElementsByTagName('main')[0];
    

    for (var i = 0; i < GEOGRAPHY_LIST.length; i++) 
    {
        var country = GEOGRAPHY_LIST[i];
        var ul = document.createElement('ul');
        var subul_1 = document.createElement('ul');
        
        for (var [key, value] of Object.entries(country)) 
        {
            if (key === "country")
            {
                var li = document.createElement('li');
                li.textContent = key + " : " + value;
                ul.appendChild(li);
            }
            else
            {
                var subli_1 = document.createElement('li');
                
                if (key === "subdivisions")
                {
                    subli_1.textContent = key + " : ";
                    subul_1.appendChild(subli_1);

                    var subul_2 = document.createElement('ul');

                    for (var j = 0; j < value.length; j++) 
                    {  
                        var city = value[j];
                        
                        for (var [city_key, city_value] of Object.entries(city)) 
                        {
                            var subul_3 = document.createElement('ul');

                            if (city_key === "name")
                            {
                                var subli_2 = document.createElement('li');
                                subli_2.textContent = city_key + " - " + city_value;
                                subul_2.appendChild(subli_2);
                                
                            }
                            else
                            {
                                var subli_3 = document.createElement('li');
                                subli_3.textContent = city_key + " - " + city_value;
                                subul_3.appendChild(subli_3);
                            }
                            subul_2.appendChild(subul_3);
                        }
                    }

                    subul_1.appendChild(subul_2)  
                }
                else
                {
                    subli_1.textContent = key + " : " + value;
                    subul_1.appendChild(subli_1);
                }
                
            }
        }
        ul.appendChild(subul_1);

        mainElement.appendChild(ul);
    }
    
});

console.log("done...");