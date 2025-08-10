export class KeyboardService {
    constructor() {
        this.keys = new Set();
        window.addEventListener('keydown', e => this.keys.add(e.code));
        window.addEventListener('keyup', e => this.keys.delete(e.code));
    }

    isKeyPressed(code) {
        return this.keys.has(code);
    }

    getState() {
        return {
            up: this.isKeyPressed('ArrowUp') || this.isKeyPressed('KeyW'),
            down: this.isKeyPressed('ArrowDown') || this.isKeyPressed('KeyS'),
            left: this.isKeyPressed('ArrowLeft') || this.isKeyPressed('KeyA'),
            right: this.isKeyPressed('ArrowRight') || this.isKeyPressed('KeyD')
        };
    }
}
