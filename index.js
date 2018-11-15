//http://getstatuscode.com/
//https://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html
//https://developer.mozilla.org/nl/docs/Web/HTTP/Status
//https://en.wikipedia.org/wiki/List_of_HTTP_status_codes
exports.htmlResponseCodes = function(responseCode = 0) {
  switch (responseCode) {
    //100
    //Done all 100
    case 100:
      return "Continue";
    case 101:
      return "Switching protocols";
    case 102:
      return "The server is processing the WebDav request but there is no respone avileble";
    case 103:
      return "HTML header send before the finale HTTP message";

    //200
    case 200:
      return "OK";
    case 201:
      return "Created";
    case 202:
      return "Accepted";
    case 203:
      return "No authoritative information";
    case 204:
      return "No Content";
    case 205:
      return "Rest content";
    case 206:
      return "Partial content";
    case 207:
      return "Multi status";

    //300
    case 300:
      return "Multiple Choices";
    case 301:
      return "Moved permantly";
    case 302:
      return "Found";
    case 303:
      return "See other";
    case 304:
      return "Not modified";
    case 305:
      return "Use proxy";
    case 306:
      return "switch proxy";
    case 307:
      return "Temporary redirect";
    case 308:
      return "Permanent Redirect";
    //400
    case 400:
      return "Bad request";
    case 401:
      return "Unauthorized";
    case 402:
      return "Payment Required";
    case 403:
      return "Forbidden";
    case 404:
      return "Not found";
    case 405:
      return "Method now Allowed";
    case 406:
      return "Not Acceptable";
    case 407:
      return "Proxy authentication required";
    case 408:
      return "Request timeout";
    case 409:
      return "Conflict";
    case 410:
      return "Gone";
    case 411:
      return "Length required";
    case 412:
      return "Precondition failed";
    case 413:
      return "Payload too large";
    case 414:
      return "URI too long";
    case 415:
      return "Unsupported media type";
    case 416:
      return "Range not satisfiable";
    case 417:
      return "Expectation failed";
    case 418:
      return "I'm a teapot";
    case 422:
      return "Unprocessable Entity";
    case 424:
      return "Failed dependency";
    case 425:
      return "Too early";
    case 426:
      return "Upgrade required";
    case 428:
      return "Precondition required";
    case 429:
      return "Too many requests";
    case 431:
      return "Request header fields too large";
    case 450:
      return "Blocked by windows parental controls";
    case 451:
      return "Unavailable for legal reasons";
    case 494:
      return "Request header too large";
    case 495:
      return "SSL certificate error";
    case 496:
      return "No certificate";
    case 497:
      return "Nginx";
    case 498:
      return "Token expired or invalid";
    case 499:
      return "Client closed Request";

    // 500
    case 500:
      return "Internal server error";
    case 501:
      return "Not imlemented";
    case 502:
      return "Bad gateway";
    case 503:
      return "Service unavilable";
    case 504:
      return "Gateway Timeout";
    case 505:
      return "Http version not supported";
    case 509:
      return "Bandwidth limit eceeded";
    case 510:
      return "Not Extended";
    case 511:
      return "Network authentication required";
    default:
      return "Unknown error";
  }
};
