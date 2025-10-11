# Vinay Sagar's Portfolio

This is the personal portfolio website of M Vinay Sagar, showcasing skills, projects, and experience as a Software Developer & UI/UX Designer.

## Visitor Counter Implementation

The portfolio features a real visitor counter that tracks unique visits using serverless functions on Vercel.

### How It Works

1. **Serverless API Endpoint**: The visitor count is managed through a Vercel serverless function located at `/api/visitor-count.js`
2. **Data Storage**: Visitor count is stored in a JSON file at `data/visitor-count.json`
3. **Starting Count**: The counter starts at 1452 as requested
4. **Increment Logic**: Each visit to the website increments the counter by 1
5. **Frontend Integration**: JavaScript in the browser fetches the current count from the API

### Deployment on Vercel

This portfolio is designed for easy deployment on Vercel:

1. Connect your GitHub repository to Vercel
2. Vercel will automatically detect the project settings from `vercel.json`
3. The serverless function will be deployed automatically
4. The data directory will persist counter data between function invocations

### File Structure

```
/
├── api/
│   └── visitor-count.js    # Serverless function for visitor counting
├── assets/                 # CSS, JavaScript, and image files
├── data/
│   └── visitor-count.json  # Persistent storage for visitor count
├── index.html              # Main portfolio page
└── vercel.json             # Vercel deployment configuration
```

### How to Deploy

1. Push this code to a GitHub repository
2. Sign up/log in to Vercel
3. Create a new project and import your GitHub repository
4. Vercel will automatically detect the framework settings
5. Deploy the project

The visitor counter will start at 1452 and increment with each visit to your portfolio.
