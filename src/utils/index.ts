export function isValidUrl(url:string) {
  try {
    new URL(url);
    return true;
  } catch (error) {
    return false;
  }  
}

export function getHostUrl() {
  try {
    return window.location.host;
  } catch (error) {
    return false;
  }  
}