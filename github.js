class Github {
  constructor() {
    this.repos_count = 5;
    this.repos_sort = "created: asc";
  }

  async getUser(user) {
    const profileResponce = await fetch(`https://api.github.com/users/${user}`);
    const repoResponce = await fetch(
      `https://api.github.com/users/${user}/repos?per_page=${
        this.repos_count
      }&sort=${this.repos_sort}`
    );

    const repos = await repoResponce.json();
    const profile = await profileResponce.json();

    return {
      profile,
      repos
    };
  }
}
