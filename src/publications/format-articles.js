const formatAuthors = (authors) => {
  const noAuthors = authors.length;
  const str = `${authors.slice(0, noAuthors - 1).join(', ')} and ${authors[noAuthors - 1]}`;
  return str.replace('Gingras AC', '<span class="underline">Gingras AC</span>');
};

const formatPages = (article) => {
  if (article.volume && article.issue && article.pages) {
    return `, ${article.volume}(${article.issue}): ${article.pages}`;
  } if (article.volume && article.pages) {
    return `, ${article.volume}: ${article.pages}`;
  } if (article.pages) {
    return `, ${article.pages}`;
  }
  return '';
};

const formatTitle = (title) => title.replace(/&lt;.+?&gt;/g, '');

const formatItem = (article) => (
  '\t<li>\n'
  + `\t\t${formatAuthors(article.authors)}.\n`
  + `\t\t<strong>${formatTitle(article.title)}</strong>\n`
  + `\t\t<em>${article.journal}</em>.\n`
  + `\t\t${article.year}${formatPages(article)}.\n`
  + `\t\t<a href="https://www.ncbi.nlm.nih.gov/pubmed/${article.pmid}">PMID: ${article.pmid}</a>.\n`
  + '\t</li>'
);

const formatArticles = (articles) => {
  const yearOrder = Object.keys(articles).sort((a, b) => (Number(a) < Number(b) ? 1 : -1));

  const yearLinks = yearOrder.map((year) => `\t<a href="publications/#${year}">${year}</a>`);
  yearLinks.unshift('<div class="publications__links-year">');
  yearLinks.push('</div>');

  const template = yearOrder.reduce((accum, year) => {
    const item = articles[year].reduce((accumItem, article) => ([
      ...accumItem,
      formatItem(article),
    ]), []);
    return [
      ...accum,
      `<h2 id="${year}">${year}</h2>`,
      '<ul>',
      ...item,
      '</ul>',
    ];
  }, yearLinks);

  return template.join('\n');
};

module.exports = formatArticles;
