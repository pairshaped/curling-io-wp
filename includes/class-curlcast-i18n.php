<?php

class Curlcast_i18n {

    private $domain;

    public function load_plugin_textdomain() {

        load_plugin_textdomain(
            $this->domain,
            false,
            dirname( dirname( plugin_basename( __FILE__ ) ) ) . '/languages/'
        );

    }

    public function set_domain( $domain ) {
        $this->domain = $domain;
    }

    static function guess_language() {
      $language_setting = substr( get_bloginfo('language'), 0, 2 );

      $supported_languages = array('en', 'fr');

      foreach( $supported_languages as $lang )
      {
        if ( $lang == $language_setting ) {
          return $lang;
        }
      }

      return $supported_languages[0];
    }

}
