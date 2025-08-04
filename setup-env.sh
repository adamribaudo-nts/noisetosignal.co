#!/bin/bash

# Node.js Environment Setup Script (similar to Python's venv activation)

echo "🔧 Setting up Node.js isolated environment..."

# Check if nvm is installed
if ! command -v nvm &> /dev/null; then
    echo "❌ nvm is not installed. Installing nvm..."
    curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.4/install.sh | bash
    source ~/.bashrc
fi

# Use the Node.js version specified in .nvmrc
if [ -f ".nvmrc" ]; then
    echo "📋 Found .nvmrc file"
    nvm use
else
    echo "⚠️  No .nvmrc file found, using default Node.js version"
fi

# Install dependencies
echo "📦 Installing dependencies..."
npm install

echo "✅ Environment setup complete!"
echo ""
echo "🚀 Available commands:"
echo "  npm run dev      - Start development server"
echo "  npm run build    - Build for production"
echo "  npm run build:11ty - Build HTML only"
echo "  npm run build:css  - Build CSS only"
echo ""
echo "💡 To activate this environment in the future, run:"
echo "   source ./setup-env.sh"
echo "   or"
echo "   nvm use && npm install"
