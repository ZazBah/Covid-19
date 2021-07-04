$.get('https://coronavirus-19-api.herokuapp.com/countries', function(data){
    let worldTotalCases = data[0].cases ;
    let worldTodayCases = data[0].todayCases ;
    let worldTotalDeaths = data[0].deaths ;
    let worldTodayDeaths = data[0].todayDeaths ;
    let worldActiveCases = data[0].active ;
    let worldRecoverdCases = data[0].recovered;
    let worldCasesPer = data[0].casesPerOneMillion;
    let worldDeathsPer = data[0].deathsPerOneMillion;

    $('#worldTotalCases').text(worldTotalCases)
    $('#worldTodayCases').text(worldTodayCases)

    $('#worldTotalDeaths').text(worldTotalDeaths)
    $('#worldTodayDeaths').text(worldTodayDeaths)

    $('#worldActiveCases').text(worldActiveCases)
    $('#worldRecoverdCases').text(worldRecoverdCases)

    $('#worldCasesPer').text(worldCasesPer)
    $('#worldDeathsPer').text(worldDeathsPer)



    let bdTotalCases = data[30].cases ;
    let bdTodayCases = data[30].todayCases ;
    let bdTotalDeaths = data[30].deaths ;
    let bdTodayDeaths = data[30].todayDeaths ;
    let bdActiveCases = data[30].active ;
    let bdRecoverdCases = data[30].recovered;
    let bdCasesPer = data[30].casesPerOneMillion;
    let bdDeathsPer = data[30].deathsPerOneMillion;

    $('#bdTotalCases').text(bdTotalCases)
    $('#bdTodayCases').text(bdTodayCases)
    $('#bdTotalDeaths').text(bdTotalDeaths)
    $('#bdTodayDeaths').text(bdTodayDeaths)
    $('#bdActiveCases').text(bdActiveCases)
    $('#bdRecoverdCases').text(bdRecoverdCases)
    $('#bdCasesPer').text(bdCasesPer)
    $('#bdDeathsPer').text(bdDeathsPer)


})