const baseUrl = "http://wp8m3he1wt.s3-website-ap-southeast-2.amazonaws.com";

async function fetchGet(endpoint) {
  return fetch(baseUrl + endpoint)
    .then((response) => {
      return response.json();
    })
    .then((responseJSON) => {
      // console.log(responseJSON);
      return responseJSON;
    })
    .catch(() => {
      return { responseJSON: [] };
    });
}
export { fetchGet };
