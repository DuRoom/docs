# Translating DuRoom

:::info

This documentation covers the technical structure of language packs. Read [this article](../contributing-docs-translations.md) for information on how to start / contribute to a DuRoom language pack.

:::

## Declaring a Language Pack

Language packs should be their own extensions, with no other code / logic included.

The [`LanguagePack` extender](https://github.com/DuRoom/framework/blob/main/framework/core/src/Extend/LanguagePack.php) allows you to define that your extension is a language pack.

This extender has no setters. All you have to do is instantiate it, make sure you language pack is in the `locale` folder, and you're done!

Here's a quick example from [DuRoom English](https://github.com/DuRoom/lang-english/blob/master/extend.php):

```php
<?php

return new DuRoom\Extend\LanguagePack();
```

The `composer.json` will also need some special values. It now needs a `duroom-locale` info object in `extra`, like `duroom-extension`. You can simply insert the following underneath the value of `duroom-extension` while remaining inside `extra`:

```json
"duroom-locale": {
  "code": "en",
  "title": "English"
}
```

And that's it! It should work out of the box.

## Translation Files

Translation files should go in the `locale` directory. Each file should be named `EXTENSION_ID.yml`, where EXTENSION_ID is the [extension's ID](admin.md#telling-the-api-about-your-extension).

The contents of the file should correspond to the extension's english translations, with the values translated in your language. See our [internationalization](i18n.md) docs for more information. 

## DayJS Translations

DuRoom use [the DayJS library](https://day.js.org/) to format and internationalize dates.

You can create a `config.js` file in the `locale` directory to configure date internationalization for your language.

The file should look like:

```js
dayjs.locale('xx');
```

where the `xx` can be copied from https://unpkg.com/browse/dayjs@1.10.4/locale/ for your language.

Alternatively, instead of using a compiled locale object, you can directly create one [as per the dayjs documentation](https://day.js.org/docs/en/customization/customization). This is slightly less efficient though.
