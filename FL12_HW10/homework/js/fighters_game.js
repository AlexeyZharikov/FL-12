function Fighter({
    name,
    damage,
    hp,
    strength,
    agility
}) {
    this.name = name;
    this.damage = damage;
    this.hp = hp;
    this.strength = strength;
    this.agility = agility;
    this.wins = 0;
    this.losses = 0;

    this.addWin = () => {
        return this.wins++
    }

    this.addLoss = () => {
        return this.losses++;
    }

    this.getName = () => {
        return this.name;
    }

    this.getDamage = () => {
        return this.damage;
    }

    this.getHealth = () => {
        return this.hp;
    }

    this.getStrength = () => {
        return this.strength;
    }

    this.getAgility = () => {
        return this.agility;
    }

    this.dealDamage = (num) => {
        let currentHealth = this.getHealth() - num;
        this.hp = currentHealth;
        if (currentHealth < 0) {
            currentHealth = 0;
            return currentHealth;
        }
        return currentHealth;
    }

    this.heal = (num) => {
        let currentHealth = this.getHealth() + num;
        this.hp = currentHealth;
        return currentHealth;
    }

    this.logCombatHistory = () => {

        return 'Name: ' + this.name + ' ' + ' Wins: ' + this.wins + ' ' + ' Losses: ' + this.losses;

    }


    this.attack = (Fighter) => {
        let attackProb = (100 - (Fighter.getStrength() + Fighter.getAgility())) / 100;
        if (attackProb >= 0 && attackProb <= 0.5) {
            if (Math.floor(Math.random() * 2) > 0) {
                console.log(this.name + ' makes ' + this.damage + ' to ' + Fighter.getName());
                return Fighter.dealDamage(this.getDamage());
            } else {
                console.log(this.name + ' attack missed');
                return Fighter.dealDamage(0);
            }
        } else if (attack > 0.5 && attack <= 0.8) {
            if (Math.floor(Math.random() * 4) > 0) {
                console.log(this.name + ' makes ' + this.damage + ' to ' + Fighter.getName());
                return Fighter.dealDamage(this.getDamage());
            } else {
                return Fighter.getHealth();
            }
        } else if (attack > 0.8 && attack <= 1) {
            if (Math.floor(Math.random() * 8) > 0) {
                console.log(this.name + ' makes ' + this.damage + ' to ' + Fighter.getName());
                return Fighter.dealDamage(this.getDamage());
            } else {
                return Fighter.getHealth();
            }
        };
    }
}