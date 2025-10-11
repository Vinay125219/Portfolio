import { promises as fs } from 'fs';
import path from 'path';

export default async function handler(req, res) {
  const counterFilePath = path.join(process.cwd(), 'data', 'visitor-count.json');
  
  try {
    // Ensure data directory exists
    const dataDir = path.join(process.cwd(), 'data');
    try {
      await fs.access(dataDir);
    } catch {
      await fs.mkdir(dataDir, { recursive: true });
    }
    
    // Initialize or read counter file
    let count = 1452; // Starting count
    try {
      const data = await fs.readFile(counterFilePath, 'utf8');
      const counterData = JSON.parse(data);
      count = counterData.count;
    } catch (error) {
      // If file doesn't exist or is invalid, initialize with starting count
      await fs.writeFile(counterFilePath, JSON.stringify({ count: 1452, lastUpdated: new Date().toISOString() }));
    }
    
    // Increment count for this visit
    count++;
    
    // Save updated count
    await fs.writeFile(counterFilePath, JSON.stringify({ 
      count, 
      lastUpdated: new Date().toISOString() 
    }));
    
    // Return the count
    res.status(200).json({ count });
  } catch (error) {
    console.error('Error handling visitor count:', error);
    res.status(500).json({ error: 'Failed to update visitor count' });
  }
}