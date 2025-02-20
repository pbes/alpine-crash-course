document.addEventListener('alpine:init', () => {
    Alpine.data('signupForm', () => ({
        username: '',
        password: '',
        passwordConfirm: '',
        belt: '',
        bio: '',
        newsletter: true,

        beltColors: [
            { value: 'black', label: 'Black' },
            { value: 'white', label: 'White' },
            { value: 'red', label: 'Red' },
            { value: 'orange', label: 'Orange' },
            { value: 'brown', label: 'Brown' }
        ],

        showPassword: false,
        errors: {},
        success: false,

        validateForm() {
            this.errors = {};

            if (!this.username) {
                this.errors.username = 'Username is required';
            }

            if (this.username.length < 3) {
                this.errors.username = 'Username must be at least 3 characters';
            }

            if (!this.password) {
                this.errors.password = 'Password is required';
            }

            if (this.password.length < 6) {
                this.errors.password = 'Password must be at least 6 characters';
            }

            if (this.password !== this.passwordConfirm) {
                this.errors.passwordConfirm = 'Passwords do not match';
            }

            if (!this.belt) {
                this.errors.belt = 'Belt is required';
            }

            if (!this.bio) {
                this.errors.bio = 'Bio is required';
            }

            if (this.bio.length < 10) {
                this.errors.bio = 'Bio must be at least 10 characters';
            }

            if (Object.keys(this.errors).length) {
                return false;
            }

            return true;
        },

        submitForm($event) {
            if (!this.validateForm()) {
                console.log(this.errors);
                return;
            }

            console.log({
                username: this.username,
                password: this.password,
                passwordConfirm: this.passwordConfirm,
                belt: this.belt,
                bio: this.bio,
                newsletter: this.newsletter
            });

            $event.target.reset();
            this.success = true;
        }
    }));
});