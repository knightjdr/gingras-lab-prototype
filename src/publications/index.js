const fetchArticles = require('./fetch-articles');
const fetchIDs = require('./fetch-ids');
const formatArticles = require('./format-articles');
const sortArticles = require('./sort-articles');
const writeHTML = require('./write-html');

const blackList = [];

const publicationList = async () => {
  const ids = await fetchIDs(blackList);
  const articles = await fetchArticles(ids);
  const sortedArticles = sortArticles(articles);
  const html = formatArticles(sortedArticles);
  await writeHTML(html);
};

publicationList();
