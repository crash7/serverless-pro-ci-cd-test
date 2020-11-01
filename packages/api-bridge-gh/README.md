# api-bridge-gh

Service that acts as a dummy layer with the Github API to retrieve user's repositories.

## API

### Retrieve repositories from a user

Endpoint: /repos/{user|organization}

Example:

```bash
curl http://localhost:4000/repos/crash7
```

```json
[
  {
    "id": "MDEwOlJlcG9zaXRvcnk3Mjc5MDI5",
    "name": "wbddcsv",
    "description": "Workbench data dictionary export as CSV",
    "url": "https://github.com/crash7/wbddcsv",
    "isFork": false,
    "stars": 0,
    "followers": 0,
    "language": "Python"
  }
]
```

## Running locally

Execute: `yarn start --stage {stage} --region us-east-1`
