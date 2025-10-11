// Simple database utility for visitor counter
// This is a placeholder for demonstration purposes
// In a real application, you would use a proper database

class SimpleDB {
  constructor() {
    this.data = {};
    this.loadFromFile();
  }

  loadFromFile() {
    try {
      // In a real implementation, this would load from a file or database
      // For now, we'll initialize with default values
      this.data.visitorCount = this.data.visitorCount || Math.floor(Math.random() * (2500 - 2100) + 2100);
    } catch (error) {
      console.error('Error loading data:', error);
      this.data.visitorCount = Math.floor(Math.random() * (2500 - 2100) + 2100);
    }
  }

  saveToFile() {
    try {
      // In a real implementation, this would save to a file or database
      // For now, we'll just keep it in memory
      return true;
    } catch (error) {
      console.error('Error saving data:', error);
      return false;
    }
  }

  get(key) {
    return this.data[key];
  }

  set(key, value) {
    this.data[key] = value;
    return this.saveToFile();
  }

  increment(key) {
    const currentValue = this.data[key] || 0;
    this.data[key] = currentValue + 1;
    this.saveToFile();
    return this.data[key];
  }
}

// Export a singleton instance
export const db = new SimpleDB();