<template>
  <div class="hello">
    <h3>Welcome to Github Battle</h3>
    <div class="card mx-auto my-3" style="width: 18rem;">
      <div class="input-group">
        <input v-model="github_username" type="text" class="form-control" placeholder=" Insert the username here" aria-label="Username" aria-describedby="button-addon2">
        <div class="input-group-append">
          <button class="btn btn-outline-secondary" @click="catch_data" type="button" id="button-addon2">Go</button>
        </div>
      </div>
      <img :src="avatar" class="card-img-top img-thumbnail mx-auto m-2">
      <ul class="list-group list-group-flush">
        <li class="list-group-item">Username: {{ username }}</li>
        <li class="list-group-item">Public Repositories: {{ repositories }}</li>
        <li class="list-group-item">Number of Followers: {{ followers }}</li>
        <li class="list-group-item">Public Gists: {{ gists }}</li>
        <li class="list-group-item h6">Total Score: {{ score }}</li>
      </ul>
    </div>
    <h5>Followers</h5>
    <img v-for="(follower, i) in followers_object" :key="i" :src="follower.avatar_url" class="img-thumbnail mx-2 mb-2">
  </div>
</template>

<script>
export default {
  name: 'BattleGithub',
  data() {
    return {
      username: '',
      repositories: 0,
      followers: 0,
      gists: 0,
      score: 0,
      followers_object: [],
      github_username: ''
    };
  },
  methods: {
    catch_data(ev) {
      ev.preventDefault;
      this.axios.get(`https://api.github.com/users/${this.github_username}`)
    .then((datos) => {
      const player = datos.data;
      this.username = player.login;
      this.repositories = player.public_repos;
      this.followers = player.followers;
      this.gists = player.public_gists;
      this.avatar = player.avatar_url;
      this.score = this.repositories + this.followers + this.gists;
    })
    .catch((error) => {
      alert(error);
    });
    this.axios.get(`https://api.github.com/users/${this.github_username}/followers`)
    .then((datos) => {
      const followers = datos.data;
      this.followers_object = followers;
    })
    .catch((error) => {
      alert(error);
    });
    }
  }
}
</script>

<style scoped>
h3 {
  margin: 20px 0 0;
}
.card-img-top.img-thumbnail{
  height: 160px;
  width: 160px;
}
.img-thumbnail{
  height: 80px;
  width: 80px;
}
</style>
