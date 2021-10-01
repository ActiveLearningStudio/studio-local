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

    'accepted'             => 'Cette valeur doit être accepté.',
    'active_url'           => "URL non valide.",
    'after'                => 'Ceci valeur doit être une date ultérieure à :date.',
    'after_or_equal'       => 'Ceci doit être une date ultérieure ou égale à :date.',
    'alpha'                => 'Ce champ ne peut contenir que des lettres.',
    'alpha_dash'           => 'Ce champ ne peut contenir que des lettres, nombres, et tirets.',
    'alpha_num'            => 'Ce champ ne peut contenir que des lettres et des nombres.',
    'array'                => 'Ce champ doit contenir être un tableau.',
    'before'               => 'Ceci doit être une date antérieure à :date.',
    'before_or_equal'      => 'Ceci doit être une date antérieure ou égale à :date.',
    'between'              => [
        'numeric' => 'Cette valeur doit être comprise entre :min et :max.',
        'file'    => 'Cette valeur doit être comprise entre :min et :max kilo-octets.',
        'string'  => 'La taille du texte doit être comprise entre :min et :max caractères.',
        'array'   => 'Ce tableau doit compter entre :min et :max éléments.',
    ],
    'boolean'              => 'Cette valeur ne peut être que true ou false.',
    'confirmed'            => 'La valeur de confirmation ne correspond pas.',
    'date'                 => 'Date non valide.',
    'date_format'          => 'La date ne correspond pas au format : :format.',
    'different'            => 'Les champs :attribute et :other doivent avoir des valeurs différentes.',
    'digits'               => 'Cette valeur doit compter :digits digits.',
    'digits_between'       => 'Cette valeur doit compter entre :min et :max digits.',
    'dimensions'           => "Dimensions de l'image non valides.",
    'distinct'             => 'Cette valeur est déjà prise.',
    'email'                => 'Adresse email non valide.',
    'exists'               => "Valeur choisie non valide.",
    'file'                 => 'Ce champ doit contenir un fichier.',
    'filled'               => 'Ce champ doit être renseigné.',
    'gt' => [
        'numeric' => 'Cette valeur doit être supérieure à :value.',
        'file' => 'Cette valeur doit être supérieure à :value kilo-octets.',
        'string' => 'La taille du texte doit être supérieure à :value caractères.',
        'array' => 'Ce tableau doit compter plus de :value éléments.',
    ],
    'gte' => [
        'numeric' => 'Cette valeur doit être supérieure ou égale à :value.',
        'file' => 'Cette valeur doit être supérieure ou égale à :value kilo-octets.',
        'string' => 'La taille du texte doit être supérieure ou égale à :value caractères.',
        'array' => 'Ce tableau doit compter au moins :value éléments.',
    ],
    'image'                => 'Ce champ doit contenir une image.',
    'in'                   => "Valeur choisie non valide.",
    'in_array'             => "Cette valeur doit faire partie de :other.",
    'integer'              => 'Cette valeur doit être un entier.',
    'ip'                   => 'Ce champ doit contenir une adresse IP valide.',
    'ipv4'                 => 'Ce champ doit contenir une adresse IPv4 valide.',
    'ipv6'                 => 'Ce champ doit contenir une adresse IPv6 valide.',
    'json'                 => 'Ce champ doit contenir une chaîne JSON valide.',
    'lt' => [
        'numeric' => 'Cette valeur doit être inférieure à :value.',
        'file' => 'Cette valeur doit être inférieure à :value kilo-octets.',
        'string' => 'La taille du texte doit être inférieure à :value caractères.',
        'array' => 'Ce tableau doit compter moins de :value éléments.',
    ],
    'lte' => [
        'numeric' => 'Cette valeur doit être inférieure ou égale à :value.',
        'file' => 'Cette valeur doit être inférieure ou égale à :value kilo-octets.',
        'string' => 'La taille du texte doit être inférieure ou égale à :value caractères.',
        'array' => 'Ce tableau doit compter au plus :value éléments.',
    ],
    'max'                  => [
        'numeric' => 'Cette valeur doit être inférieure ou égale à :value.',
        'file' => 'Cette valeur doit être inférieure ou égale à :value kilo-octets.',
        'string' => 'La taille du texte doit être inférieure ou égale à :value caractères.',
        'array' => 'Ce tableau doit compter au plus :value éléments.',
    ],
    'mimes'                => 'Ce champ doit contenir un fichier de type : :values.',
    'mimetypes'            => 'Ce champ doit contenir un fichier de type : :values.',
    'min'                  => [
        'numeric' => 'Cette valeur doit être supérieure ou égale à :value.',
        'file' => 'Cette valeur doit être supérieure ou égale à :value kilo-octets.',
        'string' => 'La taille du texte doit être supérieure ou égale à :value caractères.',
        'array' => 'Ce tableau doit compter au moins :value éléments.',
    ],
    'not_in'               => "La valeur choisie n'est pas valide.",
    'not_regex'            => "Le format de ce champ n'est pas valide.",
    'numeric'              => 'Cette valeur doit être un nombre.',
    'present'              => 'Ce champ doit être rempli.',
    'regex'                => "Le format de ce champ n' est pas valide.",
    'required'             => 'Ce champ est obligatoire.',
    'required_if'          => 'Ce champ est obligatoire lorsque :other a pour valeur :value.',
    'required_unless'      => 'Ce champ est obligatoire sauf lorsque :other a une des valeurs suivantes : :values.',
    'required_with'        => "Ce champ est obligatoire dès lors qu'une de ces valeurs est présente : :values.",
    'required_with_all'    => "Ce champ est obligatoire dès lors qu'une de ces valeurs est présente : :values.",
    'required_without'     => "Ce champ est obligatoire dès lors qu'aucune de ces valeurs n'est présente : :values.",
    'required_without_all' => "Ce champ est obligatoire dès lors qu'aucune de ces valeurs n'est présente : :values.",
    'same'                 => 'Cette valeur doit correspondre avec :other.',
    'size'                 => [
        'numeric' => 'Cette valeur doit être le à :value.',
        'file' => 'Cette valeur doit être égale à :value kilo-octets.',
        'string' => 'La taille du texte doit être égale à :value caractères.',
        'array' => 'Ce tableau doit compter :value éléments.',
    ],
    'string'               => 'Ce champ doit contenir une chaîne de caractères.',
    'timezone'             => 'Ce value doit être un fuseau horaire valide.',
    'unique'               => 'Cette valeur est déjà prise.',
    'uploaded'             => 'Le dépôt a échoué.',
    'url'                  => "URL non valide.",

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
    'passcheck' => 'Ce mot de passe est incorrect.',


];
