<?php

global $curlcast_v2_shortcode_full;
global $curlcast_v2_shortcode_sidebar;

?>

<div class="wrap">
  <table>
    <tr>
      <td id="curlcast__settings">
        <h2><?php echo esc_html( get_admin_page_title() ); ?></h2>
        <form action="options.php" method="POST">
            <?php
                settings_fields( $this->plugin_name );
                do_settings_sections( $this->plugin_name );
                submit_button();
            ?>
        </form>
      </td>
      <td id="curlcast__summary" data-widgets-location="<?php echo $curlcast_widgets_api; ?>">
        <h2>Summary</h2>
        <h3>Short Codes</h3>
        <p>Copy and Paste to embed full widget</p>

        <h4>Full Scoreboard</h4>
        <input type="text" readonly="readonly" length="24" value="[<?php echo $curlcast_v2_shortcode_full; ?>]" />

        <h4>Sidebar Scoreboard</h4>
        <input type="text" readonly="readonly" length="24" value="[<?php echo $curlcast_v2_shortcode_sidebar; ?>]" />
      </td>
    </tr>
  </table>
</div>

