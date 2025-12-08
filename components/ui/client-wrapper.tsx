'use client'

import { ThemeProvider } from 'next-themes'
import { BackToTop } from './back-to-top'
import { Search } from './search'
import { SearchProvider, useSearch } from './search-context'
import { SkipLinks } from './skip-links'

function ClientContent({ children }: { children: React.ReactNode }) {
  const { isSearchOpen, closeSearch } = useSearch()

  return (
    <>
      <SkipLinks />
      {children}
      <BackToTop />
      <Search isOpen={isSearchOpen} onClose={closeSearch} />
    </>
  )
}

export default function ClientWrapper({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
      <SearchProvider>
        <ClientContent>{children}</ClientContent>
      </SearchProvider>
    </ThemeProvider>
  )
}
