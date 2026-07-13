// Base hand-picked target pool
const defaultPool = [
    { name:"Paris", center:[2.3522,48.8566] },
    { name:"Berlin", center:[13.4050,52.5200] },
    { name:"London", center:[-0.1276,51.5072] },
    { name:"Madrid", center:[-3.7038,40.4168] },
    { name:"Rome", center:[12.4964,41.9028] },
    { name:"New York", center:[-74.0060,40.7128] },
    { name:"Los Angeles", center:[-118.2437,34.0522] },
    { name:"Chicago", center:[-87.6298,41.8781] },
    { name:"San Francisco", center:[-122.4194,37.7749] },
    { name:"Miami", center:[-80.1918,25.7617] },
    { name:"Seattle", center:[-122.3321,47.6062] },
    { name:"Houston", center:[-95.3698,29.7604] },
    { name:"Tokyo", center:[139.6503,35.6762] },
    { name:"Beijing", center:[116.4074,39.9042] },
    { name:"Seoul", center:[126.9780,37.5665] },
    { name:"Bangkok", center:[100.5018,13.7563] },
    { name:"Sydney", center:[151.2093,-33.8688] },
    { name:"Cairo", center:[31.2357,30.0444] },
    { name:"Istanbul", center:[28.9784,41.0082] },
    { name:"Mexico City", center:[-99.1332,19.4326] },
    { name:"Toronto", center:[-79.3832,43.6532] },
    { name:"Sao Paulo", center:[-46.6333,-23.5505] },
    { name:"Moscow", center:[37.6173,55.7558] },
    { name:"Dubai", center:[55.2708,25.2048] },
    { name:"Mumbai", center:[72.8777,19.0760] },
    { name:"Delhi", center:[77.2090,28.6139] },
    { name:"Shanghai", center:[121.4737,31.2304] },
    { name:"Guangzhou", center:[113.2644,23.1291] },
    { name:"Jakarta", center:[106.8456,6.2088] },
    { name:"Manila", center:[120.9842,14.5995] },
    { name:"Kuala Lumpur", center:[101.6869,3.1390] },
    { name:"Singapore", center:[103.8198,1.3521] },
    { name:"Hanoi", center:[105.8342,21.0278] },
    { name:"Yangon", center:[96.1566,16.8661] },
    { name:"Dhaka", center:[90.4125,23.8103] },
    { name:"Karachi", center:[67.0011,24.8607] },
    { name:"Lahore", center:[74.3587,31.5497] },
    { name:"Tehran", center:[51.3890,35.6892] },
    { name:"Baghdad", center:[44.3661,33.3152] },
    { name:"Riyadh", center:[46.6753,24.7136] },
    { name:"Kuwait City", center:[47.9774,29.3759] },
    { name:"Abu Dhabi", center:[54.3773,24.4539] },
    { name:"Jerusalem", center:[35.2137,31.7683] },
    { name:"Tel Aviv", center:[34.7818,32.0853] },
    { name:"Beirut", center:[35.5018,33.8938] },
    { name:"Damascus", center:[36.2765,33.5138] },
    { name:"Athens", center:[23.7275,37.9838] },
    { name:"Belgrade", center:[20.4489,44.7866] },
    { name:"Sarajevo", center:[18.4131,43.8563] },
    { name:"Zagreb", center:[15.9819,45.8150] },
    { name:"Ljubljana", center:[14.5058,46.0569] },
    { name:"Tirana", center:[19.8182,41.3275] },
    { name:"Sofia", center:[23.3219,42.6977] },
    { name:"Bucharest", center:[26.1025,44.4268] },
    { name:"Budapest", center:[19.0402,47.4979] },
    { name:"Vienna", center:[16.3738,48.2082] },
    { name:"Bratislava", center:[17.1077,48.1486] },
    { name:"Prague", center:[14.4378,50.0755] },
    { name:"Warsaw", center:[21.0122,52.2297] },
    { name:"Krakow", center:[19.9445,50.0647] },
    { name:"Gdansk", center:[18.6753,54.3520] },
    { name:"Vilnius", center:[25.2799,54.6872] },
    { name:"Riga", center:[24.1052,56.9496] },
    { name:"Tallinn", center:[24.7539,59.4370] },
    { name:"Helsinki", center:[24.9384,60.1699] },
    { name:"Stockholm", center:[18.0686,59.3293] },
    { name:"Oslo", center:[10.7522,59.9139] },
    { name:"Copenhagen", center:[12.5683,55.6761] },
    { name:"Amsterdam", center:[4.9041,52.3676] },
    { name:"Rotterdam", center:[4.4777,51.9244] },
    { name:"Brussels", center:[4.3517,50.8503] },
    { name:"Antwerp", center:[4.4025,51.2194] },
    { name:"Luxembourg", center:[6.1296,49.6117] },
    { name:"Bern", center:[7.4474,46.9480] },
    { name:"Zurich", center:[8.5417,47.3769] },
    { name:"Geneva", center:[6.1432,46.2044] },
    { name:"Munich", center:[11.5820,48.1351] },
    { name:"Frankfurt", center:[8.6821,50.1109] },
    { name:"Hamburg", center:[9.9937,53.5511] },
    { name:"Cologne", center:[6.9603,50.9375] },
    { name:"Dusseldorf", center:[6.7735,51.2277] },
    { name:"Milan", center:[9.1900,45.4642] },
    { name:"Naples", center:[14.2681,40.8518] },
    { name:"Turin", center:[7.6869,45.0703] },
    { name:"Florence", center:[11.2558,43.7696] },
    { name:"Venice", center:[12.3155,45.4408] },
    { name:"Barcelona", center:[2.1734,41.3851] },
    { name:"Valencia", center:[0.4203,39.4699] },
    { name:"Seville", center:[5.9845,37.3891] },
    { name:"Lisbon", center:[9.1393,38.7223] },
    { name:"Porto", center:[8.6291,41.1579] },
    { name:"Dublin", center:[-6.2603,53.3498] },
    { name:"Cork", center:[-8.4864,51.8985] },
    { name:"Edinburgh", center:[-3.1883,55.9533] },
    { name:"Glasgow", center:[-4.2518,55.8642] },
    { name:"Manchester", center:[-2.2426,53.4808] },
    { name:"Birmingham", center:[-1.8904,52.4862] },
    { name:"Liverpool", center:[-2.9916,53.4084] },
    { name:"Bristol", center:[-2.5879,51.4545] },
    { name:"Leeds", center:[-1.5491,53.8008] },
    { name:"Newcastle", center:[-1.6178,54.9783] },
    { name:"Montreal", center:[-73.5673,45.5019] },
    { name:"Vancouver", center:[-123.1207,49.2827] },
    { name:"Ottawa", center:[-75.6972,45.4215] },
    { name:"Calgary", center:[-114.0719,51.0447] },
    { name:"Edmonton", center:[-113.4909,53.5461] },
    { name:"Quebec City", center:[-71.2075,46.8139] },
    { name:"Winnipeg", center:[-97.1375,49.8951] },
    { name:"Boston", center:[-71.0598,42.3601] },
    { name:"Philadelphia", center:[-75.1652,39.9526] },
    { name:"Washington DC", center:[-77.0369,38.9072] },
    { name:"Atlanta", center:[-84.3880,33.7490] },
    { name:"Dallas", center:[-96.7970,32.7767] },
    { name:"Austin", center:[-97.7431,30.2672] },
    { name:"Denver", center:[-104.9903,39.7392] },
    { name:"Phoenix", center:[-112.0740,33.4484] },
    { name:"Las Vegas", center:[-115.1398,36.1699] },
    { name:"Portland", center:[-122.6762,45.5152] },
    { name:"San Diego", center:[-117.1611,32.7157] },
    { name:"Orlando", center:[-81.3789,28.5383] },
    { name:"New Orleans", center:[-90.0715,29.9511] },
    { name:"Nashville", center:[-86.7816,36.1627] },
    { name:"Detroit", center:[-83.0458,42.3314] },
    { name:"Minneapolis", center:[-93.2650,44.9778] },
    { name:"St. Louis", center:[-90.1994,38.6270] },
    { name:"Salt Lake City", center:[-111.8910,40.7608] },
    { name:"Buenos Aires", center:[-58.3816,34.6037] },
    { name:"Cordoba", center:[-64.1888,31.4201] },
    { name:"Rio de Janeiro", center:[-43.1729,22.9068] },
    { name:"Brasilia", center:[-47.8822,15.7942] },
    { name:"Salvador", center:[-38.4814,12.9777] },
    { name:"Concepcion", center:[-73.0445,36.8201] },
    { name:"Lima", center:[-77.0428,12.0464] },
    { name:"Bogota", center:[-74.0721,4.7110] },
    { name:"Medellin", center:[-75.5698,6.2442] },
    { name:"Caracas", center:[-66.9036,10.4806] },
    { name:"La Paz", center:[-68.1193,16.5000] },
    { name:"Cape Town", center:[18.4241,33.9249] },
    { name:"Johannesburg", center:[28.0473,26.2041] },
    { name:"Durban", center:[31.0333,29.8587] },
    { name:"Pretoria", center:[28.2293,25.7461] },
    { name:"Nairobi", center:[36.8219,1.2921] },
    { name:"Dar es Salaam", center:[39.2083,6.7924] },
    { name:"Casablanca", center:[-7.6320,33.5731] },
    { name:"Marrakech", center:[-7.9891,31.6345] },
    { name:"Tangier", center:[-5.8128,35.7595] },
    { name:"Tunis", center:[10.1815,36.8065] },
    { name:"Algiers", center:[3.0589,36.7528] },
    { name:"Tripoli", center:[13.1913,32.8872] },
    { name:"Benghazi", center:[20.0746,32.1167] },
    { name:"Khartoum", center:[32.5599,15.5007] },
    { name:"Dakar", center:[-17.4464,14.7167] },
    { name:"Auckland", center:[174.7633,-36.8485] },
    { name:"Wellington", center:[174.7762,-41.2866] },
    { name:"Christchurch", center:[172.6394,-43.5322] },
    { name:"Melbourne", center:[144.9631,-37.8136] },
    { name:"Brisbane", center:[153.0251,-27.4698] },
    { name:"Perth", center:[115.8570,-31.9505] },
    { name:"Adelaide", center:[138.6007,-34.9285] },
    { name:"Hobart", center:[147.3310,-42.8821] },
    { name:"Canberra", center:[149.1300,-35.2809] }
];

// ISO 2-letter code to Full Country Name Map
const isoCountryMap = {
    "af": "Afghanistan", "ax": "Aland Islands", "al": "Albania", "dz": "Algeria", "as": "American Samoa", "ad": "Andorra", "ao": "Angola", "ai": "Anguilla", "aq": "Antarctica", "ag": "Antigua and Barbuda", "ar": "Argentina", "am": "Armenia", "aw": "Aruba", "au": "Australia", "at": "Austria", "az": "Azerbaijan",
    "bs": "Bahamas", "bh": "Bahrain", "bd": "Bangladesh", "bb": "Barbados", "by": "Belarus", "be": "Belgium", "bz": "Belize", "bj": "Benin", "bm": "Bermuda", "bt": "Bhutan", "bo": "Bolivia", "bq": "Bonaire, Sint Eustatius and Saba", "ba": "Bosnia and Herzegovina", "bw": "Botswana", "bv": "Bouvet Island", "br": "Brazil", "io": "British Indian Ocean Territory", "bn": "Brunei Darussalam", "bg": "Bulgaria", "bf": "Burkina Faso", "bi": "Burundi",
    "kh": "Cambodia", "cm": "Cameroon", "ca": "Canada", "cv": "Cape Verde", "ky": "Cayman Islands", "cf": "Central African Republic", "td": "Chad", "cl": "Chile", "cn": "China", "cx": "Christmas Island", "cc": "Cocos (Keeling) Islands", "co": "Colombia", "km": "Comoros", "cg": "Congo", "cd": "Congo, Democratic Republic of the", "ck": "Cook Islands", "cr": "Costa Rica", "ci": "Cote d'Ivoire", "hr": "Croatia", "cu": "Cuba", "cw": "Curaçao", "cy": "Cyprus", "cz": "Czech Republic",
    "dk": "Denmark", "dj": "Djibouti", "dm": "Dominica", "do": "Dominican Republic", "ec": "Ecuador", "eg": "Egypt", "sv": "El Salvador", "gq": "Equatorial Guinea", "er": "Eritrea", "ee": "Estonia", "et": "Ethiopia", "fk": "Falkland Islands (Malvinas)", "fo": "Faroe Islands", "fj": "Fiji", "fi": "Finland", "fr": "France", "gf": "French Guiana", "pf": "French Polynesia", "tf": "French Southern Territories", "ga": "Gabon", "gm": "Gambia", "ge": "Georgia", "de": "Germany", "gh": "Ghana", "gi": "Gibraltar", "gr": "Greece", "gl": "Greenland", "gd": "Grenada", "gp": "Guadeloupe", "gu": "Guam", "gt": "Guatemala", "gg": "Guernsey", "gn": "Guinea", "gw": "Guinea-Bissau", "gy": "Guyana",
    "ht": "Haiti", "hm": "Heard Island and McDonald Islands", "va": "Holy See (Vatican City State)", "hn": "Honduras", "hk": "Hong Kong", "hu": "Hungary", "is": "Iceland", "in": "India", "id": "Indonesia", "ir": "Iran, Islamic Republic of", "iq": "Iraq", "ie": "Ireland", "im": "Isle of Man", "il": "Israel", "it": "Italy", "jm": "Jamaica", "jp": "Japan", "je": "Jersey", "jo": "Jordan", "kz": "Kazakhstan", "ke": "Kenya", "ki": "Kiribati", "kp": "Korea, Democratic People's Republic of", "kr": "Korea, Republic of", "kw": "Kuwait", "kg": "Kyrgyzstan",
    "la": "Lao People's Democratic Republic", "lv": "Latvia", "lb": "Lebanon", "ls": "Lesotho", "lr": "Liberia", "ly": "Libya", "li": "Liechtenstein", "lt": "Lithuania", "lu": "Luxembourg", "mo": "Macao", "mk": "North Macedonia", "mg": "Madagascar", "mw": "Malawi", "my": "Malaysia", "mv": "Maldives", "ml": "Mali", "mt": "Malta", "mh": "Marshall Islands", "mq": "Martinique", "mr": "Mauritania", "mu": "Mauritius", "yt": "Mayotte", "mx": "Mexico", "fm": "Micronesia, Federated States of", "md": "Moldova, Republic of", "mc": "Monaco", "mn": "Mongolia", "me": "Montenegro", "ms": "Montserrat", "ma": "Morocco", "mz": "Mozambique", "mm": "Myanmar", "na": "Namibia", "nr": "Nauru", "np": "Nepal", "nl": "Netherlands", "nc": "New Caledonia", "nz": "New Zealand", "ni": "Nicaragua", "ne": "Niger", "ng": "Nigeria", "nu": "Niue", "nf": "Norfolk Island", "mp": "Northern Mariana Islands", "no": "Norway", "om": "Oman",
    "pk": "Pakistan", "pw": "Palau", "ps": "Palestine, State of", "pa": "Panama", "pg": "Papua New Guinea", "py": "Paraguay", "pe": "Peru", "ph": "Philippines", "pn": "Pitcairn", "pl": "Poland", "pt": "Portugal", "pr": "Puerto Rico", "qa": "Qatar", "re": "Réunion", "ro": "Romania", "ru": "Russian Federation", "rw": "Rwanda", "bl": "Saint Barthélemy", "sh": "Saint Helena, Ascension and Tristan da Cunha", "kn": "Saint Kitts and Nevis", "lc": "Saint Lucia", "mf": "Saint Martin (French part)", "pm": "Saint Pierre and Miquelon", "vc": "Saint Vincent and the Grenadines", "ws": "Samoa", "sm": "San Marino", "st": "Sao Tome and Principe", "sa": "Saudi Arabia", "sn": "Senegal", "rs": "Serbia", "sc": "Seychelles", "sl": "Sierra Leone", "sg": "Singapore", "sx": "Sint Maarten (Dutch part)", "sk": "Slovakia", "si": "Slovenia", "sb": "Solomon Islands", "so": "Somalia", "za": "South Africa", "gs": "South Georgia and the South Sandwich Islands", "ss": "South Sudan", "es": "Spain", "lk": "Sri Lanka", "sd": "Sudan", "sr": "Suriname", "sj": "Svalbard and Jan Mayen", "sz": "Eswatini", "se": "Sweden", "ch": "Switzerland", "sy": "Syrian Arab Republic",
    "tw": "Taiwan", "tj": "Tajikistan", "tz": "Tanzania, United Republic of", "th": "Thailand", "tl": "Timor-Leste", "tg": "Togo", "tk": "Tokelau", "to": "Tonga", "tt": "Trinidad and Tobago", "tn": "Tunisia", "tr": "Turkey", "tm": "Turkmenistan", "tc": "Turks and Caicos Islands", "tv": "Tuvalu", "ug": "Uganda", "ua": "Ukraine", "ae": "United Arab Emirates", "gb": "United Kingdom", "us": "United States", "um": "United States Minor Outlying Islands", "uy": "Uruguay", "uz": "Uzbekistan", "vu": "Vanuatu", "ve": "Venezuela", "vn": "Viet Nam", "vg": "Virgin Islands, British", "vi": "Virgin Islands, U.S.", "wf": "Wallis and Futuna", "eh": "Western Sahara", "ye": "Yemen", "zm": "Zambia", "zw": "Zimbabwe"
};

// Global state references variables
let secretCity = null;
let wrongGuessCities = [];
let secretLocation = null;
let citiesGeoJSON = null;
let gameOver = false; 
let gameStarted = false;    
let revealedLetters = [];
let attempts = 0;    
let activeRadarCities = [];
let filteredFeaturesPool = [];

// DOM references
const log = document.getElementById("log");
const guessBtn = document.getElementById("guess-btn");

function isOverlapping(a, b) {
    const padding = 4;
    return !(
        a.x + a.w + padding < b.x ||
        a.x > b.x + b.w + padding ||
        a.y + a.h + padding < b.y ||
        a.y > b.y + b.h + padding
    );
}

function updateCityHint(showAll = false) {
    if (!secretCity) return;
    
    const hint = secretCity.name
        .split("")
        .map((char, index) => {
            if (char === " ") return " ";
            if (showAll || revealedLetters.includes(index)) {
                return char.toUpperCase();
            }
            return "_";
        })
        .join(" ");

    document.getElementById("city-hint").textContent = hint;
}

function initNewCity() {
    const countryFilter = document.getElementById("country-input").value.trim().toLowerCase();
    
    if (countryFilter && citiesGeoJSON) {
        let countryMatches = citiesGeoJSON.features.filter(f => {
            const cName = f.properties.countryName.toLowerCase();
            const cCode = f.properties.countryCode.toLowerCase();
            const fCode = f.properties.fc;
            const cityName = f.properties.name.toLowerCase();

            const isCountryMatch = (cName === countryFilter || cCode === countryFilter);
            
            if (isCountryMatch) {
                if (cCode === 'us' || cName === 'united states') {
                    const isBorough = ['brooklyn', 'queens', 'the bronx', 'staten island'].includes(cityName);
                    const isSubdivision = fCode === 'PPLX';
                    if (isBorough || isSubdivision) return false;
                }
                return true;
            }
            return false;
        });

        if (countryMatches.length > 0) {
            countryMatches.sort((a, b) => b.properties.pop - a.properties.pop);
            filteredFeaturesPool = countryMatches.slice(0, 15);

            const randomFeature = filteredFeaturesPool[Math.floor(Math.random() * filteredFeaturesPool.length)];
            secretCity = {
                name: randomFeature.properties.name,
                center: randomFeature.geometry.coordinates
            };
        } else {
            filteredFeaturesPool = [];
            secretCity = defaultPool[Math.floor(Math.random() * defaultPool.length)];
        }
    } else {
        filteredFeaturesPool = [];
        secretCity = defaultPool[Math.floor(Math.random() * defaultPool.length)];
    }

    secretLocation = secretCity.center;
    revealedLetters = [];
    updateCityHint();
}

async function loadCities(){
    try {
        const response = await fetch("https://mapsmania.github.io/geocoder/cities.json");
        const raw = await response.json();
        const countrySet = new Set();
        
        citiesGeoJSON = {
            type:"FeatureCollection",
            features: raw.map(city => {
                let code = "Unknown";
                if (city.id && city.id.includes("-")) {
                    code = city.id.split("-").pop().toLowerCase();
                }
                
                const fullCountryName = isoCountryMap[code] || "Unknown";
                if(fullCountryName !== "Unknown") {
                    countrySet.add(fullCountryName);
                }

                return turf.point(
                    [parseFloat(city.lng), parseFloat(city.lat)],
                    {
                        name: city.name,
                        countryCode: code,
                        countryName: fullCountryName,
                        pop: parseInt(city.pop || 0),
                        fc: city.fc
                    }
                );
            })
        };

        const datalist = document.getElementById("countries");
        Array.from(countrySet).sort().forEach(country => {
            const option = document.createElement("option");
            option.value = country;
            datalist.appendChild(option);
        });

        guessBtn.textContent = "Start Game";
        initNewCity();
    } catch(err) {
        console.error("Error loading geo data asset, running fallback configuration.", err);
    }
}

function getLargestNearbyCities(center) {
    const origin = turf.point(center);
    let datasetSource = [];
    
    if (filteredFeaturesPool.length === 0) {
        if (citiesGeoJSON && citiesGeoJSON.features.length > 0) {
            datasetSource = citiesGeoJSON.features;
        } else {
            datasetSource = defaultPool.map(c => turf.point([c.center[0], c.center[1]], { name: c.name, pop: 1000000 }));
        }
    } else {
        datasetSource = filteredFeaturesPool;
    }

    const maxRadius = (filteredFeaturesPool.length > 0) ? 3000 : 600;

    const candidates = datasetSource
        .map(city => {
            let bearing = turf.bearing(origin, city);
            return {
                city,
                distance: turf.distance(origin, city, { units: "miles" }),
                bearing: (bearing + 360) % 360
            };
        })
        .filter(item => item.distance > 30 && item.distance <= maxRadius)
        .sort((a, b) => b.city.properties.pop - a.city.properties.pop);

    const selected = [];
    const minAngleGap = 25; 

    for (const candidate of candidates) {
        if (selected.length >= 5) break;

        const isTooClose = selected.some(s => {
            let diff = Math.abs(s.bearing - candidate.bearing);
            let wrapDiff = 360 - diff;
            return Math.min(diff, wrapDiff) < minAngleGap;
        });

        if (!isTooClose) {
            selected.push(candidate);
        }
    }

    if (selected.length < 5) {
        for (const candidate of candidates) {
            if (selected.length >= 5) break;
            if (!selected.find(s => s.city.properties.name === candidate.city.properties.name)) {
                selected.push(candidate);
            }
        }
    }
    return selected;
}

function prepareRadarData(nearestCities) {
    const radarRadius = 175;
    const radarCenter = 300;
    
    if(nearestCities.length === 0) return;
    const maxDistance = Math.max(...nearestCities.map(c => c.distance)) * 1.1 || 1;

    activeRadarCities = nearestCities.map(item => {
        const name = item.city.properties.name;
        const dist = item.distance;
        
        let bearing = turf.bearing(turf.point(secretLocation), item.city);
        bearing = (bearing + 360) % 360;

        const scaledRadius = Math.min(dist / maxDistance, 1) * radarRadius;
        const radians = bearing * Math.PI / 180;

        const dotX = radarCenter + Math.sin(radians) * scaledRadius;
        const dotY = radarCenter - Math.cos(radians) * scaledRadius;

        const labelText = `${name} (${Math.round(dist)} mi)`;
        const labelW = labelText.length * 8.5; 
        const labelH = 16;

        return {
            name,
            distance: dist,
            trueBearing: bearing, 
            dotX,
            dotY,
            labelX: dotX + 8,
            labelY: dotY - 6,
            w: labelW,
            h: labelH,
            revealed: false
        };
    });

    for (let iteration = 0; iteration < 100; iteration++) {
        let moved = false;

        for (let i = 0; i < activeRadarCities.length; i++) {
            for (let j = i + 1; j < activeRadarCities.length; j++) {
                const a = activeRadarCities[i];
                const b = activeRadarCities[j];

                const boxA = { x: a.labelX, y: a.labelY - a.h, w: a.w, h: a.h };
                const boxB = { x: b.labelX, y: b.labelY - b.h, w: b.w, h: b.h };

                if (isOverlapping(boxA, boxB)) {
                    const dx = (a.labelX + a.w / 2) - (b.labelX + b.w / 2);
                    const dy = a.labelY - b.labelY;
                    const len = Math.sqrt(dx * dx + dy * dy) || 1;

                    const pushFactor = 3;
                    const stepX = (dx / len) * pushFactor;
                    const stepY = (dy / len) * pushFactor;

                    a.labelX += stepX;
                    a.labelY += stepY;
                    b.labelX -= stepX;
                    b.labelY -= stepY;

                    moved = true;
                }
            }
        }
        
        activeRadarCities.forEach(c => {
            if (c.labelX < 15) c.labelX = 15;
            if (c.labelX + c.w > 585) c.labelX = 585 - c.w;
            if (c.labelY < 25) c.labelY = 25;
            if (c.labelY > 585) c.labelY = 585;
        });

        if (!moved) break;
    }
}

function plotCity(cityData) {
    const layer = document.getElementById("city-layer");
    const group = document.createElementNS("http://www.w3.org/2000/svg", "g");

    const originalLabelX = cityData.dotX + 8;
    const originalLabelY = cityData.dotY - 6;
    const dx = cityData.labelX - originalLabelX;
    const dy = cityData.labelY - originalLabelY;
    const distMoved = Math.sqrt(dx * dx + dy * dy);

    if (distMoved > 8) {
        const pointer = document.createElementNS("http://www.w3.org/2000/svg", "line");
        pointer.setAttribute("x1", cityData.dotX);
        pointer.setAttribute("y1", cityData.dotY);
        pointer.setAttribute("x2", cityData.labelX);
        pointer.setAttribute("y2", cityData.labelY - 4);
        pointer.setAttribute("stroke", "rgba(0, 255, 204, 0.4)");
        pointer.setAttribute("stroke-width", "1");
        pointer.setAttribute("stroke-dasharray", "3,3");
        group.appendChild(pointer);
    }

    const dot = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    dot.setAttribute("cx", cityData.dotX);
    dot.setAttribute("cy", cityData.dotY);
    dot.setAttribute("r", 5);
    dot.setAttribute("fill", "#ff0055");

    const label = document.createElementNS("http://www.w3.org/2000/svg", "text");
    label.setAttribute("x", cityData.labelX);
    label.setAttribute("y", cityData.labelY);
    label.setAttribute("fill", "#ffffff");
    label.setAttribute("font-size", "16");
    label.setAttribute("font-weight", "500");
    label.setAttribute("style", "text-shadow: 2px 2px 2px #111, -2px -2px 2px #111;");
    label.textContent = `${cityData.name} (${Math.round(cityData.distance)} mi)`;

    group.appendChild(dot);
    group.appendChild(label);
    layer.appendChild(group);
}

function plotWrongGuess(guessName) {
    if (!citiesGeoJSON) return;

    const feature = citiesGeoJSON.features.find(f =>
        f.properties.name.toLowerCase() === guessName.toLowerCase()
    );

    if (!feature) return; 

    const origin = turf.point(secretLocation);
    const distance = turf.distance(origin, feature, { units: "miles" });

    let bearing = turf.bearing(origin, feature);
    bearing = (bearing + 360) % 360;

    const radarRadius = 175;
    const radarCenter = 300;

    const maxDistance = Math.max(
        ...activeRadarCities.map(c => c.distance),
        distance
    ) * 1.1;

    const scaledRadius = Math.min(distance / maxDistance, 1) * radarRadius;
    const radians = bearing * Math.PI / 180;

    const dotX = radarCenter + Math.sin(radians) * scaledRadius;
    const dotY = radarCenter - Math.cos(radians) * scaledRadius;

    const layer = document.getElementById("city-layer");
    const group = document.createElementNS("http://www.w3.org/2000/svg", "g");

    const dot = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    dot.setAttribute("cx", dotX);
    dot.setAttribute("cy", dotY);
    dot.setAttribute("r", 5);
    dot.setAttribute("fill", "#ff3333");

    const label = document.createElementNS("http://www.w3.org/2000/svg", "text");
    label.setAttribute("x", dotX + 8);
    label.setAttribute("y", dotY - 6);
    label.setAttribute("fill", "#ff3333");
    label.setAttribute("font-size", "16");
    label.setAttribute("font-weight", "700");
    label.setAttribute("style", "text-shadow:2px 2px 2px #111;");
    label.textContent = `${feature.properties.name} (${Math.round(distance)} mi)`;

    group.appendChild(dot);
    group.appendChild(label);
    layer.appendChild(group);
}

function revealRandomLetter() {
    const available = [];

    secretCity.name.split("").forEach((char, index) => {
        if (char !== " " && !revealedLetters.includes(index)) {
            available.push(index);
        }
    });

    if (available.length === 0) return;

    const randomIndex = available[Math.floor(Math.random() * available.length)];
    revealedLetters.push(randomIndex);
    updateCityHint();
}      
        
function startRadarSweep(){
    if(!defaultPool.length) return;

    document.getElementById("city-layer").innerHTML = "";
    log.innerHTML = "";

    const nearestCities = getLargestNearbyCities(secretLocation);
    prepareRadarData(nearestCities);

    let angle = 0;
    const sweep = document.getElementById("sweep");

    const timer = setInterval(()=>{
        let oldAngle = angle;
        angle += 2;
        
        const radians = angle * Math.PI / 180;

        const x = 300 + Math.sin(radians) * 250;
        const y = 300 - Math.cos(radians) * 250;

        sweep.setAttribute("x2", x);
        sweep.setAttribute("y2", y);

        activeRadarCities.forEach(item => {
            if (item.revealed) return;

            if (item.trueBearing >= oldAngle && item.trueBearing < angle) {
                item.revealed = true;
                plotCity(item);

                log.innerHTML = `
                    <div class="log-entry">
                        Revealed: <span>${item.name}</span> (${Math.round(item.distance)} mi)
                    </div>
                ` + log.innerHTML;
            }
        });

        if(angle >= 360){
            clearInterval(timer);
            log.innerHTML = `
                <div class="log-entry">
                    Sweep Complete. Nearby clues rendered.
                </div>
            ` + log.innerHTML;
        }
    }, 20);
}

function resetGame() {
    gameOver = false;
    attempts = 0;
    
    document.getElementById("city-layer").innerHTML = "";
    document.getElementById("log").innerHTML = "";
    document.getElementById("result").innerHTML = "";
    document.getElementById("guess-input").value = "";

    initNewCity();
    
    startRadarSweep();
    gameStarted = true;
    guessBtn.textContent = "Submit Guess";
}   

// Event Listeners
guessBtn.addEventListener("click", () => {
    if (!gameStarted) {
        initNewCity();

        const enteredCity = document
            .getElementById("guess-input")
            .value
            .trim()
            .toLowerCase();

        if (enteredCity) {
            const foundCity = defaultPool.find(
                city => city.name.toLowerCase() === enteredCity
            );

            if (foundCity) {
                secretCity = foundCity;
                secretLocation = foundCity.center;
                revealedLetters = [];
                updateCityHint();
            }
        }

        gameStarted = true;
        startRadarSweep();
        guessBtn.textContent = "Submit Guess";
        document.getElementById("guess-input").value = "";
        return;
    }

    if (gameOver) {
        resetGame();
        return;
    }

    const guess = document.getElementById("guess-input").value.trim().toLowerCase();
    attempts++;

    if (guess === secretCity.name.toLowerCase()) {
        updateCityHint(true);
        document.getElementById("result").innerHTML = `🎉 Correct! You found ${secretCity.name} in ${attempts} attempts.`;
        gameOver = true;
        guessBtn.textContent = "Play Again";
    } else {
        wrongGuessCities.push({
            name: guess,
            color: "#ff3333"
        });

        plotWrongGuess(guess);
        revealRandomLetter();         

        const unrevealed = secretCity.name.split("").filter((char, index) => char !== " " && !revealedLetters.includes(index));

        if (unrevealed.length === 0) {
            updateCityHint(true);
            document.getElementById("result").innerHTML = `💀 Game Over! The city was ${secretCity.name}`;
            gameOver = true;
            guessBtn.textContent = "Play Again";
        } else {
            document.getElementById("result").innerHTML = `❌ Incorrect! A new letter has been revealed.`;
        }
    }   
});

window.addEventListener("load", () => {
    loadCities();
});

document.getElementById("toggle-filter-btn").addEventListener("click", function() {
    const filterPanel = document.getElementById("filter-container");
    filterPanel.classList.toggle("hidden-panel");
    
    if (filterPanel.classList.contains("hidden-panel")) {
        this.textContent = "🌐 Set Country Filter";
        this.style.borderColor = "#00ffcc";
        this.style.color = "#00ffcc";
    } else {
        this.textContent = "❌ Close Filter Settings";
        this.style.borderColor = "#ff0055";
        this.style.color = "#ff0055";
    }
});