document.addEventListener('alpine:init', () => {
    Alpine.data('demo', () => ({
        posts: [],
        bg: '',

        init() {
            // Alpine looks for this function
            console.log('init');

            // fetch data
            fetch('https://jsonplaceholder.typicode.com/posts?_limit=5')
                .then(response => response.json())
                .then(data => {
                    this.posts = data;
                });

            // set up watcher
            this.$watch('bg', value => {
                document.body.style.backgroundColor = value;
            });
        },

    }))
});