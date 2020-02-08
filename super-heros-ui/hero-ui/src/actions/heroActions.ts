export function fetchBlogPosts(page, limit, filter, sort, direction) {
  let p = new URLSearchParams();
  p.append('page', page || 1);
  p.append('limit', limit || 10);
  p.append('filter', filter || '');
  p.append('sort', sort || '');
  p.append('direction', direction || '');

  return fetch('http://localhost:8083/api/heroes', {
    method: 'GET',
    mode: 'cors',
    headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' }
  }).then(res => res.json())
    .catch(err => err);
}

function getAll(page, offset, filter, sort, direction) {
  return fetch(
    'http://api.symfony-3.dev/app_dev.php/posts?', {
    method: 'GET'
  }).then(res => res.json())
    .catch(err => err);
}

export function fetchBlogPost(id) {
  return fetch('http://api.symfony-3.dev/app_dev.php/posts/' + id, {
    method: 'GET'
  }).then(res => res.json())
    .catch(err => err);
}

export function createBlogPost(data) {
  return fetch('http://api.symfony-3.dev/app_dev.php/posts', {
    method: 'POST'
  }).then(res => {
    return res;
  }).catch(err => err);
}

export function updateBlogPost(id, data) {
  return fetch('http://api.symfony-3.dev/app_dev.php/posts/' + id, ).then(res => {
    return res;
  }).catch(err => err);
}

export function deleteBlogPost(id) {
  return fetch('http://api.symfony-3.dev/app_dev.php/posts/' + id, {
    method: 'DELETE'
  }).then(res => res)
    .catch(err => err);
}
