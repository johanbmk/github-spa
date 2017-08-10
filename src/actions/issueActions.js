// import { issuesMock } from '../SampleJSONResponses/IssuesJSON';

export const GET_ISSUES = 'GET_ISSUES';
export const LOADING_ISSUES = 'LOADING_ISSUES';

export function retrieveIssues(userName, orgName, repoName){

  let queryString = `{repos (userName:"${userName}", orgName: "${orgName}", repoName:"${repoName}") {repos {issues {id title number state labels assignee assigneeAvatar } } } }`

  let request = { query: queryString };

  return (dispatch, getState, { Api }) => {
    return Api.fetchData(request)
    .then(response => response.data.repos.repos[0].issues)
    .then(issues => {
      dispatch({
        type: GET_ISSUES,
        responseObj: issues,
        repoName: repoName
      })
    })
  }
};
