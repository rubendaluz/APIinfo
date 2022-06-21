let noticias = {
    "apiKey": "85da88fc24df4179a83dbc4830479792",
    fetchnoticias: function(assunto){
        fetch(
            "https://newsapi.org/v2/everything?q="+ assunto +"&lang=pt&apiKey="+ this.apiKey 
        ).then((resposta) => resposta.json())
        .then((data) => this.displaynews(data));
    },

    displaynews: function(data){
        var i = 0
        const title = data.articles[i].title;
        const description = data.articles[i].description;
        const url = data.articles[i].url;
        const image = data.articles[i].urlToImage;
        console.log(data, title, description, url,image)
    },

    search: function(){
        this.fetchnoticias(document.getElementById("search-bar").value)
    }
};

const btn = document.getElementById("busca")
btn.addEventListener("click", function(e){
    e.preventDefault;
    noticias.search();
});

document.querySelector("#search-bar").addEventListener("keyup", function (event) {
    if (event.key == "Enter") {
        noticias.search();
    }
});

noticias.fetchnoticias("Tesla");


