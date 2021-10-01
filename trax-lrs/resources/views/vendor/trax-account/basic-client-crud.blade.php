@extends('trax-ui::layouts.int')

@section('body-class')
    trax-account-basic-client-crud-page
@endsection

@section('page')

<div class="row">
    <div class="col-12">
        <trax-account-basic-client-crud></trax-account-basic-client-crud>
        <p class="trax-typo mb-5"><small>The LRS endpoint is: <strong>{{ config('app.url') }}/trax/ws/xapi</strong></small></p>
    </div>
</div>

@endsection

@section('components')
    <script src="{{ traxMix('js/trax-account.js') }}"></script>
@endsection
