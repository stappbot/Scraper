const articles = [];

$('t3-m,ainbody').each(() => {
    const title = $(this).find('myblog-title').text();
    const link = 'https://bust.com/' + $(this).find('a').attr('href');
    const article = $(this).find('myblog-teaser-text').text();
    const date = $(this).find('myblog-details').text();

    const article = {
        title,
        link,
        article,
        date
    };
    article.push(articles)
})

db.Articles.save(articles)
//or something like that!