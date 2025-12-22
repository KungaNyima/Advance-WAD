const loadBtn = document.getElementById('loadBtn');
const postsContainer = document.getElementById('postsContainer');
const loadingDiv = document.getElementById('loading');

const API_URL = 'https://jsonplaceholder.typicode.com/posts';

async function fetchPosts() {
    try {
        loadingDiv.classList.add('show');
        postsContainer.innerHTML = '';
        loadBtn.disabled = true;

        const response = await axios.get(API_URL);

        displayPosts(response.data);

    } catch (error) {
        if (error.response) {
            displayError(`Server Error: ${error.response.status} - ${error.response.statusText}`);
        } else if (error.request) {
            displayError('Network Error: No response received from server');
        } else {
            displayError(`Error: ${error.message}`);
        }
    } finally {
        loadingDiv.classList.remove('show');
        loadBtn.disabled = false;
    }
}

function displayPosts(posts) {
    postsContainer.innerHTML = '';

    posts.forEach(post => {
        const postCard = document.createElement('div');
        postCard.className = 'post-card';

        postCard.innerHTML = `
            <span class="post-id">Post #${post.id}</span>
            <h2 class="post-title">${post.title}</h2>
            <p class="post-body">${post.body}</p>
        `;

        postsContainer.appendChild(postCard);
    });
}

function displayError(message) {
    postsContainer.innerHTML = `
        <div class="error">
            <strong>Error:</strong> Failed to load posts. ${message}
        </div>
    `;
}

loadBtn.addEventListener('click', fetchPosts);
