# Enabling custom slugs

[Go here](https://web.archive.org/web/20150919141653/http://www.farinspace.com/wordpress-nginx-rewrite-rules/)

Importantly, adding this to the site server-section config:

    if (!-e $request_filename)
    {
        rewrite ^(.+)$ /index.php?q=$1 last;
    }

# On the wordpress side:

Configure the Permalink settings to:
Custom Structure: `/%postname%/`


