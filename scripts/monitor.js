/*
  System Monitoring Script
  Supports both production and development modes
  (Stable Version with optional experimental AI features)
*/

const ENV = process.env.NODE_ENV || 'production';

const monitorConfig = {
  production: {
    interval: 60000,
    alertThreshold: 80,
    debugMode: false,
    aiEnabled: false // AI disabled in production for stability
  },
  development: {
    interval: 5000,
    alertThreshold: 90,
    debugMode: true,
    verboseLogging: true,
    aiEnabled: true // AI features can be tested in development
  }
};

const config = monitorConfig[ENV];

console.log('=================================');
console.log('DevOps Simulator - Monitor');
console.log(`Environment: ${ENV}`);
console.log(`Debug: ${config.debugMode ? 'ENABLED' : 'DISABLED'}`);
console.log('=================================');

function checkSystemHealth() {
  const timestamp = new Date().toISOString();

  if (config.debugMode) {
    console.log(`\n[${timestamp}] === DETAILED HEALTH CHECK ===`);
  } else {
    console.log(`[${timestamp}] Checking system health...`);
  }

  // Basic Health Metrics
  console.log('✓ CPU usage: Normal');
  console.log('✓ Memory usage: Normal');
  console.log('✓ Disk space: Adequate');

  // Development-only details
  if (config.debugMode) {
    console.log('✓ Hot reload: Active');
    console.log('✓ Debug port: 9229');
  }

  // Optional AI-Enhanced Monitoring (Experimental)
  if (config.aiEnabled) {
    console.log('\n🤖 [Experimental] AI-Enhanced Monitoring Enabled');
    console.log('Loading AI model from ./models/anomaly-detection.h5');
    console.log('Running predictive analysis...');
    
    const prediction = {
      cpu: Math.random() * 100,
      memory: Math.random() * 100,
      confidence: (Math.random() * 30 + 70).toFixed(2)
    };
    
    console.log(`Predicted CPU: ${prediction.cpu.toFixed(2)}% (confidence: ${prediction.confidence}%)`);
    console.log(`Predicted Memory: ${prediction.memory.toFixed(2)}% (confidence: ${prediction.confidence}%)`);
    
    if (prediction.cpu > config.alertThreshold) {
      console.log('⚠️  Predictive Alert: High CPU expected — consider scaling up.');
    }
  }

  console.log('System Status: HEALTHY');
}

console.log(`Monitoring every ${config.interval}ms`);
setInterval(checkSystemHealth, config.interval);
checkSystemHealth();

/*
  Note:
  - Experimental AI features are disabled in production.
  - Enable by setting `aiEnabled: true` in config or using NODE_ENV=development.
  - This ensures backward compatibility with the stable monitoring system.
*/
