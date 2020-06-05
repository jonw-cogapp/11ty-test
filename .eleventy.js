module.exports = (config) => {
  
  config.addPassthroughCopy('admin/config.yml');
  
  return {
    passthroughFileCopy: true
  }
}