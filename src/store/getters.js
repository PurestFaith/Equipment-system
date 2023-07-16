const getters = {
  sidebar: (state) => state.app.sidebar,
  device: (state) => state.app.device,
  token: (state) => state.user.user.token,
  username: (state) => state.user.user.username
  // avatar: (state) => state.user.avatar,
  // name: (state) => state.user.name,
}
export default getters
