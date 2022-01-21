import React, { useState } from 'react'
import heroStyles from '../../styles/heroStyles'
import Card from 'react-bootstrap/Card'
import Form from 'react-bootstrap/Form'
import Notes from './Notes'
import { Button, ButtonGroup } from 'react-bootstrap'

const isOdd = num => num % 2 === 1

// https://stackoverflow.com/a/9035732
function randomDate (start, end) {
  return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()))
}

const newDate = () => {
  return randomDate(new Date('1900-01-01T12:00:00'), new Date('2099-12-31T12:00:00'))
}

const Trainer = ({ msgAlert }) => {
  const [date, setDate] = useState(newDate())
  const [startingNumber, setStartingNumber] = useState('')
  const [firstOddOrEven, setFirstOddOrEven] = useState('')
  const [afterDivision, setAfterDivision
  ] = useState('')
  const [secondOddOrEven, setSecondOddOrEven] = useState('')
  const [modulo7, setModulo7] = useState('-1')
  const [subtractFrom7, setSubtractFrom7] = useState('')
  const [anchorDay, setAnchorDay] = useState('')

  const month = date.toLocaleString('default', { month: 'long' })
  const startingNumberAnswer = date.getFullYear() % 100
  const firstOddOrEvenAnswers = isOdd(startingNumberAnswer)
    ? [startingNumberAnswer + 11, startingNumberAnswer - 17]
    : [startingNumberAnswer]
  const afterDivisionAnswers = firstOddOrEvenAnswers.map(n => n / 2)

  const secondOddOrEvenAnswers = []
  for (const answer of afterDivisionAnswers) {
    if (isOdd(answer)) {
      secondOddOrEvenAnswers.push(answer + 11, answer - 17)
    } else {
      secondOddOrEvenAnswers.push(answer)
    }
  }
  const modulo7Answers = secondOddOrEvenAnswers.map(n => n % 7)
  const subtractFrom7Answers = modulo7Answers.map(n => 7 - n)
  const anchorDayAnswer = date.toLocaleString('en-us', { weekday: 'long' })

  const reset = () => {
    setDate(newDate())
    setStartingNumber('')
    setFirstOddOrEven('')
    setAfterDivision('')
    setSecondOddOrEven('')
    setModulo7('-1')
    setSubtractFrom7('')
    setAnchorDay('')
  }

  return (
    <div style={heroStyles}>
      <div className='container'>
        <div className='row'>
          <div className='col-sm-10 col-md-10 mx-auto'>
            <Card className='text-center mt-4 pb-2' bg='dark' text='white'>
              <Card.Body>
                <Card.Title>
                  <h2>
        What day of the week is{' '}
                    <span className='text-primary'>
                      {month} {date.getDate()} {date.getFullYear()}
                    </span>{' '}
        on?
                  </h2>
                </Card.Title>

                <h2>
      First find the <span className='text-secondary'>anchor day</span>
                </h2>
                <Form>
                  <Form.Group className='my-3' controlId='startingNumber'>
                    <Form.Label>Enter the starting number</Form.Label>
                    <br></br>
                    <Form.Text className='text-white'>
          The starting number is the last two digits of the year.
                    </Form.Text>

                    <Form.Control
                      className='mt-1'
                      type='number'
                      placeholder='Enter Starting Number'
                      value={startingNumber}
                      onChange={e => setStartingNumber(+e.target.value)}
                      disabled={startingNumber === startingNumberAnswer}
                    />
                  </Form.Group>

                  <Form.Group
                    className={`mb-3 ${
                      startingNumber === startingNumberAnswer ? '' : 'd-none'
                    }`}
                    controlId='oddOrEven1'
                  >
                    <Form.Label>Odd or Even?</Form.Label>
                    <br></br>
                    <Form.Text className='text-white'>
          If the number is odd add 11 or subtract 17 (whichever is easier).
                    </Form.Text>
                    <Form.Control
                      className='mt-1'
                      type='number'
                      placeholder='Enter Answer'
                      value={firstOddOrEven}
                      onChange={e => setFirstOddOrEven(+e.target.value)}
                      disabled={firstOddOrEvenAnswers.includes(firstOddOrEven)}
                    />
                  </Form.Group>

                  <Form.Group
                    className={`mb-3 ${
                      firstOddOrEvenAnswers.includes(firstOddOrEven) ? '' : 'd-none'
                    }`}
                    controlId='divide'
                  >
                    <Form.Label>Divide by 2</Form.Label>
                    <Form.Control
                      className='mt-1'
                      type='number'
                      placeholder='Enter Answer'
                      value={afterDivision}
                      onChange={e => setAfterDivision(+e.target.value)}
                      disabled={afterDivisionAnswers.includes(afterDivision)}
                    />
                  </Form.Group>

                  <Form.Group
                    className={`mb-3 ${afterDivisionAnswers.includes(afterDivision) ? '' : 'd-none'}`}
                    controlId='oddOrEven2'
                  >
                    <Form.Label>Odd or Even?</Form.Label>
                    <br></br>
                    <Form.Text className='text-white'>
    If the number is odd add 11 or subtract 17 (whichever is easier).
                    </Form.Text>
                    <Form.Control
                      className='mt-1'
                      type='number'
                      placeholder='Enter Answer'
                      value={secondOddOrEven}
                      onChange={e => setSecondOddOrEven(+e.target.value)}
                      disabled={secondOddOrEvenAnswers.includes(secondOddOrEven)}
                    />
                  </Form.Group>

                  <Form.Group
                    className={`mb-3 ${secondOddOrEvenAnswers.includes(secondOddOrEven) ? '' : 'd-none'}`}
                    controlId='modulo7'
                  >
                    <Form.Label>Modulo 7</Form.Label>
                    <br></br>
                    <Form.Text className='text-white'>
                        Find the remainder after dividing by 7
                    </Form.Text>
                    <br />
                    <ButtonGroup className="mt-1 text-white" aria-label="First group">
                      {[0, 1, 2, 3, 4, 5, 6].map(num => (
                        <Button
                          key={num}
                          disabled={modulo7Answers.includes(modulo7)}
                          className={
                            modulo7Answers.includes(modulo7) && modulo7 === num
                              ? 'bg-success text-white'
                              : ''
                          }
                          onClick={() => setModulo7(num)}
                        >
                          {num}
                        </Button>
                      ))}

                    </ButtonGroup>
                  </Form.Group>

                  <Form.Group
                    className={`mb-3 ${
                      modulo7Answers.includes(modulo7) ? '' : 'd-none'
                    }`}
                    controlId='subract7'
                  >
                    <Form.Label>Subtract from 7</Form.Label>
                    <br></br>
                    <Form.Text className='text-white'>
                        Subtract result from 7
                    </Form.Text>
                    <br/>
                    <ButtonGroup className="mt-1 text-white" aria-label="First group">
                      {[1, 2, 3, 4, 5, 6, 7].map(num => (
                        <Button
                          key={num}
                          disabled={subtractFrom7Answers.includes(subtractFrom7)}
                          className={subtractFrom7Answers.includes(subtractFrom7) && subtractFrom7 === num ? 'bg-success text-white' : 'bg-primary'}
                          onClick={() => setSubtractFrom7(num)}>{num}</Button>
                      ))}
                    </ButtonGroup>
                  </Form.Group>

                  <Form.Group
                    className={`mb-3 ${subtractFrom7Answers.includes(subtractFrom7) ? '' : 'd-none'}`}
                    controlId='modulo7'
                  >
                    <Form.Label>Count Forward {subtractFrom7Answers.length && subtractFrom7Answers[0]} Days</Form.Label>
                    <br></br>
                    <Form.Text className='text-white'>Count forward {subtractFrom7Answers.length && subtractFrom7Answers[0]} days from the century&#39;s anchor day to get the year&#39;s anchor day.</Form.Text>
                    <br />
                    <ButtonGroup className="mt-1 text-white" aria-label="First group">
                      {['Sunday', 'Monday', 'Tuesday', 'Wednesday'].map((day, index) => (
                        <Button
                          key={index}
                          disabled={anchorDay.toLowerCase() === anchorDayAnswer.toLowerCase()}
                          className={anchorDay.toLowerCase() === anchorDayAnswer.toLowerCase() && anchorDay.toLowerCase() === day.toLowerCase() ? 'bg-success text-white' : ''}
                          onClick={() => setAnchorDay(day)}>{day}</Button>
                      ))}
                    </ButtonGroup>
                    <ButtonGroup className="mt-1 text-white" aria-label="First group">
                      {['Thursday', 'Friday', 'Saturday'].map((day, index) => (
                        <Button
                          key={index}
                          disabled={anchorDay.toLowerCase() === anchorDayAnswer.toLowerCase()}
                          className={anchorDay.toLowerCase() === anchorDayAnswer.toLowerCase() && anchorDay.toLowerCase() === day.toLowerCase() ? 'bg-success text-white' : ''}
                          onClick={() => setAnchorDay(day)}>{day}</Button>
                      ))}
                    </ButtonGroup>
                  </Form.Group>

                </Form>
              </Card.Body>
              <Card.Footer>
                <Button
                  variant='primary'
                  size='lg'
                  onClick={() => reset()}>New Date</Button>
                <Notes/>
              </Card.Footer>
            </Card>

          </div>
        </div>

      </div>
    </div>
  )
}

export default Trainer
