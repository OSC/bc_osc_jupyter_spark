'use strict'

/**
 * Sets the change handler for the cluster select.
 */
function set_cluster_change_handler() {

  // Ensure owens does not use spark 2.4.5 on page load.
  toggle_options("batch_connect_session_context_spark_version");
  // Ensure pitzer does not use jupyter_app 3.0 on page load.
  toggle_options("batch_connect_session_context_version");

  const cluster_input = $('#batch_connect_session_context_cluster');

  cluster_input.change((event) => {
    // spark version change.
    toggle_options("batch_connect_session_context_spark_version");
    // jupyter_app version change.
    toggle_options("batch_connect_session_context_version");
  });
}

function toggle_options(element_name) {
  const cluster = current_cluster_capitalized();
  const search = "#" + element_name + " option";
  const options = $(search);

  options.each(function(_i, option) {
    // the variable 'option' is just a data structure. it has no attr, data, show
    // or hide methods so we have to query for it again
    let option_element = $(search + "[value='" + option.value + "']");
    let data = option_element.data();
    let show = data["optionFor" + cluster];

    if (cluster === "Owens") {
      let pitzer_only_spark_version = '2.4.5';
      option_element.prop('disabled', false);
      // disabling spark version not on owens.
      if (option.value == pitzer_only_spark_version) {
        option_element.prop('selected', false);
        option_element.prop('disabled', true);

        // when de-selecting something, the default is to fallback to the very first
        // option. But there's an edge case where you want to hide the very first option,
        // and deselecting it does nothing.
        if (option_element.next()) {
          option_element.next().prop('selected', true);
        }
      }
    } 
    
    else if (cluster === "Pitzer") {
      let owens_only_jupyter_app_version = 'app_jupyter/3.0.7';
      let owens_only_spark_version2 = '2.3.0';
      let owens_only_spark_version3 = '3.0.1';
      option_element.prop('disabled', false);
      // disabling spark and jupyter_app versions that are not on spitzer.
      if (option.value === owens_only_spark_version3 
        || option.value === owens_only_spark_version2 
        || option.value === owens_only_jupyter_app_version) {
        option_element.prop('selected', false);
        option_element.prop('disabled', true)
        // when de-selecting something, the default is to fallback to the very first
        // option. But there's an edge case where you want to hide the very first option,
        // and deselecting it does nothing.
        if (option_element.next()){
          option_element.next().prop('selected', true);
        }
      } 
    }
  });
}

/**
 * Simple helper to return the capitalized version of the
 * current select cluster (i.e., Owens and Pitzer).
 */
function current_cluster_capitalized(){
    var cluster = $('#batch_connect_session_context_cluster').val();
    return capitalize_words(cluster);
}

function capitalize_words(str) {
  var camel_case = "";
  var capitalize = true;

  str.split('').forEach((c) => {
    if (capitalize) {
      camel_case += c.toUpperCase();
      capitalize = false;
    } else if (c == '-') {
      capitalize = true;
    } else {
      camel_case += c;
    }
  });

  return camel_case;
}

// Main
set_cluster_change_handler();
