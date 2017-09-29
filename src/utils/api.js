//  var api =`https://en.wikipedia.org/w/api.php?action=opensearch&search=`
// export function fetchData (data = '') {
//   data = data.trim()
// return fetch(`${api}${data}&format=json&callback=?`)
//     .then((res) => res.json())
//
//     .then(data => data)
// }
let api ='https://en.wikipedia.org/w/api.php?action=opensearch&search=';
let parameter = '&format=json&origin=*&callback=?'
const headers = {
  'Accept': 'application/json'
};
export function fetchData (data = '') {
data = data.trim()
return fetch(`${api}${data}${parameter}`,{headers})
  .then((helper) => helper.text())
  .then(data => data)
}
