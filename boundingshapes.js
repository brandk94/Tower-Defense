// might not be needed?
class BoundingBox {
    constructor(x, y, width, height) {
        Object.assign(this, {x, y, width, height});

        this.left = x;
        this.top = y;
        this.right = this.x + this.width;
        this.bottom = this.y + this.height;

    };

};

// for tower and enemy's range
class BoundingCircle {
    constructor(x, y, r) {
        Object.assign(this, {x, y, r});

    };

    collide(other) {
        var dx = this.x - other.x;
        var dy = this.y - other.y;
        var distance = Math.sqrt(dx*dx + dy*dy);

        if (distance < this.r + other.r) return true;
        return false;
    };
};