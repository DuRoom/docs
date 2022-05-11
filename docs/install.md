# Installation

## Server Requirements

Before you install DuRoom, it's important to check that your server meets the requirements. To run DuRoom, you will need:

* **Apache** (with mod\_rewrite enabled) or **Nginx**
* **PHP 7.3+** with the following extensions: curl, dom, fileinfo, gd, json, mbstring, openssl, pdo\_mysql, tokenizer, zip
* **MySQL 5.6+/8.0.23+** or **MariaDB 10.0.5+**
* **SSH (command-line) access** to run Composer

:::tip Shared Hosting

It's not possible to install DuRoom by downloading a ZIP file and uploading the files to your web server. This is because DuRoom uses a dependency-management system called [Composer](https://getcomposer.org) which needs to run on the command line.

This doesn't necessarily mean you need a VPS. Most decent hosts support SSH access, through which you should be able to install Composer and DuRoom just fine.

:::

## Installing

DuRoom uses [Composer](https://getcomposer.org) to manage its dependencies and extensions. If you're not familiar with it, read [our guide](composer.md) for information on what it is and how to set it up. Afterwards, run this command in an empty location that you want DuRoom to be installed in:

```bash
composer create-project duroom/duroom .
```

While this command is running, you can configure your web server. You will need to make sure your webroot is set to `/path/to/your/forum/public`, and set up [URL Rewriting](#url-rewriting) as per the instructions below.

When everything is ready, navigate to your forum in a web browser and follow the instructions to complete the installation.

## URL Rewriting

### Apache

DuRoom includes a `.htaccess` file in the `public` directory – make sure it has been uploaded correctly. **DuRoom will not function properly if `mod_rewrite` is not enabled or `.htaccess` is not allowed.** Be sure to check with your hosting provider (or your VPS) that these features are enabled. If you're managing your own server, you may need to add the following to your site configuration to enable `.htaccess` files:

```
<Directory "/path/to/duroom/public">
    AllowOverride All
</Directory>
```

This ensures that htaccess overrides are allowed so DuRoom can rewrite URLs properly.

Methods for enabling `mod_rewrite` vary depending on your OS. You can enable it by running `sudo a2enmod rewrite` on Ubuntu. `mod_rewrite` is enabled by default on CentOS. Don't forget to restart Apache after making modifications!

### Nginx

DuRoom includes a `.nginx.conf` file – make sure it has been uploaded correctly. Then, assuming you have a PHP site set up within Nginx, add the following to your server's configuration block:

```nginx
include /path/to/duroom/.nginx.conf;
```

### Caddy

Caddy requires a very simple configuration in order for DuRoom to work properly. Note that you should replace the URL with your own and the path with the path to your own `public` folder. If you are using a different version of PHP, you wil also need to change the `fastcgi` path to point to your correct PHP install socket or URL.

```
www.example.com {
    root * /var/www/duroom/public
    php_fastcgi unix//var/run/php/php7.4-fpm.sock
    header /assets/* {
        +Cache-Control "public, must-revalidate, proxy-revalidate"
        +Cache-Control "max-age=25000"
        Pragma "public"
    }
    file_server
}
```
## Folder Ownership

During installation, DuRoom may request that you make certain directories writable.
Modern operating systems are generally multi-user, meaning that the user you log in as is not the same as the user DuRoom is running as.
The user that DuRoom is running as MUST have read + write access to:

- The root install directory, so DuRoom can edit `config.php`.
- The `storage` subdirectory, so DuRoom can edit logs and store cached data.
- The `assets` subdirectory, so that logos and avatars can be uploaded to the filesystem.

Extensions might require other directories, so you might want to recursively grant write access to the entire DuRoom root install directory.

There are several commands you'll need to run in order to set up file permissions. Please note that if your install doesn't show warnings after executing just some of these, you don't need to run the rest.

First, you'll need to allow write access to the directory. On Linux:

```bash
chmod 775 -R /path/to/directory
```

If that isn't enough, you may need to check that your files are owned by the correct group and user. By default, in most Linux distributions `www-data` is the group and user that both PHP and the web server operate under. You'll need to look into the specifics of your distro and web server setup to make sure. You can change the folder ownership in most Linux operating systems by running:

```bash
chown -R www-data:www-data /path/to/directory
```

With `www-data` changed to something else if a different user/group is used for your web server.

Additionally, you'll need to ensure that your CLI user (the one you're logged into the terminal as) has ownership, so that you can install extensions and manage the DuRoom installation via CLI. To do this, add your current user (`whoami`) to the web server group (usually `www-data`) via `usermod -a -G www-data YOUR_USERNAME`. You will likely need to log out and back in for this change to take effect.

Finally, if that doesn't work, you might need to configure [SELinux](https://www.redhat.com/en/topics/linux/what-is-selinux) to allow the web server to write to the directory. To do so, run:

```bash
chcon -R -t httpd_sys_rw_content_t /path/to/directory
```

To find out more about these commands as well as file permissions and ownership on Linux, read [this tutorial](https://www.thegeekdiary.com/understanding-basic-file-permissions-and-ownership-in-linux/). If you are setting up DuRoom on Windows, you may find the answers to [this Super User question](https://superuser.com/questions/106181/equivalent-of-chmod-to-change-file-permissions-in-windows) useful.

:::caution Environments may vary

Your environment may vary from the documentation provided, please consult your web server configuration or web hosting provider for the proper user and group that PHP and the web server operate under.

:::

:::danger Never use permission 777

You should never set any folder or file to permission level `777`, as this permission level allows anyone to access the content of the folder and file regardless of user or group. 

:::

## Customizing Paths

By default DuRoom's directory structure includes a `public` directory which contains only publicly-accessible files. This is a security best-practice, ensuring that all sensitive source code files are completely inaccessible from the web root.

However, if you wish to host DuRoom in a subdirectory (like `yoursite.com/forum`), or if your host doesn't give you control over your webroot (you're stuck with something like `public_html` or `htdocs`), you can set up DuRoom without the `public` directory.

Simply move all the files inside the `public` directory (including `.htaccess`) into the directory you want to serve DuRoom from. Then edit `.htaccess` and uncomment lines 9-15 in order to protect sensitive resources. For Nginx, uncomment lines 8-11 of `.nginx.conf`.

You will also need to edit the `index.php` file and change the following line:

```php
$site = require './site.php';
```

 Edit the `site.php` and update the paths in the following lines to reflect your new directory structure:

```php
'base' => __DIR__,
'public' => __DIR__,
'storage' => __DIR__.'/storage',
```

Finally, check `config.php` and make sure the `url` value is correct.
