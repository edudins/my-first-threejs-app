export class Being {
    constructor(mesh, physicsEngine) {
        this.mesh = mesh;
        this.physicsEngine = physicsEngine;
    }

    update(inputState, deltaTime) {
        if (this.physicsEngine) {
            this.physicsEngine.applyInput(inputState, this.mesh, deltaTime);
        }
    }
}
