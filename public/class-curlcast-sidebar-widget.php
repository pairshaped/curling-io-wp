<?php

class CurlcastSidebarWidget extends WP_Widget {
    public function __construct() {
        parent::__construct(
            'curlcast_sidebar_widget',
            __( 'Curlcast V2 Sidebar Widget', 'curlcast' ),
            array(
                  'description' => __( 'Curlcast Sidebar Scoreboard', 'curlcast' )
            )
        );
    }

    public function widget($args, $instance) {
      $title = $instance['title'];
      include_once 'partials/curlcast-public-mini-display.php';
    }

    public function form($instance) {
        $title  = __('Scoreboard Mini', 'curlcast');
        if ($instance) $title  = $instance['title'];

        $this->render_form(
            $this->get_field_id('title'),
            _e('Title:'),
            $this->get_field_name('title'),
            esc_attr($title)
        );
    }

    private function render_form($id, $label, $name, $value) {
        echo<<<EOS
          <p>
            <label for="{$id}">{$label}</label>
            <input class="widefat" id="{$id}" name="{$name}" type="text" value="{$value}" />
          </p>
EOS;
    }

    public function update($new_instance, $old_instance) {
        $instance = $old_instance;

        $instance['title'] = strip_tags($new_instance['title']);

        return $instance;
    }

}
