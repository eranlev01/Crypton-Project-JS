$(document).ready( function(){
    //Global intialize ///////////////////////////////////////////
    const links = document.querySelectorAll(".nav-item");
    const inputEl = document.querySelector("#search-input");
    const btnEl = document.querySelector("#search-btn");
    let filter = ""
    let coinsList = []
    const loading = () => {
    $('#mid-content').html(`<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 100 100" enable-background="new 0 0 100 100" xml:space="preserve"> <rect fill="#fff" width="3" height="100" transform="translate(0) rotate(180 3 50)"> <animate attributeName="height" attributeType="XML" dur="1s" values="30; 100; 30" repeatCount="indefinite"/> </rect> <rect x="17" fill="#fff" width="3" height="100" transform="translate(0) rotate(180 20 50)"> <animate attributeName="height" attributeType="XML" dur="1s" values="30; 100; 30" repeatCount="indefinite" begin="0.1s"/> </rect> <rect x="40" fill="#fff" width="3" height="100" transform="translate(0) rotate(180 40 50)"> <animate attributeName="height" attributeType="XML" dur="1s" values="30; 100; 30" repeatCount="indefinite" begin="0.3s"/> </rect> <rect x="60" fill="#fff" width="3" height="100" transform="translate(0) rotate(180 58 50)"> <animate attributeName="height" attributeType="XML" dur="1s" values="30; 100; 30" repeatCount="indefinite" begin="0.5s"/> </rect> <rect x="80" fill="#fff" width="3" height="100" transform="translate(0) rotate(180 76 50)"> <animate attributeName="height" attributeType="XML" dur="1s" values="30; 100; 30" repeatCount="indefinite" begin="0.1s"/> </rect> </svg>`)
   }
    //Links Navigator ////////////////////////////////////////////
    links.forEach(link => {
        link.addEventListener("click",  event => {
             
            const id = event.target.id;
            if(id == "1"){

                console.log(typeof(data))
                $('#mid-content').html(`<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 100 100" enable-background="new 0 0 100 100" xml:space="preserve"> <rect fill="#fff" width="3" height="100" transform="translate(0) rotate(180 3 50)"> <animate attributeName="height" attributeType="XML" dur="1s" values="30; 100; 30" repeatCount="indefinite"/> </rect> <rect x="17" fill="#fff" width="3" height="100" transform="translate(0) rotate(180 20 50)"> <animate attributeName="height" attributeType="XML" dur="1s" values="30; 100; 30" repeatCount="indefinite" begin="0.1s"/> </rect> <rect x="40" fill="#fff" width="3" height="100" transform="translate(0) rotate(180 40 50)"> <animate attributeName="height" attributeType="XML" dur="1s" values="30; 100; 30" repeatCount="indefinite" begin="0.3s"/> </rect> <rect x="60" fill="#fff" width="3" height="100" transform="translate(0) rotate(180 58 50)"> <animate attributeName="height" attributeType="XML" dur="1s" values="30; 100; 30" repeatCount="indefinite" begin="0.5s"/> </rect> <rect x="80" fill="#fff" width="3" height="100" transform="translate(0) rotate(180 76 50)"> <animate attributeName="height" attributeType="XML" dur="1s" values="30; 100; 30" repeatCount="indefinite" begin="0.1s"/> </rect> </svg>`)
              render1();
            }
            else if (id == "2") {
                

                render2();
                
                $('#mid-content').html(`<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                viewBox="0 0 100 100" enable-background="new 0 0 100 100" xml:space="preserve">
                <rect fill="#fff" width="3" height="100" transform="translate(0) rotate(180 3 50)">
                <animate
                    attributeName="height"
                    attributeType="XML"
                    dur="1s"
                    values="30; 100; 30"
                    repeatCount="indefinite"/>
                </rect>
                <rect x="17" fill="#fff" width="3" height="100" transform="translate(0) rotate(180 20 50)">
                  <animate
                    attributeName="height"
                    attributeType="XML"
                    dur="1s"
                    values="30; 100; 30"
                    repeatCount="indefinite"
                    begin="0.1s"/>
                </rect>
                <rect x="40" fill="#fff" width="3" height="100" transform="translate(0) rotate(180 40 50)">
                <animate
                    attributeName="height"
                    attributeType="XML"
                    dur="1s"
                    values="30; 100; 30"
                    repeatCount="indefinite"
                    begin="0.3s"/>
                </rect>
                <rect x="60" fill="#fff" width="3" height="100" transform="translate(0) rotate(180 58 50)">
                <animate
                    attributeName="height"
                    attributeType="XML"
                    dur="1s"
                    values="30; 100; 30"
                    repeatCount="indefinite"
                    begin="0.5s"/>
                </rect>
                <rect x="80" fill="#fff" width="3" height="100" transform="translate(0) rotate(180 76 50)">
                <animate
                    attributeName="height"
                    attributeType="XML"
                    dur="1s"
                    values="30; 100; 30"
                    repeatCount="indefinite"
                    begin="0.1s"/>
                </rect>
                </svg>`)
                setTimeout(() => {
                    render2();   
                
                } , 4000)
                
            }
            else if (id == "3") {
                
                $("#mid-content").html(render3());
            }
        });
    });
    //Search ////////////////////////////////////////////////////
    btnEl.addEventListener('click', (e) => {
        e.preventDefault()
        
        console.log(inputEl.value)
        if(inputEl.value.length === 0){
            render1()
        }
        else{
            filter = inputEl.value;
            drawsearch(); 
        }   
    })

    ///////////////////////////////////////////////////////////// 
    // render functions /////////////////////////////////////////
    const render1 = () => {
        $('#1').css('opacity', '0.6')
        $('#2').css('opacity', '1')
        $('#3').css('opacity', '1')
        $('#first-content').html('<h1>All Cryptocoins : <h1>');
        $('#mid-content').empty();
        $('#mid-content').css('height','100%'); 
        loading();
        draw();
    }
    
    const render2 = () => {
        $('#1').css('opacity', '1')
        $('#2').css('opacity', '0.6')
        $('#3').css('opacity', '1')
        $('#mid-content').css('height','100%')
        $('#first-content').html('<h1>Live Reports<h1>');
        console.log(coinsList)
        if(coinsList[0] == undefined || coinsList[1] == undefined || coinsList[2] == undefined || coinsList[3] == undefined || coinsList[4] == undefined){
            $('#mid-content').empty() 
            $('#mid-content').css('height','100%'); 
            $('#mid-content').html(`<h2 id="errMsg">You must choose five coins!</h2>`)  
        }
        else{
            $("#mid-content").html(`<canvas id="myChart" width="400" height="150"></canvas>`)
            chartGraph();  
        }
        
    }

    const render3 = ()=> {
        $('#1').css('opacity', '1')
        $('#2').css('opacity', '1')
        $('#3').css('opacity', '0.6')
        console.log(3)
        $("#mid-content").empty();
        $("#mid-content").css("height", "100vh");
        $('#first-content').html('<h1>About<h1>');
        return `
                        <div id="project-description">
                        <h1>What is cryptocurrency?<h1>
                        <h2>Let’s keep it simple: <br><h2>
                        <div class="p">
                        cryptocurrency is digital cash for the digital age. <br> 
                        It’s similar to regular money ($ or €)  but it’s digital-only, <br>
                        so there are no bills or coins to carry around.<br>
                        </div>
                        <div class="p">
                        </div>
                        </div>
                        
                        <div class="about-card">
                        <img src="./img/img_avatar.jpg" alt="Avatar" style="width:100%; height: 80%;"><br>
                        <div class="about-container">
                        <h4><b>Eran Lev</b></h4> 
                        <p>WEB Develop & Design</p> 
                        </div>
                        </div>
                        `;
    }
// draw cards functions ///////////////////////////////////////////////////////////////
    const draw = () => { 
        
        $.get('https://api.coingecko.com/api/v3/coins/list', function coinslist(data){
            
            data.splice(100)
            console.log(data)
            $('#mid-content').empty()
            for (let i = 0; i < data.length; i++) {
                    $('#mid-content').append(`
                    
                    <div id="coin-card${i}" class="coin-card">
                        <h2>${data[i].symbol}</h2>
                        <div id="coins-name">${data[i].name}</div>
                        <div id="more-info${i}">
                        </div>
                        <button id="btn${i}" class="btn btn-dark">More Info</button>
                        <label class="switch">
                            <input id="switch-btn${i}" name="${data[i].symbol}" type="checkbox">
                            <span class="slider round"></span>
                        </label>
                    </div>`)
                    // More-info button
                    $(`#btn${i}`).click( () => {
                        $(`#more-info${i}`).append(`<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 100 100" enable-background="new 0 0 100 100" xml:space="preserve"> <rect fill="#fff" width="3" height="100" transform="translate(0) rotate(180 3 50)"> <animate attributeName="height" attributeType="XML" dur="1s" values="30; 100; 30" repeatCount="indefinite"/> </rect> <rect x="17" fill="#fff" width="3" height="100" transform="translate(0) rotate(180 20 50)"> <animate attributeName="height" attributeType="XML" dur="1s" values="30; 100; 30" repeatCount="indefinite" begin="0.1s"/> </rect> <rect x="40" fill="#fff" width="3" height="100" transform="translate(0) rotate(180 40 50)"> <animate attributeName="height" attributeType="XML" dur="1s" values="30; 100; 30" repeatCount="indefinite" begin="0.3s"/> </rect> <rect x="60" fill="#fff" width="3" height="100" transform="translate(0) rotate(180 58 50)"> <animate attributeName="height" attributeType="XML" dur="1s" values="30; 100; 30" repeatCount="indefinite" begin="0.5s"/> </rect> <rect x="80" fill="#fff" width="3" height="100" transform="translate(0) rotate(180 76 50)"> <animate attributeName="height" attributeType="XML" dur="1s" values="30; 100; 30" repeatCount="indefinite" begin="0.1s"/> </rect> </svg>`)
                        $.get('https://api.coingecko.com/api/v3/coins/' + data[i].id ,function(coinsdata){
                            
                        localStorage.setItem("coinsdata", JSON.stringify(coinsdata));
                        let marketPrice = coinsdata.market_data.current_price
                        $('svg').css('display', 'none')
                        $(`#more-info${i}`).append(`
                            <div id="collapse${i}" class="collapse">
                            <img id="coin-img${i}" class="img-coin" src="" alt="">
                                <div id="description">
                                    ${coinsdata.description.en}
                                    <p id="current-price">
                                    Current Price:<br><br>
                                    <span>USD: ${marketPrice.usd}$</span><br>
                                    <span>EUR: ${marketPrice.eur}€</span><br>
                                    <span>ILS: ${marketPrice.ils}ְְֱֲֲִִִִִִִֵֵֵַַַַָָָ₪</span><br>
                                    </p>
                                </div>
                            </div>`)
                            $(`#collapse${i}`).collapse('toggle'); 
                            document.querySelector(`#coin-img${i}`).src = coinsdata.image.small;
                            
                        })  
                        
                        // Remove form localStorage After 2 minutes without click
                        setInterval(() => {
                            let coinsdata = JSON.parse(localStorage.getItem(`coinsdata`))
                            console.log(coinsdata)
                            localStorage.removeItem('coinsdata');

                        }, 120000); 
                        
                    })
                    // Toggle Button 
                    $(`#switch-btn${i}`).click(event => {
                        const { checked, id } = event.target;
                        console.log(id);
                        console.log(checked)
                        let coin = {"name":data[i].name, "symbol":data[i].symbol, "id": id}
                    // chack if coinsList is empty than setting as array        
                    if(coinsList == null){
                        coinsList = []
                        coinsList.push(coin)

                    }
                    //cheking if its on or off mode
                    else{
                        if (checked) {
                            // max selected set to 5
                            if (coinsList.length == 5) {
                                event.preventDefault();
                                $('#mid-content').append(`
                                <div class="modal-content">
                                <h3>You already chose 5 coins!</h3>
                                  <ul id="modal-list">
                                  </ul>
                                  <button type="button" class="btn btn-dark" id="close" >Close</button>
                                </div>
                              `)
                              for (let i = 0; i < coinsList.length; i++) {
                                $('#modal-list').append(`<li>${coinsList[i].symbol}<div class="close" aria-label="Close" id="x${i}">
                                <div aria-hidden="true" id="x" >x</div>
                                </div></li>`)
        
                                $('.modal-content').css('display', 'block');

                                $('#close').click(() => {
                                    $('.modal-content').css('display', 'none');
                                })
                                $(`#x${i}`).click(event => {
                                    console.log(event)
                                    let filter = event.currentTarget.parentElement.childNodes[0].data
                                    console.log(filter)
                                    console.log($(`[name='${filter}']`).prop('checked'))
                                    $(`[name='${filter}']`).prop('checked', false) 
                                    console.log(checked)
                                    index = coinsList.findIndex(c => c.symbol == filter);
                                    console.log(index)

                                    coinsList.splice(index, 1)
                                    console.log(coinsList)
                                    event.currentTarget.parentElement.remove();
                                    if(coinsList.length == 0) {
                                        $('.modal-content').css('display', 'none')
                                    }   
                                })
                                }
                            } 
                            else {
                                coinsList.push(coin);
                                console.log(coinsList)
                            }
                        } 
                        //Remove from array when button is off mode
                        else {
                        parseInt(id)
                        index = coinsList.findIndex(c => c.id == id);
                        console.log(index)
                        coinsList.splice(index, 1)
                        console.log(coinsList)
                        }
                     }           
                })       
            }
        })
    }

    const drawsearch = () => {
        $('#mid-content').html(" ")
        $.get('https://api.coingecko.com/api/v3/coins/list', function coinslist(data){
            data.splice(100)
            const filteredItems = data.find(item => item.symbol == filter);
            console.log('filteredItems',filteredItems)      
        
                    $('#mid-content').append(`<div id="coin-card" class="coin-card">
                    <h2>${filteredItems.symbol}</h2>
                    <div id="coins-name">${filteredItems.name}</div>
                    <div id="more-info">
                    </div>
                    <button id="btn" class="btn btn-dark">More Info</button>
                    <label class="switch">
                    <input id="switch-btn" type="checkbox">
                    <span class="slider round"></span>
                    </label>
                    </div>`)
                    $(`#btn`).click( function(){
                        $(`#more-info`).append(`<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 100 100" enable-background="new 0 0 100 100" xml:space="preserve"> <rect fill="#fff" width="3" height="100" transform="translate(0) rotate(180 3 50)"> <animate attributeName="height" attributeType="XML" dur="1s" values="30; 100; 30" repeatCount="indefinite"/> </rect> <rect x="17" fill="#fff" width="3" height="100" transform="translate(0) rotate(180 20 50)"> <animate attributeName="height" attributeType="XML" dur="1s" values="30; 100; 30" repeatCount="indefinite" begin="0.1s"/> </rect> <rect x="40" fill="#fff" width="3" height="100" transform="translate(0) rotate(180 40 50)"> <animate attributeName="height" attributeType="XML" dur="1s" values="30; 100; 30" repeatCount="indefinite" begin="0.3s"/> </rect> <rect x="60" fill="#fff" width="3" height="100" transform="translate(0) rotate(180 58 50)"> <animate attributeName="height" attributeType="XML" dur="1s" values="30; 100; 30" repeatCount="indefinite" begin="0.5s"/> </rect> <rect x="80" fill="#fff" width="3" height="100" transform="translate(0) rotate(180 76 50)"> <animate attributeName="height" attributeType="XML" dur="1s" values="30; 100; 30" repeatCount="indefinite" begin="0.1s"/> </rect> </svg>`)
                        $.get('https://api.coingecko.com/api/v3/coins/' + filteredItems.id ,function(coinsdata){
                            console.log(coinsdata)
                            
                            localStorage.setItem("coinsdata", JSON.stringify(coinsdata));
                            let marketPrice = coinsdata.market_data.current_price
                            $('svg').css('display', 'none')
                            $(`#more-info`).append(`
                                <div id="collapse" class="collapse">
                                <img id="coin-img" class="img-coin" src="" alt="">
                                    <div id="description">
                                        ${coinsdata.description.en}
                                        <p id="current-price">
                                        Current Price:<br><br>
                                        <span>USD: ${marketPrice.usd}$</span><br>
                                        <span>EUR: ${marketPrice.eur}€</span><br>
                                        <span>ILS: ${marketPrice.ils}ְְֱֲֲִִִִִִִֵֵֵַַַַָָָ₪</span><br>
                                        </p>
                                    </div>
                                </div>`)
                                $(`#collapse`).collapse('toggle'); 
                                document.querySelector(`#coin-img`).src = coinsdata.image.small;
                                
                            }) 
                            
                            
                    
                    })
                    
                
                    $(`#switch-btn`).click(event => {  
                                    
                        const { checked, id } = event.target;       
                        let coin = {"name":filteredItems.name, "symbol":filteredItems.symbol, "id": id}
                        if(coinsList == null){
                            let coinsList = []
                            coinsList.push(coin)
                        }
                        else{
                            if (checked) {
                                // max selected set to 5
                                if (coinsList.length == 5) {
                                    event.preventDefault();
                                $('#mid-content').append(`
                                <div class="modal-content">
                                <h3>You already chose 5 coins!</h3>
                                  <ul id="modal-list">
                                  </ul>
                                  <button type="button" class="btn btn-dark" id="close" >Close</button>
                                </div>
                              `)
                              for (let i = 0; i < coinsList.length; i++) {
                                $('#modal-list').append(`<li>${coinsList[i].symbol}<div class="close" aria-label="Close" id="x${i}">
                                <div aria-hidden="true" id="x" >x</div>
                                </div></li>`)
        
                                $('.modal-content').css('display', 'block');

                                $('#close').click(() => {
                                    $('.modal-content').css('display', 'none');
                                })
                                $(`#x${i}`).click(event => {
                                    console.log(event)
                                    let filter = event.currentTarget.parentElement.childNodes[0].data
                                    console.log(filter)
                                    console.log($(`[name='${filter}']`).prop('checked'))
                                    $(`[name='${filter}']`).prop('checked', false) 
                                    console.log(checked)
                                    index = coinsList.findIndex(c => c.symbol == filter);
                                    console.log(index)

                                    coinsList.splice(index, 1)
                                    console.log(coinsList)
                                    event.currentTarget.parentElement.remove();
                                    if(coinsList.length == 0) {
                                        $('.modal-content').css('display', 'none')
                                    }   
                                })
                                }
 
                                } 
                                else {
                                    coinsList.push(coin);
                                    console.log(coinsList)
                                }
                            } 
                            else {
                            parseInt(id)
                            index = coinsList.findIndex(c => c.id == id);
                            coinsList.splice(index, 1)
                            console.log(coinsList)
    
                            }
                        }
                    })   
        })   
    }
    // Graphing /////////////////////////////////////////////////////////
    const chartGraph = () => {
        
        let firstSymbol = coinsList[0].symbol.toUpperCase()
        let secondSymbol = coinsList[1].symbol.toUpperCase()
        let thirdSymbol = coinsList[2].symbol.toUpperCase()
        let fourthSymbol = coinsList[3].symbol.toUpperCase()
        let fifthymbol = coinsList[4].symbol.toUpperCase()
        const firstCoin = coinsList[0].name
        const secondCoin = coinsList[1].name
        const thirdCoin = coinsList[2].name
        const fourthCoin = coinsList[3].name
        const fifthCoin = coinsList[4].name  
        const xlabels = []
        const yprice = []
        setInterval(function(){
            
            $.get('https://min-api.cryptocompare.com/data/pricemulti?fsyms=' + firstSymbol + ',' + secondSymbol + ',' + thirdSymbol + ',' + fourthSymbol + ',' + fifthymbol + '&tsyms=USD', function (price){
                    const date = `${new Date().getHours()} : ` + `${new Date().getMinutes()} : ` + `${new Date().getSeconds()}`;
                    if(xlabels.length == 5){
                        xlabels.shift()
                    }
                    else
                        xlabels.push(date)
                        const priceValue = price[fourthSymbol].USD;
                        yprice.push(parseFloat(priceValue))
                    
                    let ctx = document.getElementById('myChart').getContext('2d');
                    let chart = new Chart(ctx, {

                        type: 'line',
                        data: {
                            labels: xlabels,
                            // 1
                            datasets: [{
                                label: firstCoin,
                                borderColor: 'rgb(255, 99, 132)',
                                data: []
                            },
                            //2
                            {
                                label: secondCoin,
                                borderColor: 'yellow',
                                data: []
                            },
                            //3
                            {
                                label: thirdCoin,
                                borderColor: 'green',
                                data: []
                            },
                            //4
                            {
                                label: fourthCoin,
                                borderColor: 'blue',
                                data: yprice
                            },
                            //5
                            {
                                label: fifthCoin,
                                borderColor: 'gold',
                                data: []
                            }]

                        },
                        options: {
                            tooltips: {
                                mode: 'index',
                                axis: 'y'
                            },
                            scales: {
                                yAxes: [{
                                    ticks: {
                                        callback: function() {
                                            return parseFloat(priceValue) + '$';
                                        },
                                        fontColor: 'white'
                                    }
                                }]
                            }
                        }
                         
                    }); 
                chart.update();    
                }) 
                
            }, 2000);
    }
    // ScrollTop Button
    let scrollBTN = document.getElementById("myBtn");

    // When the user scrolls down 20px from the top of the document, show the button
    window.onscroll = function() {scrollFunction()};
    
    const scrollFunction = () => {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollBTN.style.display = "block";
    } else {
        scrollBTN.style.display = "none";
    }
    }

    // When the user clicks on the button, scroll to the top of the document
        myBtn.addEventListener('click', () => {
            document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
        })
    // calling the page 1 function on loading //////////////////////////
    
        render1();


})