const axios = require('axios');
const path = require('path');
const config = require(path.join(__dirname, '..', 'config.json')); // get config

const createRepo = async (repoName) => {
  try {
    const response = await axios.post(
      `https://api.github.com/orgs/${config.orgName}/repos`,
      { name: repoName, private: false },
      { headers: { Authorization: `token ${config.token}`, Accept: 'application/vnd.github.v3+json' } }
    );

    if (response.status === 201) {
      console.log(`Repository ${repoName} created successfully.`);
    } else {
      console.log(`Failed to create repository ${repoName}.`);
    }
  } catch (error) {
    console.error(`Error creating repository ${repoName}:`, error.response.data);
  }
};

config.repoNames.forEach((repoName) => {
  createRepo(repoName);
});
