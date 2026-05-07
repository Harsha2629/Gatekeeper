export function isValidDomain(domain) {
  const regex = /^(?!:\/\/)([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}$/;
  return regex.test(domain);
}

export function isValidIP(ip) {
  const regex = /^(\d{1,3}\.){3}\d{1,3}$/;
  return regex.test(ip);
}
