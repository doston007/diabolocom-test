import { describe, it, expect } from 'vitest'

describe('HelloWorld', () => {
  it('Hello', () => {
    expect('Hello world').toContain('Hello')
  })
})
