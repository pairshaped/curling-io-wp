<?php

global $curling_io_shortcode_full;
global $curling_io_legacy_shortcode_full;

?>

<div class="wrap">
  <table>
    <tr>
      <td id="curling-io__settings">
      <h2><?php echo esc_html( get_admin_page_title() ); ?></h2>
        <form action="options.php" method="POST">
            <?php
                settings_fields( $this->plugin_name );
                do_settings_sections( $this->plugin_name );
                submit_button();
            ?>
        </form>
      </td>
      <td id="curling-io__summary" data-widgets-location="<?php echo $curling_io_widgets_api; ?>">
        <h2>Summary</h2>
        <h3>Short Codes</h3>
        <p>Copy and Paste to embed full widget</p>

        <input type="text" readonly="readonly" length="24" value="[<?php echo $curling_io_shortcode_full; ?>]" />

        <h4>Legacy Short Code</h4>
        <input type="text" readonly="readonly" length="24" value="[<?php echo $curling_io_legacy_shortcode_full; ?>]" />
        <p>This will continue to work in the current version, but may be removed in future versions, please update your scoreboard pages.</p>
      </td>
    </tr>
  </table>
</div>

