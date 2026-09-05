# Syntax Station

Syntax Station is a stylish, responsive membership registration page for an exclusive automotive community. It combines a cinematic car background with a dark editorial interface, lime-green accents, and a focused member access form.

This is a front-end demonstration built with plain HTML, CSS, and JavaScript. The registration form validates user input in the browser and displays a success message, but it does not send data to a server or create real accounts.

## Features

- Responsive desktop, tablet, and mobile layout
- Automotive-themed visual design with custom fonts and background imagery
- Accessible form labels and live validation feedback
- Email format validation
- Minimum eight-character password validation
- Password confirmation matching
- Show and hide password control
- Responsive mobile navigation menu
- Optional event update checkbox
- Animated page entrance and interactive hover states

## Tech Stack

- HTML5
- CSS3
- Vanilla JavaScript
- Font Awesome icons
- Google Fonts: DM Sans and Space Grotesk

## Project Structure

```text
Login-page/
├── index.html                 # Page structure and membership form
├── style.css                  # Layout, theme, responsive styles, and animations
├── Script.js                  # Navigation, password toggle, and form validation
├── background-image.jpg       # Desktop background image
├── Lambo-mobile-background.png # Mobile background image
├── logo.png                   # Browser favicon
└── README.md                  # Project documentation
```

## Run Locally

No build tools or dependencies are required.

1. Download or clone this repository.
2. Open `index.html` directly in a browser.

For the best development experience, open the folder in VS Code and use a local server extension such as Live Server.

## Form Behavior

The form accepts a valid email address, a password of at least eight characters, and a matching confirmation password. When all checks pass, it displays a welcome message and resets the form.

## Future Improvements

- Connect registration to a real authentication API
- Add a real sign-in flow
- Replace placeholder social links with live profiles
- Add server-side validation and secure password handling

## License

This project is intended for learning and portfolio use.
