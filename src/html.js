
import React from "react"
import PropTypes from "prop-types"

export default function HTML(props) {
  return (
    <html amp="true" {...props.htmlAttributes}>
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, minimum-scale=1, shrink-to-fit=no"
        />
        {props.headComponents}
        <style
          amp-custom="true"
          dangerouslySetInnerHTML={{ __html: `
            .i-amphtml-layout-size-defined .i-amphtml-fill-content {
              position: unset !important;
            }
          ` }}
        />
      </head>
      <body {...props.bodyAttributes}>
        {props.preBodyComponents}
        <div
          key={`body`}
          id="___gatsby"
          dangerouslySetInnerHTML={{ __html: props.body }}
        />
        {props.postBodyComponents}
        <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossOrigin="anonymous"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js" integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49" crossOrigin="anonymous"></script>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js" integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy" crossOrigin="anonymous"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
            $(document).on('click', '.dropdown-menu', function (e) {
              e.stopPropagation();
            })
            if ($(window).width() < 992) {
              $('.dropdown-menu a').click(function(e){
                e.preventDefault();
                  if($(this).next('.submenu').length){
                    $(this).next('.submenu').toggle();
                  }
                  $('.dropdown').on('hide.bs.dropdown', function () {
                 $(this).find('.submenu').hide();
              })
              })
            }
            `,
          }}
        />
      </body>
    </html>
  )
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
}
