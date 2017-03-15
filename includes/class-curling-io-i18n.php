<?php

class CurlingIO_i18n {

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
