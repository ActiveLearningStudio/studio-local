<?php

trait SeederUtilities
{
    /**
     * Store.
     */
    protected $store;


    /**
     * Create or update a DB record.
     */
    protected function updateOrCreate($updateValue, $createValue, $findProp = null, $findValue = null)
    {
        if (isset($findProp) && isset($findValue)) {
            try {
                $record = $this->store->findBy($findProp, $findValue);
                return $this->store->update($record->id, $updateValue);
            } catch (\Exception $e) {}
        }
        try {
            return $this->store->store($createValue);
        } catch (\Exception $e) {}
    }

    /**
     * Create a DB record.
     */
    protected function create($createValue, $findProp = null, $findValue = null)
    {
        if (isset($findProp) && isset($findValue)) {
            try {
                $record = $this->store->findBy($findProp, $findValue);
                $this->command->warn($findValue . ' already exists!');
                return;
            } catch (\Exception $e) {}
        }
        try {
            return $this->store->store($createValue);
        } catch (\Exception $e) {}
    }

    /**
     * Get a DB record ID or display a warning.
     */
    protected function id($store, $findProp, $findValue)
    {
        try {
            return $store->findBy($findProp, $findValue)->id;
        } catch (\Exception $e) {
            $this->command->warn($findValue . ' not found!');
            throw new \Exception;
        }
    }

    /**
     * Attach models.
     */
    protected function attach($sourceId, $relationName, $targetIds, $args = [])
    {
        $source = $this->store->find($sourceId);
        $source->$relationName()->attach($targetIds, $args);
    }






    
}
