new Vue( {
    el: "#app",
    data: {
        playerHealth: 100,
        monsterHealth: 100,
        gameIsRunning: true,
        turns: []
    },
    methods: {
        startGame: function () {
            this.gameIsRunning = false,
            this.playerHealth = 100,
            this.monsterHealth = 100
        },
        attack: function () {
            if (this.playerHealth <= 0 || this.monsterHealth <= 0) {
                if (this.playerHealth > this.monsterHealth) {
                    alert('You won the game !!');
                } else {
                    alert('You lost the game !!');
                }
            } else if (this.playerHealth >0 || this.monsterHealth >0) {
                this.monsterAttack();
                this.playerAttack();
            }
        },
        attackSpe: function () {
            this.playerAttackSpe();
            this.monsterAttackSpe();
        },
        heal: function () {
            if (this.playerHealth <= 100) {
                this.playerHealth += 10;
            } else {
                this.playerHealth -= this.bigAttack();
            }
        },
        giveUp: function () {
            this.gameIsRunning = true;
            this.turns = [];
        },
        bigAttack: function () {
            return Math.max(Math.floor(Math.random() * 20) + 1, 10);
        },
        normalAttack: function () {
            return Math.max(Math.floor(Math.random() * 10) + 1, 3);
        },
        playerAttack: function () {
            let damage = this.normalAttack();
            this.playerHealth -= damage;
            this.turns.unshift( {
                isPlayer: true,
                text: 'You\'ve been attack by the monster of '+damage+' points !!'
            } );
        },
        monsterAttack: function () {
            let damage = this.normalAttack();
            this.monsterHealth -= damage;
            this.turns.unshift( {
                isPlayer: false,
                text: 'The hit the monster by '+damage+' points !!'
            } );
        },
        playerAttackSpe: function () {
            let damage = this.bigAttack();
            this.playerHealth -= damage;
            this.turns.unshift( {
                isPlayer: true,
                text: "Waouhh the monster hit you by his super attack and retires you "+damage+" points."
            } );
        },
        monsterAttackSpe: function () {
            let damage = this.bigAttack();
            this.monsterHealth -= damage;
            this.turns.unshift({
                isPlayer: false,
                text: "Great !!, you touched the monster by your favorite attack and retires "+damage+" points."
            } );
        }
    }
} );