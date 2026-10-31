var headers = $request.headers;

delete headers['X-RevenueCat-ETag'];
delete headers['x-revenuecat-etag'];

$done({ headers: headers });
