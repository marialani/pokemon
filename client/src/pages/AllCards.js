import React, { useState } from 'react'
import { render } from 'react-dom'
import { useTrail, animated } from 'react-spring'
import './styles.css'

// const items = ['Lorem', 'ipsum', 'dolor', 'sit']
const cardArr = [...Array(20).keys()].map((val) => val + 1);

const config = { mass: 2, tension: 500, friction: 80 }
const transform = `perspective(600px) rotateY(${flipped ? 180 : 0}deg)`,

function AllCards() {
  const [flipped, set] = useState(true)
  const trail = useTrail(cardArr.length, {
    config,
    transform,
    opacity: flipped ? 1 : 0,
    // x: flipped ? 0 : 20,
    // height: flipped ? 80 : 0,
    // from: { opacity: 0, x: 20, height: 0 },
  })

  return (
    <div className="trails-main" onClick={() => set(state => !state)}>
      <div>
        {trail.map(({ transform, opacity, ...rest }, index) => (
          <animated.div
            key={cardArr[index]}
            className="trails-text"
            style={{ ...rest, transform: x.interpolate(x => `translate3d(0,${x}px,0)`) }}>
            <animated.div style={{ height }}>{cardArr[index]}</animated.div>
          </animated.div>
        ))}
      </div>
    </div>
  )
}

export default AllCards;