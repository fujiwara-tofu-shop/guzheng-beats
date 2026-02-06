import { stack, note, s } from '@strudel/web';

// 1. Jade Garden - 翡翠花园
export function jadeGarden() {
  return stack(
    // Boom bap drums
    s('bd*2, ~ sd, hh*8')
      .bank('RolandTR808')
      .gain(0.8)
      .lpf(2000),
    // Mellow bass
    note('<a1 c2 d2 e2>*2')
      .s('sawtooth')
      .lpf(400)
      .decay(0.2)
      .sustain(0)
      .gain(0.6),
    // Pentatonic guzheng-style melody
    note('a4 c5 d5 e5 g5 e5 d5 c5')
      .slow(2)
      .s('sine')
      .delay(0.3)
      .delaytime(0.25)
      .lpf(1500)
      .gain(0.3)
  ).cpm(75).play();
}

// 2. Temple Fog - 寺院晨雾
export function templeFog() {
  return stack(
    // Dusty drums
    s('bd [~ bd] sd ~, [hh hh:1]*4')
      .bank('RolandTR808')
      .gain(0.7)
      .lpf(1800),
    // Deep bass
    note('<d1 [d1 f1] g1 a1>')
      .s('square')
      .lpf(200)
      .decay(0.3)
      .sustain(0.1)
      .gain(0.5),
    // Floating pad chords
    note('<d3,f3,a3> <a3,c4,e4>')
      .slow(4)
      .s('sine')
      .attack(0.5)
      .decay(2)
      .lpf(800)
      .gain(0.2)
  ).cpm(68).play();
}

// 3. Silk Road - 丝绸之路
export function silkRoad() {
  return stack(
    // TR-909 drums
    s('[bd ~] [~ bd] sd ~, hh*8')
      .bank('RolandTR909')
      .gain(0.8)
      .lpf(2500),
    // Walking bass
    note('e2 g2 a2 b2 d3 b2 a2 g2')
      .slow(2)
      .s('sawtooth')
      .lpf(500)
      .decay(0.15)
      .sustain(0)
      .gain(0.5),
    // Plucky pentatonic lead
    note('[e4 g4] [a4 ~] [b4 d5] [~ e5]')
      .s('triangle')
      .decay(0.1)
      .sustain(0)
      .delay(0.25)
      .delaytime(0.25)
      .lpf(2000)
      .gain(0.35)
  ).cpm(82).play();
}

// 4. Bamboo Rain - 竹林听雨
export function bambooRain() {
  return stack(
    // Minimal drums
    s('bd ~ ~ bd, ~ sd ~ sd:1, hh*16')
      .bank('RolandTR808')
      .gain(0.75)
      .lpf(1600),
    // Mellow bass
    note('<g1 [~ g1] bb1 c2>')
      .s('sine')
      .lpf(300)
      .decay(0.4)
      .sustain(0.2)
      .gain(0.6),
    // Rain-like arpeggios
    note('g4 bb4 c5 d5 f5 d5 c5 bb4')
      .fast(2)
      .s('sine')
      .decay(0.08)
      .sustain(0)
      .delay(0.5)
      .delaytime(0.125)
      .lpf(1200)
      .gain(0.25)
  ).cpm(70).play();
}

// 5. Dragon Tea - 龙井茶
export function dragonTea() {
  return stack(
    // Crispy drums
    s('[bd bd:1] sd, oh*2, hh*8')
      .bank('RolandTR808')
      .gain(0.75)
      .lpf(2200),
    // Groovy bass
    note('c2 c2 eb2 ~ g2 ~ eb2 c2')
      .slow(2)
      .s('square')
      .lpf(350)
      .decay(0.2)
      .sustain(0)
      .gain(0.5),
    // Oriental melody
    note('<c4 eb4 f4 g4 bb4>*2')
      .s('triangle')
      .lpf(1800)
      .decay(0.15)
      .sustain(0.1)
      .delay(0.3)
      .gain(0.3),
    // Background pad
    note('<c3,eb3,g3>')
      .slow(4)
      .s('sine')
      .attack(1)
      .decay(3)
      .sustain(0.2)
      .gain(0.15)
  ).cpm(78).play();
}

// 6. Moon Gate - 月亮门
export function moonGate() {
  return stack(
    // Slow, heavy drums
    s('bd ~ [~ bd] ~, ~ [sd ~] ~ sd, hh*4')
      .bank('RolandTR808')
      .gain(0.7)
      .lpf(1400)
      .room(0.4),
    // Deep bass
    note('<f1 ab1 c2 eb2>')
      .slow(2)
      .s('sawtooth')
      .lpf(250)
      .decay(0.5)
      .sustain(0.1)
      .gain(0.55),
    // Dreamy lead
    note('f4 ~ ab4 ~ c5 ~ ab4 f4')
      .slow(2)
      .s('sine')
      .attack(0.1)
      .decay(0.3)
      .sustain(0.2)
      .delay(0.4)
      .delaytime(0.5)
      .lpf(900)
      .gain(0.25)
  ).cpm(65).play();
}

// Track metadata
export const tracks = [
  { id: 1, title: "Jade Garden", chinese: "翡翠花园", bpm: 75, key: "Am", pattern: jadeGarden },
  { id: 2, title: "Temple Fog", chinese: "寺院晨雾", bpm: 68, key: "Dm", pattern: templeFog },
  { id: 3, title: "Silk Road", chinese: "丝绸之路", bpm: 82, key: "Em", pattern: silkRoad },
  { id: 4, title: "Bamboo Rain", chinese: "竹林听雨", bpm: 70, key: "Gm", pattern: bambooRain },
  { id: 5, title: "Dragon Tea", chinese: "龙井茶", bpm: 78, key: "Cm", pattern: dragonTea },
  { id: 6, title: "Moon Gate", chinese: "月亮门", bpm: 65, key: "Fm", pattern: moonGate }
];
