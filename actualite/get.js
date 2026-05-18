const news = document.getElementById('news');

fetch("http://46.224.88.99/ynx/get-json.php")
    .then(res=>{
        return res.json();
    })
    .then(content=>{
        content.forEach(element => {
            let messagePart = document.createElement('p');
            messagePart.innerText = element.content;
            messagePart.classList.add("news-message-part");

            let authorPart = document.createElement('h2');
            authorPart.innerText = element.author;
            authorPart.classList.add("news-author-part")

            let datePart = document.createElement('h3');
            let date = element.date.split("-")
            datePart.innerText = date[2] + "/" + date[1] + "/" + date[0];
            datePart.classList.add("news-date-part");
        
            let downInfoPart = document.createElement('div');
            downInfoPart.appendChild(authorPart);
            downInfoPart.appendChild(datePart);
            downInfoPart.classList.add("news-down-info-part");

            let bigNewsPart = document.createElement('div');
            bigNewsPart.appendChild(messagePart);
            bigNewsPart.appendChild(downInfoPart);
            bigNewsPart.classList.add("big-news-part");

            let title = document.createElement('h1');
            title.innerText = element.title;
            title.classList.add('news-title');

            news.appendChild(title);
            news.appendChild(bigNewsPart);
        });
    })
    .catch(e=>{
        console.log(e);
    })