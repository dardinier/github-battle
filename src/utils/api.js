const CLIENT_ID = "72fdf16ea6e6d53d7f1b"; //"Iv1.bd15ad3b7ba72566";
const CLIENT_SECRET = "06abcbdeb1c4bc83e38d7bf1d28f713a79024496"; //"dcdb1d9d7e9c14aa591ea14b53eeaa1d1592dbf2";

const getGithubAppParams = () => `?client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`;

const getPopularRepositories = () => fetch(`https://api.github.com/search/repositories${getGithubAppParams()}&q=stars:%3E1&sort=stars&order=desc&type=Repositories`);

const getUser = username => fetch(`https://api.github.com/users/${username}${getGithubAppParams()}`);

export {
  getPopularRepositories,
  getUser,
};
