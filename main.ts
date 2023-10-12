controller.A.onEvent(ControllerButtonEvent.Pressed, function on_a_pressed() {
    
    projectile = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . 7 7 7 7 7 7 7 7 7 7 . . . .
        . . 7 5 5 5 5 5 5 5 5 7 . . . .
        . . 7 7 7 7 7 7 7 7 7 7 . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
    `, space_plane, 200, 0)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function on_on_overlap(sprite: Sprite, otherSprite: Sprite) {
    sprite.destroy()
    otherSprite.destroy(effects.fire, 500)
    info.changeScoreBy(1)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function on_on_overlap2(sprite2: Sprite, otherSprite2: Sprite) {
    otherSprite2.destroy(effects.disintegrate, 500)
    info.changeLifeBy(-1)
})
let alien : Sprite = null
let projectile : Sprite = null
// init player Sprite
let space_plane : Sprite = null
space_plane = sprites.create(img`
        ....................
            ....................
            ....666.............
            .....6666...........
            ......66666...666...
            ...666666666.669966.
            ..66666666666699996.
            66666666666666666666
            6666666666666666666.
            .......6666.........
            ......66666.........
            ......6666..........
            .....66666..........
            ....66666...........
            ....6666............
            ...666..............
    `, SpriteKind.Player)
//  init base player sprite properties
controller.moveSprite(space_plane, 200, 200)
space_plane.setFlag(SpriteFlag.StayInScreen, true)
info.setLife(3)
game.onUpdateInterval(500, function on_update_interval() {
    
    alien = sprites.create(img`
            . . . . . 6 6 6 6 6 6 . . . . .
                    . . . . 6 6 9 9 9 9 6 6 . . . .
                    . . . 6 6 9 9 c c 9 9 6 6 . . .
                    . . 6 6 9 9 c c 6 9 9 9 6 6 . .
                    . 6 6 9 9 9 9 c 6 6 9 9 9 6 6 .
                    6 6 9 9 9 9 9 9 6 6 9 9 9 9 6 6
                    6 9 9 9 6 6 6 6 9 6 9 9 c 9 9 6
                    6 9 c 6 6 6 9 9 9 6 9 c c c 9 6
                    6 9 c c c 9 6 9 9 9 6 6 6 c 9 6
                    6 9 9 c 9 9 6 9 6 6 6 6 9 9 9 6
                    6 6 9 9 9 9 6 6 9 9 9 9 9 9 6 6
                    . 6 6 9 9 9 6 6 c 9 9 9 9 6 6 .
                    . . 6 6 9 9 9 6 c c 9 9 6 6 . .
                    . . . 6 6 9 9 c c 9 9 6 6 . . .
                    . . . . 6 6 9 9 9 9 6 6 . . . .
                    . . . . . 6 6 6 6 6 6 . . . . .
        `, SpriteKind.Enemy)
    alien.setVelocity(-100, 0)
    alien.setPosition(160, randint(0, 120))
})
