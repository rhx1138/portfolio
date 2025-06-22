  // Dark/Light mode toggle implementation
        const modeToggle = document.getElementById('modeToggle');
        const body = document.body;
        
        // Check if user has a saved preference
        const savedMode = localStorage.getItem('colorMode');
        
        // Apply saved preference if it exists
        if (savedMode === 'light') {
            body.classList.add('light-mode');
            modeToggle.textContent = '🌙';
        }
        
        // Toggle between light and dark mode
        modeToggle.addEventListener('click', function() {
            // Toggle the light-mode class
            body.classList.toggle('light-mode');
            
            // Update the button icon
            if (body.classList.contains('light-mode')) {
                modeToggle.textContent = '🌙'; // Moon icon for light mode (to switch to dark)
                localStorage.setItem('colorMode', 'light');
            } else {
                modeToggle.textContent = '☀️'; // Sun icon for dark mode (to switch to light)
                localStorage.setItem('colorMode', 'dark');
            }
        });