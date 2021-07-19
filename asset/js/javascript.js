window.onload = function (){
    let Country = "Bangladesh";
    dataFind(Country)
}

function handleSelect(){
    let Country = $('#country').val();

    dataFind(Country)
}

function dataFind(Country){
    var countryName = Country;
    
    $.get('https://coronavirus-19-api.herokuapp.com/countries', function(data){

    let worldTotalCases = data[0].cases ;
    let worldTodayCases = data[0].todayCases ;
    let worldTotalDeaths = data[0].deaths ;
    let worldTodayDeaths = data[0].todayDeaths ;
    let worldActiveCases = data[0].active ;
    let worldRecoverdCases = data[0].recovered;
    let worldCasesPer = data[0].casesPerOneMillion;
    let worldDeathsPer = data[0].deathsPerOneMillion;

    handlecolor("worldTotalCases", worldTotalCases)
    $('#worldTotalCases').text(worldTotalCases)

    handlecolor("worldTodayCases", worldTodayCases)
    $('#worldTodayCases').text(worldTodayCases)

    handlecolor("worldTotalDeaths", worldTotalDeaths)
    $('#worldTotalDeaths').text(worldTotalDeaths)

    handlecolor("worldTodayDeaths", worldTodayDeaths)
    $('#worldTodayDeaths').text(worldTodayDeaths)

    handlecolor("worldActiveCases", worldActiveCases)
    $('#worldActiveCases').text(worldActiveCases)

    handlecolor("worldRecoverdCases", worldRecoverdCases)
    $('#worldRecoverdCases').text(worldRecoverdCases)

    handlecolor("worldCasesPer", worldCasesPer)
    $('#worldCasesPer').text(worldCasesPer)

    handlecolor("worldDeathsPer", worldDeathsPer)
    $('#worldDeathsPer').text(worldDeathsPer)

    
    var c;
    var allCountry = [];

    for(i=1; i<= 222; i++){
       /* $('#A').append("<option>"+ data[i].country + "</option>") */

       allCountry.push(data[i].country)

        if(data[i].country == countryName){
            var c = i;
        }
    }

    let allCountrySorted = allCountry.sort()

    for(i=0; i<= 221; i++){
        $('#country').append("<option>"+ allCountrySorted[i] + "</option>")
    }

    let outputCountryName = data[c].country;
    let countryTotalCases = data[c].cases ;
    let countryTodayCases = data[c].todayCases ;
    let countryTotalDeaths = data[c].deaths ;
    let countryTodayDeaths = data[c].todayDeaths ;
    let countryActiveCases = data[c].active ;
    let countryRecoverdCases = data[c].recovered;
    let countryCasesPer = data[c].casesPerOneMillion;
    let countryDeathsPer = data[c].deathsPerOneMillion;

    $('#outputCountryName').text(outputCountryName)

    handlecolor("countryTotalCases", countryTotalCases)
    $('#countryTotalCases').text(countryTotalCases)

    handlecolor("countryTodayCases", countryTodayCases)
    $('#countryTodayCases').text(countryTodayCases)

    handlecolor("countryTotalDeaths", countryTotalDeaths)
    $('#countryTotalDeaths').text(countryTotalDeaths)

    handlecolor("countryTodayDeaths", countryTodayDeaths)
    $('#countryTodayDeaths').text(countryTodayDeaths)

    handlecolor("countryActiveCases", countryActiveCases)
    $('#countryActiveCases').text(countryActiveCases)

    handlecolor("countryRecoverdCases", countryRecoverdCases)
    $('#countryRecoverdCases').text(countryRecoverdCases)

    handlecolor("countryCasesPer", countryCasesPer)
    $('#countryCasesPer').text(countryCasesPer)

    handlecolor("countryDeathsPer", countryDeathsPer)
    $('#countryDeathsPer').text(countryDeathsPer)

    function handlecolor(inputID, inputData){
        if(inputData == 0){
            $(`#${inputID}`).css("color","green")
        } else {
            $(`#${inputID}`).css("color","red")
        }
    }

})
}