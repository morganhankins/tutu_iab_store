@app
green-rb1

@http
get /
get /api/cats
get /api/cats/:catID
post /api/cats
patch /api/cats/:catID
delete /api/cats/:catID
post /iab/set
get /iab/has

@tables
data
  scopeID *String
  dataID **String
  ttl TTL
