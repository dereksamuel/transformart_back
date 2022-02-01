module.exports = () => {
  if (process.argv.find((arg) => arg === "--dev")) {
    return ".env.dev";
  }
  return ".env";
};