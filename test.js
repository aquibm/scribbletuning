const scribble = require('scribbletune')

const notes = scribble.scale('c', 'major', 3)

let clip = scribble.clip({
    notes: notes.filter((note, idx) => idx % 2 === 0),
    pattern: 'x-x-',
    sizzle: true
})

let clip2 = scribble.clip({
    notes: notes.filter((note, idx) => idx % 2),
    pattern: '-x-x',
    sizzle: true
})

scribble.midi([...clip, ...clip2], 'test.midi')
