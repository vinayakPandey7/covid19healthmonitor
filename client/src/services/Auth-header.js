export default function authHeader() {
  const user = JSON.parse(localStorage.getItem('user'));

  if (user && user.access_token) {
    // for Node.js Express back-end
    return { 'x-access-token': user.access_token };
  } else {
    console.log("access token not found in auth-header.js")
    return {};
  }
}