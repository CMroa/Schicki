import React from 'react'

export async function generateMetadata({params}) {
    const { slug } = await params;
    return {
        title:slug
    }
}

export default async function page({params}) {
    const { slug } = await params
  return (
    <div>producto {slug}</div>
  )
}
