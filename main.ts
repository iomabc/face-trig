input.onGesture(Gesture.ScreenDown, function () {
    basic.showIcon(IconNames.Silly)
    soundExpression.happy.playUntilDone()
})
input.onGesture(Gesture.TiltLeft, function () {
    basic.showIcon(IconNames.Fabulous)
    soundExpression.happy.playUntilDone()
})
input.onGesture(Gesture.LogoDown, function () {
    basic.showIcon(IconNames.Surprised)
    soundExpression.mysterious.playUntilDone()
})
input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Happy)
    soundExpression.giggle.playUntilDone()
})
input.onGesture(Gesture.Shake, function () {
    basic.showIcon(IconNames.Angry)
})
input.onGesture(Gesture.LogoUp, function () {
    basic.showIcon(IconNames.Confused)
})
input.onButtonPressed(Button.AB, function () {
    basic.showIcon(IconNames.Asleep)
    soundExpression.yawn.playUntilDone()
})
input.onButtonPressed(Button.B, function () {
    basic.showIcon(IconNames.Sad)
    soundExpression.sad.playUntilDone()
})
input.onGesture(Gesture.ScreenUp, function () {
    basic.showIcon(IconNames.Meh)
})
