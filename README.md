
## Key Features
Stumpless offers a robust set of features to make logging in C faster and
easier:
 * structured and unstructured logging to suit your needs
 * easy logging to [lots of things](#what-can-it-log-to) like Splunk, rsyslog,
   journald, the Windows Event Log, and more!
 * interoperable with common log daemons and libraries
 * cross-platform builds on Linux, Windows, Mac, Cygwin, and more
 * completely thread safe
 * can be adjusted or removed during compilation for zero runtime impact
 * localized for multiple languages :brazil: :bulgaria: :cn: :czech_republic:
   :de: :es: :fr: :greece: :india: :it: :poland: :slovakia: :sweden: :us:
   ([add yours!](https://github.com/goatshriek/stumpless/blob/latest/docs/localization.md))
 * easy-access
   [documentation](https://goatshriek.github.io/stumpless/docs/c/latest/index.html),
   [examples](https://github.com/goatshriek/stumpless/tree/latest/docs/examples),
   and [support](https://gitter.im/stumpless/community).


### What can it log to?
A primary goal of this library is to provide a consistent logging interface to
a wide variety of log targets. This means you can focus on defining events
and where you want them to go, without finding other SDKs or adding daemons
and plugins to get them where you want. Stumpless can write logs to:
 * Simple character buffers
 * Files and Streams
 * Unix sockets (such as a local syslog daemon)
 * Network Servers (IPv4 or IPv6, TCP or UDP)
 * Systemd Journald Service
 * Windows Event Log
 * Custom functions, for whatever else you may need!

Don't see what you need? Create an
[issue](https://github.com/goatshriek/stumpless/issues/new?template=feature_request.md)
with your request and we'll work it into our
[roadmap](https://github.com/goatshriek/stumpless/blob/latest/docs/roadmap.md)!


## Quick Build and Install
npm install
npm run start


## Basic Usage
The following code snippets show two example endpoints from an api that returns customers and documents

## Documentation
localhost:5000/api/docs - Retorna uma lista de documentos
Authentication - None
Rate Limit - 100 per hour
GET localhost:5000/api/docs

localhost:5000/api/clients - Retorna uma lista de clients
Authentication - jwt
Rate Limit - 200 per hour
GET localhost:5000/api/clients

JWT key in .env

