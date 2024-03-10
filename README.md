# GitHub Repository Creation Tool

This tool automates the creation of repositories for a specified GitHub organization using Node.js and the GitHub API.

## Features

- Create multiple repositories in a single run.
- Configure repository names and organization details through a `config.json` file located in the project root directory.
- Optional: Use environment variables for sensitive information.

## Prerequisites

Before you can use this tool, you need to have the following:

- Node.js installed on your system.
- A GitHub personal access token with `repo` and `admin:org` scopes.

## Installation

1. Clone this repository to your local machine:
   \```bash
   git clone <repository-url>
   \```
2. Navigate to the project directory:
   \```bash
   cd <project-directory-name>
   \```
3. Install the required npm packages:
   \```bash
   npm install
   \```

## Configuration

### Using `config.json`

1. In the root directory of the project, raname the `config.json.smaple` file to `config.json`. This file has the following structure:
   \```json
   {
     "token": "YOUR_PERSONAL_ACCESS_TOKEN",
     "orgName": "YOUR_ORG_NAME",
     "repoNames": ["repo1", "repo2", "repo3"]
   }
   \```
   Replace `YOUR_PERSONAL_ACCESS_TOKEN` with your GitHub personal access token, `YOUR_ORG_NAME` with the name of your GitHub organization, and update the `repoNames` array with the names of the repositories you wish to create.

### Using Environment Variables (Optional)

If you prefer not to use `config.json` for sensitive information, you can set the following environment variables:
   \```bash
   export GITHUB_TOKEN="YOUR_PERSONAL_ACCESS_TOKEN"
   export GITHUB_ORG_NAME="YOUR_ORG_NAME"
   export GITHUB_REPO_NAMES="repo1,repo2,repo3"
   \```

## Usage

To run the tool and create the repositories, execute the following command from the root directory of the project:
   \```bash
   node src/createRepo.js
   \```

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
