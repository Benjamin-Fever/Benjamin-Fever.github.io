document.addEventListener("DOMContentLoaded", () => {
    const username = 'Benjamin-Fever';
    const repoContainer = document.getElementById('repos');
    const token = 'YOUR_GITHUB_TOKEN'; // Placeholder for the token

    // Function to fetch repositories
    const fetchRepos = async () => {
        try {
            const response = await fetch(`https://api.github.com/users/${username}/repos`, {
                headers: { 'Authorization': `token ${token}` }
            });
            const repos = await response.json();
            repos.forEach(repo => {
                fetchReadme(repo);
            });
        } catch (error) {
            console.error('Error fetching repositories:', error);
        }
    };

    const fetchReadme = async (repo) => {
        try {
            const response = await fetch(`https://api.github.com/repos/${username}/${repo.name}/readme`, {
                headers: { 
                    'Accept': 'application/vnd.github.v3.raw',
                    'Authorization': `token ${token}`
                }
            });
            const readme = await response.text();
            console.log(readme);
        } catch (error) {
            console.error(`Error fetching README for ${repo.name}:`, error);
        }
    };

    fetchRepos();
});
