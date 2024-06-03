document.addEventListener("DOMContentLoaded", () => {
    const username = 'Benjamin-Fever';
    const repoContainer = document.getElementById('repos');
    const token = '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';

    // Function to fetch repositories
    const fetchRepos = async () => {
        const response = await fetch(`https://api.github.com/users/${username}/repos`, {
            headers: { 'Authorization': `token ${token}` }
        });
        const repos = await response.json();

        repos.sort((a,b) => new Date(b.created_at) - new Date(a.created_at));

        repos.forEach(async repo => {
            fetchThumnail(repo);
        });
    };

    const fetchThumnail = async (repo) => {
        response = await fetch(`https://api.github.com/repos/${username}/${repo.name}/contents/.github/portfolio-card.json`, {
            headers: { 
                'Accept': 'application/vnd.github.v3.raw',
                'Authorization': `token ${token}`
            }
        });
        const thumbnail = await response.json();
        if (response.ok)
            
            repoContainer.innerHTML += `
            <div class="col-md-4">
                <div class="work-box">
                    <a href="https://github.com/Benjamin-Fever/${repo.name}" target="_blank" data-gallery="portfolioGallery" class="portfolio-lightbox">
                    <div class="work-img" >
                        <img src="${thumbnail["image source"]}" alt="" class="img-fluid" style="max-height: 200px;">
                    </div>
                    </a>
                    <div class="work-content">
                    <div class="row">
                        <div class="col-sm-8">
                        <h2 class="w-title">${repo.name}</h2>
                        <div class="w-more">
                            <span class="w-ctegory">${thumbnail["category"]}</span> - <span class="w-date">${new Date(repo.created_at).toLocaleDateString('en-US')}</span>
                        </div>
                        </div>
                        <div class="col-sm-4">
                        <div class="w-like">
                            <a href="https://github.com/Benjamin-Fever/${repo.name}" target="_blank"> <span class="bi bi-code-slash"></span></a>
                        </div>
                        </div>
                    </div>
                    <div class"row">
                        <div class="col-sm-12">${thumbnail["description"]}</div>
                    </div>
                    </div>
                </div>
                </div>        
`;
    
    };
    
    fetchRepos();
});

/*
    {
  "image source": "https://user-images.githubusercontent.com/43081670/220796756-10ef4d46-ab09-41e7-825e-61c7a655e386.gif",
  "description": "This is a Sokoban clone I developed using pygame during highschool. It taught me the basics of classes, OOP and inheritence",
  "category": "Game Development"
}*/
