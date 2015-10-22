<?php

class Curlcast_Loader {

    // Arrays for handling Wordpress API Arrays
    protected $actions;
    protected $filters;

    public function __construct() {

        $this->actions = array();
        $this->filters = array();

    }

    /**
     * @param      string               $hook             The name of the WordPress action that is being registered.
     * @param      object               $component        A reference to the instance of the object on which the action is defined.
     * @param      string               $callback         The name of the function definition on the $component.
     * @param      int      Optional    $priority         The priority at which the function should be fired.
     * @param      int      Optional    $accepted_args    The number of arguments that should be passed to the $callback.
     */
    public function add_action( $hook, $component, $callback, $priority = 10, $accepted_args = 1 ) {
        $this->actions = $this->add( $this->actions, $hook, $component, $callback, $priority, $accepted_args );
    }

    public function add_filter( $hook, $component, $callback, $priority = 10, $accepted_args = 1 ) {
        $this->filters = $this->add( $this->filters, $hook, $component, $callback, $priority, $accepted_args );
    }

    /**
     * @param      array                $hooks            The collection of hooks that is being registered (that is, actions or filters).
     * @param      string               $hook             The name of the WordPress filter that is being registered.
     * @param      object               $component        A reference to the instance of the object on which the filter is defined.
     * @param      string               $callback         The name of the function definition on the $component.
     * @param      int      Optional    $priority         The priority at which the function should be fired.
     * @param      int      Optional    $accepted_args    The number of arguments that should be passed to the $callback.
     * @return   type                                   The collection of actions and filters registered with WordPress.
     */
    private function add( $hooks, $hook, $component, $callback, $priority, $accepted_args ) {

        $hooks[] = array(
            'hook'          => $hook,
            'component'     => $component,
            'callback'      => $callback,
            'priority'      => $priority,
            'accepted_args' => $accepted_args
        );

        return $hooks;

    }

    public function run() {

        $this->run_collection( $this->filters, 'add_filter' );
        $this->run_collection( $this->actions, 'add_action' );

    }

    private function run_collection($collection, $method) {
        foreach ( $collection as $hook ) {
            call_user_func($method,
                $hook['hook'], array( $hook['component'], $hook['callback'] ), $hook['priority'], $hook['accepted_args']
            );
        }
    }

}
