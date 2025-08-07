const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args));

const allowedStacks = ['backend', 'frontend'];
const allowedLevels = ['debug', 'info', 'warn', 'error', 'fatal'];
const allowedPackages = {
  backend: ['cache', 'controller', 'cron_job', 'domain', 'handler', 'repository', 'route', 'service'],
  frontend: ['api', 'component', 'hook', 'page', 'state', 'style'],
  shared: ['auth', 'config', 'middleware', 'utils']
};

const AUTH_TOKEN = "Bearer YOUR_VALID_TOKEN_HERE"; // ✅ Add your real token here

async function Log(stack, level, pkg, message) {
  if (!allowedStacks.includes(stack)) {
    console.error(`❌ Invalid stack: ${stack}`);
    return;
  }

  if (!allowedLevels.includes(level)) {
    console.error(`❌ Invalid level: ${level}`);
    return;
  }

  const validPackages = [...allowedPackages.shared, ...allowedPackages[stack]];
  if (!validPackages.includes(pkg)) {
    console.error(`❌ Invalid package for stack '${stack}': ${pkg}`);
    return;
  }

  const payload = {
    stack,
    level,
    package: pkg,
    message,
    timestamp: new Date().toISOString()
  };

  try {
    const response = await fetch('http://20.244.56.144/evaluation-service/logs', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': AUTH_TOKEN
      },
      body: JSON.stringify(payload)
    });

    const result = await response.json();

    if (!response.ok) {
      console.error(`❌ Log failed with status ${response.status}:`, result);
    } else {
      console.log(`✅ Log success: ${result.logID}`);
    }

  } catch (err) {
    console.error('❌ Error sending log:', err.message);
  }
}

module.exports = Log;
