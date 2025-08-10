export class PhysicsEngine {
    applyInput(inputState, object, deltaTime) {
        throw new Error('applyInput must be implemented by subclass');
    }
}

export class ArcadePhysics extends PhysicsEngine {
    constructor(speed = 5) {
        super();
        this.speed = speed;
    }

    applyInput(input, object, deltaTime) {
        if (input.up) object.position.z -= this.speed * deltaTime;
        if (input.down) object.position.z += this.speed * deltaTime;
        if (input.left) object.position.x -= this.speed * deltaTime;
        if (input.right) object.position.x += this.speed * deltaTime;
    }
}

export class RealisticPhysics extends PhysicsEngine {
    constructor(acceleration = 2) {
        super();
        this.velocity = { x: 0, z: 0 };
        this.acceleration = acceleration;
    }

    applyInput(input, object, deltaTime) {
        if (input.up) this.velocity.z -= this.acceleration * deltaTime;
        if (input.down) this.velocity.z += this.acceleration * deltaTime;
        if (input.left) this.velocity.x -= this.acceleration * deltaTime;
        if (input.right) this.velocity.x += this.acceleration * deltaTime;

        object.position.x += this.velocity.x * deltaTime;
        object.position.z += this.velocity.z * deltaTime;

        // Friction
        this.velocity.x *= 0.95;
        this.velocity.z *= 0.95;
    }
}