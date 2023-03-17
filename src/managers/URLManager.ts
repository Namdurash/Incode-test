export class URLManager {
  public static getNumberFromURL(url: string) {
    const regex = /\/(\d+)\/?$/;
    const formattedURL = url.slice(0, -1);
    const match = formattedURL.match(regex);
    const numberFromURL = match ? parseInt(match[1], 10) : 0;

    return numberFromURL;
  }
}
