const news = document.getElementById('news');

fetch("http://terrysegaunes.com/ynx/get-json.php")
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

        for (let i=0; i<10; i++) {
            let messagePart = document.createElement('p');
            messagePart.innerText = "Lorem ipsum dolor sit amet consectetur adipiscing elit. Pretium tellus duis convallis tempus leo eu aenean. Iaculis massa nisl malesuada lacinia integer nunc posuere. Conubia nostra inceptos himenaeos orci varius natoque penatibus. Nulla molestie mattis scelerisque maximus eget fermentum odio.";
            messagePart.classList.add("news-message-part");

            let authorPart = document.createElement('h2');
            authorPart.innerText = "Auteur";
            authorPart.classList.add("news-author-part")

            let datePart = document.createElement('h3');
            datePart.innerText = "31/12/2026";
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
            title.innerText = "Titre" + i;
            title.classList.add('news-title');

            news.appendChild(title);
            news.appendChild(bigNewsPart);
        }
    })