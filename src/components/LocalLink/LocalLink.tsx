import React, { ReactNode } from 'react'
import NextLink from 'next/link'

export default function LocalLink(prefix: string) {
  return function (props: {
    children: ReactNode
    href: string
    className?: string
  }) {
    return (
      <NextLink {...props} href={`${prefix ? `/${prefix}` : ''}/${props.href}`}>
        <a>{props.children}</a>
      </NextLink>
    )
  }
}
