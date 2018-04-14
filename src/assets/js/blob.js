import { TimelineMax, TweenMax } from 'gsap'
import { random } from './common'

function Blob () {
  this.element = null
  this.numPoints = 4
  this.centerX = 500
  this.centerY = 500
  this.minRadius = 365
  this.maxRadius = 425
  this.minDuration = 8
  this.maxDuration = 10

  let self = this
  let points = []
  let startAngle = random(Math.PI * 2)
  let path, slice, tl

  function cardinal (data, closed, tension) {
    if (data.length < 1) return 'M0 0'
    if (tension == null) tension = 1

    let size = data.length - (closed ? 0 : 1)
    let path = 'M' + data[0].x + ' ' + data[0].y + ' C'

    for (let i = 0; i < size; i++) {

      let p0, p1, p2, p3

      if (closed) {
        p0 = data[(i - 1 + size) % size]
        p1 = data[i]
        p2 = data[(i + 1) % size]
        p3 = data[(i + 2) % size]
      } else {
        p0 = i === 0 ? data[0] : data[i - 1]
        p1 = data[i]
        p2 = data[i + 1]
        p3 = i === size - 1 ? p2 : data[i + 2]
      }

      let x1 = p1.x + (p2.x - p0.x) / 6 * tension
      let y1 = p1.y + (p2.y - p0.y) / 6 * tension

      let x2 = p2.x - (p3.x - p1.x) / 6 * tension
      let y2 = p2.y - (p3.y - p1.y) / 6 * tension

      path += ' ' + x1 + ' ' + y1 + ' ' + x2 + ' ' + y2 + ' ' + p2.x + ' ' + p2.y
    }

    return closed ? path + 'z' : path
  }

  function update () {
    self.element.setAttribute('d', cardinal(points, true, 1))
  }

  this.init = function(options) {
    for (let option in options) {
      if (this[option] === undefined) {
        console.log(`Oops! There is no property: ${option}`)
        return this
      }

      this[option] = options[option]
    }

    slice = (Math.PI * 2) / self.numPoints
    tl = new TimelineMax({
      onUpdate: update
    })

    for (let i = 0; i < self.numPoints; i++) {
      let angle = startAngle + i * slice
      let duration = random(self.minDuration, self.maxDuration)

      let point = {
        x: self.centerX + Math.cos(angle) * self.minRadius,
        y: self.centerY + Math.sin(angle) * self.minRadius
      }

      let tween = TweenMax.to(point, duration, {
        x: self.centerX + Math.cos(angle) * self.maxRadius,
        y: self.centerY + Math.sin(angle) * self.maxRadius,
        repeat: -1,
        yoyo: true,
        ease: Sine.easeInOut
      })

      tl.add(tween, -random(duration))
      points.push(point)
    }

    update()
    return this
  }

  this.destroy = function() {
    points = []
    update()
  }
}

export default new Blob()
