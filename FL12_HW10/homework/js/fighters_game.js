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
//here
}