/* global $ */
console.log('app started')
var ball = $('#ball')
var width = $(window).width()
var height = $(window).height()

$('.buttons').on('click', function (event) {
  console.log(event)
  switch (event.currentTarget.innerText) {
    case 'Up':
      if (ball.position().top - 100 < 0) break
      ball.animate({top: '-=100'}, 300)
      break

    case 'Fly Up':
      ball.animate({top: '0'}, 500)
      break

    case 'Down':
      if (ball.position().top + 100 > height) break
      ball.animate({top: '+=100'}, 300)
      break

    case 'Fly Down':
      ball.animate({top: height - 100}, 500)
      break

    case 'Left':
      if (ball.position().left - 100 < 0) break
      ball.animate({left: '-=100'}, 300)
      break

    case 'Fly Left':
      ball.animate({left: '0'}, 500)
      break

    case 'Right':
      if (ball.position().left + 100 > width) break
      ball.animate({left: '+=100'}, 300)
      break

    case 'Fly Right':
      ball.animate({left: width - 100}, 500)
      break

    case 'Red':
      ball.css('background-color', 'red')
      break

    case 'Blue':
      ball.css('background-color', 'blue')
      break

    case 'Green':
      ball.css('background-color', 'green')
      break

    case 'Hide / Show':
      if (ball.css('display') === 'block') ball.css('display', 'none')
      else ball.css('display', 'block')
      break
  }
})
