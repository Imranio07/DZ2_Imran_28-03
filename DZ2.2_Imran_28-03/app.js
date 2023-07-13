var color1 = prompt('Введите цвет')
var color = color1.toLowerCase()
var trafficlight = {
    stop: 'red',
    ready: 'yellow',
    go: 'green'
}
switch (color){
    case trafficlight.stop:
        alert('Stop')
        break
    case trafficlight.ready:
        alert('Ready')
        break
    case trafficlight.go :
        alert('go')
    default:
        alert('Надо вводить цвета')
}