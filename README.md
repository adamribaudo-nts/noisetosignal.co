# noisetosignal.co

A modern static site built with **Eleventy + CSS** stack.

## 🔧 Isolated Environment Setup

This project uses **nvm** to create an isolated Node.js environment, similar to Python's virtual environments.

### Prerequisites

- **curl** (for installing nvm)
- **bash** shell

### Quick Start

1. **Clone and setup the environment:**
   ```bash
   git clone <your-repo-url>
   cd noisetosignal.co
   source ./setup-env.sh
   ```

2. **Start development:**
   ```bash
   npm run dev
   ```

3. **Build for production:**
   ```bash
   npm run build
   ```

## 📁 Project Structure

```
noisetosignal.co/
├── .eleventy.js          # Eleventy configuration
├── .nvmrc                # Node.js version specification
├── package.json          # Dependencies and scripts
├── setup-env.sh          # Environment setup script
├── src/                  # Source files
│   ├── _includes/
│   │   └── base.njk      # Base HTML template
│   ├── css/
│   │   └── styles.css    # Main CSS file with utilities and custom styles
│   ├── img/              # Images
│   └── index.md          # Homepage content
├── _site/                # Built website (don't commit)
└── .github/
    └── workflows/
        └── deploy.yml    # GitHub Actions deployment
```

## 🚀 Available Commands

| Command | Description |
|---------|-------------|
| \`npm run env:setup\` | Setup isolated environment |
| \`npm run dev\` | Start development server |
| \`npm run build\` | Build for production |
| \`npm run build:11ty\` | Build HTML only |
| \`npm run build:css\` | Copy CSS file |

## 🔄 Environment Management

### Using the Isolated Environment

**First time setup:**
```bash
source ./setup-env.sh
```

**Subsequent uses:**
```bash
nvm use          # Activates the project's Node.js version
npm install      # Ensures dependencies are installed
```

**Check current environment:**
```bash
node --version   # Should match .nvmrc
npm --version
nvm current
```

### Working with Different Projects

Each project can have its own Node.js version:

```bash
# Project A (Node.js 18)
cd project-a
nvm use  # Uses Node.js 18

# Project B (Node.js 20)  
cd project-b
nvm use  # Uses Node.js 20
```

## 🌐 Deployment

This project is configured for automatic deployment to **GitHub Pages** using **GitHub Actions**.

### Setup GitHub Pages

1. Go to your repository **Settings** → **Pages**
2. Set **Source** to "GitHub Actions"
3. Push to main branch to trigger deployment

### Manual Deployment

```bash
npm run build
# Upload _site/ contents to your hosting provider
```

## 🛠️ Tech Stack

- **Static Site Generator:** [Eleventy (11ty)](https://www.11ty.dev/)
- **CSS:** Custom CSS with utility classes and legacy styles
- **Package Manager:** npm
- **Version Manager:** nvm
- **CI/CD:** GitHub Actions
- **Hosting:** GitHub Pages

## 📝 Development Notes

### Adding New Pages

Create `.md` or `.njk` files in the `src/` directory:

```markdown
---
title: About
layout: base.njk
---

# About Page

Content goes here...
```

### Custom Styles

Add custom CSS to `src/css/styles.css`. The file includes utility classes similar to Tailwind and custom legacy styles:

```css
/* Add your custom styles */
.custom-button {
    display: inline-block;
    padding: 1rem 2rem;
    background-color: rgb(31 41 55);
    color: white;
    border-radius: 0.375rem;
}
```

## 🤝 Contributing

1. Setup the environment: \`source ./setup-env.sh\`
2. Make your changes
3. Test locally: \`npm run dev\`
4. Build: \`npm run build\`
5. Commit and push

# Contact Form Service
This repository contains the code for a serverless contact form service powered by Cloudflare Workers. It handles form submissions from a website, stores the data in a Cloudflare KV store, and sends an email notification via the Mailgun API.

## Features
Serverless Architecture: The entire backend runs on a Cloudflare Worker, eliminating the need for a dedicated server.

Secure Data Storage: Form submissions are securely stored in Cloudflare's Key-Value (KV) store.

Email Notifications: Sends an email to a specified recipient via Mailgun whenever a new form submission is received.

CORS Enabled: Configured to accept submissions from a specific domain and a localhost development environment.

## How It Works
A user submits a form on your website.

The form's action attribute points to the Cloudflare Worker URL.

The Cloudflare Worker receives the POST request.

The Worker parses the form data, extracts the email and message, and stores them as a JSON object in a Cloudflare KV namespace.

Immediately after storing the data, the Worker makes a fetch request to the Mailgun API to send an email notification to the designated email address.

The Worker responds to the form submission with a success or error status.