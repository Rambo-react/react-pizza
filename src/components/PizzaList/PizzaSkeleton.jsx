import React from 'react'
import ContentLoader from 'react-content-loader'

const PizzaSkeleton = () => (
  <ContentLoader
    speed={1}
    width={280}
    height={472}
    viewBox='0 0 280 472'
    backgroundColor='#f3f3f3'
    foregroundColor='#ecebeb'
  >
    <circle cx='135' cy='130' r='130' />
    <rect x='1' y='330' rx='20' ry='20' width='280' height='80' />
    <rect x='0' y='425' rx='10' ry='10' width='90' height='44' />
    <rect x='131' y='425' rx='30' ry='30' width='150' height='44' />
    <rect x='1' y='288' rx='10' ry='10' width='280' height='23' />
  </ContentLoader>
)

export default PizzaSkeleton
