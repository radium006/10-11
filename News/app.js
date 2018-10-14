let newsList = document.getElementById("news-list")
let newsButton = document.getElementById("show-news")

newsButton.addEventListener('click', function(){


    for (article in news.articles){
        let newsItem = `
        <li>
            <h2> ${news.articles[article].source.name}:</h2>
            <h4> ${news.articles[article].title}</h4>
            <h5>Author: ${news.articles[article].author}</h5>
            <p> ${news.articles[article].description}</p>
            <p> ${news.articles[article].url}</p>
            <img src = "${news.articles[article].urlToImage}">
            <p>${news.articles[article].publishedAt}</p>
        </li>`
        newsList.insertAdjacentHTML("beforeend", newsItem)

    }
})

