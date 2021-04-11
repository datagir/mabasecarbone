import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { QueryParamProvider } from 'use-query-params'
import { QueryClient, QueryClientProvider } from 'react-query'

import { GlobalStyle } from 'utils/styles'
import StyleProvider from 'components/providers/StyleProvider'
import ModalProvider from 'components/providers/ModalProvider'
import UXProvider from 'components/providers/UXProvider'
import SearchProvider from 'components/providers/SearchProvider'

import CO2EModal from 'components/modals/CO2EModal'
import FootprintModal from 'components/modals/FootprintModal'
import TransportationModal from 'components/modals/TransportationModal'
import Web from 'components/layout/Web'
import Iframe from 'components/layout/Iframe'
import Product from 'views/Product'
import SuggestionsWrapper from 'views/SuggestionsWrapper'

const queryClient = new QueryClient()

function App() {
  return (
    <Router>
      <QueryParamProvider ReactRouterRoute={Route}>
        <QueryClientProvider client={queryClient}>
          <UXProvider>
            <StyleProvider>
              <ModalProvider>
                <SearchProvider>
                  <GlobalStyle />
                  <Switch>
                    <Route path='/embed'>
                      <Iframe>
                        <Product iframe />
                      </Iframe>
                    </Route>
                    <Route>
                      <Web>
                        <Switch>
                          <Route path='/product/:id'>
                            <Product />
                          </Route>
                          <Route path='/'>
                            <SuggestionsWrapper />
                          </Route>
                        </Switch>
                      </Web>
                    </Route>
                  </Switch>
                  <CO2EModal />
                  <FootprintModal />
                  <TransportationModal />
                </SearchProvider>
              </ModalProvider>
            </StyleProvider>
          </UXProvider>
        </QueryClientProvider>
      </QueryParamProvider>
    </Router>
  )
}

export default App
