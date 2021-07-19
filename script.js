console.log("This is my index js file");

// Initialize the news api parameters
let source = 'the-times-of-india';
let apiKey = '9742a1255d0744799f30af2b8e3f288c'

// Grab the news container
let newsAccordion = document.getElementById('newsAccordion');

// Create an ajax get request
const xhr = new XMLHttpRequest();
xhr.open('GET', `https://newsapi.org/v2/top-headlines?sources=${source}&apiKey=${apiKey}`, true);

// What to do when response is ready
xhr.onload = function () {
    if (this.status === 200) {
        let json = JSON.parse(this.responseText);
        let articles = json.articles;
        console.log(articles);
        let newsHtml = "";
        articles.forEach(function (element, index) {
            // console.log(element, index)
            let news = `<div class="card ml-md-4 mt-4" style="width:300px; height:420px; background-color:skyblue;">
                            
            
            <div class = "d-flex align-items-center  justify-content-center flex-column" id = "heading${index}">
            <img class = "mt-4 mb-3 rounded" src = "${element["urlToImage"]}" alt = "image" width = "290px" height = "150px"/>
             
                                <div class="mb-0 w-75 h-100">
                                <button class="btn btn-link " type="button">
                                   <b>Breaking News ${index+1}:</b> ${element["title"]}
                                </button>
                                </div>  
                            </div>

                            <div class="d-flex align-items-center justify-content-center"> <a class = "btn btn-danger w-75" href = "${element['url']}" target = "_blank" > Read more here </a> </div>


                            
                             
                        </div>`;
            newsHtml += news;
        });
        newsAccordion.innerHTML = newsHtml;
    } else {
        console.log("Some error occured")
    }
}

xhr.send()