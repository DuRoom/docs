# Mail Drivers

In addition to the [default drivers in core](../mail.md), DuRoom allows new mail drivers to be added through extenders. To create your own mail driver, you'll need to create a class implementing `\DuRoom\Mail\DriverInterface`. DuRoom actually takes care of the frontend for providing email settings: just declare which settings you need, and any default values, in `availableSettings`.

For example:

```php
use DuRoom\Mail\DriverInterface;
use Illuminate\Contracts\Validation\Factory;
use Illuminate\Mail\Transport\MailgunTransport;
use Illuminate\Support\MessageBag;
use Swift_Transport;

class MailgunDriver implements DriverInterface
{
    public function availableSettings(): array
    {
        return [
            'setting_one' => '',
            'setting_two' => 'defaultValue',
            'dropdown_setting' => [
                'option_one_val' => 'Option One Display',
                'option_two_val' => 'Option Two Display',
            ],
        ];
    }

    public function validate(SettingsRepositoryInterface $settings, Factory $validator): MessageBag
    {
        $validator->make($settings->all(), [
            'setting_one' => 'required',
            'setting_two' => 'nullable|integer',
        ])->errors();
    }

    public function canSend(): bool
    {
        return true;
    }

    public function buildTransport(SettingsRepositoryInterface $settings): Swift_Transport
    {
        // Return a mail transport that implements Swift Transport
    }
}
```

To register mail drivers, use the `DuRoom\Extend\Mail` extender in your extension's `extend.php` file:

```php
use DuRoom\Extend;
use YourNamespace\Mail\CustomDriver;

return [
  // Other extenders
  (new Extend\Mail())->driver(CustomDriver::class)
  // Other extenders
];
```
