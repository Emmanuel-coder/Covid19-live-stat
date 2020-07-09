let cases = document.querySelector(".cases");
let deaths = document.querySelector(".death");
let critical = document.querySelector(".criticals");
let recovered = document.querySelector(".recover");
let testing = document.querySelector(".testing");
let time = document.querySelector(".time");
let locality = document.querySelector(".locality")
let count = document.querySelector(".country");
let newConfirmed = document.querySelector(".newConfirmed");
let newDeaths = document.querySelector(".newDeaths");
let todayRecover = document.querySelector(".nRecover");
let ikuoni = document.getElementById("ikuoni");
let seentoday = document.getElementById("seentoday");
let hide = document.querySelector(".hide");
let one = document.querySelector(".one");
let two = document.querySelector(".two");
let look = document.querySelector(".look");


    alert("ATTENTION! If you choose a particular country and the informations are not displaying; please, select that country again and it will display. You may have to do this for every country whose COVID-19 information you wish to view - select it twice. The data here are current, accurate and reliable. You can contact us via our e-mail if you have any difficulty or suggestion. Thanks.")

// todayRecover is the same thing as the critical variable
// i used the critcal variable to name the "today's recovery";


// window.addEventListener("load", function (){

    const api =`https://api.covid19api.com/summary`;
    const apiv =`https://api.covid19api.com/`;

    const real = `https://covid19-server.chrismichael.now.sh/api/v1/`;

    fetch(api)
    .then(response =>{
        return response.json();
    })
    .then(data =>{
        
        cases.value = data.Global.TotalConfirmed;

        time.textContent = data.Date;
        deaths.value = data.Global.TotalDeaths;
        recovered.value = data.Global.TotalRecovered;

        // testing.textContent = data.Countries[0].Country;



        count.addEventListener("click", function (){
           

            if(count.value == "0"){

                hide.style.visibility = "visible";
                seentoday.style.visibility = "visible";
                ikuoni.style.visibility = "visible";
                one.style.visibility = "visible";
                two.style.visibility = "visible";

                time.textContent = data.Countries[0].Date;
                locality.textContent = data.Countries[0].Country;
                cases.value = data.Countries[0].TotalConfirmed;
                deaths.value = data.Countries[0].TotalDeaths;
                recovered.value = data.Countries[0].TotalRecovered;
                critical.value = data.Countries[0].NewRecovered;
                seentoday.value = data.Countries[0].NewConfirmed;
                ikuoni.value = data.Countries[0].NewDeaths;




            }else if(count.value == "1" ){

                hide.style.visibility = "visible";
                seentoday.style.visibility = "visible";
                ikuoni.style.visibility = "visible";
                one.style.visibility = "visible";
                two.style.visibility = "visible";

                time.textContent = data.Countries[1].Date;
                locality.textContent = data.Countries[1].Country;
                cases.value = data.Countries[1].TotalConfirmed;
                deaths.value = data.Countries[1].TotalDeaths;
                recovered.value = data.Countries[1].TotalRecovered;
                critical.value = data.Countries[1].NewRecovered;
                seentoday.value = data.Countries[1].NewConfirmed;
                ikuoni.value = data.Countries[1].NewDeaths;
            }
            else if(count.value == "2" ){

                hide.style.visibility = "visible";
                seentoday.style.visibility = "visible";
                ikuoni.style.visibility = "visible";
                one.style.visibility = "visible";
                two.style.visibility = "visible";

                time.textContent = data.Countries[2].Date;
                locality.textContent = data.Countries[2].Country;
                cases.value = data.Countries[2].TotalConfirmed;
                deaths.value = data.Countries[2].TotalDeaths;
                recovered.value = data.Countries[2].TotalRecovered;
                critical.value = data.Countries[2].NewRecovered;
                seentoday.value = data.Countries[2].NewConfirmed;
                ikuoni.value = data.Countries[2].NewDeaths;
            }
            else if(count.value == "3" ){

                hide.style.visibility = "visible";
                seentoday.style.visibility = "visible";
                ikuoni.style.visibility = "visible";
                one.style.visibility = "visible";
                two.style.visibility = "visible";

                time.textContent = data.Countries[3].Date;
                locality.textContent = data.Countries[3].Country;
                cases.value = data.Countries[3].TotalConfirmed;
                deaths.value = data.Countries[3].TotalDeaths;
                recovered.value = data.Countries[3].TotalRecovered;
                critical.value = data.Countries[3].NewRecovered;
                seentoday.value = data.Countries[3].NewConfirmed;
                ikuoni.value = data.Countries[3].NewDeaths;
            }
            else if(count.value == "4" ){

                hide.style.visibility = "visible";
                seentoday.style.visibility = "visible";
                ikuoni.style.visibility = "visible";
                one.style.visibility = "visible";
                two.style.visibility = "visible";

                time.textContent = data.Countries[4].Date;
                locality.textContent = data.Countries[4].Country;
                cases.value = data.Countries[4].TotalConfirmed;
                deaths.value = data.Countries[4].TotalDeaths;
                recovered.value = data.Countries[4].TotalRecovered;
                critical.value = data.Countries[4].NewRecovered;
                seentoday.value = data.Countries[4].NewConfirmed;
                ikuoni.value = data.Countries[4].NewDeaths;
            }
            else if(count.value == "5" ){

                hide.style.visibility = "visible";
                seentoday.style.visibility = "visible";
                ikuoni.style.visibility = "visible";
                one.style.visibility = "visible";
                two.style.visibility = "visible";

                time.textContent = data.Countries[5].Date;
                locality.textContent = data.Countries[5].Country;
                cases.value = data.Countries[5].TotalConfirmed;
                deaths.value = data.Countries[5].TotalDeaths;
                recovered.value = data.Countries[5].TotalRecovered;
                critical.value = data.Countries[5].NewRecovered;
                seentoday.value = data.Countries[5].NewConfirmed;
                ikuoni.value = data.Countries[5].NewDeaths;
            }
            else if(count.value == "6" ){

                hide.style.visibility = "visible";
                seentoday.style.visibility = "visible";
                ikuoni.style.visibility = "visible";
                one.style.visibility = "visible";
                two.style.visibility = "visible";

                time.textContent = data.Countries[6].Date;
                locality.textContent = data.Countries[6].Country;
                cases.value = data.Countries[6].TotalConfirmed;
                deaths.value = data.Countries[6].TotalDeaths;
                recovered.value = data.Countries[6].TotalRecovered;
                critical.value = data.Countries[6].NewRecovered;
                seentoday.value = data.Countries[6].NewConfirmed;
                ikuoni.value = data.Countries[6].NewDeaths;
            }
            else if(count.value == "7" ){

                hide.style.visibility = "visible";
                seentoday.style.visibility = "visible";
                ikuoni.style.visibility = "visible";
                one.style.visibility = "visible";
                two.style.visibility = "visible";

                time.textContent = data.Countries[7].Date;
                locality.textContent = data.Countries[7].Country;
                cases.value = data.Countries[7].TotalConfirmed;
                deaths.value = data.Countries[7].TotalDeaths;
                recovered.value = data.Countries[7].TotalRecovered;
                critical.value = data.Countries[7].NewRecovered;
                seentoday.value = data.Countries[7].NewConfirmed;
                ikuoni.value = data.Countries[7].NewDeaths;
            }
            else if(count.value == "8" ){

                hide.style.visibility = "visible";
                seentoday.style.visibility = "visible";
                ikuoni.style.visibility = "visible";
                one.style.visibility = "visible";
                two.style.visibility = "visible";

                time.textContent = data.Countries[8].Date;
                locality.textContent = data.Countries[8].Country;
                cases.value = data.Countries[8].TotalConfirmed;
                deaths.value = data.Countries[8].TotalDeaths;
                recovered.value = data.Countries[8].TotalRecovered;
                critical.value = data.Countries[8].NewRecovered;
                seentoday.value = data.Countries[8].NewConfirmed;
                ikuoni.value = data.Countries[8].NewDeaths;
            }
            else if(count.value == "9" ){

                hide.style.visibility = "visible";
                seentoday.style.visibility = "visible";
                ikuoni.style.visibility = "visible";
                one.style.visibility = "visible";
                two.style.visibility = "visible";

                time.textContent = data.Countries[9].Date;
                locality.textContent = data.Countries[9].Country;
                cases.value = data.Countries[9].TotalConfirmed;
                deaths.value = data.Countries[9].TotalDeaths;
                recovered.value = data.Countries[9].TotalRecovered;
                critical.value = data.Countries[9].NewRecovered;
                seentoday.value = data.Countries[9].NewConfirmed;
                ikuoni.value = data.Countries[9].NewDeaths;
            }
            else if(count.value == "10" ){

                hide.style.visibility = "visible";
                seentoday.style.visibility = "visible";
                ikuoni.style.visibility = "visible";
                one.style.visibility = "visible";
                two.style.visibility = "visible";

                time.textContent = data.Countries[10].Date;
                locality.textContent = data.Countries[10].Country;
                cases.value = data.Countries[10].TotalConfirmed;
                deaths.value = data.Countries[10].TotalDeaths;
                recovered.value = data.Countries[10].TotalRecovered;
                critical.value = data.Countries[10].NewRecovered;
                seentoday.value = data.Countries[10].NewConfirmed;
                ikuoni.value = data.Countries[10].NewDeaths;
            }
            else if(count.value == "11" ){

                hide.style.visibility = "visible";
                seentoday.style.visibility = "visible";
                ikuoni.style.visibility = "visible";
                one.style.visibility = "visible";
                two.style.visibility = "visible";

                time.textContent = data.Countries[11].Date;
                locality.textContent = data.Countries[11].Country;
                cases.value = data.Countries[11].TotalConfirmed;
                deaths.value = data.Countries[11].TotalDeaths;
                recovered.value = data.Countries[11].TotalRecovered;
                critical.value = data.Countries[11].NewRecovered;
                seentoday.value = data.Countries[11].NewConfirmed;
                ikuoni.value = data.Countries[11].NewDeaths;
            }
            else if(count.value == "12" ){

                hide.style.visibility = "visible";
                seentoday.style.visibility = "visible";
                ikuoni.style.visibility = "visible";
                one.style.visibility = "visible";
                two.style.visibility = "visible";

                time.textContent = data.Countries[12].Date;
                locality.textContent = data.Countries[12].Country;
                cases.value = data.Countries[12].TotalConfirmed;
                deaths.value = data.Countries[12].TotalDeaths;
                recovered.value = data.Countries[12].TotalRecovered;
                critical.value = data.Countries[12].NewRecovered;
                seentoday.value = data.Countries[12].NewConfirmed;
                ikuoni.value = data.Countries[12].NewDeaths;
            }
            else if(count.value == "13" ){

                hide.style.visibility = "visible";
                seentoday.style.visibility = "visible";
                ikuoni.style.visibility = "visible";
                one.style.visibility = "visible";
                two.style.visibility = "visible";

                time.textContent = data.Countries[13].Date;
                locality.textContent = data.Countries[13].Country;
                cases.value = data.Countries[13].TotalConfirmed;
                deaths.value = data.Countries[13].TotalDeaths;
                recovered.value = data.Countries[13].TotalRecovered;
                critical.value = data.Countries[13].NewRecovered;
                seentoday.value = data.Countries[13].NewConfirmed;
                ikuoni.value = data.Countries[13].NewDeaths;
            }
            else if(count.value == "14" ){

                hide.style.visibility = "visible";
                seentoday.style.visibility = "visible";
                ikuoni.style.visibility = "visible";
                one.style.visibility = "visible";
                two.style.visibility = "visible";

                time.textContent = data.Countries[14].Date;
                locality.textContent = data.Countries[14].Country;
                cases.value = data.Countries[14].TotalConfirmed;
                deaths.value = data.Countries[14].TotalDeaths;
                recovered.value = data.Countries[14].TotalRecovered;
                critical.value = data.Countries[14].NewRecovered;
                seentoday.value = data.Countries[14].NewConfirmed;
                ikuoni.value = data.Countries[14].NewDeaths;
            }
            else if(count.value == "15" ){

                hide.style.visibility = "visible";
                seentoday.style.visibility = "visible";
                ikuoni.style.visibility = "visible";
                one.style.visibility = "visible";
                two.style.visibility = "visible";

                time.textContent = data.Countries[15].Date;
                locality.textContent = data.Countries[15].Country;
                cases.value = data.Countries[15].TotalConfirmed;
                deaths.value = data.Countries[15].TotalDeaths;
                recovered.value = data.Countries[15].TotalRecovered;
                critical.value = data.Countries[15].NewRecovered;
                seentoday.value = data.Countries[15].NewConfirmed;
                ikuoni.value = data.Countries[15].NewDeaths;
            }
            else if(count.value == "16" ){

                hide.style.visibility = "visible";
                seentoday.style.visibility = "visible";
                ikuoni.style.visibility = "visible";
                one.style.visibility = "visible";
                two.style.visibility = "visible";

                time.textContent = data.Countries[16].Date;
                locality.textContent = data.Countries[16].Country;
                cases.value = data.Countries[16].TotalConfirmed;
                deaths.value = data.Countries[16].TotalDeaths;
                recovered.value = data.Countries[16].TotalRecovered;
                critical.value = data.Countries[16].NewRecovered;
                seentoday.value = data.Countries[16].NewConfirmed;
                ikuoni.value = data.Countries[16].NewDeaths;
            }
            else if(count.value == "17" ){

                hide.style.visibility = "visible";
                seentoday.style.visibility = "visible";
                ikuoni.style.visibility = "visible";
                one.style.visibility = "visible";
                two.style.visibility = "visible";

                time.textContent = data.Countries.Date;
                locality.textContent = data.Countries[17].Country;
                cases.value = data.Countries[17].TotalConfirmed;
                deaths.value = data.Countries[17].TotalDeaths;
                recovered.value = data.Countries[17].TotalRecovered;
                critical.value = data.Countries[17].NewRecovered;
                seentoday.value = data.Countries[17].NewConfirmed;
                ikuoni.value = data.Countries[17].NewDeaths;
            }
            else if(count.value == "18" ){

                hide.style.visibility = "visible";
                seentoday.style.visibility = "visible";
                ikuoni.style.visibility = "visible";
                one.style.visibility = "visible";
                two.style.visibility = "visible";

                time.textContent = data.Countries[18].Date;
                locality.textContent = data.Countries[18].Country;
                cases.value = data.Countries[18].TotalConfirmed;
                deaths.value = data.Countries[18].TotalDeaths;
                recovered.value = data.Countries[18].TotalRecovered;
                critical.value = data.Countries[18].NewRecovered;
                seentoday.value = data.Countries[18].NewConfirmed;
                ikuoni.value = data.Countries[18].NewDeaths;
            }
            else if(count.value == "19" ){

                hide.style.visibility = "visible";
                seentoday.style.visibility = "visible";
                ikuoni.style.visibility = "visible";
                one.style.visibility = "visible";
                two.style.visibility = "visible";

                time.textContent = data.Countries[19].Date;
                locality.textContent = data.Countries[19].Country;
                cases.value = data.Countries[19].TotalConfirmed;
                deaths.value = data.Countries[19].TotalDeaths;
                recovered.value = data.Countries[19].TotalRecovered;
                critical.value = data.Countries[19].NewRecovered;
                seentoday.value = data.Countries[19].NewConfirmed;
                ikuoni.value = data.Countries[19].NewDeaths;
            }
            else if(count.value == "20" ){

                hide.style.visibility = "visible";
                seentoday.style.visibility = "visible";
                ikuoni.style.visibility = "visible";
                one.style.visibility = "visible";
                two.style.visibility = "visible";

                time.textContent = data.Countries[20].Date;
                locality.textContent = data.Countries[20].Country;
                cases.value = data.Countries[20].TotalConfirmed;
                deaths.value = data.Countries[20].TotalDeaths;
                recovered.value = data.Countries[20].TotalRecovered;
                critical.value = data.Countries[20].NewRecovered;
                seentoday.value = data.Countries[20].NewConfirmed;
                ikuoni.value = data.Countries[20].NewDeaths;
            }
            else if(count.value == "21" ){

                hide.style.visibility = "visible";
                seentoday.style.visibility = "visible";
                ikuoni.style.visibility = "visible";
                one.style.visibility = "visible";
                two.style.visibility = "visible";

                time.textContent = data.Countries[21].Date;
                locality.textContent = data.Countries[21].Country;
                cases.value = data.Countries[21].TotalConfirmed;
                deaths.value = data.Countries[21].TotalDeaths;
                recovered.value = data.Countries[21].TotalRecovered;
                critical.value = data.Countries[21].NewRecovered;
                seentoday.value = data.Countries[21].NewConfirmed;
                ikuoni.value = data.Countries[21].NewDeaths;
            }
            else if(count.value == "22" ){

                hide.style.visibility = "visible";
                seentoday.style.visibility = "visible";
                ikuoni.style.visibility = "visible";
                one.style.visibility = "visible";
                two.style.visibility = "visible";

                time.textContent = data.Countries[22].Date;
                locality.textContent = data.Countries[22].Country;
                cases.value = data.Countries[22].TotalConfirmed;
                deaths.value = data.Countries[22].TotalDeaths;
                recovered.value = data.Countries[22].TotalRecovered;
                critical.value = data.Countries[22].NewRecovered;
                seentoday.value = data.Countries[22].NewConfirmed;
                ikuoni.value = data.Countries[22].NewDeaths;
            }
            else if(count.value == "23" ){

                hide.style.visibility = "visible";
                seentoday.style.visibility = "visible";
                ikuoni.style.visibility = "visible";
                one.style.visibility = "visible";
                two.style.visibility = "visible";

                time.textContent = data.Countries[23].Date;
                locality.textContent = data.Countries[23].Country;
                cases.value = data.Countries[23].TotalConfirmed;
                deaths.value = data.Countries[23].TotalDeaths;
                recovered.value = data.Countries[23].TotalRecovered;
                critical.value = data.Countries[23].NewRecovered;
                seentoday.value = data.Countries[23].NewConfirmed;
                ikuoni.value = data.Countries[23].NewDeaths;
            }
            else if(count.value == "24" ){

                hide.style.visibility = "visible";
                seentoday.style.visibility = "visible";
                ikuoni.style.visibility = "visible";
                one.style.visibility = "visible";
                two.style.visibility = "visible";

                time.textContent = data.Countries[24].Date;
                locality.textContent = data.Countries[24].Country;
                cases.value = data.Countries[24].TotalConfirmed;
                deaths.value = data.Countries[24].TotalDeaths;
                recovered.value = data.Countries[24].TotalRecovered;
                critical.value = data.Countries[24].NewRecovered;
                seentoday.value = data.Countries[24].NewConfirmed;
                ikuoni.value = data.Countries[24].NewDeaths;
            }
            else if(count.value == "25" ){

                hide.style.visibility = "visible";
                seentoday.style.visibility = "visible";
                ikuoni.style.visibility = "visible";
                one.style.visibility = "visible";
                two.style.visibility = "visible";

                time.textContent = data.Countries[25].Date;
                locality.textContent = data.Countries[25].Country;
                cases.value = data.Countries[25].TotalConfirmed;
                deaths.value = data.Countries[25].TotalDeaths;
                recovered.value = data.Countries[25].TotalRecovered;
                critical.value = data.Countries[25].NewRecovered;
                seentoday.value = data.Countries[25].NewConfirmed;
                ikuoni.value = data.Countries[25].NewDeaths;
            }
            else if(count.value == "26" ){

                hide.style.visibility = "visible";
                seentoday.style.visibility = "visible";
                ikuoni.style.visibility = "visible";
                one.style.visibility = "visible";
                two.style.visibility = "visible";

                time.textContent = data.Countries[26].Date;
                locality.textContent = data.Countries[26].Country;
                cases.value = data.Countries[26].TotalConfirmed;
                deaths.value = data.Countries[26].TotalDeaths;
                recovered.value = data.Countries[26].TotalRecovered;
                critical.value = data.Countries[26].NewRecovered;
                seentoday.value = data.Countries[26].NewConfirmed;
                ikuoni.value = data.Countries[26].NewDeaths;
            }
            else if(count.value == "27" ){

                hide.style.visibility = "visible";
                seentoday.style.visibility = "visible";
                ikuoni.style.visibility = "visible";
                one.style.visibility = "visible";
                two.style.visibility = "visible";

                time.textContent = data.Countries[27].Date;
                locality.textContent = data.Countries[27].Country;
                cases.value = data.Countries[27].TotalConfirmed;
                deaths.value = data.Countries[27].TotalDeaths;
                recovered.value = data.Countries[27].TotalRecovered;
                critical.value = data.Countries[27].NewRecovered;
                seentoday.value = data.Countries[27].NewConfirmed;
                ikuoni.value = data.Countries[27].NewDeaths;
            }
            else if(count.value == "28" ){

                hide.style.visibility = "visible";
                seentoday.style.visibility = "visible";
                ikuoni.style.visibility = "visible";
                one.style.visibility = "visible";
                two.style.visibility = "visible";

                time.textContent = data.Countries[28].Date;
                locality.textContent = data.Countries[28].Country;
                cases.value = data.Countries[28].TotalConfirmed;
                deaths.value = data.Countries[28].TotalDeaths;
                recovered.value = data.Countries[28].TotalRecovered;
                critical.value = data.Countries[28].NewRecovered;
                seentoday.value = data.Countries[28].NewConfirmed;
                ikuoni.value = data.Countries[28].NewDeaths;
            }
            else if(count.value == "29" ){

                hide.style.visibility = "visible";
                seentoday.style.visibility = "visible";
                ikuoni.style.visibility = "visible";
                one.style.visibility = "visible";
                two.style.visibility = "visible";

                time.textContent = data.Countries[29].Date;
                locality.textContent = data.Countries[29].Country;
                cases.value = data.Countries[29].TotalConfirmed;
                deaths.value = data.Countries[29].TotalDeaths;
                recovered.value = data.Countries[29].TotalRecovered;
                critical.value = data.Countries[29].NewRecovered;
                seentoday.value = data.Countries[29].NewConfirmed;
                ikuoni.value = data.Countries[29].NewDeaths;
            }
            else if(count.value == "30" ){

                hide.style.visibility = "visible";
                seentoday.style.visibility = "visible";
                ikuoni.style.visibility = "visible";
                one.style.visibility = "visible";
                two.style.visibility = "visible";

                time.textContent = data.Countries[30].Date;
                locality.textContent = data.Countries[30].Country;
                cases.value = data.Countries[30].TotalConfirmed;
                deaths.value = data.Countries[30].TotalDeaths;
                recovered.value = data.Countries[30].TotalRecovered;
                critical.value = data.Countries[30].NewRecovered;
                seentoday.value = data.Countries[30].NewConfirmed;
                ikuoni.value = data.Countries[30].NewDeaths;
            }
            else if(count.value == "31" ){

                hide.style.visibility = "visible";
                seentoday.style.visibility = "visible";
                ikuoni.style.visibility = "visible";
                one.style.visibility = "visible";
                two.style.visibility = "visible";

                time.textContent = data.Countries[31].Date;
                locality.textContent = data.Countries[31].Country;
                cases.value = data.Countries[31].TotalConfirmed;
                deaths.value = data.Countries[31].TotalDeaths;
                recovered.value = data.Countries[31].TotalRecovered;
                critical.value = data.Countries[31].NewRecovered;
                seentoday.value = data.Countries[31].NewConfirmed;
                ikuoni.value = data.Countries[31].NewDeaths;
            }
            else if(count.value == "32" ){

                hide.style.visibility = "visible";
                seentoday.style.visibility = "visible";
                ikuoni.style.visibility = "visible";
                one.style.visibility = "visible";
                two.style.visibility = "visible";

                time.textContent = data.Countries[32].Date;
                locality.textContent = data.Countries[32].Country;
                cases.value = data.Countries[32].TotalConfirmed;
                deaths.value = data.Countries[32].TotalDeaths;
                recovered.value = data.Countries[32].TotalRecovered;
                critical.value = data.Countries[32].NewRecovered;
                seentoday.value = data.Countries[32].NewConfirmed;
                ikuoni.value = data.Countries[32].NewDeaths;
            }
            else if(count.value == "33" ){

                hide.style.visibility = "visible";
                seentoday.style.visibility = "visible";
                ikuoni.style.visibility = "visible";
                one.style.visibility = "visible";
                two.style.visibility = "visible";

                time.textContent = data.Countries[33].Date;
                locality.textContent = data.Countries[33].Country;
                cases.value = data.Countries[33].TotalConfirmed;
                deaths.value = data.Countries[33].TotalDeaths;
                recovered.value = data.Countries[33].TotalRecovered;
                critical.value = data.Countries[33].NewRecovered;
                seentoday.value = data.Countries[33].NewConfirmed;
                ikuoni.value = data.Countries[33].NewDeaths;
            }
            else if(count.value == "34" ){

                hide.style.visibility = "visible";
                seentoday.style.visibility = "visible";
                ikuoni.style.visibility = "visible";
                one.style.visibility = "visible";
                two.style.visibility = "visible";

                time.textContent = data.Countries[34].Date;
                locality.textContent = data.Countries[34].Country;
                cases.value = data.Countries[34].TotalConfirmed;
                deaths.value = data.Countries[34].TotalDeaths;
                recovered.value = data.Countries[34].TotalRecovered;
                critical.value = data.Countries[34].NewRecovered;
                seentoday.value = data.Countries[34].NewConfirmed;
                ikuoni.value = data.Countries[34].NewDeaths;
            }
            else if(count.value == "35" ){

                hide.style.visibility = "visible";
                seentoday.style.visibility = "visible";
                ikuoni.style.visibility = "visible";
                one.style.visibility = "visible";
                two.style.visibility = "visible";

                time.textContent = data.Countries[35].Date;
                locality.textContent = data.Countries[35].Country;
                cases.value = data.Countries[35].TotalConfirmed;
                deaths.value = data.Countries[35].TotalDeaths;
                recovered.value = data.Countries[35].TotalRecovered;
                critical.value = data.Countries[35].NewRecovered;
                seentoday.value = data.Countries[35].NewConfirmed;
                ikuoni.value = data.Countries[35].NewDeaths;
            }
            else if(count.value == "36" ){

                hide.style.visibility = "visible";
                seentoday.style.visibility = "visible";
                ikuoni.style.visibility = "visible";
                one.style.visibility = "visible";
                two.style.visibility = "visible";

                time.textContent = data.Countries[36].Date;
                locality.textContent = data.Countries[36].Country;
                cases.value = data.Countries[36].TotalConfirmed;
                deaths.value = data.Countries[36].TotalDeaths;
                recovered.value = data.Countries[36].TotalRecovered;
                critical.value = data.Countries[36].NewRecovered;
                seentoday.value = data.Countries[36].NewConfirmed;
                ikuoni.value = data.Countries[36].NewDeaths;
            }
            else if(count.value == "37" ){

                hide.style.visibility = "visible";
                seentoday.style.visibility = "visible";
                ikuoni.style.visibility = "visible";
                one.style.visibility = "visible";
                two.style.visibility = "visible";

                time.textContent = data.Countries[37].Date;
                locality.textContent = data.Countries[37].Country;
                cases.value = data.Countries[37].TotalConfirmed;
                deaths.value = data.Countries[37].TotalDeaths;
                recovered.value = data.Countries[37].TotalRecovered;
                critical.value = data.Countries[37].NewRecovered;
                seentoday.value = data.Countries[37].NewConfirmed;
                ikuoni.value = data.Countries[37].NewDeaths;
            }
            else if(count.value == "38" ){

                hide.style.visibility = "visible";
                seentoday.style.visibility = "visible";
                ikuoni.style.visibility = "visible";
                one.style.visibility = "visible";
                two.style.visibility = "visible";

                time.textContent = data.Countries[38].Date;
                locality.textContent = data.Countries[38].Country;
                cases.value = data.Countries[38].TotalConfirmed;
                deaths.value = data.Countries[38].TotalDeaths;
                recovered.value = data.Countries[38].TotalRecovered;
                critical.value = data.Countries[38].NewRecovered;
                seentoday.value = data.Countries[38].NewConfirmed;
                ikuoni.value = data.Countries[38].NewDeaths;
            }
            else if(count.value == "39" ){

                hide.style.visibility = "visible";
                seentoday.style.visibility = "visible";
                ikuoni.style.visibility = "visible";
                one.style.visibility = "visible";
                two.style.visibility = "visible";

                time.textContent = data.Countries[39].Date;
                locality.textContent = data.Countries[39].Country;
                cases.value = data.Countries[39].TotalConfirmed;
                deaths.value = data.Countries[39].TotalDeaths;
                recovered.value = data.Countries[39].TotalRecovered;
                critical.value = data.Countries[39].NewRecovered;
                seentoday.value = data.Countries[39].NewConfirmed;
                ikuoni.value = data.Countries[39].NewDeaths;
            }
            else if(count.value == "40" ){

                hide.style.visibility = "visible";
                seentoday.style.visibility = "visible";
                ikuoni.style.visibility = "visible";
                one.style.visibility = "visible";
                two.style.visibility = "visible";

                time.textContent = data.Countries[40].Date;
                locality.textContent = data.Countries[40].Country;
                cases.value = data.Countries[40].TotalConfirmed;
                deaths.value = data.Countries[40].TotalDeaths;
                recovered.value = data.Countries[40].TotalRecovered;
                critical.value = data.Countries[40].NewRecovered;
                seentoday.value = data.Countries[40].NewConfirmed;
                ikuoni.value = data.Countries[40].NewDeaths;
            }
            else if(count.value == "41" ){

                hide.style.visibility = "visible";
                seentoday.style.visibility = "visible";
                ikuoni.style.visibility = "visible";
                one.style.visibility = "visible";
                two.style.visibility = "visible";

                time.textContent = data.Countries[41].Date;
                locality.textContent = data.Countries[41].Country;
                cases.value = data.Countries[41].TotalConfirmed;
                deaths.value = data.Countries[41].TotalDeaths;
                recovered.value = data.Countries[41].TotalRecovered;
                critical.value = data.Countries[41].NewRecovered;
                seentoday.value = data.Countries[41].NewConfirmed;
                ikuoni.value = data.Countries[41].NewDeaths;
            }
            else if(count.value == "42" ){

                hide.style.visibility = "visible";
                seentoday.style.visibility = "visible";
                ikuoni.style.visibility = "visible";
                one.style.visibility = "visible";
                two.style.visibility = "visible";

                time.textContent = data.Countries[42].Date;
                locality.textContent = data.Countries[42].Country;
                cases.value = data.Countries[42].TotalConfirmed;
                deaths.value = data.Countries[42].TotalDeaths;
                recovered.value = data.Countries[42].TotalRecovered;
                critical.value = data.Countries[42].NewRecovered;
                seentoday.value = data.Countries[42].NewConfirmed;
                ikuoni.value = data.Countries[42].NewDeaths;
            }
            else if(count.value == "43" ){

                hide.style.visibility = "visible";
                seentoday.style.visibility = "visible";
                ikuoni.style.visibility = "visible";
                one.style.visibility = "visible";
                two.style.visibility = "visible";

                time.textContent = data.Countries[43].Date;
                locality.textContent = data.Countries[43].Country;
                cases.value = data.Countries[43].TotalConfirmed;
                deaths.value = data.Countries[43].TotalDeaths;
                recovered.value = data.Countries[43].TotalRecovered;
                critical.value = data.Countries[43].NewRecovered;
                seentoday.value = data.Countries[43].NewConfirmed;
                ikuoni.value = data.Countries[43].NewDeaths;
            }
            else if(count.value == "44" ){

                hide.style.visibility = "visible";
                seentoday.style.visibility = "visible";
                ikuoni.style.visibility = "visible";
                one.style.visibility = "visible";
                two.style.visibility = "visible";

                time.textContent = data.Countries[44].Date;
                locality.textContent = data.Countries[44].Country;
                cases.value = data.Countries[44].TotalConfirmed;
                deaths.value = data.Countries[44].TotalDeaths;
                recovered.value = data.Countries[44].TotalRecovered;
                critical.value = data.Countries[44].NewRecovered;
                seentoday.value = data.Countries[44].NewConfirmed;
                ikuoni.value = data.Countries[44].NewDeaths;
            }
            else if(count.value == "45" ){

                hide.style.visibility = "visible";
                seentoday.style.visibility = "visible";
                ikuoni.style.visibility = "visible";
                one.style.visibility = "visible";
                two.style.visibility = "visible";

                time.textContent = data.Countries[45].Date;
                locality.textContent = data.Countries[45].Country;
                cases.value = data.Countries[45].TotalConfirmed;
                deaths.value = data.Countries[45].TotalDeaths;
                recovered.value = data.Countries[45].TotalRecovered;
                critical.value = data.Countries[45].NewRecovered;
                seentoday.value = data.Countries[45].NewConfirmed;
                ikuoni.value = data.Countries[45].NewDeaths;
            }
            else if(count.value == "46" ){

                hide.style.visibility = "visible";
                seentoday.style.visibility = "visible";
                ikuoni.style.visibility = "visible";
                one.style.visibility = "visible";
                two.style.visibility = "visible";

                time.textContent = data.Countries[46].Date;
                locality.textContent = data.Countries[46].Country;
                cases.value = data.Countries[46].TotalConfirmed;
                deaths.value = data.Countries[46].TotalDeaths;
                recovered.value = data.Countries[46].TotalRecovered;
                critical.value = data.Countries[46].NewRecovered;
                seentoday.value = data.Countries[46].NewConfirmed;
                ikuoni.value = data.Countries[46].NewDeaths;
            }
            else if(count.value == "47" ){

                hide.style.visibility = "visible";
                seentoday.style.visibility = "visible";
                ikuoni.style.visibility = "visible";
                one.style.visibility = "visible";
                two.style.visibility = "visible";

                time.textContent = data.Countries[47].Date;
                locality.textContent = data.Countries[47].Country;
                cases.value = data.Countries[47].TotalConfirmed;
                deaths.value = data.Countries[47].TotalDeaths;
                recovered.value = data.Countries[47].TotalRecovered;
                critical.value = data.Countries[47].NewRecovered;
                seentoday.value = data.Countries[47].NewConfirmed;
                ikuoni.value = data.Countries[47].NewDeaths;
            }
            else if(count.value == "48" ){

                hide.style.visibility = "visible";
                seentoday.style.visibility = "visible";
                ikuoni.style.visibility = "visible";
                one.style.visibility = "visible";
                two.style.visibility = "visible";

                time.textContent = data.Countries[48].Date;
                locality.textContent = data.Countries[48].Country;
                cases.value = data.Countries[48].TotalConfirmed;
                deaths.value = data.Countries[48].TotalDeaths;
                recovered.value = data.Countries[48].TotalRecovered;
                critical.value = data.Countries[48].NewRecovered;
                seentoday.value = data.Countries[48].NewConfirmed;
                ikuoni.value = data.Countries[48].NewDeaths;
            }
            else if(count.value == "49" ){

                hide.style.visibility = "visible";
                seentoday.style.visibility = "visible";
                ikuoni.style.visibility = "visible";
                one.style.visibility = "visible";
                two.style.visibility = "visible";

                time.textContent = data.Countries[49].Date;
                locality.textContent = data.Countries[49].Country;
                cases.value = data.Countries[49].TotalConfirmed;
                deaths.value = data.Countries[49].TotalDeaths;
                recovered.value = data.Countries[49].TotalRecovered;
                critical.value = data.Countries[49].NewRecovered;
                seentoday.value = data.Countries[49].NewConfirmed;
                ikuoni.value = data.Countries[49].NewDeaths;
            }
            else if(count.value == "50" ){

                hide.style.visibility = "visible";
                seentoday.style.visibility = "visible";
                ikuoni.style.visibility = "visible";
                one.style.visibility = "visible";
                two.style.visibility = "visible";

                time.textContent = data.Countries[50].Date;
                locality.textContent = data.Countries[50].Country;
                cases.value = data.Countries[50].TotalConfirmed;
                deaths.value = data.Countries[50].TotalDeaths;
                recovered.value = data.Countries[50].TotalRecovered;
                critical.value = data.Countries[50].NewRecovered;
                seentoday.value = data.Countries[50].NewConfirmed;
                ikuoni.value = data.Countries[50].NewDeaths;
            }
            else if(count.value == "51" ){

                hide.style.visibility = "visible";
                seentoday.style.visibility = "visible";
                ikuoni.style.visibility = "visible";
                one.style.visibility = "visible";
                two.style.visibility = "visible";

                time.textContent = data.Countries[51].Date;
                locality.textContent = data.Countries[51].Country;
                cases.value = data.Countries[51].TotalConfirmed;
                deaths.value = data.Countries[51].TotalDeaths;
                recovered.value = data.Countries[51].TotalRecovered;
                critical.value = data.Countries[51].NewRecovered;
                seentoday.value = data.Countries[51].NewConfirmed;
                ikuoni.value = data.Countries[51].NewDeaths;
            }
            else if(count.value == "52" ){

                hide.style.visibility = "visible";
                seentoday.style.visibility = "visible";
                ikuoni.style.visibility = "visible";
                one.style.visibility = "visible";
                two.style.visibility = "visible";

                time.textContent = data.Countries[52].Date;
                locality.textContent = data.Countries[52].Country;
                cases.value = data.Countries[52].TotalConfirmed;
                deaths.value = data.Countries[52].TotalDeaths;
                recovered.value = data.Countries[52].TotalRecovered;
                critical.value = data.Countries[52].NewRecovered;
                seentoday.value = data.Countries[52].NewConfirmed;
                ikuoni.value = data.Countries[52].NewDeaths;
            }
            else if(count.value == "53" ){

                hide.style.visibility = "visible";
                seentoday.style.visibility = "visible";
                ikuoni.style.visibility = "visible";
                one.style.visibility = "visible";
                two.style.visibility = "visible";

                time.textContent = data.Countries[53].Date;
                locality.textContent = data.Countries[53].Country;
                cases.value = data.Countries[53].TotalConfirmed;
                deaths.value = data.Countries[53].TotalDeaths;
                recovered.value = data.Countries[53].TotalRecovered;
                critical.value = data.Countries[53].NewRecovered;
                seentoday.value = data.Countries[53].NewConfirmed;
                ikuoni.value = data.Countries[53].NewDeaths;
            }
            else if(count.value == "54" ){

                hide.style.visibility = "visible";
                seentoday.style.visibility = "visible";
                ikuoni.style.visibility = "visible";
                one.style.visibility = "visible";
                two.style.visibility = "visible";

                time.textContent = data.Countries[54].Date;
                locality.textContent = data.Countries[54].Country;
                cases.value = data.Countries[54].TotalConfirmed;
                deaths.value = data.Countries[54].TotalDeaths;
                recovered.value = data.Countries[54].TotalRecovered;
                critical.value = data.Countries[54].NewRecovered;
                seentoday.value = data.Countries[54].NewConfirmed;
                ikuoni.value = data.Countries[54].NewDeaths;
            }
            else if(count.value == "55" ){

                hide.style.visibility = "visible";
                seentoday.style.visibility = "visible";
                ikuoni.style.visibility = "visible";
                one.style.visibility = "visible";
                two.style.visibility = "visible";

                time.textContent = data.Countries[55].Date;
                locality.textContent = data.Countries[55].Country;
                cases.value = data.Countries[55].TotalConfirmed;
                deaths.value = data.Countries[55].TotalDeaths;
                recovered.value = data.Countries[55].TotalRecovered;
                critical.value = data.Countries[55].NewRecovered;
                seentoday.value = data.Countries[55].NewConfirmed;
                ikuoni.value = data.Countries[55].NewDeaths;
            }
            else if(count.value == "56" ){

                hide.style.visibility = "visible";
                seentoday.style.visibility = "visible";
                ikuoni.style.visibility = "visible";
                one.style.visibility = "visible";
                two.style.visibility = "visible";

                time.textContent = data.Countries[56].Date;
                locality.textContent = data.Countries[56].Country;
                cases.value = data.Countries[56].TotalConfirmed;
                deaths.value = data.Countries[56].TotalDeaths;
                recovered.value = data.Countries[56].TotalRecovered;
                critical.value = data.Countries[56].NewRecovered;
                seentoday.value = data.Countries[56].NewConfirmed;
                ikuoni.value = data.Countries[56].NewDeaths;
            }
            else if(count.value == "57" ){

                hide.style.visibility = "visible";
                seentoday.style.visibility = "visible";
                ikuoni.style.visibility = "visible";
                one.style.visibility = "visible";
                two.style.visibility = "visible";

                time.textContent = data.Countries[57].Date;
                locality.textContent = data.Countries[57].Country;
                cases.value = data.Countries[57].TotalConfirmed;
                deaths.value = data.Countries[57].TotalDeaths;
                recovered.value = data.Countries[57].TotalRecovered;
                critical.value = data.Countries[57].NewRecovered;
                seentoday.value = data.Countries[57].NewConfirmed;
                ikuoni.value = data.Countries[57].NewDeaths;
            }
            else if(count.value == "58" ){

                hide.style.visibility = "visible";
                seentoday.style.visibility = "visible";
                ikuoni.style.visibility = "visible";
                one.style.visibility = "visible";
                two.style.visibility = "visible";

                time.textContent = data.Countries[58].Date;
                locality.textContent = data.Countries[58].Country;
                cases.value = data.Countries[58].TotalConfirmed;
                deaths.value = data.Countries[58].TotalDeaths;
                recovered.value = data.Countries[58].TotalRecovered;
                critical.value = data.Countries[58].NewRecovered;
                seentoday.value = data.Countries[58].NewConfirmed;
                ikuoni.value = data.Countries[58].NewDeaths;
            }
            else if(count.value == "59" ){

                hide.style.visibility = "visible";
                seentoday.style.visibility = "visible";
                ikuoni.style.visibility = "visible";
                one.style.visibility = "visible";
                two.style.visibility = "visible";

                time.textContent = data.Countries[59].Date;
                locality.textContent = data.Countries[59].Country;
                cases.value = data.Countries[59].TotalConfirmed;
                deaths.value = data.Countries[59].TotalDeaths;
                recovered.value = data.Countries[59].TotalRecovered;
                critical.value = data.Countries[59].NewRecovered;
                seentoday.value = data.Countries[59].NewConfirmed;
                ikuoni.value = data.Countries[59].NewDeaths;
            }
            else if(count.value == "60" ){

                hide.style.visibility = "visible";
                seentoday.style.visibility = "visible";
                ikuoni.style.visibility = "visible";
                one.style.visibility = "visible";
                two.style.visibility = "visible";

                time.textContent = data.Countries[60].Date;
                locality.textContent = data.Countries[60].Country;
                cases.value = data.Countries[60].TotalConfirmed;
                deaths.value = data.Countries[60].TotalDeaths;
                recovered.value = data.Countries[0].TotalRecovered;
                critical.value = data.Countries[60].NewRecovered;
                seentoday.value = data.Countries[60].NewConfirmed;
                ikuoni.value = data.Countries[60].NewDeaths;
            }
            else if(count.value == "61" ){

                hide.style.visibility = "visible";
                seentoday.style.visibility = "visible";
                ikuoni.style.visibility = "visible";
                one.style.visibility = "visible";
                two.style.visibility = "visible";

                time.textContent = data.Countries[61].Date;
                locality.textContent = data.Countries[61].Country;
                cases.value = data.Countries[61].TotalConfirmed;
                deaths.value = data.Countries[61].TotalDeaths;
                recovered.value = data.Countries[61].TotalRecovered;
                critical.value = data.Countries[61].NewRecovered;
                seentoday.value = data.Countries[61].NewConfirmed;
                ikuoni.value = data.Countries[61].NewDeaths;
            }
            else if(count.value == "62" ){

                hide.style.visibility = "visible";
                seentoday.style.visibility = "visible";
                ikuoni.style.visibility = "visible";
                one.style.visibility = "visible";
                two.style.visibility = "visible";

                time.textContent = data.Countries[62].Date;
                locality.textContent = data.Countries[62].Country;
                cases.value = data.Countries[62].TotalConfirmed;
                deaths.value = data.Countries[62].TotalDeaths;
                recovered.value = data.Countries[62].TotalRecovered;
                critical.value = data.Countries[62].NewRecovered;
                seentoday.value = data.Countries[62].NewConfirmed;
                ikuoni.value = data.Countries[62].NewDeaths;
            }
            else if(count.value == "63" ){

                hide.style.visibility = "visible";
                seentoday.style.visibility = "visible";
                ikuoni.style.visibility = "visible";
                one.style.visibility = "visible";
                two.style.visibility = "visible";

                time.textContent = data.Countries[63].Date;
                locality.textContent = data.Countries[63].Country;
                cases.value = data.Countries[63].TotalConfirmed;
                deaths.value = data.Countries[63].TotalDeaths;
                recovered.value = data.Countries[63].TotalRecovered;
                critical.value = data.Countries[63].NewRecovered;
                seentoday.value = data.Countries[63].NewConfirmed;
                ikuoni.value = data.Countries[63].NewDeaths;
            }
            else if(count.value == "64" ){

                hide.style.visibility = "visible";
                seentoday.style.visibility = "visible";
                ikuoni.style.visibility = "visible";
                one.style.visibility = "visible";
                two.style.visibility = "visible";

                time.textContent = data.Countries[64].Date;
                locality.textContent = data.Countries[64].Country;
                cases.value = data.Countries[64].TotalConfirmed;
                deaths.value = data.Countries[64].TotalDeaths;
                recovered.value = data.Countries[64].TotalRecovered;
                critical.value = data.Countries[64].NewRecovered;
                seentoday.value = data.Countries[64].NewConfirmed;
                ikuoni.value = data.Countries[64].NewDeaths;
            }
            else if(count.value == "65" ){

                hide.style.visibility = "visible";
                seentoday.style.visibility = "visible";
                ikuoni.style.visibility = "visible";
                one.style.visibility = "visible";
                two.style.visibility = "visible";

                time.textContent = data.Countries[65].Date;
                locality.textContent = data.Countries[65].Country;
                cases.value = data.Countries[65].TotalConfirmed;
                deaths.value = data.Countries[65].TotalDeaths;
                recovered.value = data.Countries[65].TotalRecovered;
                critical.value = data.Countries[65].NewRecovered;
                seentoday.value = data.Countries[65].NewConfirmed;
                ikuoni.value = data.Countries[65].NewDeaths;
            }
            else if(count.value == "66" ){

                hide.style.visibility = "visible";
                seentoday.style.visibility = "visible";
                ikuoni.style.visibility = "visible";
                one.style.visibility = "visible";
                two.style.visibility = "visible";

                time.textContent = data.Countries[66].Date;
                locality.textContent = data.Countries[66].Country;
                cases.value = data.Countries[66].TotalConfirmed;
                deaths.value = data.Countries[66].TotalDeaths;
                recovered.value = data.Countries[66].TotalRecovered;
                critical.value = data.Countries[66].NewRecovered;
                seentoday.value = data.Countries[66].NewConfirmed;
                ikuoni.value = data.Countries[66].NewDeaths;
            }
            else if(count.value == "67" ){

                hide.style.visibility = "visible";
                seentoday.style.visibility = "visible";
                ikuoni.style.visibility = "visible";
                one.style.visibility = "visible";
                two.style.visibility = "visible";

                time.textContent = data.Countries[67].Date;
                locality.textContent = data.Countries[67].Country;
                cases.value = data.Countries[67].TotalConfirmed;
                deaths.value = data.Countries[67].TotalDeaths;
                recovered.value = data.Countries[67].TotalRecovered;
                critical.value = data.Countries[67].NewRecovered;
                seentoday.value = data.Countries[67].NewConfirmed;
                ikuoni.value = data.Countries[67].NewDeaths;
            }
            else if(count.value == "68" ){

                hide.style.visibility = "visible";
                seentoday.style.visibility = "visible";
                ikuoni.style.visibility = "visible";
                one.style.visibility = "visible";
                two.style.visibility = "visible";

                time.textContent = data.Countries[68].Date;
                locality.textContent = data.Countries[68].Country;
                cases.value = data.Countries[68].TotalConfirmed;
                deaths.value = data.Countries[68].TotalDeaths;
                recovered.value = data.Countries[68].TotalRecovered;
                critical.value = data.Countries[68].NewRecovered;
                seentoday.value = data.Countries[68].NewConfirmed;
                ikuoni.value = data.Countries[68].NewDeaths;
            }
            else if(count.value == "69" ){

                hide.style.visibility = "visible";
                seentoday.style.visibility = "visible";
                ikuoni.style.visibility = "visible";
                one.style.visibility = "visible";
                two.style.visibility = "visible";

                time.textContent = data.Countries[69].Date;
                locality.textContent = data.Countries[69].Country;
                cases.value = data.Countries[69].TotalConfirmed;
                deaths.value = data.Countries[69].TotalDeaths;
                recovered.value = data.Countries[69].TotalRecovered;
                critical.value = data.Countries[69].NewRecovered;
                seentoday.value = data.Countries[69].NewConfirmed;
                ikuoni.value = data.Countries[69].NewDeaths;
            }
            else if(count.value == "70" ){

                hide.style.visibility = "visible";
                seentoday.style.visibility = "visible";
                ikuoni.style.visibility = "visible";
                one.style.visibility = "visible";
                two.style.visibility = "visible";

                time.textContent = data.Countries[70].Date;
                locality.textContent = data.Countries[70].Country;
                cases.value = data.Countries[70].TotalConfirmed;
                deaths.value = data.Countries[70].TotalDeaths;
                recovered.value = data.Countries[70].TotalRecovered;
                critical.value = data.Countries[70].NewRecovered;
                seentoday.value = data.Countries[70].NewConfirmed;
                ikuoni.value = data.Countries[70].NewDeaths;
            }
            else if(count.value == "71" ){

                hide.style.visibility = "visible";
                seentoday.style.visibility = "visible";
                ikuoni.style.visibility = "visible";
                one.style.visibility = "visible";
                two.style.visibility = "visible";

                time.textContent = data.Countries[71].Date;
                locality.textContent = data.Countries[71].Country;
                cases.value = data.Countries[71].TotalConfirmed;
                deaths.value = data.Countries[71].TotalDeaths;
                recovered.value = data.Countries[71].TotalRecovered;
                critical.value = data.Countries[71].NewRecovered;
                seentoday.value = data.Countries[71].NewConfirmed;
                ikuoni.value = data.Countries[71].NewDeaths;
            }
            else if(count.value == "72" ){

                hide.style.visibility = "visible";
                seentoday.style.visibility = "visible";
                ikuoni.style.visibility = "visible";
                one.style.visibility = "visible";
                two.style.visibility = "visible";

                time.textContent = data.Countries[72].Date;
                locality.textContent = data.Countries[72].Country;
                cases.value = data.Countries[72].TotalConfirmed;
                deaths.value = data.Countries[72].TotalDeaths;
                recovered.value = data.Countries[72].TotalRecovered;
                critical.value = data.Countries[72].NewRecovered;
                seentoday.value = data.Countries[72].NewConfirmed;
                ikuoni.value = data.Countries[72].NewDeaths;
            }
            else if(count.value == "73" ){

                hide.style.visibility = "visible";
                seentoday.style.visibility = "visible";
                ikuoni.style.visibility = "visible";
                one.style.visibility = "visible";
                two.style.visibility = "visible";

                time.textContent = data.Countries[73].Date;
                locality.textContent = data.Countries[73].Country;
                cases.value = data.Countries[73].TotalConfirmed;
                deaths.value = data.Countries[73].TotalDeaths;
                recovered.value = data.Countries[73].TotalRecovered;
                critical.value = data.Countries[73].NewRecovered;
                seentoday.value = data.Countries[73].NewConfirmed;
                ikuoni.value = data.Countries[73].NewDeaths;
            }
            else if(count.value == "74" ){

                hide.style.visibility = "visible";
                seentoday.style.visibility = "visible";
                ikuoni.style.visibility = "visible";
                one.style.visibility = "visible";
                two.style.visibility = "visible";

                time.textContent = data.Countries[74].Date;
                locality.textContent = data.Countries[74].Country;
                cases.value = data.Countries[74].TotalConfirmed;
                deaths.value = data.Countries[74].TotalDeaths;
                recovered.value = data.Countries[74].TotalRecovered;
                critical.value = data.Countries[74].NewRecovered;
                seentoday.value = data.Countries[74].NewConfirmed;
                ikuoni.value = data.Countries[74].NewDeaths;
            }
            else if(count.value == "75" ){

                hide.style.visibility = "visible";
                seentoday.style.visibility = "visible";
                ikuoni.style.visibility = "visible";
                one.style.visibility = "visible";
                two.style.visibility = "visible";

                time.textContent = data.Countries[75].Date;
                locality.textContent = data.Countries[75].Country;
                cases.value = data.Countries[75].TotalConfirmed;
                deaths.value = data.Countries[75].TotalDeaths;
                recovered.value = data.Countries[75].TotalRecovered;
                critical.value = data.Countries[75].NewRecovered;
                seentoday.value = data.Countries[75].NewConfirmed;
                ikuoni.value = data.Countries[75].NewDeaths;
            }
            else if(count.value == "76" ){

                hide.style.visibility = "visible";
                seentoday.style.visibility = "visible";
                ikuoni.style.visibility = "visible";
                one.style.visibility = "visible";
                two.style.visibility = "visible";

                time.textContent = data.Countries[76].Date;
                locality.textContent = data.Countries[76].Country;
                cases.value = data.Countries[76].TotalConfirmed;
                deaths.value = data.Countries[76].TotalDeaths;
                recovered.value = data.Countries[76].TotalRecovered;
                critical.value = data.Countries[76].NewRecovered;
                seentoday.value = data.Countries[76].NewConfirmed;
                ikuoni.value = data.Countries[76].NewDeaths;
            }
            else if(count.value == "77" ){

                hide.style.visibility = "visible";
                seentoday.style.visibility = "visible";
                ikuoni.style.visibility = "visible";
                one.style.visibility = "visible";
                two.style.visibility = "visible";

                time.textContent = data.Countries[77].Date;
                locality.textContent = data.Countries[77].Country;
                cases.value = data.Countries[77].TotalConfirmed;
                deaths.value = data.Countries[77].TotalDeaths;
                recovered.value = data.Countries[77].TotalRecovered;
                critical.value = data.Countries[77].NewRecovered;
                seentoday.value = data.Countries[77].NewConfirmed;
                ikuoni.value = data.Countries[77].NewDeaths;
            }
            else if(count.value == "78" ){

                hide.style.visibility = "visible";
                seentoday.style.visibility = "visible";
                ikuoni.style.visibility = "visible";
                one.style.visibility = "visible";
                two.style.visibility = "visible";

                time.textContent = data.Countries[78].Date;
                locality.textContent = data.Countries[78].Country;
                cases.value = data.Countries[78].TotalConfirmed;
                deaths.value = data.Countries[78].TotalDeaths;
                recovered.value = data.Countries[78].TotalRecovered;
                critical.value = data.Countries[78].NewRecovered;
                seentoday.value = data.Countries[78].NewConfirmed;
                ikuoni.value = data.Countries[78].NewDeaths;
            }
            else if(count.value == "79" ){

                hide.style.visibility = "visible";
                seentoday.style.visibility = "visible";
                ikuoni.style.visibility = "visible";
                one.style.visibility = "visible";
                two.style.visibility = "visible";

                time.textContent = data.Countries[79].Date;
                locality.textContent = data.Countries[79].Country;
                cases.value = data.Countries[79].TotalConfirmed;
                deaths.value = data.Countries[79].TotalDeaths;
                recovered.value = data.Countries[79].TotalRecovered;
                critical.value = data.Countries[79].NewRecovered;
                seentoday.value = data.Countries[79].NewConfirmed;
                ikuoni.value = data.Countries[79].NewDeaths;
            }
            else if(count.value == "80" ){

                hide.style.visibility = "visible";
                seentoday.style.visibility = "visible";
                ikuoni.style.visibility = "visible";
                one.style.visibility = "visible";
                two.style.visibility = "visible";

                time.textContent = data.Countries[80].Date;
                locality.textContent = data.Countries[80].Country;
                cases.value = data.Countries[80].TotalConfirmed;
                deaths.value = data.Countries[80].TotalDeaths;
                recovered.value = data.Countries[80].TotalRecovered;
                critical.value = data.Countries[80].NewRecovered;
                seentoday.value = data.Countries[80].NewConfirmed;
                ikuoni.value = data.Countries[80].NewDeaths;
            }
            else if(count.value == "81" ){

                hide.style.visibility = "visible";
                seentoday.style.visibility = "visible";
                ikuoni.style.visibility = "visible";
                one.style.visibility = "visible";
                two.style.visibility = "visible";

                time.textContent = data.Countries[81].Date;
                locality.textContent = data.Countries[81].Country;
                cases.value = data.Countries[81].TotalConfirmed;
                deaths.value = data.Countries[81].TotalDeaths;
                recovered.value = data.Countries[81].TotalRecovered;
                critical.value = data.Countries[81].NewRecovered;
                seentoday.value = data.Countries[81].NewConfirmed;
                ikuoni.value = data.Countries[81].NewDeaths;
            }
            else if(count.value == "82" ){

                hide.style.visibility = "visible";
                seentoday.style.visibility = "visible";
                ikuoni.style.visibility = "visible";
                one.style.visibility = "visible";
                two.style.visibility = "visible";

                time.textContent = data.Countries[82].Date;
                locality.textContent = data.Countries[82].Country;
                cases.value = data.Countries[82].TotalConfirmed;
                deaths.value = data.Countries[82].TotalDeaths;
                recovered.value = data.Countries[82].TotalRecovered;
                critical.value = data.Countries[82].NewRecovered;
                seentoday.value = data.Countries[82].NewConfirmed;
                ikuoni.value = data.Countries[82].NewDeaths;
            }
            else if(count.value == "83" ){

                hide.style.visibility = "visible";
                seentoday.style.visibility = "visible";
                ikuoni.style.visibility = "visible";
                one.style.visibility = "visible";
                two.style.visibility = "visible";

                time.textContent = data.Countries[83].Date;
                locality.textContent = data.Countries[83].Country;
                cases.value = data.Countries[83].TotalConfirmed;
                deaths.value = data.Countries[83].TotalDeaths;
                recovered.value = data.Countries[83].TotalRecovered;
                critical.value = data.Countries[83].NewRecovered;
                seentoday.value = data.Countries[83].NewConfirmed;
                ikuoni.value = data.Countries[83].NewDeaths;
            }
            else if(count.value == "84" ){

                hide.style.visibility = "visible";
                seentoday.style.visibility = "visible";
                ikuoni.style.visibility = "visible";
                one.style.visibility = "visible";
                two.style.visibility = "visible";

                time.textContent = data.Countries[84].Date;
                locality.textContent = data.Countries[84].Country;
                cases.value = data.Countries[84].TotalConfirmed;
                deaths.value = data.Countries[84].TotalDeaths;
                recovered.value = data.Countries[84].TotalRecovered;
                critical.value = data.Countries[84].NewRecovered;
                seentoday.value = data.Countries[84].NewConfirmed;
                ikuoni.value = data.Countries[84].NewDeaths;
            }
            else if(count.value == "85" ){

                hide.style.visibility = "visible";
                seentoday.style.visibility = "visible";
                ikuoni.style.visibility = "visible";
                one.style.visibility = "visible";
                two.style.visibility = "visible";

                time.textContent = data.Countries[85].Date;
                locality.textContent = data.Countries[85].Country;
                cases.value = data.Countries[85].TotalConfirmed;
                deaths.value = data.Countries[85].TotalDeaths;
                recovered.value = data.Countries[85].TotalRecovered;
                critical.value = data.Countries[85].NewRecovered;
                seentoday.value = data.Countries[85].NewConfirmed;
                ikuoni.value = data.Countries[85].NewDeaths;
            }
            else if(count.value == "86" ){

                hide.style.visibility = "visible";
                seentoday.style.visibility = "visible";
                ikuoni.style.visibility = "visible";
                one.style.visibility = "visible";
                two.style.visibility = "visible";

                time.textContent = data.Countries[86].Date;
                locality.textContent = data.Countries[86].Country;
                cases.value = data.Countries[86].TotalConfirmed;
                deaths.value = data.Countries[86].TotalDeaths;
                recovered.value = data.Countries[86].TotalRecovered;
                critical.value = data.Countries[86].NewRecovered;
                seentoday.value = data.Countries[86].NewConfirmed;
                ikuoni.value = data.Countries[86].NewDeaths;
            }
            else if(count.value == "87" ){

                hide.style.visibility = "visible";
                seentoday.style.visibility = "visible";
                ikuoni.style.visibility = "visible";
                one.style.visibility = "visible";
                two.style.visibility = "visible";

                time.textContent = data.Countries[87].Date;
                locality.textContent = data.Countries[87].Country;
                cases.value = data.Countries[87].TotalConfirmed;
                deaths.value = data.Countries[87].TotalDeaths;
                recovered.value = data.Countries[87].TotalRecovered;
                critical.value = data.Countries[87].NewRecovered;
                seentoday.value = data.Countries[87].NewConfirmed;
                ikuoni.value = data.Countries[87].NewDeaths;
            }
            else if(count.value == "88" ){

                hide.style.visibility = "visible";
                seentoday.style.visibility = "visible";
                ikuoni.style.visibility = "visible";
                one.style.visibility = "visible";
                two.style.visibility = "visible";

                time.textContent = data.Countries[88].Date;
                locality.textContent = data.Countries[88].Country;
                cases.value = data.Countries[88].TotalConfirmed;
                deaths.value = data.Countries[88].TotalDeaths;
                recovered.value = data.Countries[88].TotalRecovered;
                critical.value = data.Countries[88].NewRecovered;
                seentoday.value = data.Countries[88].NewConfirmed;
                ikuoni.value = data.Countries[88].NewDeaths;
            }
            else if(count.value == "89" ){

                hide.style.visibility = "visible";
                seentoday.style.visibility = "visible";
                ikuoni.style.visibility = "visible";
                one.style.visibility = "visible";
                two.style.visibility = "visible";

                time.textContent = data.Countries[89].Date;
                locality.textContent = data.Countries[89].Country;
                cases.value = data.Countries[89].TotalConfirmed;
                deaths.value = data.Countries[89].TotalDeaths;
                recovered.value = data.Countries[89].TotalRecovered;
                critical.value = data.Countries[89].NewRecovered;
                seentoday.value = data.Countries[89].NewConfirmed;
                ikuoni.value = data.Countries[89].NewDeaths;
            }
            else if(count.value == "90" ){

                hide.style.visibility = "visible";
                seentoday.style.visibility = "visible";
                ikuoni.style.visibility = "visible";
                one.style.visibility = "visible";
                two.style.visibility = "visible";

                time.textContent = data.Countries[90].Date;
                locality.textContent = data.Countries[90].Country;
                cases.value = data.Countries[90].TotalConfirmed;
                deaths.value = data.Countries[90].TotalDeaths;
                recovered.value = data.Countries[90].TotalRecovered;
                critical.value = data.Countries[90].NewRecovered;
                seentoday.value = data.Countries[90].NewConfirmed;
                ikuoni.value = data.Countries[90].NewDeaths;
            }
            else if(count.value == "91" ){

                hide.style.visibility = "visible";
                seentoday.style.visibility = "visible";
                ikuoni.style.visibility = "visible";
                one.style.visibility = "visible";
                two.style.visibility = "visible";

                time.textContent = data.Countries[91].Date;
                locality.textContent = data.Countries[91].Country;
                cases.value = data.Countries[91].TotalConfirmed;
                deaths.value = data.Countries[91].TotalDeaths;
                recovered.value = data.Countries[91].TotalRecovered;
                critical.value = data.Countries[91].NewRecovered;
                seentoday.value = data.Countries[91].NewConfirmed;
                ikuoni.value = data.Countries[91].NewDeaths;
            }
            else if(count.value == "92" ){

                hide.style.visibility = "visible";
                seentoday.style.visibility = "visible";
                ikuoni.style.visibility = "visible";
                one.style.visibility = "visible";
                two.style.visibility = "visible";

                time.textContent = data.Countries[92].Date;
                locality.textContent = data.Countries[92].Country;
                cases.value = data.Countries[92].TotalConfirmed;
                deaths.value = data.Countries[92].TotalDeaths;
                recovered.value = data.Countries[92].TotalRecovered;
                critical.value = data.Countries[92].NewRecovered;
                seentoday.value = data.Countries[92].NewConfirmed;
                ikuoni.value = data.Countries[92].NewDeaths;
            }
            else if(count.value == "93" ){

                hide.style.visibility = "visible";
                seentoday.style.visibility = "visible";
                ikuoni.style.visibility = "visible";
                one.style.visibility = "visible";
                two.style.visibility = "visible";

                time.textContent = data.Countries[93].Date;
                locality.textContent = data.Countries[93].Country;
                cases.value = data.Countries[93].TotalConfirmed;
                deaths.value = data.Countries[93].TotalDeaths;
                recovered.value = data.Countries[93].TotalRecovered;
                critical.value = data.Countries[93].NewRecovered;
                seentoday.value = data.Countries[93].NewConfirmed;
                ikuoni.value = data.Countries[93].NewDeaths;
            }
            else if(count.value == "94" ){

                hide.style.visibility = "visible";
                seentoday.style.visibility = "visible";
                ikuoni.style.visibility = "visible";
                one.style.visibility = "visible";
                two.style.visibility = "visible";

                time.textContent = data.Countries[94].Date;
                locality.textContent = data.Countries[94].Country;
                cases.value = data.Countries[94].TotalConfirmed;
                deaths.value = data.Countries[94].TotalDeaths;
                recovered.value = data.Countries[94].TotalRecovered;
                critical.value = data.Countries[94].NewRecovered;
                seentoday.value = data.Countries[94].NewConfirmed;
                ikuoni.value = data.Countries[94].NewDeaths;
            }
            else if(count.value == "95" ){

                hide.style.visibility = "visible";
                seentoday.style.visibility = "visible";
                ikuoni.style.visibility = "visible";
                one.style.visibility = "visible";
                two.style.visibility = "visible";

                time.textContent = data.Countries[95].Date;
                locality.textContent = data.Countries[95].Country;
                cases.value = data.Countries[95].TotalConfirmed;
                deaths.value = data.Countries[95].TotalDeaths;
                recovered.value = data.Countries[95].TotalRecovered;
                critical.value = data.Countries[95].NewRecovered;
                seentoday.value = data.Countries[95].NewConfirmed;
                ikuoni.value = data.Countries[95].NewDeaths;
            }
            else if(count.value == "96" ){

                hide.style.visibility = "visible";
                seentoday.style.visibility = "visible";
                ikuoni.style.visibility = "visible";
                one.style.visibility = "visible";
                two.style.visibility = "visible";

                time.textContent = data.Countries[96].Date;
                locality.textContent = data.Countries[96].Country;
                cases.value = data.Countries[96].TotalConfirmed;
                deaths.value = data.Countries[96].TotalDeaths;
                recovered.value = data.Countries[96].TotalRecovered;
                critical.value = data.Countries[96].NewRecovered;
                seentoday.value = data.Countries[96].NewConfirmed;
                ikuoni.value = data.Countries[96].NewDeaths;
            }
            else if(count.value == "97" ){

                hide.style.visibility = "visible";
                seentoday.style.visibility = "visible";
                ikuoni.style.visibility = "visible";
                one.style.visibility = "visible";
                two.style.visibility = "visible";

                time.textContent = data.Countries[97].Date;
                locality.textContent = data.Countries[97].Country;
                cases.value = data.Countries[97].TotalConfirmed;
                deaths.value = data.Countries[97].TotalDeaths;
                recovered.value = data.Countries[97].TotalRecovered;
                critical.value = data.Countries[97].NewRecovered;
                seentoday.value = data.Countries[97].NewConfirmed;
                ikuoni.value = data.Countries[97].NewDeaths;
            }
            else if(count.value == "98" ){

                hide.style.visibility = "visible";
                seentoday.style.visibility = "visible";
                ikuoni.style.visibility = "visible";
                one.style.visibility = "visible";
                two.style.visibility = "visible";

                time.textContent = data.Countries[98].Date;
                locality.textContent = data.Countries[98].Country;
                cases.value = data.Countries[98].TotalConfirmed;
                deaths.value = data.Countries[98].TotalDeaths;
                recovered.value = data.Countries[98].TotalRecovered;
                critical.value = data.Countries[98].NewRecovered;
                seentoday.value = data.Countries[98].NewConfirmed;
                ikuoni.value = data.Countries[98].NewDeaths;
            }
            else if(count.value == "99" ){

                hide.style.visibility = "visible";
                seentoday.style.visibility = "visible";
                ikuoni.style.visibility = "visible";
                one.style.visibility = "visible";
                two.style.visibility = "visible";

                time.textContent = data.Countries[99].Date;
                locality.textContent = data.Countries[99].Country;
                cases.value = data.Countries[99].TotalConfirmed;
                deaths.value = data.Countries[99].TotalDeaths;
                recovered.value = data.Countries[99].TotalRecovered;
                critical.value = data.Countries[99].NewRecovered;
                seentoday.value = data.Countries[99].NewConfirmed;
                ikuoni.value = data.Countries[99].NewDeaths;
            }
            else if(count.value == "100" ){

                hide.style.visibility = "visible";
                seentoday.style.visibility = "visible";
                ikuoni.style.visibility = "visible";
                one.style.visibility = "visible";
                two.style.visibility = "visible";

                time.textContent = data.Countries[100].Date;
                locality.textContent = data.Countries[100].Country;
                cases.value = data.Countries[100].TotalConfirmed;
                deaths.value = data.Countries[100].TotalDeaths;
                recovered.value = data.Countries[100].TotalRecovered;
                critical.value = data.Countries[100].NewRecovered;
                seentoday.value = data.Countries[100].NewConfirmed;
                ikuoni.value = data.Countries[100].NewDeaths;
            }
            else if(count.value == "101" ){

                hide.style.visibility = "visible";
                seentoday.style.visibility = "visible";
                ikuoni.style.visibility = "visible";
                one.style.visibility = "visible";
                two.style.visibility = "visible";

                time.textContent = data.Countries[101].Date;
                locality.textContent = data.Countries[101].Country;
                cases.value = data.Countries[101].TotalConfirmed;
                deaths.value = data.Countries[101].TotalDeaths;
                recovered.value = data.Countries[101].TotalRecovered;
                critical.value = data.Countries[101].NewRecovered;
                seentoday.value = data.Countries[101].NewConfirmed;
                ikuoni.value = data.Countries[101].NewDeaths;
            }
            else if(count.value == "102" ){

                hide.style.visibility = "visible";
                seentoday.style.visibility = "visible";
                ikuoni.style.visibility = "visible";
                one.style.visibility = "visible";
                two.style.visibility = "visible";

                time.textContent = data.Countries[102].Date;
                locality.textContent = data.Countries[102].Country;
                cases.value = data.Countries[102].TotalConfirmed;
                deaths.value = data.Countries[102].TotalDeaths;
                recovered.value = data.Countries[102].TotalRecovered;
                critical.value = data.Countries[102].NewRecovered;
                seentoday.value = data.Countries[102].NewConfirmed;
                ikuoni.value = data.Countries[102].NewDeaths;
            }
            else if(count.value == "103" ){

                hide.style.visibility = "visible";
                seentoday.style.visibility = "visible";
                ikuoni.style.visibility = "visible";
                one.style.visibility = "visible";
                two.style.visibility = "visible";

                time.textContent = data.Countries[103].Date;
                locality.textContent = data.Countries[103].Country;
                cases.value = data.Countries[103].TotalConfirmed;
                deaths.value = data.Countries[103].TotalDeaths;
                recovered.value = data.Countries[103].TotalRecovered;
                critical.value = data.Countries[103].NewRecovered;
                seentoday.value = data.Countries[103].NewConfirmed;
                ikuoni.value = data.Countries[103].NewDeaths;
            }
            else if(count.value == "104" ){

                hide.style.visibility = "visible";
                seentoday.style.visibility = "visible";
                ikuoni.style.visibility = "visible";
                one.style.visibility = "visible";
                two.style.visibility = "visible";

                time.textContent = data.Countries[104].Date;
                locality.textContent = data.Countries[104].Country;
                cases.value = data.Countries[104].TotalConfirmed;
                deaths.value = data.Countries[104].TotalDeaths;
                recovered.value = data.Countries[104].TotalRecovered;
                critical.value = data.Countries[104].NewRecovered;
                seentoday.value = data.Countries[104].NewConfirmed;
                ikuoni.value = data.Countries[104].NewDeaths;
            }
            else if(count.value == "105" ){

                hide.style.visibility = "visible";
                seentoday.style.visibility = "visible";
                ikuoni.style.visibility = "visible";
                one.style.visibility = "visible";
                two.style.visibility = "visible";

                time.textContent = data.Countries[105].Date;
                locality.textContent = data.Countries[105].Country;
                cases.value = data.Countries[105].TotalConfirmed;
                deaths.value = data.Countries[105].TotalDeaths;
                recovered.value = data.Countries[105].TotalRecovered;
                critical.value = data.Countries[105].NewRecovered;
                seentoday.value = data.Countries[105].NewConfirmed;
                ikuoni.value = data.Countries[105].NewDeaths;
            }
            else if(count.value == "106" ){

                hide.style.visibility = "visible";
                seentoday.style.visibility = "visible";
                ikuoni.style.visibility = "visible";
                one.style.visibility = "visible";
                two.style.visibility = "visible";

                time.textContent = data.Countries[106].Date;
                locality.textContent = data.Countries[106].Country;
                cases.value = data.Countries[106].TotalConfirmed;
                deaths.value = data.Countries[106].TotalDeaths;
                recovered.value = data.Countries[106].TotalRecovered;
                critical.value = data.Countries[106].NewRecovered;
                seentoday.value = data.Countries[106].NewConfirmed;
                ikuoni.value = data.Countries[106].NewDeaths;
            }
            else if(count.value == "107" ){

                hide.style.visibility = "visible";
                seentoday.style.visibility = "visible";
                ikuoni.style.visibility = "visible";
                one.style.visibility = "visible";
                two.style.visibility = "visible";

                time.textContent = data.Countries[107].Date;
                locality.textContent = data.Countries[107].Country;
                cases.value = data.Countries[107].TotalConfirmed;
                deaths.value = data.Countries[107].TotalDeaths;
                recovered.value = data.Countries[107].TotalRecovered;
                critical.value = data.Countries[107].NewRecovered;
                seentoday.value = data.Countries[107].NewConfirmed;
                ikuoni.value = data.Countries[107].NewDeaths;
            }
            else if(count.value == "108" ){

                hide.style.visibility = "visible";
                seentoday.style.visibility = "visible";
                ikuoni.style.visibility = "visible";
                one.style.visibility = "visible";
                two.style.visibility = "visible";

                time.textContent = data.Countries[108].Date;
                locality.textContent = data.Countries[108].Country;
                cases.value = data.Countries[108].TotalConfirmed;
                deaths.value = data.Countries[108].TotalDeaths;
                recovered.value = data.Countries[108].TotalRecovered;
                critical.value = data.Countries[108].NewRecovered;
                seentoday.value = data.Countries[108].NewConfirmed;
                ikuoni.value = data.Countries[108].NewDeaths;
            }
            else if(count.value == "109" ){

                hide.style.visibility = "visible";
                seentoday.style.visibility = "visible";
                ikuoni.style.visibility = "visible";
                one.style.visibility = "visible";
                two.style.visibility = "visible";

                time.textContent = data.Countries[109].Date;
                locality.textContent = data.Countries[109].Country;
                cases.value = data.Countries[109].TotalConfirmed;
                deaths.value = data.Countries[109].TotalDeaths;
                recovered.value = data.Countries[109].TotalRecovered;
                critical.value = data.Countries[109].NewRecovered;
                seentoday.value = data.Countries[109].NewConfirmed;
                ikuoni.value = data.Countries[109].NewDeaths;
            }
            else if(count.value == "110" ){

                hide.style.visibility = "visible";
                seentoday.style.visibility = "visible";
                ikuoni.style.visibility = "visible";
                one.style.visibility = "visible";
                two.style.visibility = "visible";

                time.textContent = data.Countriesp[110].Date;
                locality.textContent = data.Countries[110].Country;
                cases.value = data.Countries[110].TotalConfirmed;
                deaths.value = data.Countries[110].TotalDeaths;
                recovered.value = data.Countries[110].TotalRecovered;
                critical.value = data.Countries[110].NewRecovered;
                seentoday.value = data.Countries[110].NewConfirmed;
                ikuoni.value = data.Countries[110].NewDeaths;
            }
            else if(count.value == "111" ){

                hide.style.visibility = "visible";
                seentoday.style.visibility = "visible";
                ikuoni.style.visibility = "visible";
                one.style.visibility = "visible";
                two.style.visibility = "visible";

                time.textContent = data.Countries[111].Date;
                locality.textContent = data.Countries[111].Country;
                cases.value = data.Countries[111].TotalConfirmed;
                deaths.value = data.Countries[111].TotalDeaths;
                recovered.value = data.Countries[111].TotalRecovered;
                critical.value = data.Countries[111].NewRecovered;
                seentoday.value = data.Countries[111].NewConfirmed;
                ikuoni.value = data.Countries[111].NewDeaths;
            }
            else if(count.value == "112" ){

                hide.style.visibility = "visible";
                seentoday.style.visibility = "visible";
                ikuoni.style.visibility = "visible";
                one.style.visibility = "visible";
                two.style.visibility = "visible";

                time.textContent = data.Countries[112].Date;
                locality.textContent = data.Countries[112].Country;
                cases.value = data.Countries[112].TotalConfirmed;
                deaths.value = data.Countries[112].TotalDeaths;
                recovered.value = data.Countries[112].TotalRecovered;
                critical.value = data.Countries[112].NewRecovered;
                seentoday.value = data.Countries[112].NewConfirmed;
                ikuoni.value = data.Countries[112].NewDeaths;
            }
            else if(count.value == "113" ){

                hide.style.visibility = "visible";
                seentoday.style.visibility = "visible";
                ikuoni.style.visibility = "visible";
                one.style.visibility = "visible";
                two.style.visibility = "visible";

                time.textContent = data.Countries[113].Date;
                locality.textContent = data.Countries[113].Country;
                cases.value = data.Countries[113].TotalConfirmed;
                deaths.value = data.Countries[113].TotalDeaths;
                recovered.value = data.Countries[113].TotalRecovered;
                critical.value = data.Countries[113].NewRecovered;
                seentoday.value = data.Countries[113].NewConfirmed;
                ikuoni.value = data.Countries[113].NewDeaths;
            }
            else if(count.value == "114" ){

                hide.style.visibility = "visible";
                seentoday.style.visibility = "visible";
                ikuoni.style.visibility = "visible";
                one.style.visibility = "visible";
                two.style.visibility = "visible";

                time.textContent = data.Countries[114].Date;
                locality.textContent = data.Countries[114].Country;
                cases.value = data.Countries[114].TotalConfirmed;
                deaths.value = data.Countries[114].TotalDeaths;
                recovered.value = data.Countries[114].TotalRecovered;
                critical.value = data.Countries[114].NewRecovered;
                seentoday.value = data.Countries[114].NewConfirmed;
                ikuoni.value = data.Countries[114].NewDeaths;
            }
            else if(count.value == "115" ){

                hide.style.visibility = "visible";
                seentoday.style.visibility = "visible";
                ikuoni.style.visibility = "visible";
                one.style.visibility = "visible";
                two.style.visibility = "visible";

                time.textContent = data.Countries[115].Date;
                locality.textContent = data.Countries[115].Country;
                cases.value = data.Countries[115].TotalConfirmed;
                deaths.value = data.Countries[115].TotalDeaths;
                recovered.value = data.Countries[115].TotalRecovered;
                critical.value = data.Countries[115].NewRecovered;
                seentoday.value = data.Countries[115].NewConfirmed;
                ikuoni.value = data.Countries[115].NewDeaths;
            }
            else if(count.value == "116" ){

                hide.style.visibility = "visible";
                seentoday.style.visibility = "visible";
                ikuoni.style.visibility = "visible";
                one.style.visibility = "visible";
                two.style.visibility = "visible";

                time.textContent = data.Countries[116].Date;
                locality.textContent = data.Countries[116].Country;
                cases.value = data.Countries[116].TotalConfirmed;
                deaths.value = data.Countries[116].TotalDeaths;
                recovered.value = data.Countries[116].TotalRecovered;
                critical.value = data.Countries[116].NewRecovered;
                seentoday.value = data.Countries[116].NewConfirmed;
                ikuoni.value = data.Countries[116].NewDeaths;
            }
            else if(count.value == "117" ){

                hide.style.visibility = "visible";
                seentoday.style.visibility = "visible";
                ikuoni.style.visibility = "visible";
                one.style.visibility = "visible";
                two.style.visibility = "visible";

                time.textContent = data.Countries[117].Date;
                locality.textContent = data.Countries[117].Country;
                cases.value = data.Countries[117].TotalConfirmed;
                deaths.value = data.Countries[117].TotalDeaths;
                recovered.value = data.Countries[117].TotalRecovered;
                critical.value = data.Countries[117].NewRecovered;
                seentoday.value = data.Countries[117].NewConfirmed;
                ikuoni.value = data.Countries[117].NewDeaths;
            }
            else if(count.value == "118" ){

                hide.style.visibility = "visible";
                seentoday.style.visibility = "visible";
                ikuoni.style.visibility = "visible";
                one.style.visibility = "visible";
                two.style.visibility = "visible";

                time.textContent = data.Countries[118].Date;
                locality.textContent = data.Countries[118].Country;
                cases.value = data.Countries[118].TotalConfirmed;
                deaths.value = data.Countries[118].TotalDeaths;
                recovered.value = data.Countries[118].TotalRecovered;
                critical.value = data.Countries[118].NewRecovered;
                seentoday.value = data.Countries[118].NewConfirmed;
                ikuoni.value = data.Countries[118].NewDeaths;
            }
            else if(count.value == "119" ){

                hide.style.visibility = "visible";
                seentoday.style.visibility = "visible";
                ikuoni.style.visibility = "visible";
                one.style.visibility = "visible";
                two.style.visibility = "visible";

                time.textContent = data.Countries[119].Date;
                locality.textContent = data.Countries[119].Country;
                cases.value = data.Countries[119].TotalConfirmed;
                deaths.value = data.Countries[119].TotalDeaths;
                recovered.value = data.Countries[119].TotalRecovered;
                critical.value = data.Countries[119].NewRecovered;
                seentoday.value = data.Countries[119].NewConfirmed;
                ikuoni.value = data.Countries[119].NewDeaths;
            }
            else if(count.value == "120" ){

                hide.style.visibility = "visible";
                seentoday.style.visibility = "visible";
                ikuoni.style.visibility = "visible";
                one.style.visibility = "visible";
                two.style.visibility = "visible";

                time.textContent = data.Countries[120].Date;
                locality.textContent = data.Countries[120].Country;
                cases.value = data.Countries[120].TotalConfirmed;
                deaths.value = data.Countries[120].TotalDeaths;
                recovered.value = data.Countries[1202].TotalRecovered;
                critical.value = data.Countries[120].NewRecovered;
                seentoday.value = data.Countries[120].NewConfirmed;
                ikuoni.value = data.Countries[120].NewDeaths;
            }
            else if(count.value == "121" ){

                hide.style.visibility = "visible";
                seentoday.style.visibility = "visible";
                ikuoni.style.visibility = "visible";
                one.style.visibility = "visible";
                two.style.visibility = "visible";

                time.textContent = data.Countries[121].Date;
                locality.textContent = data.Countries[121].Country;
                cases.value = data.Countries[121].TotalConfirmed;
                deaths.value = data.Countries[121].TotalDeaths;
                recovered.value = data.Countries[121].TotalRecovered;
                critical.value = data.Countries[121].NewRecovered;
                seentoday.value = data.Countries[121].NewConfirmed;
                ikuoni.value = data.Countries[121].NewDeaths;
            }
            else if(count.value == "122" ){

                hide.style.visibility = "visible";
                seentoday.style.visibility = "visible";
                ikuoni.style.visibility = "visible";
                one.style.visibility = "visible";
                two.style.visibility = "visible";

                time.textContent = data.Countries[122].Date;
                locality.textContent = data.Countries[122].Country;
                cases.value = data.Countries[122].TotalConfirmed;
                deaths.value = data.Countries[122].TotalDeaths;
                recovered.value = data.Countries[122].TotalRecovered;
                critical.value = data.Countries[122].NewRecovered;
                seentoday.value = data.Countries[122].NewConfirmed;
                ikuoni.value = data.Countries[122].NewDeaths;
            }
            else if(count.value == "123" ){

                hide.style.visibility = "visible";
                seentoday.style.visibility = "visible";
                ikuoni.style.visibility = "visible";
                one.style.visibility = "visible";
                two.style.visibility = "visible";

                time.textContent = data.Countries[123].Date;
                locality.textContent = data.Countries[123].Country;
                cases.value = data.Countries[123].TotalConfirmed;
                deaths.value = data.Countries[123].TotalDeaths;
                recovered.value = data.Countries[123].TotalRecovered;
                critical.value = data.Countries[123].NewRecovered;
                seentoday.value = data.Countries[123].NewConfirmed;
                ikuoni.value = data.Countries[123].NewDeaths;
            }
            else if(count.value == "124" ){

                hide.style.visibility = "visible";
                seentoday.style.visibility = "visible";
                ikuoni.style.visibility = "visible";
                one.style.visibility = "visible";
                two.style.visibility = "visible";

                time.textContent = data.Countries[124].Date;
                locality.textContent = data.Countries[124].Country;
                cases.value = data.Countries[124].TotalConfirmed;
                deaths.value = data.Countries[124].TotalDeaths;
                recovered.value = data.Countries[124].TotalRecovered;
                critical.value = data.Countries[124].NewRecovered;
                seentoday.value = data.Countries[124].NewConfirmed;
                ikuoni.value = data.Countries[124].NewDeaths;
            }
            else if(count.value == "125" ){

                hide.style.visibility = "visible";
                seentoday.style.visibility = "visible";
                ikuoni.style.visibility = "visible";
                one.style.visibility = "visible";
                two.style.visibility = "visible";

                time.textContent = data.Countries[125].Date;
                locality.textContent = data.Countries[125].Country;
                cases.value = data.Countries[125].TotalConfirmed;
                deaths.value = data.Countries[125].TotalDeaths;
                recovered.value = data.Countries[125].TotalRecovered;
                critical.value = data.Countries[125].NewRecovered;
                seentoday.value = data.Countries[125].NewConfirmed;
                ikuoni.value = data.Countries[125].NewDeaths;
            }
            else if(count.value == "126" ){

                hide.style.visibility = "visible";
                seentoday.style.visibility = "visible";
                ikuoni.style.visibility = "visible";
                one.style.visibility = "visible";
                two.style.visibility = "visible";

                time.textContent = data.Countries[126].Date;
                locality.textContent = data.Countries[126].Country;
                cases.value = data.Countries[126].TotalConfirmed;
                deaths.value = data.Countries[126].TotalDeaths;
                recovered.value = data.Countries[126].TotalRecovered;
                critical.value = data.Countries[126].NewRecovered;
                seentoday.value = data.Countries[126].NewConfirmed;
                ikuoni.value = data.Countries[126].NewDeaths;
            }
            else if(count.value == "127" ){

                hide.style.visibility = "visible";
                seentoday.style.visibility = "visible";
                ikuoni.style.visibility = "visible";
                one.style.visibility = "visible";
                two.style.visibility = "visible";

                time.textContent = data.Countries[127].Date;
                locality.textContent = data.Countries[127].Country;
                cases.value = data.Countries[127].TotalConfirmed;
                deaths.value = data.Countries[127].TotalDeaths;
                recovered.value = data.Countries[127].TotalRecovered;
                critical.value = data.Countries[127].NewRecovered;
                seentoday.value = data.Countries[127].NewConfirmed;
                ikuoni.value = data.Countries[127].NewDeaths;
            }
            else if(count.value == "128" ){

                hide.style.visibility = "visible";
                seentoday.style.visibility = "visible";
                ikuoni.style.visibility = "visible";
                one.style.visibility = "visible";
                two.style.visibility = "visible";

                time.textContent = data.Countries[128].Date;
                locality.textContent = data.Countries[128].Country;
                cases.value = data.Countries[128].TotalConfirmed;
                deaths.value = data.Countries[128].TotalDeaths;
                recovered.value = data.Countries[128].TotalRecovered;
                critical.value = data.Countries[128].NewRecovered;
                seentoday.value = data.Countries[128].NewConfirmed;
                ikuoni.value = data.Countries[128].NewDeaths;
            }
            else if(count.value == "129" ){

                hide.style.visibility = "visible";
                seentoday.style.visibility = "visible";
                ikuoni.style.visibility = "visible";
                one.style.visibility = "visible";
                two.style.visibility = "visible";

                time.textContent = data.Countries[129].Date;
                locality.textContent = data.Countries[129].Country;
                cases.value = data.Countries[129].TotalConfirmed;
                deaths.value = data.Countries[129].TotalDeaths;
                recovered.value = data.Countries[129].TotalRecovered;
                critical.value = data.Countries[129].NewRecovered;
                seentoday.value = data.Countries[129].NewConfirmed;
                ikuoni.value = data.Countries[129].NewDeaths;
            }
            else if(count.value == "130" ){

                hide.style.visibility = "visible";
                seentoday.style.visibility = "visible";
                ikuoni.style.visibility = "visible";
                one.style.visibility = "visible";
                two.style.visibility = "visible";

                time.textContent = data.Countries[130].Date;
                locality.textContent = data.Countries[130].Country;
                cases.value = data.Countries[130].TotalConfirmed;
                deaths.value = data.Countries[130].TotalDeaths;
                recovered.value = data.Countries[130].TotalRecovered;
                critical.value = data.Countries[130].NewRecovered;
                seentoday.value = data.Countries[130].NewConfirmed;
                ikuoni.value = data.Countries[130].NewDeaths;
            }
            else if(count.value == "131" ){

                hide.style.visibility = "visible";
                seentoday.style.visibility = "visible";
                ikuoni.style.visibility = "visible";
                one.style.visibility = "visible";
                two.style.visibility = "visible";

                time.textContent = data.Countries[131].Date;
                locality.textContent = data.Countries[131].Country;
                cases.value = data.Countries[131].TotalConfirmed;
                deaths.value = data.Countries[131].TotalDeaths;
                recovered.value = data.Countries[131].TotalRecovered;
                critical.value = data.Countries[131].NewRecovered;
                seentoday.value = data.Countries[131].NewConfirmed;
                ikuoni.value = data.Countries[131].NewDeaths;
            }
            else if(count.value == "132" ){

                hide.style.visibility = "visible";
                seentoday.style.visibility = "visible";
                ikuoni.style.visibility = "visible";
                one.style.visibility = "visible";
                two.style.visibility = "visible";

                time.textContent = data.Countries[132].Date;
                locality.textContent = data.Countries[132].Country;
                cases.value = data.Countries[132].TotalConfirmed;
                deaths.value = data.Countries[132].TotalDeaths;
                recovered.value = data.Countries[132].TotalRecovered;
                critical.value = data.Countries[132].NewRecovered;
                seentoday.value = data.Countries[132].NewConfirmed;
                ikuoni.value = data.Countries[132].NewDeaths;
            }
            else if(count.value == "133" ){

                hide.style.visibility = "visible";
                seentoday.style.visibility = "visible";
                ikuoni.style.visibility = "visible";
                one.style.visibility = "visible";
                two.style.visibility = "visible";

                time.textContent = data.Countries[133].Date;
                locality.textContent = data.Countries[133].Country;
                cases.value = data.Countries[133].TotalConfirmed;
                deaths.value = data.Countries[133].TotalDeaths;
                recovered.value = data.Countries[133].TotalRecovered;
                critical.value = data.Countries[133].NewRecovered;
                seentoday.value = data.Countries[133].NewConfirmed;
                ikuoni.value = data.Countries[133].NewDeaths;
            }
            else if(count.value == "134" ){

                hide.style.visibility = "visible";
                seentoday.style.visibility = "3visible";
                ikuoni.style.visibility = "visible";
                one.style.visibility = "visible";
                two.style.visibility = "visible";

                time.textContent = data.Countries[134].Date;
                locality.textContent = data.Countries[134].Country;
                cases.value = data.Countries[134].TotalConfirmed;
                deaths.value = data.Countries[134].TotalDeaths;
                recovered.value = data.Countries[134].TotalRecovered;
                critical.value = data.Countries[134].NewRecovered;
                seentoday.value = data.Countries[134].NewConfirmed;
                ikuoni.value = data.Countries[134].NewDeaths;
            }
            else if(count.value == "135" ){

                hide.style.visibility = "visible";
                seentoday.style.visibility = "visible";
                ikuoni.style.visibility = "visible";
                one.style.visibility = "visible";
                two.style.visibility = "visible";

                time.textContent = data.Countries[135].Date;
                locality.textContent = data.Countries[135].Country;
                cases.value = data.Countries[135].TotalConfirmed;
                deaths.value = data.Countries[135].TotalDeaths;
                recovered.value = data.Countries[135].TotalRecovered;
                critical.value = data.Countries[135].NewRecovered;
                seentoday.value = data.Countries[135].NewConfirmed;
                ikuoni.value = data.Countries[135].NewDeaths;
            }
            else if(count.value == "136" ){

                hide.style.visibility = "visible";
                seentoday.style.visibility = "visible";
                ikuoni.style.visibility = "visible";
                one.style.visibility = "visible";
                two.style.visibility = "visible";

                time.textContent = data.Countries[136].Date;
                locality.textContent = data.Countries[136].Country;
                cases.value = data.Countries[136].TotalConfirmed;
                deaths.value = data.Countries[136].TotalDeaths;
                recovered.value = data.Countries[136].TotalRecovered;
                critical.value = data.Countries[136].NewRecovered;
                seentoday.value = data.Countries[136].NewConfirmed;
                ikuoni.value = data.Countries[136].NewDeaths;
            }
            else if(count.value == "137" ){

                hide.style.visibility = "visible";
                seentoday.style.visibility = "visible";
                ikuoni.style.visibility = "visible";
                one.style.visibility = "visible";
                two.style.visibility = "visible";

                time.textContent = data.Countries[137].Date;
                locality.textContent = data.Countries[137].Country;
                cases.value = data.Countries[137].TotalConfirmed;
                deaths.value = data.Countries[137].TotalDeaths;
                recovered.value = data.Countries[137].TotalRecovered;
                critical.value = data.Countries[137].NewRecovered;
                seentoday.value = data.Countries[137].NewConfirmed;
                ikuoni.value = data.Countries[137].NewDeaths;
            }
            else if(count.value == "138" ){

                hide.style.visibility = "visible";
                seentoday.style.visibility = "visible";
                ikuoni.style.visibility = "visible";
                one.style.visibility = "visible";
                two.style.visibility = "visible";

                time.textContent = data.Countries[138].Date;
                locality.textContent = data.Countries[138].Country;
                cases.value = data.Countries[138].TotalConfirmed;
                deaths.value = data.Countries[138].TotalDeaths;
                recovered.value = data.Countries[138].TotalRecovered;
                critical.value = data.Countries[138].NewRecovered;
                seentoday.value = data.Countries[138].NewConfirmed;
                ikuoni.value = data.Countries[138].NewDeaths;
            }
            else if(count.value == "139" ){

                hide.style.visibility = "visible";
                seentoday.style.visibility = "visible";
                ikuoni.style.visibility = "visible";
                one.style.visibility = "visible";
                two.style.visibility = "visible";

                time.textContent = data.Countries[139].Date;
                locality.textContent = data.Countries[139].Country;
                cases.value = data.Countries[139].TotalConfirmed;
                deaths.value = data.Countries[139].TotalDeaths;
                recovered.value = data.Countries[139].TotalRecovered;
                critical.value = data.Countries[139].NewRecovered;
                seentoday.value = data.Countries[139].NewConfirmed;
                ikuoni.value = data.Countries[139].NewDeaths;
            }
            else if(count.value == "140" ){

                hide.style.visibility = "visible";
                seentoday.style.visibility = "visible";
                ikuoni.style.visibility = "visible";
                one.style.visibility = "visible";
                two.style.visibility = "visible";

                time.textContent = data.Countries[140].Date;
                locality.textContent = data.Countries[140].Country;
                cases.value = data.Countries[140].TotalConfirmed;
                deaths.value = data.Countries[140].TotalDeaths;
                recovered.value = data.Countries[140].TotalRecovered;
                critical.value = data.Countries[140].NewRecovered;
                seentoday.value = data.Countries[140].NewConfirmed;
                ikuoni.value = data.Countries[140].NewDeaths;
            }
            else if(count.value == "141" ){

                hide.style.visibility = "visible";
                seentoday.style.visibility = "visible";
                ikuoni.style.visibility = "visible";
                one.style.visibility = "visible";
                two.style.visibility = "visible";

                time.textContent = data.Countries[141].Date;
                locality.textContent = data.Countries[141].Country;
                cases.value = data.Countries[141].TotalConfirmed;
                deaths.value = data.Countries[141].TotalDeaths;
                recovered.value = data.Countries[141].TotalRecovered;
                critical.value = data.Countries[141].NewRecovered;
                seentoday.value = data.Countries[141].NewConfirmed;
                ikuoni.value = data.Countries[141].NewDeaths;
            }
            else if(count.value == "142" ){

                hide.style.visibility = "visible";
                seentoday.style.visibility = "visible";
                ikuoni.style.visibility = "visible";
                one.style.visibility = "visible";
                two.style.visibility = "visible";

                time.textContent = data.Countries[142].Date;
                locality.textContent = data.Countries[142].Country;
                cases.value = data.Countries[142].TotalConfirmed;
                deaths.value = data.Countries[142].TotalDeaths;
                recovered.value = data.Countries[142].TotalRecovered;
                critical.value = data.Countries[142].NewRecovered;
                seentoday.value = data.Countries[142].NewConfirmed;
                ikuoni.value = data.Countries[142].NewDeaths;
            }
            else if(count.value == "143" ){

                hide.style.visibility = "visible";
                seentoday.style.visibility = "visible";
                ikuoni.style.visibility = "visible";
                one.style.visibility = "visible";
                two.style.visibility = "visible";

                time.textContent = data.Countries[143].Date;
                locality.textContent = data.Countries[143].Country;
                cases.value = data.Countries[143].TotalConfirmed;
                deaths.value = data.Countries[143].TotalDeaths;
                recovered.value = data.Countries[143].TotalRecovered;
                critical.value = data.Countries[143].NewRecovered;
                seentoday.value = data.Countries[143].NewConfirmed;
                ikuoni.value = data.Countries[143].NewDeaths;
            }
            else if(count.value == "144" ){

                hide.style.visibility = "visible";
                seentoday.style.visibility = "visible";
                ikuoni.style.visibility = "visible";
                one.style.visibility = "visible";
                two.style.visibility = "visible";

                time.textContent = data.Countries[144].Date;
                locality.textContent = data.Countries[144].Country;
                cases.value = data.Countries[144].TotalConfirmed;
                deaths.value = data.Countries[144].TotalDeaths;
                recovered.value = data.Countries[144].TotalRecovered;
                critical.value = data.Countries[144].NewRecovered;
                seentoday.value = data.Countries[144].NewConfirmed;
                ikuoni.value = data.Countries[144].NewDeaths;
            }
            else if(count.value == "145" ){

                hide.style.visibility = "visible";
                seentoday.style.visibility = "visible";
                ikuoni.style.visibility = "visible";
                one.style.visibility = "visible";
                two.style.visibility = "visible";

                time.textContent = data.Countries[145].Date;
                locality.textContent = data.Countries[145].Country;
                cases.value = data.Countries[145].TotalConfirmed;
                deaths.value = data.Countries[145].TotalDeaths;
                recovered.value = data.Countries[145].TotalRecovered;
                critical.value = data.Countries[145].NewRecovered;
                seentoday.value = data.Countries[145].NewConfirmed;
                ikuoni.value = data.Countries[145].NewDeaths;
            }
            else if(count.value == "146" ){

                hide.style.visibility = "visible";
                seentoday.style.visibility = "visible";
                ikuoni.style.visibility = "visible";
                one.style.visibility = "visible";
                two.style.visibility = "visible";

                time.textContent = data.Countries[146].Date;
                locality.textContent = data.Countries[146].Country;
                cases.value = data.Countries[146].TotalConfirmed;
                deaths.value = data.Countries[146].TotalDeaths;
                recovered.value = data.Countries[146].TotalRecovered;
                critical.value = data.Countries[146].NewRecovered;
                seentoday.value = data.Countries[146].NewConfirmed;
                ikuoni.value = data.Countries[146].NewDeaths;
            }
            else if(count.value == "147" ){

                hide.style.visibility = "visible";
                seentoday.style.visibility = "visible";
                ikuoni.style.visibility = "visible";
                one.style.visibility = "visible";
                two.style.visibility = "visible";

                time.textContent = data.Countries[147].Date;
                locality.textContent = data.Countries[147].Country;
                cases.value = data.Countries[147].TotalConfirmed;
                deaths.value = data.Countries[147].TotalDeaths;
                recovered.value = data.Countries[147].TotalRecovered;
                critical.value = data.Countries[147].NewRecovered;
                seentoday.value = data.Countries[147].NewConfirmed;
                ikuoni.value = data.Countries[147].NewDeaths;
            }
            else if(count.value == "148" ){

                hide.style.visibility = "visible";
                seentoday.style.visibility = "visible";
                ikuoni.style.visibility = "visible";
                one.style.visibility = "visible";
                two.style.visibility = "visible";

                time.textContent = data.Countries[148].Date;
                locality.textContent = data.Countries[148].Country;
                cases.value = data.Countries[148].TotalConfirmed;
                deaths.value = data.Countries[148].TotalDeaths;
                recovered.value = data.Countries[148].TotalRecovered;
                critical.value = data.Countries[148].NewRecovered;
                seentoday.value = data.Countries[148].NewConfirmed;
                ikuoni.value = data.Countries[148].NewDeaths;
            }
            else if(count.value == "149" ){

                hide.style.visibility = "visible";
                seentoday.style.visibility = "visible";
                ikuoni.style.visibility = "visible";
                one.style.visibility = "visible";
                two.style.visibility = "visible";

                time.textContent = data.Countries[149].Date;
                locality.textContent = data.Countries[149].Country;
                cases.value = data.Countries[149].TotalConfirmed;
                deaths.value = data.Countries[149].TotalDeaths;
                recovered.value = data.Countries[149].TotalRecovered;
                critical.value = data.Countries[149].NewRecovered;
                seentoday.value = data.Countries[149].NewConfirmed;
                ikuoni.value = data.Countries[149].NewDeaths;
            }
            else if(count.value == "150" ){

                hide.style.visibility = "visible";
                seentoday.style.visibility = "visible";
                ikuoni.style.visibility = "visible";
                one.style.visibility = "visible";
                two.style.visibility = "visible";

                time.textContent = data.Countries[150].Date;
                locality.textContent = data.Countries[150].Country;
                cases.value = data.Countries[150].TotalConfirmed;
                deaths.value = data.Countries[150].TotalDeaths;
                recovered.value = data.Countries[150].TotalRecovered;
                critical.value = data.Countries[150].NewRecovered;
                seentoday.value = data.Countries[150].NewConfirmed;
                ikuoni.value = data.Countries[150].NewDeaths;
            }
            else if(count.value == "151" ){

                hide.style.visibility = "visible";
                seentoday.style.visibility = "visible";
                ikuoni.style.visibility = "visible";
                one.style.visibility = "visible";
                two.style.visibility = "visible";

                time.textContent = data.Countries[151].Date;
                locality.textContent = data.Countries[151].Country;
                cases.value = data.Countries[151].TotalConfirmed;
                deaths.value = data.Countries[151].TotalDeaths;
                recovered.value = data.Countries[151].TotalRecovered;
                critical.value = data.Countries[151].NewRecovered;
                seentoday.value = data.Countries[151].NewConfirmed;
                ikuoni.value = data.Countries[151].NewDeaths;
            }
            else if(count.value == "152" ){

                hide.style.visibility = "visible";
                seentoday.style.visibility = "visible";
                ikuoni.style.visibility = "visible";
                one.style.visibility = "visible";
                two.style.visibility = "visible";

                time.textContent = data.Countries[152].Date;
                locality.textContent = data.Countries[152].Country;
                cases.value = data.Countries[152].TotalConfirmed;
                deaths.value = data.Countries[152].TotalDeaths;
                recovered.value = data.Countries[152].TotalRecovered;
                critical.value = data.Countries[152].NewRecovered;
                seentoday.value = data.Countries[152].NewConfirmed;
                ikuoni.value = data.Countries[152].NewDeaths;
            }
            else if(count.value == "153" ){

                hide.style.visibility = "visible";
                seentoday.style.visibility = "visible";
                ikuoni.style.visibility = "visible";
                one.style.visibility = "visible";
                two.style.visibility = "visible";

                time.textContent = data.Countries[153].Date;
                locality.textContent = data.Countries[153].Country;
                cases.value = data.Countries[153].TotalConfirmed;
                deaths.value = data.Countries[153].TotalDeaths;
                recovered.value = data.Countries[153].TotalRecovered;
                critical.value = data.Countries[153].NewRecovered;
                seentoday.value = data.Countries[153].NewConfirmed;
                ikuoni.value = data.Countries[153].NewDeaths;
            }
            else if(count.value == "154" ){

                hide.style.visibility = "visible";
                seentoday.style.visibility = "visible";
                ikuoni.style.visibility = "visible";
                one.style.visibility = "visible";
                two.style.visibility = "visible";

                time.textContent = data.Countries[154].Date;
                locality.textContent = data.Countries[154].Country;
                cases.value = data.Countries[154].TotalConfirmed;
                deaths.value = data.Countries[154].TotalDeaths;
                recovered.value = data.Countries[154].TotalRecovered;
                critical.value = data.Countries[154].NewRecovered;
                seentoday.value = data.Countries[154].NewConfirmed;
                ikuoni.value = data.Countries[154].NewDeaths;
            }
            else if(count.value == "155" ){

                hide.style.visibility = "visible";
                seentoday.style.visibility = "visible";
                ikuoni.style.visibility = "visible";
                one.style.visibility = "visible";
                two.style.visibility = "visible";

                time.textContent = data.Countries[155].Date;
                locality.textContent = data.Countries[155].Country;
                cases.value = data.Countries[155].TotalConfirmed;
                deaths.value = data.Countries[155].TotalDeaths;
                recovered.value = data.Countries[155].TotalRecovered;
                critical.value = data.Countries[155].NewRecovered;
                seentoday.value = data.Countries[155].NewConfirmed;
                ikuoni.value = data.Countries[155].NewDeaths;
            }
            else if(count.value == "156" ){

                hide.style.visibility = "visible";
                seentoday.style.visibility = "visible";
                ikuoni.style.visibility = "visible";
                one.style.visibility = "visible";
                two.style.visibility = "visible";

                time.textContent = data.Countries[156].Date;
                locality.textContent = data.Countries[156].Country;
                cases.value = data.Countries[156].TotalConfirmed;
                deaths.value = data.Countries[156].TotalDeaths;
                recovered.value = data.Countries[156].TotalRecovered;
                critical.value = data.Countries[156].NewRecovered;
                seentoday.value = data.Countries[156].NewConfirmed;
                ikuoni.value = data.Countries[156].NewDeaths;
            }
            else if(count.value == "157" ){

                hide.style.visibility = "visible";
                seentoday.style.visibility = "visible";
                ikuoni.style.visibility = "visible";
                one.style.visibility = "visible";
                two.style.visibility = "visible";

                time.textContent = data.Countries[157].Date;
                locality.textContent = data.Countries[157].Country;
                cases.value = data.Countries[157].TotalConfirmed;
                deaths.value = data.Countries[157].TotalDeaths;
                recovered.value = data.Countries[157].TotalRecovered;
                critical.value = data.Countries[157].NewRecovered;
                seentoday.value = data.Countries[157].NewConfirmed;
                ikuoni.value = data.Countries[157].NewDeaths;
            }
            else if(count.value == "158" ){

                hide.style.visibility = "visible";
                seentoday.style.visibility = "visible";
                ikuoni.style.visibility = "visible";
                one.style.visibility = "visible";
                two.style.visibility = "visible";

                time.textContent = data.Countries[158].Date;
                locality.textContent = data.Countries[158].Country;
                cases.value = data.Countries[158].TotalConfirmed;
                deaths.value = data.Countries[158].TotalDeaths;
                recovered.value = data.Countries[158].TotalRecovered;
                critical.value = data.Countries[158].NewRecovered;
                seentoday.value = data.Countries[158].NewConfirmed;
                ikuoni.value = data.Countries[158].NewDeaths;
            }
            else if(count.value == "159" ){

                hide.style.visibility = "visible";
                seentoday.style.visibility = "visible";
                ikuoni.style.visibility = "visible";
                one.style.visibility = "visible";
                two.style.visibility = "visible";

                time.textContent = data.Countries[159].Date;
                locality.textContent = data.Countries[159].Country;
                cases.value = data.Countries[159].TotalConfirmed;
                deaths.value = data.Countries[159].TotalDeaths;
                recovered.value = data.Countries[159].TotalRecovered;
                critical.value = data.Countries[159].NewRecovered;
                seentoday.value = data.Countries[159].NewConfirmed;
                ikuoni.value = data.Countries[159].NewDeaths;
            }
            else if(count.value == "160" ){

                hide.style.visibility = "visible";
                seentoday.style.visibility = "visible";
                ikuoni.style.visibility = "visible";
                one.style.visibility = "visible";
                two.style.visibility = "visible";

                time.textContent = data.Countries[160].Date;
                locality.textContent = data.Countries[160].Country;
                cases.value = data.Countries[160].TotalConfirmed;
                deaths.value = data.Countries[160].TotalDeaths;
                recovered.value = data.Countries[160].TotalRecovered;
                critical.value = data.Countries[160].NewRecovered;
                seentoday.value = data.Countries[160].NewConfirmed;
                ikuoni.value = data.Countries[160].NewDeaths;
            }
            else if(count.value == "161" ){

                hide.style.visibility = "visible";
                seentoday.style.visibility = "visible";
                ikuoni.style.visibility = "visible";
                one.style.visibility = "visible";
                two.style.visibility = "visible";

                time.textContent = data.Countries[161].Date;
                locality.textContent = data.Countries[161].Country;
                cases.value = data.Countries[161].TotalConfirmed;
                deaths.value = data.Countries[161].TotalDeaths;
                recovered.value = data.Countries[161].TotalRecovered;
                critical.value = data.Countries[161].NewRecovered;
                seentoday.value = data.Countries[161].NewConfirmed;
                ikuoni.value = data.Countries[161].NewDeaths;
            }
            else if(count.value == "162" ){

                hide.style.visibility = "visible";
                seentoday.style.visibility = "visible";
                ikuoni.style.visibility = "visible";
                one.style.visibility = "visible";
                two.style.visibility = "visible";

                time.textContent = data.Countries[162].Date;
                locality.textContent = data.Countries[162].Country;
                cases.value = data.Countries[162].TotalConfirmed;
                deaths.value = data.Countries[162].TotalDeaths;
                recovered.value = data.Countries[162].TotalRecovered;
                critical.value = data.Countries[162].NewRecovered;
                seentoday.value = data.Countries[162].NewConfirmed;
                ikuoni.value = data.Countries[162].NewDeaths;
            }
            else if(count.value == "163" ){

                hide.style.visibility = "visible";
                seentoday.style.visibility = "visible";
                ikuoni.style.visibility = "visible";
                one.style.visibility = "visible";
                two.style.visibility = "visible";

                time.textContent = data.Countries[163].Date;
                locality.textContent = data.Countries[163].Country;
                cases.value = data.Countries[163].TotalConfirmed;
                deaths.value = data.Countries[163].TotalDeaths;
                recovered.value = data.Countries[163].TotalRecovered;
                critical.value = data.Countries[163].NewRecovered;
                seentoday.value = data.Countries[163].NewConfirmed;
                ikuoni.value = data.Countries[163].NewDeaths;
            }
            else if(count.value == "164" ){

                hide.style.visibility = "visible";
                seentoday.style.visibility = "visible";
                ikuoni.style.visibility = "visible";
                one.style.visibility = "visible";
                two.style.visibility = "visible";

                time.textContent = data.Countries[164].Date;
                locality.textContent = data.Countries[164].Country;
                cases.value = data.Countries[164].TotalConfirmed;
                deaths.value = data.Countries[164].TotalDeaths;
                recovered.value = data.Countries[164].TotalRecovered;
                critical.value = data.Countries[164].NewRecovered;
                seentoday.value = data.Countries[164].NewConfirmed;
                ikuoni.value = data.Countries[164].NewDeaths;
            }
            else if(count.value == "165" ){

                hide.style.visibility = "visible";
                seentoday.style.visibility = "visible";
                ikuoni.style.visibility = "visible";
                one.style.visibility = "visible";
                two.style.visibility = "visible";

                time.textContent = data.Countries[165].Date;
                locality.textContent = data.Countries[165].Country;
                cases.value = data.Countries[165].TotalConfirmed;
                deaths.value = data.Countries[165].TotalDeaths;
                recovered.value = data.Countries[165].TotalRecovered;
                critical.value = data.Countries[165].NewRecovered;
                seentoday.value = data.Countries[165].NewConfirmed;
                ikuoni.value = data.Countries[165].NewDeaths;
            }
            else if(count.value == "166" ){

                hide.style.visibility = "visible";
                seentoday.style.visibility = "visible";
                ikuoni.style.visibility = "visible";
                one.style.visibility = "visible";
                two.style.visibility = "visible";

                time.textContent = data.Countries[166].Date;
                locality.textContent = data.Countries[166].Country;
                cases.value = data.Countries[166].TotalConfirmed;
                deaths.value = data.Countries[166].TotalDeaths;
                recovered.value = data.Countries[166].TotalRecovered;
                critical.value = data.Countries[166].NewRecovered;
                seentoday.value = data.Countries[166].NewConfirmed;
                ikuoni.value = data.Countries[166].NewDeaths;
            }
            else if(count.value == "167" ){

                hide.style.visibility = "visible";
                seentoday.style.visibility = "visible";
                ikuoni.style.visibility = "visible";
                one.style.visibility = "visible";
                two.style.visibility = "visible";

                time.textContent = data.Countries[167].Date;
                locality.textContent = data.Countries[167].Country;
                cases.value = data.Countries[167].TotalConfirmed;
                deaths.value = data.Countries[167].TotalDeaths;
                recovered.value = data.Countries[167].TotalRecovered;
                critical.value = data.Countries[167].NewRecovered;
                seentoday.value = data.Countries[167].NewConfirmed;
                ikuoni.value = data.Countries[167].NewDeaths;
            }
            else if(count.value == "168" ){

                hide.style.visibility = "visible";
                seentoday.style.visibility = "visible";
                ikuoni.style.visibility = "visible";
                one.style.visibility = "visible";
                two.style.visibility = "visible";

                time.textContent = data.Countries[168].Date;
                locality.textContent = data.Countries[168].Country;
                cases.value = data.Countries[168].TotalConfirmed;
                deaths.value = data.Countries[168].TotalDeaths;
                recovered.value = data.Countries[168].TotalRecovered;
                critical.value = data.Countries[168].NewRecovered;
                seentoday.value = data.Countries[168].NewConfirmed;
                ikuoni.value = data.Countries[168].NewDeaths;
            }
            else if(count.value == "169" ){

                hide.style.visibility = "visible";
                seentoday.style.visibility = "visible";
                ikuoni.style.visibility = "visible";
                one.style.visibility = "visible";
                two.style.visibility = "visible";

                time.textContent = data.Countries[169].Date;
                locality.textContent = data.Countries[169].Country;
                cases.value = data.Countries[169].TotalConfirmed;
                deaths.value = data.Countries[169].TotalDeaths;
                recovered.value = data.Countries[169].TotalRecovered;
                critical.value = data.Countries[169].NewRecovered;
                seentoday.value = data.Countries[169].NewConfirmed;
                ikuoni.value = data.Countries[169].NewDeaths;
            }
            else if(count.value == "170" ){

                hide.style.visibility = "visible";
                seentoday.style.visibility = "visible";
                ikuoni.style.visibility = "visible";
                one.style.visibility = "visible";
                two.style.visibility = "visible";

                time.textContent = data.Countries[170].Date;
                locality.textContent = data.Countries[170].Country;
                cases.value = data.Countries[170].TotalConfirmed;
                deaths.value = data.Countries[170].TotalDeaths;
                recovered.value = data.Countries[170].TotalRecovered;
                critical.value = data.Countries[170].NewRecovered;
                seentoday.value = data.Countries[170].NewConfirmed;
                ikuoni.value = data.Countries[170].NewDeaths;
            }
            else if(count.value == "171" ){

                hide.style.visibility = "visible";
                seentoday.style.visibility = "visible";
                ikuoni.style.visibility = "visible";
                one.style.visibility = "visible";
                two.style.visibility = "visible";

                time.textContent = data.Countries[171].Date;
                locality.textContent = data.Countries[171].Country;
                cases.value = data.Countries[171].TotalConfirmed;
                deaths.value = data.Countries[171].TotalDeaths;
                recovered.value = data.Countries[171].TotalRecovered;
                critical.value = data.Countries[171].NewRecovered;
                seentoday.value = data.Countries[171].NewConfirmed;
                ikuoni.value = data.Countries[171].NewDeaths;
            }
            else if(count.value == "172" ){

                hide.style.visibility = "visible";
                seentoday.style.visibility = "visible";
                ikuoni.style.visibility = "visible";
                one.style.visibility = "visible";
                two.style.visibility = "visible";

                time.textContent = data.Countries[172].Date;
                locality.textContent = data.Countries[172].Country;
                cases.value = data.Countries[172].TotalConfirmed;
                deaths.value = data.Countries[172].TotalDeaths;
                recovered.value = data.Countries[172].TotalRecovered;
                critical.value = data.Countries[172].NewRecovered;
                seentoday.value = data.Countries[172].NewConfirmed;
                ikuoni.value = data.Countries[172].NewDeaths;
            }
            else if(count.value == "173" ){

                hide.style.visibility = "visible";
                seentoday.style.visibility = "visible";
                ikuoni.style.visibility = "visible";
                one.style.visibility = "visible";
                two.style.visibility = "visible";

                time.textContent = data.Countries[173].Date;
                locality.textContent = data.Countries[173].Country;
                cases.value = data.Countries[173].TotalConfirmed;
                deaths.value = data.Countries[173].TotalDeaths;
                recovered.value = data.Countries[173].TotalRecovered;
                critical.value = data.Countries[173].NewRecovered;
                seentoday.value = data.Countries[173].NewConfirmed;
                ikuoni.value = data.Countries[173].NewDeaths;
            }
            else if(count.value == "174" ){

                hide.style.visibility = "visible";
                seentoday.style.visibility = "visible";
                ikuoni.style.visibility = "visible";
                one.style.visibility = "visible";
                two.style.visibility = "visible";

                time.textContent = data.Countries[174].Date;
                locality.textContent = data.Countries[174].Country;
                cases.value = data.Countries[174].TotalConfirmed;
                deaths.value = data.Countries[174].TotalDeaths;
                recovered.value = data.Countries[174].TotalRecovered;
                critical.value = data.Countries[174].NewRecovered;
                seentoday.value = data.Countries[174].NewConfirmed;
                ikuoni.value = data.Countries[174].NewDeaths;
            }
            else if(count.value == "175" ){

                hide.style.visibility = "visible";
                seentoday.style.visibility = "visible";
                ikuoni.style.visibility = "visible";
                one.style.visibility = "visible";
                two.style.visibility = "visible";

                time.textContent = data.Countries[175].Date;
                locality.textContent = data.Countries[175].Country;
                cases.value = data.Countries[175].TotalConfirmed;
                deaths.value = data.Countries[175].TotalDeaths;
                recovered.value = data.Countries[175].TotalRecovered;
                critical.value = data.Countries[175].NewRecovered;
                seentoday.value = data.Countries[175].NewConfirmed;
                ikuoni.value = data.Countries[175].NewDeaths;
            }
            else if(count.value == "176" ){

                hide.style.visibility = "visible";
                seentoday.style.visibility = "visible";
                ikuoni.style.visibility = "visible";
                one.style.visibility = "visible";
                two.style.visibility = "visible";

                time.textContent = data.Countries[176].Date;
                locality.textContent = data.Countries[176].Country;
                cases.value = data.Countries[176].TotalConfirmed;
                deaths.value = data.Countries[176].TotalDeaths;
                recovered.value = data.Countries[176].TotalRecovered;
                critical.value = data.Countries[176].NewRecovered;
                seentoday.value = data.Countries[176].NewConfirmed;
                ikuoni.value = data.Countries[176].NewDeaths;
            }
            else if(count.value == "177" ){

                hide.style.visibility = "visible";
                seentoday.style.visibility = "visible";
                ikuoni.style.visibility = "visible";
                one.style.visibility = "visible";
                two.style.visibility = "visible";

                time.textContent = data.Countries[177].Date;
                locality.textContent = data.Countries[177].Country;
                cases.value = data.Countries[177].TotalConfirmed;
                deaths.value = data.Countries[177].TotalDeaths;
                recovered.value = data.Countries[177].TotalRecovered;
                critical.value = data.Countries[177].NewRecovered;
                seentoday.value = data.Countries[177].NewConfirmed;
                ikuoni.value = data.Countries[177].NewDeaths;
            }
            else if(count.value == "178" ){

                hide.style.visibility = "visible";
                seentoday.style.visibility = "visible";
                ikuoni.style.visibility = "visible";
                one.style.visibility = "visible";
                two.style.visibility = "visible";

                time.textContent = data.Countries[178].Date;
                locality.textContent = data.Countries[178].Country;
                cases.value = data.Countries[178].TotalConfirmed;
                deaths.value = data.Countries[178].TotalDeaths;
                recovered.value = data.Countries[178].TotalRecovered;
                critical.value = data.Countries[178].NewRecovered;
                seentoday.value = data.Countries[178].NewConfirmed;
                ikuoni.value = data.Countries[178].NewDeaths;
            }
            else if(count.value == "179" ){

                hide.style.visibility = "visible";
                seentoday.style.visibility = "visible";
                ikuoni.style.visibility = "visible";
                one.style.visibility = "visible";
                two.style.visibility = "visible";

                time.textContent = data.Countries[179].Date;
                locality.textContent = data.Countries[179].Country;
                cases.value = data.Countries[179].TotalConfirmed;
                deaths.value = data.Countries[179].TotalDeaths;
                recovered.value = data.Countries[179].TotalRecovered;
                critical.value = data.Countries[179].NewRecovered;
                seentoday.value = data.Countries[179].NewConfirmed;
                ikuoni.value = data.Countries[179].NewDeaths;
            }
            else if(count.value == "180" ){

                hide.style.visibility = "visible";
                seentoday.style.visibility = "visible";
                ikuoni.style.visibility = "visible";
                one.style.visibility = "visible";
                two.style.visibility = "visible";

                time.textContent = data.Countries[180].Date;
                locality.textContent = data.Countries[180].Country;
                cases.value = data.Countries[180].TotalConfirmed;
                deaths.value = data.Countries[180].TotalDeaths;
                recovered.value = data.Countries[180].TotalRecovered;
                critical.value = data.Countries[180].NewRecovered;
                seentoday.value = data.Countries[180].NewConfirmed;
                ikuoni.value = data.Countries[180].NewDeaths;
            }
            else if(count.value == "181" ){

                hide.style.visibility = "visible";
                seentoday.style.visibility = "visible";
                ikuoni.style.visibility = "visible";
                one.style.visibility = "visible";
                two.style.visibility = "visible";

                time.textContent = data.Countries[181].Date;
                locality.textContent = data.Countries[181].Country;
                cases.value = data.Countries[181].TotalConfirmed;
                deaths.value = data.Countries[181].TotalDeaths;
                recovered.value = data.Countries[181].TotalRecovered;
                critical.value = data.Countries[181].NewRecovered;
                seentoday.value = data.Countries[181].NewConfirmed;
                ikuoni.value = data.Countries[181].NewDeaths;
            }
            else if(count.value == "182" ){

                hide.style.visibility = "visible";
                seentoday.style.visibility = "visible";
                ikuoni.style.visibility = "visible";
                one.style.visibility = "visible";
                two.style.visibility = "visible";

                time.textContent = data.Countries[182].Date;
                locality.textContent = data.Countries[182].Country;
                cases.value = data.Countries[182].TotalConfirmed;
                deaths.value = data.Countries[182].TotalDeaths;
                recovered.value = data.Countries[182].TotalRecovered;
                critical.value = data.Countries[182].NewRecovered;
                seentoday.value = data.Countries[182].NewConfirmed;
                ikuoni.value = data.Countries[182].NewDeaths;
            }
            else if(count.value == "183" ){

                hide.style.visibility = "visible";
                seentoday.style.visibility = "visible";
                ikuoni.style.visibility = "visible";
                one.style.visibility = "visible";
                two.style.visibility = "visible";

                time.textContent = data.Countries[183].Date;
                locality.textContent = data.Countries[183].Country;
                cases.value = data.Countries[183].TotalConfirmed;
                deaths.value = data.Countries[183].TotalDeaths;
                recovered.value = data.Countries[183].TotalRecovered;
                critical.value = data.Countries[183].NewRecovered;
                seentoday.value = data.Countries[183].NewConfirmed;
                ikuoni.value = data.Countries[183].NewDeaths;
            }
            else if(count.value == "184" ){

                hide.style.visibility = "visible";
                seentoday.style.visibility = "visible";
                ikuoni.style.visibility = "visible";
                one.style.visibility = "visible";
                two.style.visibility = "visible";

                time.textContent = data.Countries[184].Date;
                locality.textContent = data.Countries[184].Country;
                cases.value = data.Countries[184].TotalConfirmed;
                deaths.value = data.Countries[184].TotalDeaths;
                recovered.value = data.Countries[184].TotalRecovered;
                critical.value = data.Countries[184].NewRecovered;
                seentoday.value = data.Countries[184].NewConfirmed;
                ikuoni.value = data.Countries[184].NewDeaths;
            }
            else if(count.value == "185" ){

                hide.style.visibility = "visible";
                seentoday.style.visibility = "visible";
                ikuoni.style.visibility = "visible";
                one.style.visibility = "visible";
                two.style.visibility = "visible";

                time.textContent = data.Countries[185].Date;
                locality.textContent = data.Countries[185].Country;
                cases.value = data.Countries[185].TotalConfirmed;
                deaths.value = data.Countries[185].TotalDeaths;
                recovered.value = data.Countries[185].TotalRecovered;
                critical.value = data.Countries[185].NewRecovered;
                seentoday.value = data.Countries[185].NewConfirmed;
                ikuoni.value = data.Countries[185].NewDeaths;
            }
            else if(count.value == "186" ){

                hide.style.visibility = "visible";
                seentoday.style.visibility = "visible";
                ikuoni.style.visibility = "visible";
                one.style.visibility = "visible";
                two.style.visibility = "visible";

                time.textContent = data.Countries[186].Date;
                locality.textContent = data.Countries[186].Country;
                cases.value = data.Countries[186].TotalConfirmed;
                deaths.value = data.Countries[186].TotalDeaths;
                recovered.value = data.Countries[186].TotalRecovered;
                critical.value = data.Countries[186].NewRecovered;
                seentoday.value = data.Countries[186].NewConfirmed;
                ikuoni.value = data.Countries[186].NewDeaths;
            }
            else if(count.value == "187" ){

                hide.style.visibility = "visible";
                seentoday.style.visibility = "visible";
                ikuoni.style.visibility = "visible";
                one.style.visibility = "visible";
                two.style.visibility = "visible";

                time.textContent = data.Countries[187].Date;
                locality.textContent = data.Countries[187].Country;
                cases.value = data.Countries[187].TotalConfirmed;
                deaths.value = data.Countries[187].TotalDeaths;
                recovered.value = data.Countries[187].TotalRecovered;
                critical.value = data.Countries[187].NewRecovered;
                seentoday.value = data.Countries[187].NewConfirmed;
                ikuoni.value = data.Countries[187].NewDeaths;
            }
            else if(count.value == "188" ){

                hide.style.visibility = "visible";
                seentoday.style.visibility = "visible";
                ikuoni.style.visibility = "visible";
                one.style.visibility = "visible";
                two.style.visibility = "visible";

                time.textContent = data.Countries[188].Date;
                locality.textContent = data.Countries[188].Country;
                cases.value = data.Countries[188].TotalConfirmed;
                deaths.value = data.Countries[188].TotalDeaths;
                recovered.value = data.Countries[188].TotalRecovered;
                critical.value = data.Countries[188].NewRecovered;
                seentoday.value = data.Countries[188].NewConfirmed;
                ikuoni.value = data.Countries[188].NewDeaths;
            }
            else if(count.value == "189" ){

                hide.style.visibility = "visible";
                seentoday.style.visibility = "visible";
                ikuoni.style.visibility = "visible";
                one.style.visibility = "visible";
                two.style.visibility = "visible";

                time.textContent = data.Countries[189].Date;
                locality.textContent = data.Countries[189].Country;
                cases.value = data.Countries[189].TotalConfirmed;
                deaths.value = data.Countries[189].TotalDeaths;
                recovered.value = data.Countries[189].TotalRecovered;
                critical.value = data.Countries[189].NewRecovered;
                seentoday.value = data.Countries[189].NewConfirmed;
                ikuoni.value = data.Countries[189].NewDeaths;
            }
            else if(count.value == "190" ){

                hide.style.visibility = "visible";
                seentoday.style.visibility = "visible";
                ikuoni.style.visibility = "visible";
                one.style.visibility = "visible";
                two.style.visibility = "visible";

                time.textContent = data.Countries[190].Date;
                locality.textContent = data.Countries[190].Country;
                cases.value = data.Countries[190].TotalConfirmed;
                deaths.value = data.Countries[190].TotalDeaths;
                recovered.value = data.Countries[190].TotalRecovered;
                critical.value = data.Countries[190].NewRecovered;
                seentoday.value = data.Countries[190].NewConfirmed;
                ikuoni.value = data.Countries[190].NewDeaths;
            }
            else if(count.value == "191" ){

                hide.style.visibility = "visible";
                seentoday.style.visibility = "visible";
                ikuoni.style.visibility = "visible";
                one.style.visibility = "visible";
                two.style.visibility = "visible";

                time.textContent = data.Countries[191].Date;
                locality.textContent = data.Countries[191].Country;
                cases.value = data.Countries[191].TotalConfirmed;
                deaths.value = data.Countries[191].TotalDeaths;
                recovered.value = data.Countries[191].TotalRecovered;
                critical.value = data.Countries[191].NewRecovered;
                seentoday.value = data.Countries[191].NewConfirmed;
                ikuoni.value = data.Countries[191].NewDeaths;
            }
            else if(count.value == "192" ){

                hide.style.visibility = "visible";
                seentoday.style.visibility = "visible";
                ikuoni.style.visibility = "visible";
                one.style.visibility = "visible";
                two.style.visibility = "visible";

                time.textContent = data.Countries[192].Date;
                locality.textContent = data.Countries[192].Country;
                cases.value = data.Countries[192].TotalConfirmed;
                deaths.value = data.Countries[192].TotalDeaths;
                recovered.value = data.Countries[192].TotalRecovered;
                critical.value = data.Countries[192].NewRecovered;
                seentoday.value = data.Countries[192].NewConfirmed;
                ikuoni.value = data.Countries[192].NewDeaths;
            }
            else if(count.value == "193" ){

                hide.style.visibility = "visible";
                seentoday.style.visibility = "visible";
                ikuoni.style.visibility = "visible";
                one.style.visibility = "visible";
                two.style.visibility = "visible";

                time.textContent = data.Countries[193].Date;
                locality.textContent = data.Countries[193].Country;
                cases.value = data.Countries[193].TotalConfirmed;
                deaths.value = data.Countries[193].TotalDeaths;
                recovered.value = data.Countries[193].TotalRecovered;
                critical.value = data.Countries[193].NewRecovered;
                seentoday.value = data.Countries[193].NewConfirmed;
                ikuoni.value = data.Countries[193].NewDeaths;
            }
            else if(count.value == "194" ){

                hide.style.visibility = "visible";
                seentoday.style.visibility = "visible";
                ikuoni.style.visibility = "visible";
                one.style.visibility = "visible";
                two.style.visibility = "visible";

                time.textContent = data.Countries[194].Date;
                locality.textContent = data.Countries[194].Country;
                cases.value = data.Countries[194].TotalConfirmed;
                deaths.value = data.Countries[194].TotalDeaths;
                recovered.value = data.Countries[194].TotalRecovered;
                critical.value = data.Countries[194].NewRecovered;
                seentoday.value = data.Countries[194].NewConfirmed;
                ikuoni.value = data.Countries[194].NewDeaths;
            }
            else if(count.value == "194" ){

                hide.style.visibility = "visible";
                seentoday.style.visibility = "visible";
                ikuoni.style.visibility = "visible";
                one.style.visibility = "visible";
                two.style.visibility = "visible";

                time.textContent = data.Countries[194].Date;
                locality.textContent = data.Countries[194].Country;
                cases.value = data.Countries[194].TotalConfirmed;
                deaths.value = data.Countries[194].TotalDeaths;
                recovered.value = data.Countries[194].TotalRecovered;
                critical.value = data.Countries[194].NewRecovered;
                seentoday.value = data.Countries[194].NewConfirmed;
                ikuoni.value = data.Countries[194].NewDeaths;
            }
            else if(count.value == "195" ){

                hide.style.visibility = "visible";
                seentoday.style.visibility = "visible";
                ikuoni.style.visibility = "visible";
                one.style.visibility = "visible";
                two.style.visibility = "visible";

                time.textContent = data.Countries[195].Date;
                locality.textContent = data.Countries[195].Country;
                cases.value = data.Countries[195].TotalConfirmed;
                deaths.value = data.Countries[195].TotalDeaths;
                recovered.value = data.Countries[195].TotalRecovered;
                critical.value = data.Countries[195].NewRecovered;
                seentoday.value = data.Countries[195].NewConfirmed;
                ikuoni.value = data.Countries[195].NewDeaths;
            }
            else if(count.value == "196" ){

                hide.style.visibility = "visible";
                seentoday.style.visibility = "visible";
                ikuoni.style.visibility = "visible";
                one.style.visibility = "visible";
                two.style.visibility = "visible";

                time.textContent = data.Countries[196].Date;
                locality.textContent = data.Countries[196].Country;
                cases.value = data.Countries[196].TotalConfirmed;
                deaths.value = data.Countries[196].TotalDeaths;
                recovered.value = data.Countries[196].TotalRecovered;
                critical.value = data.Countries[196].NewRecovered;
                seentoday.value = data.Countries[196].NewConfirmed;
                ikuoni.value = data.Countries[196].NewDeaths;
            }
            else if(count.value == "197" ){

                hide.style.visibility = "visible";
                seentoday.style.visibility = "visible";
                ikuoni.style.visibility = "visible";
                one.style.visibility = "visible";
                two.style.visibility = "visible";

                time.textContent = data.Countries[197].Date;
                locality.textContent = data.Countries[197].Country;
                cases.value = data.Countries[197].TotalConfirmed;
                deaths.value = data.Countries[197].TotalDeaths;
                recovered.value = data.Countries[197].TotalRecovered;
                critical.value = data.Countries[197].NewRecovered;
                seentoday.value = data.Countries[197].NewConfirmed;
                ikuoni.value = data.Countries[197].NewDeaths;
            }
            else if(count.value == "198" ){

                hide.style.visibility = "visible";
                seentoday.style.visibility = "visible";
                ikuoni.style.visibility = "visible";
                one.style.visibility = "visible";
                two.style.visibility = "visible";

                time.textContent = data.Countries[198].Date;
                locality.textContent = data.Countries[198].Country;
                cases.value = data.Countries[198].TotalConfirmed;
                deaths.value = data.Countries[198].TotalDeaths;
                recovered.value = data.Countries[198].TotalRecovered;
                critical.value = data.Countries[198].NewRecovered;
                seentoday.value = data.Countries[198].NewConfirmed;
                ikuoni.value = data.Countries[198].NewDeaths;
            }
            else if(count.value == "199" ){

                hide.style.visibility = "visible";
                seentoday.style.visibility = "visible";
                ikuoni.style.visibility = "visible";
                one.style.visibility = "visible";
                two.style.visibility = "visible";

                time.textContent = data.Countries[199].Date;
                locality.textContent = data.Countries[199].Country;
                cases.value = data.Countries[199].TotalConfirmed;
                deaths.value = data.Countries[199].TotalDeaths;
                recovered.value = data.Countries[199].TotalRecovered;
                critical.value = data.Countries[199].NewRecovered;
                seentoday.value = data.Countries[199].NewConfirmed;
                ikuoni.value = data.Countries[199].NewDeaths;
            }
            else if(count.value == "200" ){

                hide.style.visibility = "visible";
                seentoday.style.visibility = "visible";
                ikuoni.style.visibility = "visible";
                one.style.visibility = "visible";
                two.style.visibility = "visible";

                time.textContent = data.Countries[200].Date;
                locality.textContent = data.Countries[200].Country;
                cases.value = data.Countries[200].TotalConfirmed;
                deaths.value = data.Countries[200].TotalDeaths;
                recovered.value = data.Countries[200].TotalRecovered;
                critical.value = data.Countries[200].NewRecovered;
                seentoday.value = data.Countries[200].NewConfirmed;
                ikuoni.value = data.Countries[200].NewDeaths;
            }
            else if(count.value == "201" ){

                hide.style.visibility = "visible";
                seentoday.style.visibility = "visible";
                ikuoni.style.visibility = "visible";
                one.style.visibility = "visible";
                two.style.visibility = "visible";

                time.textContent = data.Countries[201].Date;
                locality.textContent = data.Countries[201].Country;
                cases.value = data.Countries[201].TotalConfirmed;
                deaths.value = data.Countries[201].TotalDeaths;
                recovered.value = data.Countries[201].TotalRecovered;
                critical.value = data.Countries[201].NewRecovered;
                seentoday.value = data.Countries[201].NewConfirmed;
                ikuoni.value = data.Countries[201].NewDeaths;
            }
            else if(count.value == "202" ){

                hide.style.visibility = "visible";
                seentoday.style.visibility = "visible";
                ikuoni.style.visibility = "visible";
                one.style.visibility = "visible";
                two.style.visibility = "visible";

                time.textContent = data.Countries[202].Date;
                locality.textContent = data.Countries[202].Country;
                cases.value = data.Countries[202].TotalConfirmed;
                deaths.value = data.Countries[202].TotalDeaths;
                recovered.value = data.Countries[202].TotalRecovered;
                critical.value = data.Countries[202].NewRecovered;
                seentoday.value = data.Countries[202].NewConfirmed;
                ikuoni.value = data.Countries[202].NewDeaths;
            }
            else if(count.value == "203" ){

                hide.style.visibility = "visible";
                seentoday.style.visibility = "visible";
                ikuoni.style.visibility = "visible";
                one.style.visibility = "visible";
                two.style.visibility = "visible";

                time.textContent = data.Countries[203].Date;
                locality.textContent = data.Countries[203].Country;
                cases.value = data.Countries[203].TotalConfirmed;
                deaths.value = data.Countries[203].TotalDeaths;
                recovered.value = data.Countries[203].TotalRecovered;
                critical.value = data.Countries[203].NewRecovered;
                seentoday.value = data.Countries[203].NewConfirmed;
                ikuoni.value = data.Countries[203].NewDeaths;
            }
            else if(count.value == "204" ){

                hide.style.visibility = "visible";
                seentoday.style.visibility = "visible";
                ikuoni.style.visibility = "visible";
                one.style.visibility = "visible";
                two.style.visibility = "visible";

                time.textContent = data.Countries[204].Date;
                locality.textContent = data.Countries[204].Country;
                cases.value = data.Countries[204].TotalConfirmed;
                deaths.value = data.Countries[204].TotalDeaths;
                recovered.value = data.Countries[204].TotalRecovered;
                critical.value = data.Countries[204].NewRecovered;
                seentoday.value = data.Countries[204].NewConfirmed;
                ikuoni.value = data.Countries[204].NewDeaths;
            }
            else if(count.value == "205" ){

                hide.style.visibility = "visible";
                seentoday.style.visibility = "visible";
                ikuoni.style.visibility = "visible";
                one.style.visibility = "visible";
                two.style.visibility = "visible";

                time.textContent = data.Countries[205].Date;
                locality.textContent = data.Countries[205].Country;
                cases.value = data.Countries[205].TotalConfirmed;
                deaths.value = data.Countries[205].TotalDeaths;
                recovered.value = data.Countries[205].TotalRecovered;
                critical.value = data.Countries[205].NewRecovered;
                seentoday.value = data.Countries[205].NewConfirmed;
                ikuoni.value = data.Countries[205].NewDeaths;
            }
            else if(count.value == "206" ){

                hide.style.visibility = "visible";
                seentoday.style.visibility = "visible";
                ikuoni.style.visibility = "visible";
                one.style.visibility = "visible";
                two.style.visibility = "visible";

                time.textContent = data.Countries[206].Date;
                locality.textContent = data.Countries[206].Country;
                cases.value = data.Countries[206].TotalConfirmed;
                deaths.value = data.Countries[206].TotalDeaths;
                recovered.value = data.Countries[206].TotalRecovered;
                critical.value = data.Countries[206].NewRecovered;
                seentoday.value = data.Countries[206].NewConfirmed;
                ikuoni.value = data.Countries[206].NewDeaths;
            }
            else if(count.value == "207" ){

                hide.style.visibility = "visible";
                seentoday.style.visibility = "visible";
                ikuoni.style.visibility = "visible";
                one.style.visibility = "visible";
                two.style.visibility = "visible";

                time.textContent = data.Countries[207].Date;
                locality.textContent = data.Countries[207].Country;
                cases.value = data.Countries[207].TotalConfirmed;
                deaths.value = data.Countries[207].TotalDeaths;
                recovered.value = data.Countries[207].TotalRecovered;
                critical.value = data.Countries[207].NewRecovered;
                seentoday.value = data.Countries[207].NewConfirmed;
                ikuoni.value = data.Countries[207].NewDeaths;
            }
            else if(count.value == "208" ){

                hide.style.visibility = "visible";
                seentoday.style.visibility = "visible";
                ikuoni.style.visibility = "visible";
                one.style.visibility = "visible";
                two.style.visibility = "visible";

                time.textContent = data.Countries[208].Date;
                locality.textContent = data.Countries[208].Country;
                cases.value = data.Countries[208].TotalConfirmed;
                deaths.value = data.Countries[208].TotalDeaths;
                recovered.value = data.Countries[208].TotalRecovered;
                critical.value = data.Countries[208].NewRecovered;
                seentoday.value = data.Countries[208].NewConfirmed;
                ikuoni.value = data.Countries[208].NewDeaths;
            }
            else if(count.value == "209" ){

                hide.style.visibility = "visible";
                seentoday.style.visibility = "visible";
                ikuoni.style.visibility = "visible";
                one.style.visibility = "visible";
                two.style.visibility = "visible";

                time.textContent = data.Countries[209].Date;
                locality.textContent = data.Countries[209].Country;
                cases.value = data.Countries[209].TotalConfirmed;
                deaths.value = data.Countries[209].TotalDeaths;
                recovered.value = data.Countries[209].TotalRecovered;
                critical.value = data.Countries[209].NewRecovered;
                seentoday.value = data.Countries[209].NewConfirmed;
                ikuoni.value = data.Countries[209].NewDeaths;
            }
            else if(count.value == "210" ){

                hide.style.visibility = "visible";
                seentoday.style.visibility = "visible";
                ikuoni.style.visibility = "visible";
                one.style.visibility = "visible";
                two.style.visibility = "visible";

                time.textContent = data.Countries[210].Date;
                locality.textContent = data.Countries[210].Country;
                cases.value = data.Countries[210].TotalConfirmed;
                deaths.value = data.Countries[210].TotalDeaths;
                recovered.value = data.Countries[210].TotalRecovered;
                critical.value = data.Countries[210].NewRecovered;
                seentoday.value = data.Countries[210].NewConfirmed;
                ikuoni.value = data.Countries[210].NewDeaths;
            }
            else if(count.value == "211" ){

                hide.style.visibility = "visible";
                seentoday.style.visibility = "visible";
                ikuoni.style.visibility = "visible";
                one.style.visibility = "visible";
                two.style.visibility = "visible";

                time.textContent = data.Countries[211].Date;
                locality.textContent = data.Countries[211].Country;
                cases.value = data.Countries[211].TotalConfirmed;
                deaths.value = data.Countries[211].TotalDeaths;
                recovered.value = data.Countries[211].TotalRecovered;
                critical.value = data.Countries[211].NewRecovered;
                seentoday.value = data.Countries[211].NewConfirmed;
                ikuoni.value = data.Countries[211].NewDeaths;
            }
            else if(count.value == "212" ){

                hide.style.visibility = "visible";
                seentoday.style.visibility = "visible";
                ikuoni.style.visibility = "visible";
                one.style.visibility = "visible";
                two.style.visibility = "visible";

                time.textContent = data.Countries[212].Date;
                locality.textContent = data.Countries[212].Country;
                cases.value = data.Countries[212].TotalConfirmed;
                deaths.value = data.Countries[212].TotalDeaths;
                recovered.value = data.Countries[212].TotalRecovered;
                critical.value = data.Countries[212].NewRecovered;
                seentoday.value = data.Countries[212].NewConfirmed;
                ikuoni.value = data.Countries[212].NewDeaths;
            }
            else if(count.value == "213" ){

                hide.style.visibility = "visible";
                seentoday.style.visibility = "visible";
                ikuoni.style.visibility = "visible";
                one.style.visibility = "visible";
                two.style.visibility = "visible";

                time.textContent = data.Countries[213].Date;
                locality.textContent = data.Countries[213].Country;
                cases.value = data.Countries[213].TotalConfirmed;
                deaths.value = data.Countries[213].TotalDeaths;
                recovered.value = data.Countries[213].TotalRecovered;
                critical.value = data.Countries[213].NewRecovered;
                seentoday.value = data.Countries[213].NewConfirmed;
                ikuoni.value = data.Countries[213].NewDeaths;
            }
            else if(count.value == "214" ){

                hide.style.visibility = "visible";
                seentoday.style.visibility = "visible";
                ikuoni.style.visibility = "visible";
                one.style.visibility = "visible";
                two.style.visibility = "visible";

                time.textContent = data.Countries[214].Date;
                locality.textContent = data.Countries[214].Country;
                cases.value = data.Countries[214].TotalConfirmed;
                deaths.value = data.Countries[214].TotalDeaths;
                recovered.value = data.Countries[214].TotalRecovered;
                critical.value = data.Countries[214].NewRecovered;
                seentoday.value = data.Countries[214].NewConfirmed;
                ikuoni.value = data.Countries[214].NewDeaths;
            }
            else if(count.value == "215" ){

                hide.style.visibility = "visible";
                seentoday.style.visibility = "visible";
                ikuoni.style.visibility = "visible";
                one.style.visibility = "visible";
                two.style.visibility = "visible";

                time.textContent = data.Countries[215].Date;
                locality.textContent = data.Countries[215].Country;
                cases.value = data.Countries[215].TotalConfirmed;
                deaths.value = data.Countries[215].TotalDeaths;
                recovered.value = data.Countries[215].TotalRecovered;
                critical.value = data.Countries[215].NewRecovered;
                seentoday.value = data.Countries[215].NewConfirmed;
                ikuoni.value = data.Countries[215].NewDeaths;
            }
            else if(count.value == "216" ){

                hide.style.visibility = "visible";
                seentoday.style.visibility = "visible";
                ikuoni.style.visibility = "visible";
                one.style.visibility = "visible";
                two.style.visibility = "visible";

                time.textContent = data.Countries[216].Date;
                locality.textContent = data.Countries[216].Country;
                cases.value = data.Countries[216].TotalConfirmed;
                deaths.value = data.Countries[216].TotalDeaths;
                recovered.value = data.Countries[216].TotalRecovered;
                critical.value = data.Countries[216].NewRecovered;
                seentoday.value = data.Countries[216].NewConfirmed;
                ikuoni.value = data.Countries[216].NewDeaths;
            }
            else if(count.value == "217" ){

                hide.style.visibility = "visible";
                seentoday.style.visibility = "visible";
                ikuoni.style.visibility = "visible";
                one.style.visibility = "visible";
                two.style.visibility = "visible";

                time.textContent = data.Countries[217].Date;
                locality.textContent = data.Countries[217].Country;
                cases.value = data.Countries[217].TotalConfirmed;
                deaths.value = data.Countries[217].TotalDeaths;
                recovered.value = data.Countries[217].TotalRecovered;
                critical.value = data.Countries[217].NewRecovered;
                seentoday.value = data.Countries[217].NewConfirmed;
                ikuoni.value = data.Countries[217].NewDeaths;
            }
            else if(count.value == "218" ){

                hide.style.visibility = "visible";
                seentoday.style.visibility = "visible";
                ikuoni.style.visibility = "visible";
                one.style.visibility = "visible";
                two.style.visibility = "visible";

                time.textContent = data.Countries[218].Date;
                locality.textContent = data.Countries[218].Country;
                cases.value = data.Countries[218].TotalConfirmed;
                deaths.value = data.Countries[218].TotalDeaths;
                recovered.value = data.Countries[218].TotalRecovered;
                critical.value = data.Countries[218].NewRecovered;
                seentoday.value = data.Countries[218].NewConfirmed;
                ikuoni.value = data.Countries[218].NewDeaths;
            }
            else if(count.value == "219" ){

                hide.style.visibility = "visible";
                seentoday.style.visibility = "visible";
                ikuoni.style.visibility = "visible";
                one.style.visibility = "visible";
                two.style.visibility = "visible";

                time.textContent = data.Countries[219].Date;
                locality.textContent = data.Countries[219].Country;
                cases.value = data.Countries[219].TotalConfirmed;
                deaths.value = data.Countries[219].TotalDeaths;
                recovered.value = data.Countries[219].TotalRecovered;
                critical.value = data.Countries[219].NewRecovered;
                seentoday.value = data.Countries[219].NewConfirmed;
                ikuoni.value = data.Countries[219].NewDeaths;
            }
            else if(count.value == "220" ){

                hide.style.visibility = "visible";
                seentoday.style.visibility = "visible";
                ikuoni.style.visibility = "visible";
                one.style.visibility = "visible";
                two.style.visibility = "visible";

                time.textContent = data.Countries[220].Date;
                locality.textContent = data.Countries[220].Country;
                cases.value = data.Countries[220].TotalConfirmed;
                deaths.value = data.Countries[220].TotalDeaths;
                recovered.value = data.Countries[220].TotalRecovered;
                critical.value = data.Countries[220].NewRecovered;
                seentoday.value = data.Countries[220].NewConfirmed;
                ikuoni.value = data.Countries[220].NewDeaths;
            }
            else if(count.value == "221" ){

                hide.style.visibility = "visible";
                seentoday.style.visibility = "visible";
                ikuoni.style.visibility = "visible";
                one.style.visibility = "visible";
                two.style.visibility = "visible";

                time.textContent = data.Countries[221].Date;
                locality.textContent = data.Countries[221].Country;
                cases.value = data.Countries[221].TotalConfirmed;
                deaths.value = data.Countries[221].TotalDeaths;
                recovered.value = data.Countries[221].TotalRecovered;
                critical.value = data.Countries[221].NewRecovered;
                seentoday.value = data.Countries[221].NewConfirmed;
                ikuoni.value = data.Countries[221].NewDeaths;
            }
            else if(count.value == "222" ){

                hide.style.visibility = "visible";
                seentoday.style.visibility = "visible";
                ikuoni.style.visibility = "visible";
                one.style.visibility = "visible";
                two.style.visibility = "visible";

                time.textContent = data.Countries[222].Date;
                locality.textContent = data.Countries[222].Country;
                cases.value = data.Countries[222].TotalConfirmed;
                deaths.value = data.Countries[222].TotalDeaths;
                recovered.value = data.Countries[222].TotalRecovered;
                critical.value = data.Countries[222].NewRecovered;
                seentoday.value = data.Countries[222].NewConfirmed;
                ikuoni.value = data.Countries[222].NewDeaths;
            }
            else if(count.value == "223" ){

                hide.style.visibility = "visible";
                seentoday.style.visibility = "visible";
                ikuoni.style.visibility = "visible";
                one.style.visibility = "visible";
                two.style.visibility = "visible";

                time.textContent = data.Countries[223].Date;
                locality.textContent = data.Countries[223].Country;
                cases.value = data.Countries[223].TotalConfirmed;
                deaths.value = data.Countries[223].TotalDeaths;
                recovered.value = data.Countries[223].TotalRecovered;
                critical.value = data.Countries[223].NewRecovered;
                seentoday.value = data.Countries[223].NewConfirmed;
                ikuoni.value = data.Countries[223].NewDeaths;
            }
            else if(count.value == "224" ){

                hide.style.visibility = "visible";
                seentoday.style.visibility = "visible";
                ikuoni.style.visibility = "visible";
                one.style.visibility = "visible";
                two.style.visibility = "visible";

                time.textContent = data.Countries[224].Date;
                locality.textContent = data.Countries[224].Country;
                cases.value = data.Countries[224].TotalConfirmed;
                deaths.value = data.Countries[224].TotalDeaths;
                recovered.value = data.Countries[224].TotalRecovered;
                critical.value = data.Countries[224].NewRecovered;
                seentoday.value = data.Countries[224].NewConfirmed;
                ikuoni.value = data.Countries[224].NewDeaths;
            }
            else if(count.value == "225" ){

                hide.style.visibility = "visible";
                seentoday.style.visibility = "visible";
                ikuoni.style.visibility = "visible";
                one.style.visibility = "visible";
                two.style.visibility = "visible";

                time.textContent = data.Countries[225].Date;
                locality.textContent = data.Countries[225].Country;
                cases.value = data.Countries[225].TotalConfirmed;
                deaths.value = data.Countries[225].TotalDeaths;
                recovered.value = data.Countries[225].TotalRecovered;
                critical.value = data.Countries[225].NewRecovered;
                seentoday.value = data.Countries[225].NewConfirmed;
                ikuoni.value = data.Countries[225].NewDeaths;
            }
            else if(count.value == "226" ){

                hide.style.visibility = "visible";
                seentoday.style.visibility = "visible";
                ikuoni.style.visibility = "visible";
                one.style.visibility = "visible";
                two.style.visibility = "visible";

                time.textContent = data.Countries[226].Date;
                locality.textContent = data.Countries[226].Country;
                cases.value = data.Countries[226].TotalConfirmed;
                deaths.value = data.Countries[226].TotalDeaths;
                recovered.value = data.Countries[226].TotalRecovered;
                critical.value = data.Countries[226].NewRecovered;
                seentoday.value = data.Countries[226].NewConfirmed;
                ikuoni.value = data.Countries[226].NewDeaths;
            }
            else if(count.value == "227" ){

                hide.style.visibility = "visible";
                seentoday.style.visibility = "visible";
                ikuoni.style.visibility = "visible";
                one.style.visibility = "visible";
                two.style.visibility = "visible";

                time.textContent = data.Countries[227].Date;
                locality.textContent = data.Countries[227].Country;
                cases.value = data.Countries[227].TotalConfirmed;
                deaths.value = data.Countries[227].TotalDeaths;
                recovered.value = data.Countries[227].TotalRecovered;
                critical.value = data.Countries[227].NewRecovered;
                seentoday.value = data.Countries[227].NewConfirmed;
                ikuoni.value = data.Countries[227].NewDeaths;
            }
            else if(count.value == "228" ){

                hide.style.visibility = "visible";
                seentoday.style.visibility = "visible";
                ikuoni.style.visibility = "visible";
                one.style.visibility = "visible";
                two.style.visibility = "visible";

                time.textContent = data.Countries[228].Date;
                locality.textContent = data.Countries[228].Country;
                cases.value = data.Countries[228].TotalConfirmed;
                deaths.value = data.Countries[228].TotalDeaths;
                recovered.value = data.Countries[228].TotalRecovered;
                critical.value = data.Countries[228].NewRecovered;
                seentoday.value = data.Countries[228].NewConfirmed;
                ikuoni.value = data.Countries[228].NewDeaths;
            }
            else if(count.value == "229" ){

                hide.style.visibility = "visible";
                seentoday.style.visibility = "visible";
                ikuoni.style.visibility = "visible";
                one.style.visibility = "visible";
                two.style.visibility = "visible";

                time.textContent = data.Countries[229].Date;
                locality.textContent = data.Countries[229].Country;
                cases.value = data.Countries[229].TotalConfirmed;
                deaths.value = data.Countries[229].TotalDeaths;
                recovered.value = data.Countries[229].TotalRecovered;
                critical.value = data.Countries[229].NewRecovered;
                seentoday.value = data.Countries[229].NewConfirmed;
                ikuoni.value = data.Countries[229].NewDeaths;
            }
            else if(count.value == "230" ){

                hide.style.visibility = "visible";
                seentoday.style.visibility = "visible";
                ikuoni.style.visibility = "visible";
                one.style.visibility = "visible";
                two.style.visibility = "visible";

                time.textContent = data.Countries[230].Date;
                locality.textContent = data.Countries[230].Country;
                cases.value = data.Countries[230].TotalConfirmed;
                deaths.value = data.Countries[230].TotalDeaths;
                recovered.value = data.Countries[230].TotalRecovered;
                critical.value = data.Countries[230].NewRecovered;
                seentoday.value = data.Countries[230].NewConfirmed;
                ikuoni.value = data.Countries[230].NewDeaths;
            }
            else if(count.value == "231" ){

                hide.style.visibility = "visible";
                seentoday.style.visibility = "visible";
                ikuoni.style.visibility = "visible";
                one.style.visibility = "visible";
                two.style.visibility = "visible";

                time.textContent = data.Countries[231].Date;
                locality.textContent = data.Countries[231].Country;
                cases.value = data.Countries[231].TotalConfirmed;
                deaths.value = data.Countries[231].TotalDeaths;
                recovered.value = data.Countries[231].TotalRecovered;
                critical.value = data.Countries[231].NewRecovered;
                seentoday.value = data.Countries[231].NewConfirmed;
                ikuoni.value = data.Countries[231].NewDeaths;
            }
            else if(count.value == "232" ){

                hide.style.visibility = "visible";
                seentoday.style.visibility = "visible";
                ikuoni.style.visibility = "visible";
                one.style.visibility = "visible";
                two.style.visibility = "visible";

                time.textContent = data.Countries[232].Date;
                locality.textContent = data.Countries[232].Country;
                cases.value = data.Countries[232].TotalConfirmed;
                deaths.value = data.Countries[232].TotalDeaths;
                recovered.value = data.Countries[232].TotalRecovered;
                critical.value = data.Countries[232].NewRecovered;
                seentoday.value = data.Countries[232].NewConfirmed;
                ikuoni.value = data.Countries[232].NewDeaths;
            }
            else if(count.value == "233" ){

                hide.style.visibility = "visible";
                seentoday.style.visibility = "visible";
                ikuoni.style.visibility = "visible";
                one.style.visibility = "visible";
                two.style.visibility = "visible";

                time.textContent = data.Countries[233].Date;
                locality.textContent = data.Countries[233].Country;
                cases.value = data.Countries[233].TotalConfirmed;
                deaths.value = data.Countries[233].TotalDeaths;
                recovered.value = data.Countries[233].TotalRecovered;
                critical.value = data.Countries[233].NewRecovered;
                seentoday.value = data.Countries[233].NewConfirmed;
                ikuoni.value = data.Countries[233].NewDeaths;
            }
            else if(count.value == "234" ){

                hide.style.visibility = "visible";
                seentoday.style.visibility = "visible";
                ikuoni.style.visibility = "visible";
                one.style.visibility = "visible";
                two.style.visibility = "visible";

                time.textContent = data.Countries[234].Date;
                locality.textContent = data.Countries[234].Country;
                cases.value = data.Countries[234].TotalConfirmed;
                deaths.value = data.Countries[234].TotalDeaths;
                recovered.value = data.Countries[234].TotalRecovered;
                critical.value = data.Countries[234].NewRecovered;
                seentoday.value = data.Countries[234].NewConfirmed;
                ikuoni.value = data.Countries[234].NewDeaths;
            }
            else if(count.value == "235" ){

                hide.style.visibility = "visible";
                seentoday.style.visibility = "visible";
                ikuoni.style.visibility = "visible";
                one.style.visibility = "visible";
                two.style.visibility = "visible";

                time.textContent = data.Countries[235].Date;
                locality.textContent = data.Countries[235].Country;
                cases.value = data.Countries[235].TotalConfirmed;
                deaths.value = data.Countries[235].TotalDeaths;
                recovered.value = data.Countries[235].TotalRecovered;
                critical.value = data.Countries[235].NewRecovered;
                seentoday.value = data.Countries[235].NewConfirmed;
                ikuoni.value = data.Countries[235].NewDeaths;
            }
            else if(count.value == "236" ){

                hide.style.visibility = "visible";
                seentoday.style.visibility = "visible";
                ikuoni.style.visibility = "visible";
                one.style.visibility = "visible";
                two.style.visibility = "visible";

                time.textContent = data.Countries[236].Date;
                locality.textContent = data.Countries[236].Country;
                cases.value = data.Countries[236].TotalConfirmed;
                deaths.value = data.Countries[236].TotalDeaths;
                recovered.value = data.Countries[236].TotalRecovered;
                critical.value = data.Countries[236].NewRecovered;
                seentoday.value = data.Countries[236].NewConfirmed;
                ikuoni.value = data.Countries[236].NewDeaths;
            }
            else if(count.value == "237" ){

                hide.style.visibility = "visible";
                seentoday.style.visibility = "visible";
                ikuoni.style.visibility = "visible";
                one.style.visibility = "visible";
                two.style.visibility = "visible";

                time.textContent = data.Countries[237].Date;
                locality.textContent = data.Countries[237].Country;
                cases.value = data.Countries[237].TotalConfirmed;
                deaths.value = data.Countries[237].TotalDeaths;
                recovered.value = data.Countries[237].TotalRecovered;
                critical.value = data.Countries[237].NewRecovered;
                seentoday.value = data.Countries[237].NewConfirmed;
                ikuoni.value = data.Countries[237].NewDeaths;
            }
            else if(count.value == "238" ){

                hide.style.visibility = "visible";
                seentoday.style.visibility = "visible";
                ikuoni.style.visibility = "visible";
                one.style.visibility = "visible";
                two.style.visibility = "visible";

                time.textContent = data.Countries[238].Date;
                locality.textContent = data.Countries[238].Country;
                cases.value = data.Countries[238].TotalConfirmed;
                deaths.value = data.Countries[238].TotalDeaths;
                recovered.value = data.Countries[238].TotalRecovered;
                critical.value = data.Countries[238].NewRecovered;
                seentoday.value = data.Countries[238].NewConfirmed;
                ikuoni.value = data.Countries[238].NewDeaths;
            }
            else if(count.value == "239" ){

                hide.style.visibility = "visible";
                seentoday.style.visibility = "visible";
                ikuoni.style.visibility = "visible";
                one.style.visibility = "visible";
                two.style.visibility = "visible";

                time.textContent = data.Countries[239].Date;
                locality.textContent = data.Countries[239].Country;
                cases.value = data.Countries[239].TotalConfirmed;
                deaths.value = data.Countries[239].TotalDeaths;
                recovered.value = data.Countries[239].TotalRecovered;
                critical.value = data.Countries[239].NewRecovered;
                seentoday.value = data.Countries[239].NewConfirmed;
                ikuoni.value = data.Countries[239].NewDeaths;
            }
            else if(count.value == "240" ){

                hide.style.visibility = "visible";
                seentoday.style.visibility = "visible";
                ikuoni.style.visibility = "visible";
                one.style.visibility = "visible";
                two.style.visibility = "visible";

                time.textContent = data.Countries[240].Date;
                locality.textContent = data.Countries[240].Country;
                cases.value = data.Countries[240].TotalConfirmed;
                deaths.value = data.Countries[240].TotalDeaths;
                recovered.value = data.Countries[240].TotalRecovered;
                critical.value = data.Countries[240].NewRecovered;
                seentoday.value = data.Countries[240].NewConfirmed;
                ikuoni.value = data.Countries[240].NewDeaths;
            }
            else if(count.value == "241" ){

                hide.style.visibility = "visible";
                seentoday.style.visibility = "visible";
                ikuoni.style.visibility = "visible";
                one.style.visibility = "visible";
                two.style.visibility = "visible";

                time.textContent = data.Countries[241].Date;
                locality.textContent = data.Countries[241].Country;
                cases.value = data.Countries[241].TotalConfirmed;
                deaths.value = data.Countries[241].TotalDeaths;
                recovered.value = data.Countries[241].TotalRecovered;
                critical.value = data.Countries[241].NewRecovered;
                seentoday.value = data.Countries[241].NewConfirmed;
                ikuoni.value = data.Countries[241].NewDeaths;
            }
            else if(count.value == "242" ){

                hide.style.visibility = "visible";
                seentoday.style.visibility = "visible";
                ikuoni.style.visibility = "visible";
                one.style.visibility = "visible";
                two.style.visibility = "visible";

                time.textContent = data.Countries[242].Date;
                locality.textContent = data.Countries[242].Country;
                cases.value = data.Countries[242].TotalConfirmed;
                deaths.value = data.Countries[242].TotalDeaths;
                recovered.value = data.Countries[242].TotalRecovered;
                critical.value = data.Countries[242].NewRecovered;
                seentoday.value = data.Countries[242].NewConfirmed;
                ikuoni.value = data.Countries[242].NewDeaths;
            }
            else if(count.value == "243" ){

                hide.style.visibility = "visible";
                seentoday.style.visibility = "visible";
                ikuoni.style.visibility = "visible";
                one.style.visibility = "visible";
                two.style.visibility = "visible";

                time.textContent = data.Countries[243].Date;
                locality.textContent = data.Countries[243].Country;
                cases.value = data.Countries[243].TotalConfirmed;
                deaths.value = data.Countries[243].TotalDeaths;
                recovered.value = data.Countries[243].TotalRecovered;
                critical.value = data.Countries[243].NewRecovered;
                seentoday.value = data.Countries[243].NewConfirmed;
                ikuoni.value = data.Countries[243].NewDeaths;
            }
            else if(count.value == "244" ){

                hide.style.visibility = "visible";
                seentoday.style.visibility = "visible";
                ikuoni.style.visibility = "visible";
                one.style.visibility = "visible";
                two.style.visibility = "visible";

                time.textContent = data.Countries[244].Date;
                locality.textContent = data.Countries[244].Country;
                cases.value = data.Countries[244].TotalConfirmed;
                deaths.value = data.Countries[244].TotalDeaths;
                recovered.value = data.Countries[244].TotalRecovered;
                critical.value = data.Countries[244].NewRecovered;
                seentoday.value = data.Countries[244].NewConfirmed;
                ikuoni.value = data.Countries[244].NewDeaths;
            }
            else if(count.value == "245" ){

                hide.style.visibility = "visible";
                seentoday.style.visibility = "visible";
                ikuoni.style.visibility = "visible";
                one.style.visibility = "visible";
                two.style.visibility = "visible";

                time.textContent = data.Countries[245].Date;
                locality.textContent = data.Countries[245].Country;
                cases.value = data.Countries[245].TotalConfirmed;
                deaths.value = data.Countries[245].TotalDeaths;
                recovered.value = data.Countries[245].TotalRecovered;
                critical.value = data.Countries[245].NewRecovered;
                seentoday.value = data.Countries[245].NewConfirmed;
                ikuoni.value = data.Countries[245].NewDeaths;
            }
            else if(count.value == "246" ){

                hide.style.visibility = "visible";
                seentoday.style.visibility = "visible";
                ikuoni.style.visibility = "visible";
                one.style.visibility = "visible";
                two.style.visibility = "visible";

                time.textContent = data.Countries[246].Date;
                locality.textContent = data.Countries[246].Country;
                cases.value = data.Countries[246].TotalConfirmed;
                deaths.value = data.Countries[246].TotalDeaths;
                recovered.value = data.Countries[246].TotalRecovered;
                critical.value = data.Countries[246].NewRecovered;
                seentoday.value = data.Countries[246].NewConfirmed;
                ikuoni.value = data.Countries[246].NewDeaths;
            }
            else if (count.value == "247"){
                hide.style.visibility = "visible";
                seentoday.style.visibility = "visible";
                ikuoni.style.visibility = "visible";
                one.style.visibility = "visible";
                two.style.visibility = "visible";

                time.textContent = data.Countries[247].Date;
                locality.textContent = data.Countries[247].Country;
                cases.value = data.Countries[247].TotalConfirmed;
                deaths.value = data.Countries[247].TotalDeaths;
                recovered.value = data.Countries[247].TotalRecovered;
                critical.value = data.Countries[247].NewRecovered;
                seentoday.value = data.Countries[247].NewConfirmed;
                ikuoni.value = data.Countries[247].NewDeaths;
            }

            else if(count.value == "global"){

                hide.style.visibility = "hidden";
                seentoday.style.visibility = "hidden";
                ikuoni.style.visibility = "hidden";
                one.style.visibility = "hidden";
                two.style.visibility = "hidden";

                cases.value = data.Global.TotalConfirmed;

                time.textContent = data.Date;
                deaths.value = data.Global.TotalDeaths;
                recovered.value = data.Global.TotalRecovered;
                locality.textContent = "Global";
            }
            else if(count.value == "choose"){
                
                hide.style.visibility = "hidden";
                seentoday.style.visibility = "hidden";
                ikuoni.style.visibility = "hidden";
                one.style.visibility = "hidden";
                two.style.visibility = "hidden";

                cases.value = data.Global.TotalConfirmed;

                time.textContent = data.Date;
                deaths.value = data.Global.TotalDeaths;
                recovered.value = data.Global.TotalRecovered;
                locality.textContent = "Global";
            }
            else{

            }
            

        });

        
        
       
        
    })


            
    
// });



