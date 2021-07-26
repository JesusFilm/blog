import React, { ReactNode } from 'react'
import NextLink from 'next/link'

export default function LocalLink(prefix: string) {
  return function (props: {
    children: ReactNode
    href: string
    className?: string
  }) {
    const { href, ...other } = props
    return (
      <NextLink href={`${prefix ? `/${prefix}` : ''}/${href}`}>
        <a {...other} />
      </NextLink>
    )
  }
}
