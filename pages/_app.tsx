import { AppProps } from 'next/app'
import { OverlayProvider } from '@components/contexts/overlayProvider'
import { ThemeProvider } from '@components/contexts/themeProvider'
import { processEnv } from '@lib/processEnv'

import React from 'react'
import Router from 'next/router'
import * as gtag from '@lib/gtag'

import '@styles/screen.css'
import '@styles/screen-fixings.css'
import '@styles/dark-mode.css'
import '@styles/toc.css'
import { StickyShareButtons } from 'sharethis-reactjs'

if (process.env.NODE_ENV === 'production') {
  // Notice how we track pageview when route is changed
  // Router.events.on('routeChangeComplete', (url) => gtag.pageview(url))
}

function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider {...processEnv.darkMode} >
      <OverlayProvider >
        <Component {...pageProps} />
        <StickyShareButtons
          config={{
            alignment: 'left',    // alignment of buttons (left, right)
            color: 'social',      // set the color of buttons (social, white)
            enabled: true,        // show/hide buttons (true, false)
            font_size: 16,        // font size for the buttons
            labels: 'cta',     // button labels (cta, counts, null)
            language: 'en',       // which language to use (see LANGUAGES)
            min_count: 25,         // hide react counts less than min_count (INTEGER)
            networks: [           // which networks to include (see SHARING NETWORKS)
              'twitter',
              'linkedin',
              'facebook',
              'pinterest',
              'email',
              'reddit',
              'messenger',
              'sharethis',
              'sms'
            ],
            padding: 12,          // padding within buttons (INTEGER)
            radius: 4,            // the corner radius on each button (INTEGER)
            show_total: true,     // show/hide the total share count (true, false)
            show_mobile: true,    // show/hide the buttons on mobile (true, false)
            show_toggle: true,    // show/hide the toggle buttons (true, false)
            size: 48,             // the size of each button (INTEGER)
            top: 160,             // offset in pixels from the top of the page

            // OPTIONAL PARAMETERS
            message: 'Take a look at this blog post',     // (only for email sharing)
            subject: 'Take a look at this blog post',  // (only for email sharing)
            username: 'miguelbernard88' // (only for twitter sharing)
          }}
        />
      </OverlayProvider>
    </ThemeProvider>
  )
}

export default App
