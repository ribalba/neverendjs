# NeverEndJs
A little web server that just serves /dev/urandom for ever.

This is just a little experiment with a never ending download. You could run this on some server and see how much download speed you actually can achieve.

There is the issue of how fast /dev/random will give you data. This really depends on the OS and computer you are running on.

If someone is writing a web crawler you really want him to try and crawl this :p

# WARNING

Do not run this on a server that you use for encryption or anything that consumes random numbers as these might be exposed through urandom
