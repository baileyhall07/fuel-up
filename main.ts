namespace SpriteKind {
    export const gas = SpriteKind.create()
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . e e . . . . . . . 
        . . . . . . e e e e . . . . . . 
        . . . . . e e e e e e . . . . . 
        . . . . e e f e e f e e . . . . 
        . . . e e e e e e e e e e . . . 
        . . e e e e f e e e e e e e . . 
        . e e f e e e e e f e f e e e . 
        e e e e e e 3 e e e e e e f e e 
        e f e e e e f e e e e e e e e e 
        `, otherSprite, 0, -70)
    effects.bubbles.startScreenEffect()
})
statusbars.onZero(StatusBarKind.Health, function (status) {
    game.over(false)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Player, function (sprite, otherSprite) {
    statusbar.value = 0
    otherSprite.destroy()
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    let mySprite: Sprite = null
    mySprite.destroy()
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
    otherSprite.destroy()
})
let myFuel: Sprite = null
let MyEnemy: Sprite = null
let projectile: Sprite = null
let statusbar: StatusBarSprite = null
let otherSprite: Sprite = null
effects.starField.startScreenEffect()
otherSprite = sprites.create(assets.image`dababy`, SpriteKind.Player)
controller.moveSprite(otherSprite)
otherSprite.setFlag(SpriteFlag.StayInScreen, true)
statusbar = statusbars.create(20, 4, StatusBarKind.Energy)
statusbar.attachToSprite(otherSprite, -25, 0)
game.onUpdateInterval(350, function () {
    MyEnemy = sprites.createProjectileFromSide(assets.image`dababy`, 0, 50)
    MyEnemy.x = randint(5, 155)
    MyEnemy.setKind(SpriteKind.Enemy)
})
game.onUpdateInterval(500, function () {
    myFuel = sprites.createProjectileFromSprite(img`
        ....................................
        ....................................
        ....................................
        ....................................
        ....................................
        ....................................
        ....................................
        ....................................
        ....................................
        ....................................
        ....................................
        ....................................
        ....................................
        ....................................
        ....................................
        ....................................
        `, otherSprite, 0, 50)
    myFuel.x = randint(5, 155)
    myFuel.setKind(SpriteKind.gas)
})
game.onUpdateInterval(500, function () {
    statusbar.value += -1
})
