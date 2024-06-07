document.addEventListener("DOMContentLoaded", async () => {
    const repoContainer = document.getElementById('repos');
    var response = await fetch("https://vw6zd6gcme.execute-api.us-east-1.amazonaws.com/prod/data");
    var data = await response.json();
    if (response.ok) {
        data.forEach(async repo => {
            repoContainer.innerHTML += `
            <div class="col-md-4">
                <div class="work-box">
                    <a href="https://github.com/Benjamin-Fever/${repo.name}" target="_blank" data-gallery="portfolioGallery" class="portfolio-lightbox">
                    <div class="work-img">
                        <img src="${repo.image}" alt="" class="img-fluid" style="max-height: 200px;">
                    </div>
                    </a>
                    <div class="work-content">
                        <div class="row">
                            <div class="col-sm-8">
                                <h2 class="w-title">${repo.name}</h2>
                                <div class="w-more">
                                    <span class="w-ctegory">${repo.category}</span> - <span class="w-date">${repo.created_at}</span>
                                </div>
                            </div>
                            <div class="col-sm-4">
                                <div class="w-like">
                                    <div class="row">
                                        <a href="https://github.com/Benjamin-Fever/${repo.name}" target="_blank"> <span class="bi bi-code-slash"></span></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-sm-10">
                                ${repo.description}
                            </div>
                        </div>
                    </div>
                </div>
            </div>`;
        });
    }
});
