# Updating

To update DuRoom, you'll need to use [Composer](https://getcomposer.org). If you're not familiar with it (although you should be, because you need it to install DuRoom), read [our guide](composer.md) for information on what it is and how to set it up.

If updating across major versions (e.g. <=0.1.0 to 1.x.x, 1.x.x to 2.x.x, ...), make sure to read the appropriate "major version update guide" before running the general upgrade steps.

## General Steps

**Step 1:** Make sure all your extensions have versions compatible with the DuRoom version you're trying to install. This is only needed across major versions (e.g. you probably don't need to check this if upgrading from v1.0.0 to v1.1.0, assuming your extensions follow recommended versioning). You can check this by looking at the extension's [Discuss thread](https://discuss-duroom.js.org/t/extensions), searching for it on [Packagist](http://packagist.org/), or checking databases like [Extiverse](https://extiverse.com). You'll need to remove (not just disable) any incompatible extensions before updating. Please be patient with extension developers!

**Step 2:** Take a look at your `composer.json` file. Unless you have a reason to require specific versions of extensions or libraries, you should set the version string of everything except `duroom/core` to `*` (including `duroom/tags`, `duroom/mentions`, and other bundled extensions). Make sure `duroom/core` is NOT set to `*`. If you're targeting a specific version of DuRoom, set `duroom/core` to that (e.g. `"duroom/core": "v0.1.0-beta.16`). If you just want the most recent version, use `"duroom/core": "^1.0"`.

**Step 3:** If your local install uses [local extenders](extenders.md), make sure they are up to date with changes in DuRoom.

**Step 4:** We recommend disabling third-party extensions in the admin dashboard before updating. This isn't strictly required, but will make debugging easier if you run into issues.

**Step 5:** Make sure your PHP version is supported by the version of DuRoom you are trying to upgrade to, and that you are using Composer 2 (`composer --version)`.

**Step 6:** Finally, to update, run:

```
composer update --prefer-dist --no-plugins --no-dev -a --with-all-dependencies
php duroom migrate
php duroom cache:clear
```

**Step 7:** If applicable, restart your PHP process and opcache.

## Major Version Update Guides

### Updating from Beta (<=0.1.0) to Stable v1 (^1.0.0)

1. Do steps 1-5 above.
2. Change the version strings of all bundled extensions (`duroom/tags`, `duroom/mentions`, `duroom/likes`, etc) in `composer.json` from `^0.1.0` to `*`.
3. Change `duroom/core`'s version string in `composer.json` from `^0.1.0` to `^1.0`.
4. Remove the `"minimum-stability": "beta",` line from your `composer.json`
5. Do steps 6 and 7 above.

## Troubleshooting Issues

There are 2 main places where you might run into errors when updating DuRoom: while running the update command itself, or when accessing the forum after updating.

### Errors While Updating

Here we'll go through several common types of issues while trying to update DuRoom.

---

If the output is short and contains:

```
Nothing to modify in lock file
```

Or does not list `duroom/core` as an updated package, and you are not on the latest duroom version:

- Revisit step 2 above, make sure that all third party extensions have an asterisk for their version string.
- Make sure your `duroom/core` version requirement isn't locked to a specific minor version (e.g. `v0.1.0-beta.16` is locked, `^1.0.0` isn't). If you're trying to update across major versions of DuRoom, follow the related major version update guide above.

---

For other errors, try running `composer why-not duroom/core VERSION_YOU_WANT_TO_UPGRADE_TO`

If the output looks something like this:

```
duroom/duroom                     -               requires          duroom/core (v0.1.0-beta.15)
duroom/moderator-notes            0.4.4           requires          duroom/core (>=0.1.0-beta.15 <0.1.0-beta.16)
duroom/duroom-ext-summaries       0.3.2           requires          duroom/core (>=0.1.0-beta.14 <0.1.0-beta.16)
duroom/core                       v0.1.0-beta.16  requires          dflydev/fig-cookies (^3.0.0)
duroom/duroom                     -               does not require  dflydev/fig-cookies (but v2.0.3 is installed)
duroom/core                       v0.1.0-beta.16  requires          franzl/whoops-middleware (^2.0.0)
duroom/duroom                     -               does not require  franzl/whoops-middleware (but 0.4.1 is installed)
duroom/core                       v0.1.0-beta.16  requires          illuminate/bus (^8.0)
duroom/duroom                     -               does not require  illuminate/bus (but v6.20.19 is installed)
duroom/core                       v0.1.0-beta.16  requires          illuminate/cache (^8.0)
duroom/duroom                     -               does not require  illuminate/cache (but v6.20.19 is installed)
duroom/core                       v0.1.0-beta.16  requires          illuminate/config (^8.0)
duroom/duroom                     -               does not require  illuminate/config (but v6.20.19 is installed)
duroom/core                       v0.1.0-beta.16  requires          illuminate/container (^8.0)
duroom/duroom                     -               does not require  illuminate/container (but v6.20.19 is installed)
duroom/core                       v0.1.0-beta.16  requires          illuminate/contracts (^8.0)
duroom/duroom                     -               does not require  illuminate/contracts (but v6.20.19 is installed)
duroom/core                       v0.1.0-beta.16  requires          illuminate/database (^8.0)
duroom/duroom                     -               does not require  illuminate/database (but v6.20.19 is installed)
duroom/core                       v0.1.0-beta.16  requires          illuminate/events (^8.0)
duroom/duroom                     -               does not require  illuminate/events (but v6.20.19 is installed)
... (this'll go on for a bit)
```

It is very likely that some of your extensions have not yet been updated.

- Revisit step 1 again, make sure all your extensions have versions compatible with the core version you want to upgrade to. Remove any that don't.
- Make sure you're running `composer update` with all the flags specified in the update step.

If none of this fixes your issue, feel free to reach out on our [Support forum](https://discuss-duroom.js.org/t/support). Make sure to include the output of `php duroom info` and `composer why-not duroom/core VERSION_YOU_WANT_TO_UPGRADE_TO`.

### Errors After Updating

If you are unable to access your forum after updating, follow our [troubleshooting instructions](troubleshoot.md).
