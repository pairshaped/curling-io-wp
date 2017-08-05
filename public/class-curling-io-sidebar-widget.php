<?php

class CurlingIOSidebarWidget extends WP_Widget {
    public function __construct() {
        parent::__construct(
            'curling_io_sidebar_widget',
            __( 'Curling.IO Sidebar Widget', 'curling-io' ),
            array(
                  'description' => __( 'Curling.IO Sidebar Scoreboard', 'curling-io' )
            )
        );
    }

    public function widget($args, $instance) {
      $title = isset($instance['title']) ? $instance['title'] : NULL;
      echo $args['before_widget'];
      if (!empty($title)) {
          echo $args['before_title'] . $title . $args['after_title'];
      }

      ob_start();
      $language = CurlingIO_i18n::guess_language();
      include_once 'partials/curling-io-public-mini-display.php';
      echo ob_get_clean();

      echo $args['after_widget'];
    }

    public function form($instance) {
        $title  = __('Scoreboard Mini', 'curling-io');
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
