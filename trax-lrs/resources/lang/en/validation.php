<?php

return [

    /*
    |--------------------------------------------------------------------------
    | Validation Language Lines
    |--------------------------------------------------------------------------
    |
    | The following language lines contain the default error messages used by
    | the validator class. Some of these rules have multiple versions such
    | as the size rules. Feel free to tweak each of these messages here.
    |
    */

    'accepted'             => 'This value must be accepted.',
    'active_url'           => 'This is not a valid URL.',
    'after'                => 'This must be a date after :date.',
    'after_or_equal'       => 'This must be a date after or equal to :date.',
    'alpha'                => 'This field may only contain letters.',
    'alpha_dash'           => 'This field may only contain letters, numbers, dashes and underscores.',
    'alpha_num'            => 'This field may only contain letters and numbers.',
    'array'                => 'This must be an array.',
    'before'               => 'This must be a date before :date.',
    'before_or_equal'      => 'This must be a date before or equal to :date.',
    'between'              => [
        'numeric' => 'This value must be between :min and :max.',
        'file'    => 'This value must be between :min and :max kilobytes.',
        'string'  => 'This value must be between :min and :max characters.',
        'array'   => 'This value must have between :min and :max items.',
    ],
    'boolean'              => 'This must be true or false.',
    'confirmed'            => 'The confirmation does not match.',
    'date'                 => 'This is not a valid date.',
    'date_format'          => 'This does not match the format :format.',
    'different'            => 'This value and :other must be different.',
    'digits'               => 'This value must be :digits digits.',
    'digits_between'       => 'This value must be between :min and :max digits.',
    'dimensions'           => 'Invalid image dimensions.',
    'distinct'             => 'This field has a duplicate value.',
    'email'                => 'This must be a valid email address.',
    'exists'               => 'The selected value is invalid.',
    'file'                 => 'This must be a file.',
    'filled'               => 'This field must have a value.',
    'gt'                   => [
        'numeric' => 'This value must be greater than :value.',
        'file'    => 'This value must be greater than :value kilobytes.',
        'string'  => 'This value must be greater than :value characters.',
        'array'   => 'This value must have more than :value items.',
    ],
    'gte'                  => [
        'numeric' => 'This value must be greater than or equal :value.',
        'file'    => 'This value must be greater than or equal :value kilobytes.',
        'string'  => 'This value must be greater than or equal :value characters.',
        'array'   => 'This value must have :value items or more.',
    ],
    'image'                => 'This must be an image.',
    'in'                   => 'The selected value is invalid.',
    'in_array'             => 'This field does not exist in :other.',
    'integer'              => 'This must be an integer.',
    'ip'                   => 'This must be a valid IP address.',
    'ipv4'                 => 'This must be a valid IPv4 address.',
    'ipv6'                 => 'This must be a valid IPv6 address.',
    'json'                 => 'This must be a valid JSON string.',
    'lt'                   => [
        'numeric' => 'This value must be less than :value.',
        'file'    => 'This value must be less than :value kilobytes.',
        'string'  => 'This value must be less than :value characters.',
        'array'   => 'This value must have less than :value items.',
    ],
    'lte'                  => [
        'numeric' => 'This value must be less than or equal :value.',
        'file'    => 'This value must be less than or equal :value kilobytes.',
        'string'  => 'This value must be less than or equal :value characters.',
        'array'   => 'This value must not have more than :value items.',
    ],
    'max'                  => [
        'numeric' => 'This value may not be greater than :max.',
        'file'    => 'This value may not be greater than :max kilobytes.',
        'string'  => 'This value may not be greater than :max characters.',
        'array'   => 'This value may not have more than :max items.',
    ],
    'mimes'                => 'This must be a file of type: :values.',
    'mimetypes'            => 'This must be a file of type: :values.',
    'min'                  => [
        'numeric' => 'This value must be at least :min.',
        'file'    => 'This value must be at least :min kilobytes.',
        'string'  => 'This value must be at least :min characters.',
        'array'   => 'This value must have at least :min items.',
    ],
    'not_in'               => 'The selected value is invalid.',
    'not_regex'            => 'This format is invalid.',
    'numeric'              => 'This must be a number.',
    'present'              => 'This field must be present.',
    'regex'                => 'This format is invalid.',
    'required'             => 'This field is required.',
    'required_if'          => 'This field is required when :other is :value.',
    'required_unless'      => 'This field is required unless :other is in :values.',
    'required_with'        => 'This field is required when :values is present.',
    'required_with_all'    => 'This field is required when :values is present.',
    'required_without'     => 'This field is required when :values is not present.',
    'required_without_all' => 'This field is required when none of :values are present.',
    'same'                 => 'This and :other must match.',
    'size'                 => [
        'numeric' => 'This value must be :size.',
        'file'    => 'This value must be :size kilobytes.',
        'string'  => 'This value must be :size characters.',
        'array'   => 'This value must contain :size items.',
    ],
    'string'               => 'This must be a string.',
    'timezone'             => 'This must be a valid zone.',
    'unique'               => 'This value has already been taken.',
    'uploaded'             => 'This failed to upload.',
    'url'                  => 'This format is invalid.',

    /*
    |--------------------------------------------------------------------------
    | Custom Validation Language Lines
    |--------------------------------------------------------------------------
    |
    | Here you may specify custom validation messages for attributes using the
    | convention "attribute.rule" to name the lines. This makes it quick to
    | specify a specific custom language line for a given attribute rule.
    |
    */

    'custom' => [
        'attribute-name' => [
            'rule-name' => 'custom-message',
        ],
    ],

    /*
    |--------------------------------------------------------------------------
    | Custom Validation Attributes
    |--------------------------------------------------------------------------
    |
    | The following language lines are used to swap attribute place-holders
    | with something more reader friendly such as E-Mail Address instead
    | of "email". This simply helps us make messages a little cleaner.
    |
    */

    'attributes' => [],


    /*
    |--------------------------------------------------------------------------
    | Trax additional rules.
    |--------------------------------------------------------------------------
     */
    'passcheck' => 'This password does not match.',

];
