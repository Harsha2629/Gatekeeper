import dns from "dns/promises";
import axios from "axios";

export async function checkDNS(domain) {
  try {
    await dns.lookup(domain);
    return true;
  } catch {
    return false;
  }
}

export async function checkRedirects(url) {
  try {
    const res = await axios.get(`http://${url}`, {
      maxRedirects: 10,
      timeout: 3000
    });

    return res.request._redirectable._redirectCount;
  } catch {
    return 10;
  }
}
